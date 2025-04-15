// Importa ícones da biblioteca lucide-react
import { Box, ChevronDown, Home, Menu, MessageSquare, User, Wrench, X } from 'lucide-react';
// Importa o hook useState do React
import { useState } from 'react';

// Componente Sidebar recebe props: isOpen (estado de aberto/fechado) e setIsOpen (função para alternar)
const Sidebar = ({ isOpen, setIsOpen, setActivePage }) => {
  // Estado para controlar qual dropdown está ativo/aberto
  const [activeDropdown, setActiveDropdown] = useState('');

  // Lista de itens do menu da sidebar
  const navItems = [
    { title: 'Home', icon: Home, hasDropdown: false },
    { 
      title: 'Perfil',
       
      icon: User,
      hasDropdown: true,
      dropdownItems: ['informações Pessoais', 'Configuração de conta', 'Sair', 'Iniciativas Salvas']
    },
    { 
      title: 'Mensagens', 
      icon: MessageSquare,
      hasDropdown: false,
    },
    { 
      title: 'Admin', 
      icon: User,
      hasDropdown: true,
      dropdownItems: ['informações Pessoais', 'Gerir iniciativas', 'Gerir Usúarios']
    },
    { title: 'Lojinha', icon: Box, hasDropdown: false },
    {
      title: 'Configurações',
      icon: Wrench,
      hasDropdown: true,
      dropdownItems: ['Termos de uso', 'modo escuro', 'Ajuda?']
    }
  ];

  return (
    <div 
      // Estiliza a sidebar com largura dinâmica (aberta: w-64, fechada: w-16)
      className={`bg-white text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)]
        ${isOpen ? 'w-64' : 'w-16'}`}
    >
      {/* Topo da sidebar com título e botão de menu */}
      <div className="p-4 flex justify-between items-center">
        {/* Título "Dashboard", visível apenas quando a sidebar está aberta */}
        <h1 className={`font-bold overflow-hidden transition-all duration-300 text-lg text-nowrap text-[#3B40E8]
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          Dashboard
        </h1>

        {/* Botão para abrir/fechar a sidebar */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-[#F3F5F7] p-2 rounded-lg"
        >
          {/* Ícone muda dependendo do estado da sidebar */}
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Navegação da sidebar */}
      <nav className="mt-6">
        {/* Mapeia todos os itens da navegação */}
        {navItems.map((item) => (
          <div key={item.title}>
            {/* Item principal da navegação */}
            <div 
              className="px-4 py-3 hover:bg-[#F3F5F7] cursor-pointer flex items-center justify-between"
              onClick={() => {
                if (item.hasDropdown && isOpen) {
                  setActiveDropdown(activeDropdown === item.title ? '' : item.title);
                } else {
                  setActivePage(item.title); // <- Atualiza o container ao lado
                }
              }}
              
            >
              <div className="flex items-center">
                {/* Ícone do item */}
                <item.icon size={20} strokeWidth={1.5} color='#000' />
                {/* Texto do item (esconde quando fechado) */}
                <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                  ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
                  {item.title}
                </span>
              </div>

              {/* Ícone da setinha (dropdown), rotaciona se o menu estiver aberto */}
              {item.hasDropdown && isOpen && (
                <ChevronDown 
                  size={16} 
                  strokeWidth={1.5}
                  className={`transition-transform duration-200 
                    ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                />
              )}
            </div>
            
            {/* Renderiza os subitens se o dropdown estiver ativo */}
            {item.hasDropdown && isOpen && activeDropdown === item.title && (
              <div className="bg-[#f5f5f5] overflow-hidden transition-all duration-200">
                {item.dropdownItems.map((dropdownItem) => (
                  <div
                    key={dropdownItem}
                    className="px-11 py-2 hover:bg-[#f1f1f1] cursor-pointer text-sm"
                    onClick={() => setActivePage(dropdownItem)}

                  >

                    {dropdownItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
