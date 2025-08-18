/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/annemarilis-invest-web', // if the site is not on user.github.io, but on user.github.io/repo
  images: {
    unoptimized: true, // disable optimization because GitHub Pages doesn't support it
  },
};

export default nextConfig;
