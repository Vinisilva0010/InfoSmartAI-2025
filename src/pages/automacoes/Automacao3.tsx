import '../../styles/AutomacoesDetalhes.css';

export default function Automacao3() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Relatórios Automáticos</h1>
        <p className="detalhes-impacto">
          Transforme dados em decisões com relatórios gerados automaticamente e enviados na hora certa.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto3.jpg" alt="Relatórios Automáticos" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Geração automática de relatórios diários, semanais ou mensais</li>
              <li>✔️ Envio por e-mail ou WhatsApp para equipes e gestores</li>
              <li>✔️ Relatórios personalizados com métricas relevantes</li>
              <li>✔️ Redução de erros humanos e economia de tempo</li>
            </ul>
            <p>
              Com relatórios automáticos, sua equipe toma decisões baseadas em dados atualizados e confiáveis, sem esforço manual.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-relatorios.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
