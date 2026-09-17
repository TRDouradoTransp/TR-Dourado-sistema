import { manutencoes } from "../../lib/data";

const colunas = ["Aberto", "Em andamento", "Concluído"];

export default function ManutencaoPage() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-1">Manutenção</h1>
      <p className="text-sm text-neutral-500 mb-8">
        Ocorrências reportadas · dados de demonstração
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
        {colunas.map((coluna) => (
          <div key={coluna}>
            <p className="text-xs font-medium text-neutral-500 mb-2">{coluna}</p>
            <div className="flex flex-col gap-2">
              {manutencoes
                .filter((m) => m.status === coluna)
                .map((m) => (
                  <div
                    key={m.id}
                    className="bg-white border border-neutral-200 rounded-xl p-3"
                  >
                    <p className="text-sm font-medium">{m.placa}</p>
                    <p className="text-xs text-neutral-600 mt-1">{m.descricao}</p>
                    <p className="text-xs text-neutral-400 mt-2">
                      Responsável: {m.responsavel}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
