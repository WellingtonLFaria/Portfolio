import fs from "fs"
import path from "path"

const basePath = "/Portfolio"
const outDir = path.resolve("out")

function getAllHtmlFiles(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath))
    } else if (file.endsWith(".html")) {
      results.push(filePath)
    }
  })
  return results
}

getAllHtmlFiles(outDir).forEach((file) => {
  let content = fs.readFileSync(file, "utf8")
  content = content.replace(/href="\/_next/g, `href="${basePath}/_next`)
  content = content.replace(/src="\/_next/g, `src="${basePath}/_next`)
  fs.writeFileSync(file, content, "utf8")
  console.log(`✅ Ajustado: ${file}`)
})
