const replace = require("replace-in-file")

;(async () => {
  try {
    await replace({
      files: "./out/index.html",
      from: /\/Portfolio\/_next\/static\//g,
      to: "./_next/static/",
    })
    await replace({
      files: "./out/about.html",
      from: /\/Portfolio\/_next\/static\//g,
      to: "./_next/static/",
    })
    await replace({
      files: "./out/contact.html",
      from: /\/Portfolio\/_next\/static\//g,
      to: "./_next/static/",
    })
    await replace({
      files: "./out/projects.html",
      from: /\/Portfolio\/_next\/static\//g,
      to: "./_next/static/",
    })
    console.log("Paths adjusted in HTML files.")
  } catch (err) {
    console.error("Error replacing paths:", err)
  }
})()
