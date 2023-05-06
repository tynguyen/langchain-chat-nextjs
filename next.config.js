/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LCC_ENDPOINT_URL: 'https://0.0.0.0:9000/chat',
    LCC_TOKEN: 'your-api-key',
  },
}


module.exports = nextConfig
