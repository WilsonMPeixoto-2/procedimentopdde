import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import path from "node:path";

const distDir = path.resolve("dist");
const html = readFileSync(path.join(distDir, "index.html"), "utf8");

const scriptMatch = html.match(/<script[^>]+src="\/assets\/([^"]+\.js)"/);
const styleMatch = html.match(/<link[^>]+href="\/assets\/([^"]+\.css)"/);

if (!scriptMatch || !styleMatch) {
  throw new Error("Não foi possível localizar os assets iniciais no dist/index.html.");
}

const jsPath = path.join(distDir, "assets", scriptMatch[1]);
const cssPath = path.join(distDir, "assets", styleMatch[1]);
const jsGzip = gzipSync(readFileSync(jsPath)).length;
const cssGzip = gzipSync(readFileSync(cssPath)).length;

const budgets = {
  js: 210 * 1024,
  css: 20 * 1024,
};

const formatKiB = (bytes) => (bytes / 1024).toFixed(2);

console.log(`Initial JS: ${formatKiB(jsGzip)} KiB gzip (budget ${formatKiB(budgets.js)} KiB)`);
console.log(`Initial CSS: ${formatKiB(cssGzip)} KiB gzip (budget ${formatKiB(budgets.css)} KiB)`);

if (jsGzip > budgets.js || cssGzip > budgets.css) {
  throw new Error("Bundle inicial excedeu o orçamento de performance.");
}
