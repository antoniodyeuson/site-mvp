import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'pt', ['common'])),
  },
});

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>Faça login na plataforma.</p>
    </div>
  );
};

export default LoginPage;
