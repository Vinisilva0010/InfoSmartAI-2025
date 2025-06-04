import '../../styles/AutomacoesDetalhes.css';

export default function Automacao2() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Gestão de Estoque Automatizada</h1>
        <p className="detalhes-impacto">
          Tenha controle total do seu estoque em tempo real e evite prejuízos com rupturas ou excesso de produtos.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto2.jpg" alt="Gestão de Estoque" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Atualização automática de entrada e saída de produtos</li>
              <li>✔️ Alertas de estoque mínimo e excesso</li>
              <li>✔️ Integração com sistemas de vendas e compras</li>
              <li>✔️ Geração de relatórios de movimentação e desempenho</li>
            </ul>
            <p>
              Essa automação permite que sua empresa tome decisões rápidas, evite perdas e mantenha o controle preciso dos produtos.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-estoque.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
