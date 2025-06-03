import '../styles/Sobre.css';

export default function Sobre() {
  return (
    <div className="sobre-bg">
      <div className="sobre-container">
        <h1 className="sobre-titulo">Sobre a InfoSmart</h1>
        <p className="sobre-descricao">
          A InfoSmart é uma empresa especializada em soluções com Inteligência Artificial, automações e criação de sites modernos.
          Nosso objetivo é transformar empresas por meio da tecnologia, otimizando processos, aumentando produtividade e criando experiências digitais inteligentes.
        </p>

        <div className="sobre-missao-visao">
          <div className="sobre-card">
            <h2>🚀 Nossa Missão</h2>
            <p>
              Capacitar empresas de todos os tamanhos com agentes de IA, automações e sites que realmente geram resultados. 
              Tornamos o digital mais inteligente, acessível e personalizado.
            </p>
          </div>
          <div className="sobre-card">
            <h2>🌐 Nossa Visão</h2>
            <p>
              Ser referência no Brasil em soluções de inteligência artificial personalizadas, 
              ajudando empresas a evoluírem com inovação e tecnologia de ponta.
            </p>
          </div>
        </div>

        <div className="sobre-valores">
          <h2>💡 Nossos Valores</h2>
          <ul>
            <li>Inovação com propósito</li>
            <li>Atendimento humanizado</li>
            <li>Compromisso com resultados</li>
            <li>Transparência e confiança</li>
          </ul>
        </div>

        <div className="sobre-img-container">
          <img src="/img/equipe.jpg" alt="Equipe InfoSmart" />
        </div>
      </div>
    </div>
  );
}
