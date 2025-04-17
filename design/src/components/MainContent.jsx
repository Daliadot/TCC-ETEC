import Home from './pages/Home.jsx';

import Perfil from './pages/Perfil.jsx';
/*
import Mensagens from './pages/Mensagens';
import Admin from './pages/Admin';
import Lojinha from './pages/Lojinha';
*/

export default function MainContent({ activePage }) {
  return (
    <div className="flex-1 p-6 overflow-auto">
      {activePage === 'Home' && <Home />}
      {activePage === 'Perfil' && <Perfil />}
      
      {/* Você pode expandir pra submenus também {activePage === 'Mensagens' && <Mensagens />}
      {activePage === 'Admin' && <Admin />}
      {activePage === 'Lojinha' && <Lojinha />} */}
    </div>
  );
}
