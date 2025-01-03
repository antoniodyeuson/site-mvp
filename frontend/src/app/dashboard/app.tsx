import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'pt', ['common'])),
  },
});

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao painel de controle.</p>
    </div>
  );
};

export default DashboardPage;
