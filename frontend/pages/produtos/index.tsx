import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'pt', ['common'])),
  },
});

const Page = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Produtos</h1>
      <p>Bem-vindo à página de produtos.</p>
    </div>
  );
};

export default Page;