import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'pt', ['common'])),
  },
});

const AfiliadosPage = () => {
  return (
    <div>
      <h1>Afiliados</h1>
      <p>Bem-vindo à página de afiliados.</p>
    </div>
  );
};

export default AfiliadosPage;
