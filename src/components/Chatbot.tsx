import { useState } from 'react';
import '../styles/Chatbot.css';

const respostas = [
  {
    pergunta: /o que (voc[eê]|a empresa|infosmart) faz/i,
    resposta: 'A InfoSmart 2.0 é especializada em soluções de IA, automações e desenvolvimento de sites profissionais.'
  },
  {
    pergunta: /servi[cç]os|o que oferecem|quais s[aã]o os servi[cç]os/i,
    resposta: 'Oferecemos agentes de IA, automações personalizadas e criação de sites modernos.'
  },
  {
    pergunta: /como funciona|atendimento/i,
    resposta: 'Nosso atendimento é personalizado, ágil e focado no sucesso do cliente.'
  },
  {
    pergunta: /contratar|como faço para contratar/i,
    resposta: 'Você pode entrar em contato pelo nosso site ou WhatsApp para solicitar um orçamento.'
  },
  {
    pergunta: /contato|falar com/i,
    resposta: 'Fale conosco pelo formulário de contato, WhatsApp ou redes sociais.'
  },
  {
    pergunta: /pre[cç]o|valor|quanto custa/i,
    resposta: 'Os valores variam conforme o projeto. Solicite um orçamento personalizado!'
  },
  {
    pergunta: /onde ficam|localiza[cç][aã]o|endere[cç]o/i,
    resposta: 'Atendemos todo o Brasil de forma online!'
  },
  // Adicione mais perguntas e respostas conforme desejar
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Olá! Como posso ajudar você hoje?' }
  ]);
  const [loading, setLoading] = useState(false);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      const found = respostas.find(r => r.pergunta.test(input));
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: found ? found.resposta : 'Desculpe, não entendi sua pergunta. Por favor, tente reformular ou entre em contato pelo WhatsApp.' }
      ]);
      setLoading(false);
    }, 900);
  }

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span className="chatbot-title">🤖 InfoSmart Chatbot</span>
            <button onClick={() => setOpen(false)} className="chatbot-close">✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'user' ? 'chatbot-msg-user' : 'chatbot-msg-bot'}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="chatbot-msg-bot">Digitando...</div>}
          </div>
          <form className="chatbot-form" onSubmit={handleSend} autoComplete="off">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Digite sua dúvida..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" className="chatbot-send" disabled={loading || !input.trim()}>
              Enviar
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="chatbot-fab"
        aria-label="Abrir chatbot"
      >
        <span className="text-2xl">🤖</span>
      </button>
    </div>
  );
} 