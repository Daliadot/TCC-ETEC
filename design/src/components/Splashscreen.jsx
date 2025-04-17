import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando carregamento
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen">
      {loading ? (
        <div className="flex items-center justify-center h-full bg-blue-600 text-white text-2xl">
          <span>Carregando...</span>
        </div>
      ) : (
        <div className="p-8">
          <h1 className="text-3xl font-bold">Bem-vindo ao meu site!</h1>
          {/* resto do conteúdo */}
        </div>
      )}
    </div>
  );
}
