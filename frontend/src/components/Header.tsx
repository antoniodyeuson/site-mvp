import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <header className="bg-navy text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
        <nav className="space-x-4">
          <Link href="/">{t("inicio")}</Link>
          <Link href="/economize">{t("economize")}</Link>
          <Link href="/recursos">{t("recursos")}</Link>
          <Link href="/demonstrativo">{t("demonstrativo")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/ajuda">{t("central_de_ajuda")}</Link>
          <Link href="/faq">{t("faq")}</Link>
        </nav>
        <div className="space-x-4">
          <button onClick={() => setLoginModalOpen(true)}>{t("login")}</button>
          <button onClick={() => setRegisterModalOpen(true)}>{t("cadastro")}</button>
          <button onClick={() => changeLanguage("pt")} className="bg-blue-500 text-white px-2 py-1 rounded">
            PT
          </button>
          <button onClick={() => changeLanguage("en")} className="bg-blue-500 text-white px-2 py-1 rounded">
            EN
          </button>
          <button onClick={() => changeLanguage("es")} className="bg-blue-500 text-white px-2 py-1 rounded">
            ES
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <h2>{t("login")}</h2>
            <form>
              <input type="email" placeholder={t("email")} className="block w-full p-2 mb-4" />
              <input type="password" placeholder={t("senha")} className="block w-full p-2 mb-4" />
              <button className="bg-navy text-white px-4 py-2">{t("entrar")}</button>
            </form>
            <button onClick={() => setLoginModalOpen(false)}>{t("fechar")}</button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <h2>{t("cadastro")}</h2>
            <p>{t("escolha_seu_perfil")}</p>
            <button className="bg-yellow-500 px-4 py-2 mr-4">{t("produtor")}</button>
            <button className="bg-blue-500 px-4 py-2">{t("afiliado")}</button>
            <button onClick={() => setRegisterModalOpen(false)}>{t("fechar")}</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
