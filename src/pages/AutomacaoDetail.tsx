import { useParams, Link } from 'react-router-dom';
import '../styles/DetailPage.css';

const automacoesData = [
  {
    id: 1,
    title: 'Automação de E-mails',
    desc: 'Automatize o envio de campanhas de marketing, lembretes, notificações e mensagens de follow-up. Com fluxos inteligentes e segmentação, você se comunica com cada cliente no momento certo, com o conteúdo ideal — tudo sem esforço manual.',
    porque: [
      'Aumenta o engajamento com seu público.',
      'Reduz falhas humanas no envio de mensagens.',
      'Economiza tempo e recursos.',
      'Ideal para campanhas recorrentes ou sazonais.',
    ],
  },
  {
    id: 2,
    title: 'Integração de Sistemas',
    desc: 'Conecte diferentes plataformas e softwares da sua empresa (como CRM, ERP, ferramentas de vendas ou comunicação) para que troquem dados automaticamente. Elimine retrabalho e garanta que todas as áreas estejam sincronizadas.',
    porque: [
      'Elimina entrada manual de dados.',
      'Evita erros de comunicação entre setores.',
      'Aumenta a produtividade e a eficiência.',
      'Unifica e automatiza processos internos.',
    ],
  },
  {
    id: 3,
    title: 'Robôs de Processos (RPA)',
    desc: 'Robôs automatizados que imitam ações humanas em sistemas digitais, como copiar/colar, preencher formulários, extrair informações e enviar documentos. Ideais para processos repetitivos e burocráticos.',
    porque: [
      'Reduz o tempo gasto em tarefas operacionais.',
      'Diminui erros humanos.',
      'Libera sua equipe para atividades estratégicas.',
      'Escalável conforme a demanda do seu negócio.',
    ],
  },
  {
    id: 4,
    title: 'Atendimento ao Cliente Automático',
    desc: 'Implemente chatbots e sistemas de FAQ que funcionam 24h por dia, respondendo às dúvidas mais comuns de clientes. O atendimento é instantâneo, eficiente e melhora significativamente a experiência do usuário.',
    porque: [
      'Garante suporte mesmo fora do horário comercial.',
      'Reduz custos com atendimento humano.',
      'Aumenta a satisfação do cliente.',
      'Excelente para e-commerces e serviços digitais.',
    ],
  },
  {
    id: 5,
    title: 'Gestão de Dados e Relatórios',
    desc: 'Colete, organize e analise automaticamente os dados da sua empresa. Gere relatórios personalizados e dashboards visuais que mostram os indicadores mais importantes para decisões estratégicas.',
    porque: [
      'Reduz tempo com planilhas manuais.',
      'Ajuda na tomada de decisão baseada em dados.',
      'Oferece visão clara e em tempo real dos resultados.',
      'Ideal para empresas que lidam com muitos dados.',
    ],
  },
  {
    id: 6,
    title: 'Controle de Estoque Automatizado',
    desc: 'Sincronize suas vendas com o estoque automaticamente. A cada venda online, o sistema atualiza o inventário em tempo real. Basta registrar sua produção e o sistema faz o restante — com total precisão.',
    porque: [
      'Evita vendas de produtos indisponíveis.',
      'Elimina erros manuais de contagem.',
      'Economiza tempo do setor operacional.',
      'Indispensável para negócios com múltiplos canais de venda.',
    ],
  },
  {
    id: 7,
    title: 'Automação de Propostas Comerciais',
    desc: 'Crie propostas comerciais completas em segundos. Ao preencher um formulário simples, o sistema gera automaticamente o documento com layout profissional, valores, condições e dados do cliente.',
    porque: [
      'Acelera o ciclo de vendas.',
      'Garante padronização nos documentos.',
      'Diminui erros no preenchimento.',
      'Ideal para empresas com grande volume de orçamentos.',
    ],
  },
  {
    id: 8,
    title: 'Automação de Pós-Venda e Feedback',
    desc: 'Envie mensagens automáticas após a compra para agradecer, oferecer novos produtos ou coletar feedback. Isso mantém o cliente engajado e aumenta as chances de recompra e fidelização.',
    porque: [
      'Melhora a experiência do cliente após a venda.',
      'Aumenta a taxa de recompra.',
      'Coleta insights valiosos para melhorias.',
      'Fortalece a marca com um bom relacionamento.',
    ],
  },
  {
    id: 9,
    title: 'Gerador Automático de Contratos',
    desc: 'Gere contratos automaticamente com base em dados preenchidos em formulários. O sistema insere cláusulas variáveis e cria documentos prontos para assinatura com total agilidade e segurança jurídica.',
    porque: [
      'Acelera processos legais e comerciais.',
      'Reduz a chance de erros e omissões.',
      'Economiza tempo com formatações repetitivas.',
      'Ideal para empresas que lidam com contratos recorrentes.',
    ],
  },
  {
    id: 10,
    title: 'Automação de Cobrança e Lembretes de Pagamento',
    desc: 'Evite inadimplência e melhore o fluxo de caixa da sua empresa com lembretes automáticos de pagamento. O sistema envia mensagens personalizadas por e-mail, SMS ou WhatsApp conforme datas de vencimento se aproximam ou passam — tudo de forma respeitosa e estratégica.',
    porque: [
      'Reduz a inadimplência de forma automática.',
      'Economiza tempo da equipe financeira.',
      'Mantém um relacionamento cordial com o cliente.',
      'Excelente para negócios com cobrança recorrente ou mensal.',
    ],
  },
];

export default function AutomacaoDetail() {
  const { id } = useParams();
  const automacao = automacoesData.find(a => a.id === Number(id));

  if (!automacao) {
    return (
      <div className="detail-main">
        <p className="detail-desc">Automação não encontrada.</p>
        <Link to="/automacoes" className="detail-back-btn">Voltar para Automações</Link>
      </div>
    );
  }

  return (
    <main className="detail-main">
      <section className="detail-section">
        <h1 className="detail-title">{automacao.title}</h1>
        <p className="detail-desc">{automacao.desc}</p>
        {automacao.porque && (
          <>
            <h3 className="detail-subtitle">Por que sua empresa precisa disso?</h3>
            <ul className="detail-list">
              {automacao.porque.map((item, index) => (
                <li key={index} className="detail-list-item">{item}</li>
              ))}
            </ul>
          </>
        )}
        
        <Link to="/automacoes" className="detail-back-btn">Voltar para Automações</Link>
      </section>
    </main>
  );
}
