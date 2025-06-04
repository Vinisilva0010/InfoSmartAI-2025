import '../../styles/AutomacoesDetalhes.css';

export default function Automacao8() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Controle de Produção</h1>
        <p className="detalhes-impacto">
          Tenha total visibilidade da produção em tempo real, otimize recursos e reduza desperdícios.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto8.jpg" alt="Controle de Produção" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Acompanhamento em tempo real da produção</li>
              <li>✔️ Alertas automáticos de falhas ou atrasos</li>
              <li>✔️ Relatórios com indicadores de desempenho</li>
              <li>✔️ Integração com setores de estoque e logística</li>
            </ul>
            <p>
              Com essa automação, sua fábrica ou operação ganha eficiência, controle e capacidade de escalar com qualidade.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-producao.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
