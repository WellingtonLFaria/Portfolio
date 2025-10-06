const isProd = process.env.NODE_ENV === "production"
const repoName = "/ra1461392311014"

const nextConfig = {
  output: "export",
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName : "",
  trailingSlash: true,
}

export default nextConfig
