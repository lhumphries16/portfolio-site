from __future__ import annotations

import http.server
import os
from pathlib import Path
from socketserver import TCPServer


ROOT = Path(__file__).resolve().parents[1] / "dist"
PORT = int(os.environ.get("PORT", "4317"))
HOST = "0.0.0.0"


class SpaHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self) -> None:
        candidate = Path(self.translate_path(self.path))
        if not candidate.exists() or candidate.is_dir():
            self.path = "/index.html"
        return super().do_GET()

    def log_message(self, format: str, *args) -> None:  # noqa: A003
        pass


if __name__ == "__main__":
    os.chdir(ROOT)
    TCPServer.allow_reuse_address = True
    with TCPServer((HOST, PORT), SpaHandler) as httpd:
        httpd.serve_forever()
