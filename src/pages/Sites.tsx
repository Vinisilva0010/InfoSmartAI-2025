import '../styles/Sites.css';

const sitesData = [
  { id: 1, img: '/img/site1.jpg', title: 'Site Institucional' },
  { id: 2, img: '/img/site2.jpg', title: 'Landing Page de Vendas' },
  { id: 3, img: '/img/site3.jpg', title: 'Portfólio Profissional' },
  { id: 4, img: '/img/site4.jpg', title: 'E-commerce Inteligente' },
  { id: 5, img: '/img/site5.jpg', title: 'Site para Eventos' },
  { id: 6, img: '/img/site6.jpg', title: 'Blog Otimizado' },
  { id: 7, img: '/img/site7.jpg', title: 'Página de Captura' },
  { id: 8, img: '/img/site8.jpg', title: 'Dashboard Personalizado' },
  { id: 9, img: '/img/site9.jpg', title: 'Site com Chatbot' },
  { id: 10, img: '/img/site10.jpg', title: 'Site com Integrações' },
  { id: 11, img: '/img/site11.jpg', title: 'Site Educacional' },
  { id: 12, img: '/img/site12.jpg', title: 'Sistema Web Sob Medida' },
];

export default function Sites() {
  return (
    <div className="sites-bg">
      <h1 className="sites-title-impacto">Criação de Sites Profissionais e Modernos</h1>
      <p className="sites-descricao">
        Nós criamos sites rápidos, responsivos, bonitos e prontos para gerar resultados reais. De páginas simples a sistemas completos, entregamos tudo com tecnologia de ponta.
      </p>

      <div className="sites-video">
        <video controls poster="/img/poster-video-sites.jpg">
          <source src="/video/video-sites.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      <div className="sites-card-grid">
        {sitesData.map((site) => (
          <div key={site.id} className="sites-card">
            <img src={site.img} alt={site.title} />
            <h3>{site.title}</h3>
            <button>Saiba mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}
