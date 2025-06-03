import '../styles/Automacoes.css';

const automacoesData = [
  { id: 1, img: '/img/auto1.jpg', title: 'Automação de E-mails' },
  { id: 2, img: '/img/auto2.jpg', title: 'Gestão de Estoque' },
  { id: 3, img: '/img/auto3.jpg', title: 'Relatórios Automáticos' },
  { id: 4, img: '/img/auto4.jpg', title: 'Atendimento Automático' },
  { id: 5, img: '/img/auto5.jpg', title: 'Envio de Mensagens' },
  { id: 6, img: '/img/auto6.jpg', title: 'Automação de Vendas' },
  { id: 7, img: '/img/auto7.jpg', title: 'Cadastro de Clientes' },
  { id: 8, img: '/img/auto8.jpg', title: 'Controle de Produção' },
  { id: 9, img: '/img/auto9.jpg', title: 'Integração com Planilhas' },
  { id: 10, img: '/img/auto10.jpg', title: 'Notificações Inteligentes' },
  { id: 11, img: '/img/auto11.jpg', title: 'Automação de Financeiro' },
  { id: 12, img: '/img/auto12.jpg', title: 'Fluxos Personalizados' },
];

export default function Automacoes() {
  return (
    <div className="automacoes-bg">
      <h1 className="automacoes-title-impacto">Automatize Tarefas e Ganhe Tempo</h1>
      <p className="automacoes-descricao">
        Nossas automações eliminam tarefas repetitivas do seu dia a dia. Economize tempo, reduza erros e aumente sua produtividade com fluxos inteligentes e personalizados para o seu negócio.
      </p>

      <div className="automacoes-video">
        <video controls poster="/img/poster-video-automacoes.jpg">
          <source src="/video/video-automacoes.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      <div className="automacoes-card-grid">
        {automacoesData.map((auto) => (
          <div key={auto.id} className="automacoes-card">
            <img src={auto.img} alt={auto.title} />
            <h3>{auto.title}</h3>
            <button>Saiba mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}
