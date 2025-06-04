import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../../styles/Home.css';
import { Link } from 'react-router-dom';

const agentes = [
  { id: 1, title: 'Agente de Atendimento', desc: 'Atende clientes 24/7 com IA.', icon: '🤖', route: '/agentes/1' },
  { id: 2, title: 'Agente de Vendas', desc: 'Automatiza vendas e propostas.', icon: '💼', route: '/agentes/2' },
  { id: 3, title: 'Agente de Suporte', desc: 'Resolve dúvidas e problemas.', icon: '🛠️', route: '/agentes/3' },
];
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
];
const sites = [
  { id: 1, title: 'Site Institucional', desc: 'Presença digital profissional.', icon: '🌐', route: '/sites/1' },
  { id: 2, title: 'Landing Page', desc: 'Páginas de alta conversão.', icon: '🚀', route: '/sites/2' },
  { id: 3, title: 'E-commerce', desc: 'Venda online com segurança.', icon: '🛒', route: '/sites/3' },
];

export default function Home() {
  return (
    <main className="home-main">
      {/* Vídeo de fundo */}
      <div className="home-video-bg">
        <video
          className="w-full h-full object-cover"
          src="/video/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none" />
      </div>

      {/* Mensagem de boas-vindas */}
      <section className="home-welcome-section relative z-10 text-center px-4">
        <h1 className="home-title text-white text-4xl md:text-6xl font-bold">
          Bem-vindo à <span className="home-title-highlight">InfoSmart </span>
        </h1>
        <p className="home-subtitle text-white mt-4 text-lg md:text-2xl">
          Soluções inteligentes em IA, automações e sites profissionais.
        </p>
      </section>

      {/* Seção Agentes */}
      <section className="home-section" id="agentes">
        <h2 className="home-section-title">Agentes de IA</h2>
        <p className="home-section-desc">Conheça nossos agentes inteligentes para cada necessidade.</p>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            1024: { slidesPerView: 2.2 },
          }}
          className="home-card-swiper"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {agentes.map((agente) => (
            <SwiperSlide key={agente.id}>
              <div className="home-card">
                <div className="home-card-icon">{agente.icon}</div>
                <h3 className="home-card-title">{agente.title}</h3>
                <p className="home-card-desc">{agente.desc}</p>
                <Link to={agente.route} className="home-card-btn">Saiba mais</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Seção Automações */}
      <section className="home-section" id="automacoes">
        <h2 className="home-section-title">Automações</h2>
        <p className="home-section-desc">Automatize processos e ganhe produtividade.</p>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            1024: { slidesPerView: 2.2 },
          }}
          className="home-card-swiper"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {automacoes.map((auto) => (
            <SwiperSlide key={auto.id}>
              <div className="home-card">
                <div className="home-card-icon">{auto.icon}</div>
                <h3 className="home-card-title">{auto.title}</h3>
                <p className="home-card-desc">{auto.desc}</p>
                <Link to={auto.route} className="home-card-btn">Saiba mais</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Seção Sites */}
      <section className="home-section" id="sites">
        <h2 className="home-section-title">Sites Profissionais</h2>
        <p className="home-section-desc">Sites modernos, responsivos e de alta performance.</p>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            1024: { slidesPerView: 2.2 },
          }}
          className="home-card-swiper"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {sites.map((site) => (
            <SwiperSlide key={site.id}>
              <div className="home-card">
                <div className="home-card-icon">{site.icon}</div>
                <h3 className="home-card-title">{site.title}</h3>
                <p className="home-card-desc">{site.desc}</p>
                <Link to={site.route} className="home-card-btn">Saiba mais</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Por que contratar */}
      <section className="home-section" id="porque">
        <h2 className="home-section-title">Por que contratar a InfoSmart?</h2>
        <div className="home-why-us-box">
          <div className="home-why-us-icon">🎥</div>
          <div className="home-why-us-content">
            <h3 className="home-why-us-title">Tecnologia, inovação e resultado</h3>
            <p className="home-why-us-desc">A InfoSmart 2.0 entrega soluções de ponta, com atendimento personalizado, agilidade e foco total no sucesso do cliente.</p>
          </div>
        </div>
      </section>
      {/* Depoimentos */}
      <section className="home-section" id="depoimentos">
        <h2 className="home-section-title">Depoimentos de Clientes</h2>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            1024: { slidesPerView: 2.2 },
          }}
          className="home-card-swiper"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {[1,2,3].map((i) => (
            <SwiperSlide key={i}>
              <div className="home-card">
                <div className="home-card-icon">👤</div>
                <p className="home-card-desc">"Depoimento de cliente {i}. Serviço excelente, recomendo!"</p>
                <span className="home-why-us-title">Cliente {i}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}

// Tailwind custom classes para animações e neon
// Adicione no tailwind.config.js:
// drop-shadow-neon: '0 0 8px #0ea5e9, 0 0 16px #6366f1',
// animate-typing: animação de digitação
// animate-fade-in, animate-fade-in-delay: fade suave 