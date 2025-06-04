import '../../styles/AutomacoesDetalhes.css';

export default function Automacao6() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Automação de Vendas</h1>
        <p className="detalhes-impacto">
          Venda mais com menos esforço. Automatize processos comerciais e ganhe escala com inteligência.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto6.jpg" alt="Automação de Vendas" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Geração automática de leads com formulários e integrações</li>
              <li>✔️ Nutrição de leads com conteúdo personalizado</li>
              <li>✔️ Pipeline de vendas automatizado</li>
              <li>✔️ Notificações e alertas em tempo real para a equipe comercial</li>
            </ul>
            <p>
              Aumente a conversão, reduza a perda de oportunidades e tenha controle total sobre o funil de vendas.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-vendas.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
