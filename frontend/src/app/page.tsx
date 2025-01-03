import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Cabeçalho */}
      <header className="bg-navy text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao Site de Vendas!</h1>
      </header>

      {/* Seção de Copy Inicial */}
      <section className="flex flex-col sm:flex-row items-center justify-between px-8 py-16 bg-white text-navy">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-4">
            Venda seus produtos digitais na Europa!
          </h2>
          <p className="text-lg">
            Ganhe em euro e alcance consumidores em todo o mercado europeu.
          </p>
        </div>
        <Image
          src="/hero-image.png"
          alt="Imagem de Chamada para Ação"
          width={500}
          height={300}
        />
      </section>

      {/* Seção de Economia */}
      <section className="bg-lightblue py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Economize com nossas taxas</h2>
        <p className="text-lg">
          Compare as taxas da nossa plataforma com as dos concorrentes e veja
          quanto você pode economizar!
        </p>
      </section>

      {/* Seção de Recursos */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Descubra as Funcionalidades
        </h2>
        <ul className="flex flex-col sm:flex-row justify-around text-center">
          <li className="mb-6">
            <h3 className="font-bold">Dashboard Intuitiva</h3>
            <p>Gerencie vendas e afiliados facilmente.</p>
          </li>
          <li className="mb-6">
            <h3 className="font-bold">Pagamentos Rápidos</h3>
            <p>Receba em euro diretamente na sua conta.</p>
          </li>
          <li className="mb-6">
            <h3 className="font-bold">Marketing Integrado</h3>
            <p>Aumente suas vendas com ferramentas poderosas.</p>
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-lightblue py-16 px-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
        <div className="text-left max-w-4xl mx-auto">
          <h3 className="font-bold">Como faço para me cadastrar?</h3>
          <p className="mb-4">Clique em &quot;Cadastro&quot; no menu para começar.</p>
          <h3 className="font-bold">Quais as vantagens para afiliados?</h3>
          <p className="mb-4">Ganhos em euro e suporte total para vendas.</p>
          <h3 className="font-bold">Posso ser produtor e afiliado?</h3>
          <p>Sim! Basta configurar sua conta para ambos os perfis.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-navy text-white py-6 text-center">
        <p>© 2025 Nome da Empresa - CNPJ: 00.000.000/0001-00</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
