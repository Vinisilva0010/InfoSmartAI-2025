import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Sites from './pages/Sites';
import Automacoes from './pages/Automacoes';
import Agentes from './pages/Agentes';
import Contato from './pages/Contato';
import ComoFunciona from './pages/automacoes/como-funciona';
import AgenteDetail from './pages/AgenteDetail';
import AutomacaoDetail from './pages/AutomacaoDetail';
import SiteDetail from './pages/SiteDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/automacoes" element={<Automacoes />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/contato" element={<Contato />} />

        {/* Rotas para detalhes */}
        <Route path="/agentes/:id" element={<AgenteDetail />} />
        <Route path="/automacoes/:id" element={<AutomacaoDetail />} />
        <Route path="/sites/:id" element={<SiteDetail />} />
         <Route path="/automacoes/como-funciona" element={<ComoFunciona />} />
      </Routes>
      <Chatbot />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
