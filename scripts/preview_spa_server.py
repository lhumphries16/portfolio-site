from __future__ import annotations

import argparse
import http.server
import socketserver
from pathlib import Path


class SpaRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, directory: str, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

    def do_GET(self) -> None:
        requested = self.translate_path(self.path)
        request_path = Path(requested)

        if request_path.exists() or request_path.suffix:
            return super().do_GET()

        self.path = '/index.html'
        return super().do_GET()


def main() -> None:
    parser = argparse.ArgumentParser(description='Serve a built SPA with index.html fallback.')
    parser.add_argument('--host', default='127.0.0.1')
    parser.add_argument('--port', type=int, default=4173)
    parser.add_argument('--root', default='dist')
    args = parser.parse_args()

    root = Path(args.root).resolve()

    with socketserver.TCPServer(
        (args.host, args.port),
        lambda *handler_args, **handler_kwargs: SpaRequestHandler(
            *handler_args,
            directory=str(root),
            **handler_kwargs,
        ),
    ) as httpd:
        print(f'Serving {root} at http://{args.host}:{args.port}', flush=True)
        httpd.serve_forever()


if __name__ == '__main__':
    main()
