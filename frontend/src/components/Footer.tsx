const Footer = () => {
  return (
    <footer className="p-6 bg-navy text-white text-center">
      <p>&copy; 2025 Nome da Empresa - CNPJ: 00.000.000/0001-00</p>
      <ul className="flex justify-center space-x-6 mt-4">
        <li>
          <a href="/about" className="hover:underline">
            Quem Somos
          </a>
        </li>
        <li>
          <a href="/privacy" className="hover:underline">
            Política de Privacidade
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:underline">
            Termos e Condições
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
