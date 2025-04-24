const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold text-[#2f496e] mb-4">Bem-vindo ao Care.ly!</h2>
      <p className="text-gray-700 mb-6">
        Aqui você pode visualizar iniciativas que voce pode contribuir, basta clicar nos cards.
      </p>

      {/* Layout estilo Pinterest com colunas */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">

        {/* Card estilo pin */}
        <div className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative">
          <img
            src="./src/assets/inicitiva1.jpg"
            alt="Orfanatos"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Orfanatos</h3>
              <p className="text-sm">
                pipipopoipoipoiiooioioiopiopioio. 
                pipipopoipoipoiiooi
                oioiopiopioio 
                dsffad
              </p>
            </div>
          </div>
        </div>

        {/* Você pode duplicar esse bloco com outras imagens/textos */}
        <div className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative">
          <img
            src="./src/assets/iniciativa2.jpg"
            alt="Iniciativa 2"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Educação</h3>
              <p className="text-sm">Texto aleatório sobre uma iniciativa linda e transformadora.</p>
            </div>
          </div>
        </div>

      
        <div className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative">
          <img
            src="./src/assets/iniciativa3.jpg"
            alt="Iniciativa 3"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Educação</h3>
              <p className="text-sm">Texto aleatório sobre uma iniciativa linda e transformadora.</p>
            </div>
          </div>
        </div>

        <div className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative">
          <img
            src="./src/assets/iniciativa4.jpg"
            alt="Iniciativa 4"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Educação</h3>
              <p className="text-sm">Texto aleatório sobre uma iniciativa linda e transformadora.</p>
            </div>
          </div>
        </div>


        <div className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden  cursor-pointer relative">
          <img
            src="./src/assets/iniciativa5.jpg"
            alt="Iniciativa 5"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Educação</h3>
              <p className="text-sm">Texto aleatório sobre uma iniciativa linda e transformadora.</p>
            </div>
          </div>
        </div>

        <div className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative">
          <img
            src="./src/assets/iniciativa6.jpg"
            alt="Iniciativa 6"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Educação</h3>
              <p className="text-sm">Texto aleatório sobre uma iniciativa linda e transformadora.</p>
            </div>
          </div>
        </div>

        <div className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative">
          <img
            src="./src/assets/iniciativa7.jpg"
            alt="Iniciativa 7"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Educação</h3>
              <p className="text-sm">Texto aleatório sobre uma iniciativa linda e transformadora.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
