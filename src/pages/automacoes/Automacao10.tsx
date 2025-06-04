import '../../styles/AutomacoesDetalhes.css';

export default function Automacao10() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Notificações Inteligentes</h1>
        <p className="detalhes-impacto">
          Mantenha sua equipe e seus clientes sempre atualizados com alertas automáticos e personalizados em tempo real.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto10.jpg" alt="Notificações Inteligentes" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Envio automático de notificações por e-mail, WhatsApp ou SMS</li>
              <li>✔️ Alertas de prazos, eventos e atualizações importantes</li>
              <li>✔️ Comunicação interna entre setores e equipes</li>
              <li>✔️ Melhoria na tomada de decisão com informações em tempo real</li>
            </ul>
            <p>
              Essa automação garante que nenhuma informação crítica passe despercebida, aumentando a eficiência operacional.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-notificacoes.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
