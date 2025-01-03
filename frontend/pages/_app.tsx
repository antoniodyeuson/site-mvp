import '../src/styles/globals.css'; // Arquivo CSS global, opcional
import { appWithTranslation } from 'next-i18next'; // Importação do next-i18next
import type { AppProps } from 'next/app'; // Tipagem correta para MyApp

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
