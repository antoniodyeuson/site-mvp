import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">{t('welcome')}</Link></li>
          <li><Link href="/produtos">{t('products')}</Link></li>
          <li><Link href="/afiliados">{t('affiliates')}</Link></li>
          <li><Link href="/login">{t('login')}</Link></li>
        </ul>
      </nav>
      <div>
        <button onClick={() => changeLanguage('pt')} className="mx-2">PT</button>
        <button onClick={() => changeLanguage('en')} className="mx-2">EN</button>
        <button onClick={() => changeLanguage('es')} className="mx-2">ES</button>
      </div>
    </header>
  );
};

export default Header;
