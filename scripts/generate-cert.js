import fs from 'fs';
import path from 'path';
import selfsigned from 'selfsigned';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certDir = path.resolve(__dirname, '..', 'certs');
if (!fs.existsSync(certDir)) fs.mkdirSync(certDir, { recursive: true });

const certPath = path.join(certDir, 'localhost+2.pem');
const keyPath = path.join(certDir, 'localhost+2-key.pem');

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  console.log('Certs already exist:', certPath, keyPath);
  process.exit(0);
}

const attrs = [{ name: 'commonName', value: 'localhost' }];
const opts = {
  days: 365,
  keySize: 2048,
  extensions: [
    {
      name: 'subjectAltName',
      altNames: [
        { type: 2, value: 'localhost' },
        { type: 2, value: '127.0.0.1' },
        { type: 2, value: '::1' }
      ]
    }
  ]
};

console.log('Generating self-signed certs into', certDir);
const pems = selfsigned.generate(attrs, opts);
fs.writeFileSync(certPath, pems.cert, { mode: 0o644 });
fs.writeFileSync(keyPath, pems.private, { mode: 0o600 });
console.log('Generated certs:', certPath, keyPath);
