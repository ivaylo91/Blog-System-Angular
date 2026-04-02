Development HTTPS with mkcert

1) Install mkcert (https://github.com/FiloSottile/mkcert) for your OS and run:

   mkcert -install

2) Generate locally-trusted certs for localhost and loopback addresses:

   mkcert -cert-file localhost+2.pem -key-file localhost+2-key.pem localhost 127.0.0.1 ::1

3) Move the generated files into the project's `certs/` directory (this repo already has this folder).

4) Start the dev server:

   npm run dev

Vite will attempt to load `certs/localhost+2.pem` and `certs/localhost+2-key.pem` and enable HTTPS. If files are missing, Vite will fall back to HTTP.

Notes:
- You may need to trust the root CA on mobile devices or use your machine's IP (https://<machine-ip>:5173).
- Alternatively use `ngrok http 5173` for a quick HTTPS tunnel to test on mobile.