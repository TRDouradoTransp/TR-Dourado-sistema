import { frota } from "../../lib/data";

const posicoes = ["Dianteiro Esq.", "Dianteiro Dir.", "Eixo 2 Esq.", "Eixo 2 Dir.", "Eixo 3 Esq.", "Eixo 3 Dir."];

export default function PneusPage() {
  const veiculo = frota[0];
  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-medium mb-1">Pneus</h1>
      <p className="text-sm text-neutral-500 mb-8">
        Exemplo de posição por veículo · dados de demonstração
      </p>

      <div className="bg-white border border-neutral-200 rounded-xl p-4 mb-4">
        <p className="text-sm font-medium">{veiculo.placa}</p>
        <p className="text-xs text-neutral-500">{veiculo.modelo}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {posicoes.map((p, i) => (
          <div key={p} className="bg-white border border-neutral-200 rounded-xl p-3">
            <p className="text-xs text-neutral-500 mb-1">{p}</p>
            <p className="text-sm font-medium">
              {70 - i * 4}% de vida útil
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
