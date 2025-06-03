import Navbar from './components/Navbar';

import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Agentes from './pages/Agentes';
import Automacoes from './pages/Automacoes';
import Sites from './pages/Sites';
import Contato from './pages/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/automacoes" element={<Automacoes />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      
      <Chatbot />
    </Router>
  );
}

export default App;
