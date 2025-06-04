import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../styles/Sites.css';
import { Link } from 'react-router-dom';

const sites = [
  { id: 1, title: 'Site Institucional', desc: 'Presença digital profissional.', icon: '🌐', route: '/sites/1' },
  { id: 2, title: 'Landing Page', desc: 'Páginas de alta conversão.', icon: '🚀', route: '/sites/2' },
  { id: 3, title: 'E-commerce', desc: 'Venda online com segurança.', icon: '🛒', route: '/sites/3' },
  { id: 4, title: 'Blog Personalizado', desc: 'Crie conteúdo e engaje seu público.', icon: '✍️', route: '/sites/4' },
  { id: 5, title: 'Portfolio Online', desc: 'Mostre seus trabalhos de forma profissional.', icon: '📸', route: '/sites/5' },
];

export default function Sites() {
  return (
    <main className="sites-main">
      <section className="sites-section">
        <h1 className="sites-title">Nossos Sites Profissionais</h1>
        <p className="sites-desc">
          Desenvolvemos sites modernos, responsivos e otimizados para oferecer a melhor experiência ao usuário e alcançar seus objetivos de negócio.
        </p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
          }}
          className="sites-card-swiper"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {sites.map((site) => (
            <SwiperSlide key={site.id}>
              <div className="sites-card">
                <div className="sites-card-icon">{site.icon}</div>
                <h3 className="sites-card-title">{site.title}</h3>
                <p className="sites-card-desc">{site.desc}</p>
                <Link to={site.route} className="sites-card-btn">Saiba mais</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
