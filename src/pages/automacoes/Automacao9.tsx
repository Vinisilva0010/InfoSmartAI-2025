import '../../styles/AutomacoesDetalhes.css';

export default function Automacao9() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Integração com Planilhas</h1>
        <p className="detalhes-impacto">
          Conecte sua operação com planilhas automatizadas para ganhar agilidade, precisão e inteligência nos dados.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto9.jpg" alt="Integração com Planilhas" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Atualização automática de planilhas com dados do sistema</li>
              <li>✔️ Exportação e sincronização com Google Sheets ou Excel</li>
              <li>✔️ Geração de gráficos e dashboards dinâmicos</li>
              <li>✔️ Agilidade no controle de estoque, vendas e produção</li>
            </ul>
            <p>
              Elimine retrabalho e reduza erros com automações que mantêm suas planilhas sempre atualizadas e organizadas.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-planilhas.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
