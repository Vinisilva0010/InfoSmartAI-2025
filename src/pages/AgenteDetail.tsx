import { useParams, Link } from 'react-router-dom';
import '../styles/DetailPage.css';

const agentesData = [
  { id: 1, title: 'Agente de Atendimento', desc: 'Este agente de IA é especializado em interações com clientes, oferecendo suporte 24/7, respondendo a perguntas frequentes e direcionando usuários para os recursos certos. Ideal para otimizar o atendimento ao cliente e reduzir a carga de trabalho da equipe.' },
  { id: 2, title: 'Agente de Vendas', desc: 'Desenvolvido para automatizar o processo de vendas, desde a prospecção até o fechamento. Ele pode qualificar leads, enviar propostas personalizadas e agendar reuniões, aumentando a eficiência e as taxas de conversão.' },
  { id: 3, title: 'Agente de Suporte', desc: 'Focado na resolução de problemas e dúvidas técnicas. Este agente pode diagnosticar questões, guiar usuários através de tutoriais e, quando necessário, escalar para um atendente humano com todas as informações relevantes.' },
  { id: 4, title: 'Agente de Marketing', desc: 'Este agente otimiza campanhas de marketing digital, analisa dados de desempenho, segmenta audiências e personaliza a comunicação, maximizando o ROI e a relevância de suas ações de marketing.' },
  { id: 5, title: 'Agente de RH', desc: 'Auxilia em processos de recrutamento e seleção, onboarding de novos funcionários, e pode responder a perguntas sobre políticas internas e benefícios. Simplifica a gestão de recursos humanos e melhora a experiência do colaborador.' },
];

export default function AgenteDetail() {
  const { id } = useParams();
  const agente = agentesData.find(a => a.id === Number(id));

  if (!agente) {
    return <div className="detail-main"><p className="detail-desc">Agente não encontrado.</p><Link to="/agentes" className="detail-back-btn">Voltar para Agentes</Link></div>;
  }

  return (
    <main className="detail-main">
      <section className="detail-section">
        <h1 className="detail-title">{agente.title}</h1>
        <p className="detail-desc">{agente.desc}</p>
        <p className="detail-info">ID: {agente.id}</p>
        {/* Adicione mais detalhes específicos do agente aqui */}
        <Link to="/agentes" className="detail-back-btn">Voltar para Agentes</Link>
      </section>
    </main>
  );
} 