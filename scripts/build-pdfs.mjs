// Genera los CV en PDF (pdf/gio-cv-<versión>-<idioma>.pdf) y la imagen de vista previa (assets/og.png)
// a partir de data/cv.json, usando print.html y og.html.
// Uso: node scripts/build-pdfs.mjs   (necesita el paquete "playwright" con Chromium)
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = fileURLToPath(new URL('..', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
  try {
    const body = await readFile(join(root, path || 'index.html'));
    res.writeHead(200, { 'content-type': types[extname(path)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end('not found');
  }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = 'http://127.0.0.1:' + server.address().port + '/';

const data = JSON.parse(await readFile(join(root, 'data/cv.json'), 'utf8'));
await mkdir(join(root, 'pdf'), { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  for (const v of data.cvVersions) {
    for (const lang of ['es', 'en']) {
      await page.goto(base + 'print.html?v=' + v.id + '&lang=' + lang, { waitUntil: 'networkidle' });
      await page.waitForSelector('body[data-ready="1"]', { timeout: 20000 });
      const file = 'pdf/gio-cv-' + v.id + '-' + lang + '.pdf';
      await page.pdf({ path: join(root, file), format: 'Letter', printBackground: true, preferCSSPageSize: true });
      console.log('✓', file);
    }
  }
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto(base + 'og.html', { waitUntil: 'networkidle' });
  await og.waitForSelector('body[data-ready="1"]', { timeout: 20000 });
  await og.screenshot({ path: join(root, 'assets/og.png') });
  console.log('✓ assets/og.png');
} finally {
  await browser.close();
  server.close();
}
