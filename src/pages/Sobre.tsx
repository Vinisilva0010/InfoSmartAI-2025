import '../../styles/sobre.css';

export default function Sobre() {
  return (
    <main className="sobre-main">
      <section className="sobre-section">
        <h1 className="sobre-title">Sobre a InfoSmart 2.0</h1>
        <p className="sobre-desc">
          A InfoSmart 2.0 é uma empresa inovadora, especializada em soluções de inteligência artificial, automação de processos e desenvolvimento de sites profissionais. Nosso objetivo é impulsionar a produtividade e o sucesso de nossos clientes, oferecendo tecnologia de ponta e um atendimento de excelência.
        </p>

        <h2 className="sobre-subtitle">Nossa Missão</h2>
        <p className="sobre-desc">
          Simplificar e otimizar as operações de negócios através de tecnologias inteligentes, permitindo que nossos clientes foquem no que realmente importa: o crescimento de suas empresas.
        </p>

        <h2 className="sobre-subtitle">Nossa Visão</h2>
        <p className="sobre-desc">
          Ser referência no mercado de soluções de IA e automação, reconhecida pela inovação, qualidade e impacto positivo nos negócios de nossos parceiros.
        </p>

        <h2 className="sobre-subtitle">Nossos Valores</h2>
        <ul className="sobre-list">
          <li><span className="font-medium">Inovação:</span> Busca constante por novas tecnologias e soluções criativas.</li>
          <li><span className="font-medium">Qualidade:</span> Compromisso com a excelência em todos os nossos serviços.</li>
          <li><span className="font-medium">Foco no Cliente:</span> Atendimento personalizado e soluções que superam as expectativas.</li>
          <li><span className="font-medium">Transparência:</span> Relações claras e honestas com todos os stakeholders.</li>
          <li><span className="font-medium">Agilidade:</span> Entregas rápidas e eficientes sem comprometer a qualidade.</li>
        </ul>

        <p className="sobre-contact-text">
          Transforme seu negócio com a InfoSmart 2.0. Entre em contato e saiba como podemos ajudar!
        </p>
      </section>
    </main>
  );
}
