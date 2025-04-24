import Home from './pages/Home.jsx';

import Perfil from './pages/Perfil.jsx';
/*
import Mensagens from './pages/Mensagens';
import Admin from './pages/Admin';
import Lojinha from './pages/Lojinha';
*/

export default function MainContent({ activePage }) {
  return (
    <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex-1 flex-col overflow-auto ">
      {activePage === 'Home' && <Home />}
      {activePage === 'Perfil' && <Perfil />}
      
      {/* Você pode expandir pra submenus também {activePage === 'Mensagens' && <Mensagens />}
      {activePage === 'Admin' && <Admin />}
      {activePage === 'Lojinha' && <Lojinha />} */}
    </div>
  );
}
