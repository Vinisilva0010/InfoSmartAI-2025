import '../styles/Agentes.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const agentesData = [
  { id: 1, img: '/img/agente1.jpg', title: 'Atendente Virtual' },
  { id: 2, img: '/img/agente2.jpg', title: 'Analista de Dados' },
  { id: 3, img: '/img/agente3.jpg', title: 'Gerente de Projetos' },
  { id: 4, img: '/img/agente4.jpg', title: 'Consultor Financeiro' },
  { id: 5, img: '/img/agente5.jpg', title: 'Especialista em RH' },
  { id: 6, img: '/img/agente6.jpg', title: 'Agente de Marketing' },
  { id: 7, img: '/img/agente7.jpg', title: 'Gestor de Vendas' },
  { id: 8, img: '/img/agente8.jpg', title: 'Consultor de TI' },
  { id: 9, img: '/img/agente9.jpg', title: 'Agente de Suporte Técnico' },
  { id: 10, img: '/img/agente10.jpg', title: 'Automatizador de Processos' },
  { id: 11, img: '/img/agente11.jpg', title: 'Consultor Jurídico Digital' },
  { id: 12, img: '/img/agente12.jpg', title: 'Assistente de Pesquisa' },
];

export default function Agentes() {
  return (
    <>
      <Navbar />
      <div className="agentes-bg">
        <h1 className="agentes-title-impacto">Agentes de IA que transformam sua empresa</h1>
        <p className="agentes-descricao">
          Agentes de Inteligência Artificial personalizados são como funcionários digitais que atuam em tempo integral.
          Eles otimizam processos, atendem clientes, analisam dados e ampliam o desempenho da sua empresa com eficiência e escala.
        </p>

        <div className="agentes-video">
          <video controls poster="/img/poster-video-agentes.jpg">
            <source src="/video/video-agentes.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        <div className="agentes-card-grid">
          {agentesData.map((agente) => (
            <div key={agente.id} className="agentes-card">
              <img src={agente.img} alt={agente.title} />
              <h3>{agente.title}</h3>
              <button>Saiba mais</button>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
