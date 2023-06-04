/** @type {import('next').NextConfig} */

const isProd = false

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: isProd,
    swcMinify: true,
    env: {
        // process.env.API_URL
        API_URL: "https://amarine-back.vercel.app"
        //API_URL: "http://127.0.0.1:8000"
    },
}

module.exports = nextConfig
