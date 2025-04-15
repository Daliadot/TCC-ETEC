const Home = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#313A4B] mb-4">Bem-vindo à Home</h2>
        <p className="text-gray-700 mb-2">
          Aqui você pode visualizar um resumo geral do sistema.
        </p>
  
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md border">
            <h3 className="font-semibold text-lg mb-2">Resumo de atividades</h3>
            <p className="text-sm text-gray-600">Você tem 3 tarefas pendentes e 2 mensagens novas.</p>
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow-md border">
            <h3 className="font-semibold text-lg mb-2">Últimas iniciativas</h3>
            <p className="text-sm text-gray-600">Confira as 5 últimas iniciativas cadastradas.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  