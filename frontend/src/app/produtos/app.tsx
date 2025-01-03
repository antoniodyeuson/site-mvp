import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'pt', ['common'])),
  },
});

const ProdutosPage = () => {
  return (
    <div>
      <h1>Produtos</h1>
      <p>Explore nossos produtos digitais.</p>
    </div>
  );
};

export default ProdutosPage;
