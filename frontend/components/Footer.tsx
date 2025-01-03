const Footer = () => {
    return (
      <footer className="p-4 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Empresa Digital. Todos os direitos reservados.</p>
        <ul className="flex justify-center space-x-4">
          <li><a href="/about">Sobre</a></li>
          <li><a href="/privacy">Privacidade</a></li>
          <li><a href="/terms">Termos</a></li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;
  