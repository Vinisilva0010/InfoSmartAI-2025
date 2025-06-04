import '../../styles/AutomacoesDetalhes.css';

export default function Automacao7() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Cadastro de Clientes</h1>
        <p className="detalhes-impacto">
          Simplifique o processo de cadastro e garanta dados organizados e prontos para uso.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto7.jpg" alt="Cadastro de Clientes" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Coleta automática de dados via formulários</li>
              <li>✔️ Integração com sistemas de CRM e ERP</li>
              <li>✔️ Validação automática de informações</li>
              <li>✔️ Organização dos dados em bancos ou planilhas</li>
            </ul>
            <p>
              Automatizar o cadastro reduz erros, acelera o atendimento e melhora a experiência dos seus clientes desde o primeiro contato.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-clientes.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
