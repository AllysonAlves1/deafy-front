/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'deafyimgmusic.blob.core.windows.net',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
