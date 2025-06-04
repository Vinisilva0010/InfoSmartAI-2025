import '../../styles/AutomacoesDetalhes.css';

export default function Automacao12() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Fluxos Personalizados</h1>
        <p className="detalhes-impacto">
          Crie fluxos de trabalho automatizados sob medida para as necessidades específicas da sua empresa.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto12.jpg" alt="Fluxos Personalizados" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Configuração flexível de processos e tarefas</li>
              <li>✔️ Integração com múltiplos sistemas</li>
              <li>✔️ Monitoramento e ajustes em tempo real</li>
              <li>✔️ Notificações e alertas customizados</li>
            </ul>
            <p>
              Essa automação possibilita que sua empresa trabalhe com máxima eficiência e adaptabilidade, automatizando processos complexos de forma simples.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-fluxos-personalizados.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
