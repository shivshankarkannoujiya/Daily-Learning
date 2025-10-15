import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import App from "../src/App.js";
import { teas } from "../src/data.js";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const outDir = path.resolve(__dirname, "../dist")
const htmlTemplatePath = path.resolve(__dirname, "../src/template.html")

const outputHtmlPath = path.resolve(outDir, "index.html");
const template = await fs.readFile(htmlTemplatePath, "utf-8")

const appHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(App, { teas })
)

const finalHtml = template.replace("<!--App-->", appHtml)

await fs.ensureDir(outDir)
await fs.writeFile(outputHtmlPath, finalHtml)
