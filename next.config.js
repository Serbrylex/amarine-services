/** @type {import('next').NextConfig} */

const isProd = false

const nextConfig = {
    trailingSlash: true,
    reactStrictMode: isProd,
    swcMinify: true,
}

module.exports = nextConfig
