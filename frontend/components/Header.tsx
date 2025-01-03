import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <header className="bg-white py-6 border-b border-gray-200 text-center">
      <div className="max-w-6xl mx-auto">
        <Image src="/logo.png" alt="Logo" width={200} height={100} className="mx-auto mb-4" />
        <nav className="flex justify-center space-x-6">
          <Link href="/">{t('inicio')}</Link>
          <Link href="/economize">{t('economize')}</Link>
          <Link href="/recursos">{t('recursos')}</Link>
          <Link href="/demonstrativo">{t('demonstrativo')}</Link>
          <Link href="/blog">{t('blog')}</Link>
          <Link href="/ajuda">{t('central_de_ajuda')}</Link>
          <Link href="/faq">{t('faq')}</Link>
          <button onClick={() => setLoginModalOpen(true)}>{t('login')}</button>
          <button onClick={() => setRegisterModalOpen(true)}>{t('cadastro')}</button>
        </nav>
        <div className="mt-4">
          <button
            onClick={() => changeLanguage('pt')}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            PT
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            ES
          </button>
        </div>
      </div>

      {isLoginModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold">{t('login')}</h2>
            <form>
              <input
                type="email"
                placeholder={t('email')}
                className="block w-full p-2 border mb-4"
              />
              <input
                type="password"
                placeholder={t('senha')}
                className="block w-full p-2 border mb-4"
              />
              <button className="bg-navy text-white px-4 py-2 rounded">{t('entrar')}</button>
            </form>
            <button
              onClick={() => setLoginModalOpen(false)}
              className="mt-4 text-sm text-gray-600"
            >
              {t('fechar')}
            </button>
          </div>
        </div>
      )}

      {isRegisterModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold">{t('cadastro')}</h2>
            <p>{t('escolha_seu_perfil')}</p>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded mr-4">
              {t('produtor')}
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded">
              {t('afiliado')}
            </button>
            <button
              onClick={() => setRegisterModalOpen(false)}
              className="mt-4 text-sm text-gray-600"
            >
              {t('fechar')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
