/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'pt', 'es'], // Idiomas disponíveis
    defaultLocale: 'pt', // Idioma padrão
    localeDetection: false, // Define como booleano (true ou false)
  },
};

export default nextConfig;
