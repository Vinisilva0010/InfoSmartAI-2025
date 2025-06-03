import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const cards = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Serviço ${i + 1}`,
  desc: `Descrição do serviço ${i + 1}.`,
  img: `/imagens/servico${i + 1}.jpg`,
}));
const agentes = [
  { id: 1, title: 'Agente de Atendimento', desc: 'Atende clientes 24/7 com IA.', img: '/imagens/agente1.jpg' },
  { id: 2, title: 'Agente de Vendas', desc: 'Automatiza vendas e propostas.', img: '/imagens/agente2.jpg' },
  { id: 3, title: 'Agente de Suporte', desc: 'Resolve dúvidas e problemas.', img: '/imagens/agente3.jpg' },
];
const automacoes = [
  { id: 1, title: 'Automação de E-mails', desc: 'Envio automático de e-mails.', img: '/imagens/auto1.jpg' },
  { id: 2, title: 'Integração de Sistemas', desc: 'Conecta plataformas e apps.', img: '/imagens/auto2.jpg' },
  { id: 3, title: 'Robôs de Processos', desc: 'Executa tarefas repetitivas.', img: '/imagens/auto3.jpg' },
];
const sites = [
  { id: 1, title: 'Site Institucional', desc: 'Presença digital profissional.', img: '/imagens/site1.jpg' },
  { id: 2, title: 'Landing Page', desc: 'Páginas de alta conversão.', img: '/imagens/site2.jpg' },
  { id: 3, title: 'E-commerce', desc: 'Venda online com segurança.', img: '/imagens/site3.jpg' },
];
const depoimentos = [
  { id: 1, nome: 'Cliente 1', texto: 'Serviço excelente, recomendo!' },
  { id: 2, nome: 'Cliente 2', texto: 'Atendimento rápido e eficiente.' },
  { id: 3, nome: 'Cliente 3', texto: 'Minha empresa cresceu com a InfoSmart.' },
];

export default function Home() {
  return (
    <main className="home-main">
      {/* Vídeo de fundo fixo */}
      <video autoPlay loop muted playsInline className="home-video-bg-fixed">
        <source src="/video/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      {/* Mensagem de boas-vindas sobre o vídeo */}
      <div className="home-welcome-global">
        <h1>Bem-vindo à InfoSmart </h1>
        <p>Soluções inteligentes para o seu negócio</p>
      </div>
      {/* Slides de cards */}
      <section className="home-section" id="servicos">
        <Swiper
          className="home-cards-swiper"
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{640:{slidesPerView:1.2},1024:{slidesPerView:3}}}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {cards.map(card => (
            <SwiperSlide key={card.id}>
              <div className="home-card">
                <img src={card.img} alt={card.title} className="home-card-img" />
                <h3 className="home-card-title">{card.title}</h3>
                <p className="home-card-desc">{card.desc}</p>
                <button className="home-card-btn">Saiba mais</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Descrição dos agentes */}
      <section className="home-section" id="descricao-agentes">
        <h2 className="home-title">Como fazemos agentes de IA</h2>
        <p className="home-desc">Nossa equipe desenvolve agentes de IA personalizados, integrando as melhores tecnologias do mercado, com foco em automação, atendimento e resultados reais para o seu negócio.</p>
      </section>
      {/* Slides de agentes */}
      <section className="agentes-section" id="agentes">
        <h2 className="agentes-title">Agentes de IA</h2>
        <Swiper className="agentes-swiper" spaceBetween={24} slidesPerView={1} breakpoints={{640:{slidesPerView:1.2},1024:{slidesPerView:3}}} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation modules={[Autoplay, Pagination, Navigation]}>
          {agentes.map((agente) => (
            <SwiperSlide key={agente.id}>
              <div className="agentes-card">
                <img src={agente.img} alt={agente.title} className="agentes-card-img" />
                <h3 className="agentes-card-title">{agente.title}</h3>
                <p className="agentes-card-desc">{agente.desc}</p>
                <button className="agentes-btn">Saiba mais</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Slides de automações */}
      <section className="automacoes-section" id="automacoes">
        <h2 className="automacoes-title">Automações</h2>
        <Swiper className="automacoes-swiper" spaceBetween={24} slidesPerView={1} breakpoints={{640:{slidesPerView:1.2},1024:{slidesPerView:3}}} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation modules={[Autoplay, Pagination, Navigation]}>
          {automacoes.map((auto) => (
            <SwiperSlide key={auto.id}>
              <div className="automacoes-card">
                <img src={auto.img} alt={auto.title} className="automacoes-card-img" />
                <h3 className="automacoes-card-title">{auto.title}</h3>
                <p className="automacoes-card-desc">{auto.desc}</p>
                <button className="automacoes-btn">Saiba mais</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Slides de sites */}
      <section className="sites-section" id="sites">
        <h2 className="sites-title">Sites Profissionais</h2>
        <Swiper className="sites-swiper" spaceBetween={24} slidesPerView={1} breakpoints={{640:{slidesPerView:1.2},1024:{slidesPerView:3}}} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation modules={[Autoplay, Pagination, Navigation]}>
          {sites.map((site) => (
            <SwiperSlide key={site.id}>
              <div className="sites-card">
                <img src={site.img} alt={site.title} className="sites-card-img" />
                <h3 className="sites-card-title">{site.title}</h3>
                <p className="sites-card-desc">{site.desc}</p>
                <button className="sites-btn">Saiba mais</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Segundo vídeo: Por que contratar */}
      <section className="home-section" id="porque">
        <div className="home-video-porque">
          <video autoPlay loop muted playsInline className="home-video" poster="/vite.svg">
            <source src="/video-porque.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
        <h2 className="home-title">Por que contratar a InfoSmart?</h2>
        <p className="home-desc">A InfoSmart  entrega soluções de ponta, com atendimento personalizado, agilidade e foco total no sucesso do cliente.</p>
      </section>
      {/* Depoimentos */}
      <section className="home-section" id="depoimentos">
        <h2 className="home-title">Depoimentos de Clientes</h2>
        <Swiper className="sites-swiper" spaceBetween={24} slidesPerView={1} breakpoints={{640:{slidesPerView:1.2},1024:{slidesPerView:2}}} autoplay={{ delay: 3500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation modules={[Autoplay, Pagination, Navigation]}>
          {depoimentos.map((dep) => (
            <SwiperSlide key={dep.id}>
              <div className="sites-card" style={{ minHeight: 180 }}>
                <div className="sites-icon" style={{ width: 64, height: 64, fontSize: 32 }}>👤</div>
                <p className="sites-card-desc">"{dep.texto}"</p>
                <span style={{ color: '#0ea5e9', fontWeight: 600 }}>{dep.nome}</span>
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