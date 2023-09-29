/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path')


module.exports = {
    nextConfig,
    output: "standalone",
    sassOptions: {
      fiber: false,
      includePaths: [path.join(__dirname, 'styles')],
    },
  }
