import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../styles/Automacoes.css';
import { Link } from 'react-router-dom';

const automacoes = [
   {
    id: 1,
    title: 'Automação de E-mails',
    desc: 'Automatize campanhas, notificações, lembretes e follow-ups com e-mails segmentados e personalizados. Aumente o engajamento, reduza o tempo operacional e mantenha seu público sempre informado.',
    icon: '📧',
    route: '/automacoes/1'
  },
 {
    id: 2,
    title: 'Integração de Sistemas',
    desc: 'Conecte CRMs, ERPs e outras ferramentas para fluxo contínuo de dados. Elimine erros manuais, ganhe eficiência e centralize suas operações em um ecossistema inteligente.',
    icon: '🔗',
    route: '/automacoes/2'
  },
  {
    id: 3,
    title: 'Robôs de Processos',
    desc: 'Crie bots que executam tarefas repetitivas como preencher planilhas, extrair dados e processar documentos. Ideal para reduzir custos operacionais e aumentar a produtividade.',
    icon: '🤖',
    route: '/automacoes/3'
  },
  {
    id: 4,
    title: 'Atendimento ao Cliente',
    desc: 'Implemente chatbots com IA e FAQs automáticos que atendem 24/7, melhoram a experiência do cliente e desafogam sua equipe de suporte com respostas ágeis e consistentes.',
    icon: '💬',
    route: '/automacoes/4'
  },
  {
    id: 5,
    title: 'Gestão de Dados',
    desc: 'Automatize a coleta e análise de dados com dashboards inteligentes. Tome decisões baseadas em insights reais e monitore os principais indicadores da sua empresa em tempo real.',
    icon: '📊',
    route: '/automacoes/5'
  },
   {
    id: 6,
    title: 'Agendamento de Tarefas e Reuniões',
    desc: 'Automatize reservas, reuniões e lembretes com integração a calendários. Evite conflitos de horário e melhore a organização da sua equipe e atendimento ao cliente.',
    icon: '🗓️',
    route: '/automacoes/6'
  },
  {
    id: 7,
    title: 'Controle de Estoque Automatizado',
    desc: 'Monitore entradas e saídas de produtos em tempo real. Evite rupturas ou excessos de estoque e otimize seu processo de reposição automaticamente.',
    icon: '📦',
    route: '/automacoes/7'
  },
  {
    id: 8,
    title: 'Cobrança e Faturamento Automático',
    desc: 'Envie boletos, faturas e lembretes de pagamento automaticamente. Reduza inadimplência e garanta mais eficiência na gestão financeira.',
    icon: '💸',
    route: '/automacoes/8'
  },
  {
    id: 9,
    title: 'Onboarding de Clientes',
    desc: 'Automatize todo o processo de boas-vindas e instruções para novos clientes, com e-mails, vídeos e tutoriais passo a passo. Melhore a retenção e a experiência inicial.',
    icon: '🚀',
    route: '/automacoes/9'
  },
  {
    id: 10,
    title: 'Publicação em Redes Sociais',
    desc: 'Programe e automatize postagens em Instagram, Facebook, LinkedIn e mais. Mantenha sua presença digital ativa e estratégica, mesmo sem esforço manual diário.',
    icon: '📱',
    route: '/automacoes/10'
  }

];

export default function Automacoes() {
  return (
    <main className="automacoes-main">
      <section className="automacoes-section">
        <h1 className="automacoes-title">Nossas Soluções em Automação</h1>
        <p className="automacoes-desc">
          Automatize tarefas repetitivas, otimize fluxos de trabalho e aumente a eficiência do seu negócio com nossas soluções de automação personalizadas.
        </p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
          }}
          className="automacoes-card-swiper"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {automacoes.map((auto) => (
            <SwiperSlide key={auto.id}>
              <div className="automacoes-card">
                <div className="automacoes-card-icon">{auto.icon}</div>
                <h3 className="automacoes-card-title">{auto.title}</h3>
                <p className="automacoes-card-desc">{auto.desc}</p>
                <Link to={auto.route} className="automacoes-card-btn">Saiba mais</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      {/* NOVA SEÇÃO PERSONALIZADA */}
        <div className="automacoes-extra">
          <h2 className="automacoes-extra-title">Precisa de algo diferente?</h2>
          <p className="automacoes-extra-desc">
            Nós criamos automações sob medida para sua empresa. Se você não encontrou a solução que procura,
            entre em contato conosco e descreva sua necessidade. Temos tecnologia para automatizar praticamente qualquer processo!
          </p>
         

          <Link to="/contato" className="automacoes-card-btn">Solicitar Automação Personalizada</Link>
           <div className="como-funciona-link-container">
          <p className="como-funciona-chamada">
           Quer saber exatamente como criamos cada automação do zero?
           </p>
           <Link to="/automacoes/como-funciona" className="como-funciona-botao">
          Ver processo completo passo a passo
          </Link>
           </div>
        </div>
      </section>
    </main>
  );
}
