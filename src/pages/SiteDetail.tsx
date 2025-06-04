import { useParams, Link } from 'react-router-dom';
import '../styles/DetailPage.css';

const sitesData = [
  { id: 1, title: 'Site Institucional', desc: 'Crie uma presença online sólida para sua empresa com um site institucional moderno e profissional. Apresente seus serviços, história e informações de contato de forma clara e atraente para seus clientes.' },
  { id: 2, title: 'Landing Page', desc: 'Desenvolva páginas de alta conversão focadas em um objetivo específico, como a captação de leads, vendas de produtos ou inscrição em eventos. Otimizadas para gerar resultados e maximizar suas campanhas de marketing.' },
  { id: 3, title: 'E-commerce', desc: 'Lance sua loja virtual completa e segura, pronta para vender produtos ou serviços 24 horas por dia. Integração com meios de pagamento, gestão de estoque e funcionalidades personalizadas para o seu negócio.' },
  { id: 4, title: 'Blog Personalizado', desc: 'Tenha um blog otimizado para SEO, perfeito para criar conteúdo relevante, engajar sua audiência e estabelecer sua autoridade no mercado. Aumente o tráfego orgânico e a visibilidade da sua marca.' },
  { id: 5, title: 'Portfolio Online', desc: 'Mostre seus trabalhos, projetos e habilidades de forma profissional e impactante. Um portfolio online personalizado é essencial para profissionais criativos e empresas que desejam destacar seus diferenciais.' },
];

export default function SiteDetail() {
  const { id } = useParams();
  const site = sitesData.find(s => s.id === Number(id));

  if (!site) {
    return <div className="detail-main"><p className="detail-desc">Site não encontrado.</p><Link to="/sites" className="detail-back-btn">Voltar para Sites</Link></div>;
  }

  return (
    <main className="detail-main">
      <section className="detail-section">
        <h1 className="detail-title">{site.title}</h1>
        <p className="detail-desc">{site.desc}</p>
        <p className="detail-info">ID: {site.id}</p>
        {/* Adicione mais detalhes específicos do site aqui */}
        <Link to="/sites" className="detail-back-btn">Voltar para Sites</Link>
      </section>
    </main>
  );
} 