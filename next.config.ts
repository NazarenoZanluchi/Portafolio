// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // obligatorio si usas <Image />
  basePath: "/NOMBRE-DEL-REPO", // opcional, pero recomendado
};

module.exports = nextConfig;
