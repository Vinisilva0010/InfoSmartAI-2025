import '../../styles/AutomacoesDetalhes.css';

export default function Automacao11() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Automação de Financeiro</h1>
        <p className="detalhes-impacto">
          Controle total das finanças da sua empresa com automações inteligentes que reduzem erros e aumentam a precisão.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto11.jpg" alt="Automação de Financeiro" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Emissão e controle automático de boletos e faturas</li>
              <li>✔️ Geração de relatórios financeiros em tempo real</li>
              <li>✔️ Conciliação bancária automatizada</li>
              <li>✔️ Alertas de pagamentos e recebimentos</li>
            </ul>
            <p>
              Com essa automação, você elimina tarefas repetitivas, evita atrasos e ganha visão clara sobre o fluxo de caixa.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-financeiro.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
