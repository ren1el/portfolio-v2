/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['i.scdn.co'],
  },
}
