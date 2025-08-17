import fs from "fs"
import path from "path"

// Caminhos
const outDir = path.resolve("./out")
const portfolioDir = path.join(outDir, "Portfolio")
const nextSrc = path.join(outDir, "_next")
const nextDest = path.join(portfolioDir, "_next")

fs.mkdirSync(nextDest, { recursive: true })

fs.readdirSync(nextSrc).forEach((file) => {
  fs.renameSync(path.join(nextSrc, file), path.join(nextDest, file))
})

function updateHTMLLinks(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      updateHTMLLinks(fullPath)
    } else if (fullPath.endsWith(".html")) {
      let content = fs.readFileSync(fullPath, "utf-8")
      content = content.replace(/\/_next\//g, "/Portfolio/_next/")
      fs.writeFileSync(fullPath, content, "utf-8")
      console.log(`✅ Atualizado: ${fullPath}`)
    }
  }
}

updateHTMLLinks(outDir)
