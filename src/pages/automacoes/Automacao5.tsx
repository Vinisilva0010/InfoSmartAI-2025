import '../../styles/AutomacoesDetalhes.css';

export default function Automacao5() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Envio de Mensagens</h1>
        <p className="detalhes-impacto">
          Alcance seu público no momento certo com mensagens automáticas e personalizadas por diversos canais.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto5.jpg" alt="Envio de Mensagens" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Envio automatizado de mensagens por WhatsApp, SMS, e-mail e redes sociais</li>
              <li>✔️ Segmentação de contatos por comportamento ou interesse</li>
              <li>✔️ Programação de mensagens com base em eventos e datas</li>
              <li>✔️ Respostas automáticas com base em palavras-chave</li>
            </ul>
            <p>
              Ideal para campanhas, promoções, lembretes e atendimento ágil. Reduza o tempo de resposta e aumente o engajamento.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-mensagens.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
