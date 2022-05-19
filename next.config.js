 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      // {
      //   source: '/about',
      //   destination: '/',
      //   permanent: false,
      // },
      // {
      //   source: '/about',
      //   destination: '/',
      //   permanent: true,
      // }
    ]
  },
}

module.exports = nextConfig
