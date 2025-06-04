import '../../styles/AutomacoesDetalhes.css';

export default function Automacao1() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Automação de E-mails</h1>
        <p className="detalhes-impacto">
          Aumente sua produtividade e melhore o relacionamento com seus clientes usando envios automáticos e personalizados.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto1.jpg" alt="Automação de E-mails" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Envio automático de e-mails para clientes e leads</li>
              <li>✔️ Segmentação inteligente de público</li>
              <li>✔️ Respostas automáticas e agendamentos</li>
              <li>✔️ Acompanhamento de aberturas e cliques</li>
            </ul>
            <p>
              Com essa automação, sua empresa garante agilidade, economia de tempo e maior conversão nas campanhas.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-emails.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
