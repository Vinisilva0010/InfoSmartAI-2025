import { Link } from 'react-router-dom';
import '../../styles/como-funciona.css'; // ajuste o caminho conforme sua estrutura

export default function ComoFuncionaAutomacao() {
  return (
    <main className="como-funciona-main">
      <section className="como-funciona-container">
        <h1 className="como-funciona-title">Como Criamos Suas Automações</h1>
        <p className="como-funciona-intro">
          Descubra como transformamos ideias em soluções automatizadas que economizam tempo, reduzem erros e aumentam sua produtividade.
        </p>

        <div className="como-funciona-etapas">
          <div className="etapa">
            <h2>1. Entendimento da Necessidade</h2>
            <p>
              Conversamos com você para entender exatamente o que deseja automatizar. Analisamos processos manuais, rotinas repetitivas e gargalos operacionais.
            </p>
          </div>

          <div className="etapa">
            <h2>2. Planejamento da Solução</h2>
            <p>
              Após entender o problema, criamos um plano técnico detalhado: quais ferramentas usaremos, como será a lógica da automação, integração com APIs, e cronograma.
            </p>
          </div>

          <div className="etapa">
            <h2>3. Desenvolvimento</h2>
            <p>
              Criamos os scripts, bots ou sistemas com tecnologias modernas como Python, Node.js, Zapier, Make (Integromat), Selenium, Puppeteer e APIs personalizadas.
            </p>
          </div>

          <div className="etapa">
            <h2>4. Testes e Validação</h2>
            <p>
              Antes de liberar a automação, fazemos diversos testes com dados reais para garantir que tudo funcione perfeitamente em diferentes situações.
            </p>
          </div>

          <div className="etapa">
            <h2>5. Integração e Deploy</h2>
            <p>
              A automação é conectada à sua rotina: ela pode rodar na nuvem, em um servidor local, ou dentro de plataformas como Google Sheets, Trello, Shopee, Magalu, Notion, etc.
            </p>
          </div>

          <div className="etapa">
            <h2>6. Entrega e Treinamento</h2>
            <p>
              Entregamos a automação funcionando e, se necessário, ensinamos você ou sua equipe a usá-la da melhor forma possível, com videoaulas ou manuais.
            </p>
          </div>

          <div className="etapa">
            <h2>7. Suporte e Evolução</h2>
            <p>
              Após a entrega, seguimos com suporte técnico e melhorias contínuas. Caso seu processo evolua, atualizamos a automação para acompanhar as mudanças.
            </p>
          </div>
        </div>

        <div className="como-funciona-cta">
          <p>Pronto para automatizar sua rotina?</p>
         <Link to="/contato" className="automacoes-card-btn">Solicitar Automação Personalizada</Link>
        </div>
      </section>
    </main>
  );
}
 