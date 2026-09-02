from __future__ import annotations

import contextlib
import socket
import socketserver
import threading
import time
from pathlib import Path

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
OUTPUT = ROOT / 'output' / 'playwright'
HOST = '127.0.0.1'
PORT = 4173

ROUTES = [
    ('home', '/'),
    ('web', '/web'),
    ('controls', '/controls'),
    ('work', '/work'),
    ('work-homeems', '/work/homeems'),
    ('work-brazilian-sweet-bites-order-system', '/work/brazilian-sweet-bites-order-system'),
    ('about', '/about'),
    ('contact', '/contact'),
]

VIEWPORTS = {
    'desktop': {'width': 1440, 'height': 1200},
    'mobile': {'width': 390, 'height': 844},
}


class ReusableTcpServer(socketserver.TCPServer):
    allow_reuse_address = True


class SpaRequestHandler(__import__('http.server').server.SimpleHTTPRequestHandler):
    def __init__(self, *args, directory: str, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

    def do_GET(self) -> None:
        requested = Path(self.translate_path(self.path))

        if requested.exists() or requested.suffix:
            return super().do_GET()

        self.path = '/index.html'
        return super().do_GET()


def wait_for_server(host: str, port: int, timeout_seconds: float = 10.0) -> None:
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
            sock.settimeout(0.5)
            if sock.connect_ex((host, port)) == 0:
                return
        time.sleep(0.2)
    raise TimeoutError(f'Server never became reachable at http://{host}:{port}')


def resolve_chrome() -> Path:
    base = Path.home() / 'AppData' / 'Local' / 'ms-playwright'
    matches = sorted(base.glob('chromium-*/chrome-win64/chrome.exe'))
    if not matches:
        raise FileNotFoundError('No Playwright Chromium executable found in ms-playwright cache.')
    return matches[-1]


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)

    server = ReusableTcpServer(
        (HOST, PORT),
        lambda *handler_args, **handler_kwargs: SpaRequestHandler(
            *handler_args,
            directory=str(DIST),
            **handler_kwargs,
        ),
    )
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    try:
        wait_for_server(HOST, PORT)
        chrome_path = resolve_chrome()

        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True, executable_path=str(chrome_path))

            for viewport_name, viewport in VIEWPORTS.items():
                context = browser.new_context(viewport=viewport, device_scale_factor=1)
                page = context.new_page()

                for route_name, route_path in ROUTES:
                    page.goto(f'http://{HOST}:{PORT}{route_path}', wait_until='networkidle')
                    page.screenshot(
                        path=str(OUTPUT / f'{route_name}-{viewport_name}.png'),
                        full_page=True,
                    )

                context.close()

            browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == '__main__':
    main()
