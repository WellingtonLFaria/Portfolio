const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/ra1461392311014" : "",
  assetPrefix: isProd ? "/" : "",
  trailingSlash: true,
}

export default nextConfig
