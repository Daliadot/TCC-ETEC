import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);           // abre/fecha sidebar
  const [activePage, setActivePage] = useState('Home'); // controla qual conteúdo exibir

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setActivePage={setActivePage} />
      <MainContent activePage={activePage} />
    </div>
  );
}
