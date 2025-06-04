import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../styles/Agentes.css';
import { Link } from 'react-router-dom';

const agentes = [
  { id: 1, title: 'Agente de Atendimento', desc: 'Atende clientes 24/7 com IA.', icon: '🤖', route: '/agentes/1' },
  { id: 2, title: 'Agente de Vendas', desc: 'Automatiza vendas e propostas.', icon: '💼', route: '/agentes/2' },
  { id: 3, title: 'Agente de Suporte', desc: 'Resolve dúvidas e problemas.', icon: '🛠️', route: '/agentes/3' },
  { id: 4, title: 'Agente de Marketing', desc: 'Cria campanhas e otimiza resultados.', icon: '📈', route: '/agentes/4' },
  { id: 5, title: 'Agente de RH', desc: 'Auxilia em processos de recrutamento.', icon: '🤝', route: '/agentes/5' },
];

export default function Agentes() {
  return (
    <main className="agentes-main">
      <section className="agentes-section">
        <h1 className="agentes-title">Nossos Agentes de IA</h1>
        <p className="agentes-desc">
          Nossos agentes de inteligência artificial são projetados para otimizar diversas áreas do seu negócio, desde o atendimento ao cliente até a gestão de processos.
        </p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
          }}
          className="agentes-card-swiper"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {agentes.map((agente) => (
            <SwiperSlide key={agente.id}>
              <div className="agentes-card">
                <div className="agentes-card-icon">{agente.icon}</div>
                <h3 className="agentes-card-title">{agente.title}</h3>
                <p className="agentes-card-desc">{agente.desc}</p>
                <Link to={agente.route} className="agentes-card-btn">Saiba mais</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
