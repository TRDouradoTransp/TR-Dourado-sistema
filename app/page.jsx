import { motoristas, statusCor } from "../lib/data";

function contarStatus(lista, status) {
  return lista.filter((m) => m.status === status).length;
}

export default function OperacaoPage() {
  const resumo = [
    { status: "Em rota", cor: "text-blue-700" },
    { status: "Carregado", cor: "text-neutral-700" },
    { status: "Descarga", cor: "text-amber-700" },
    { status: "Problema", cor: "text-red-700" },
  ];

  return (
    <div className="max-w-3xl">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <h1 className="text-xl font-medium">Painel de operação</h1>
          <p className="text-sm text-neutral-500 mt-1">
            {motoristas.length} conjuntos monitorados · dados de demonstração
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {resumo.map((r) => (
          <div key={r.status} className="bg-white border border-neutral-200 rounded-xl p-4">
            <p className="text-xs text-neutral-500 mb-1">{r.status}</p>
            <p className={`text-2xl font-medium ${r.cor}`}>
              {contarStatus(motoristas, r.status)}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {motoristas.map((m) => (
          <div
            key={m.placa}
            className="flex items-center justify-between bg-white border border-neutral-200 rounded-xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-600">
                {m.nome[0]}
              </div>
              <div>
                <p className="text-sm font-medium">{m.nome}</p>
                <p className="text-xs text-neutral-500">
                  {m.placa} · {m.local}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusCor[m.status]}`}
              >
                {m.status}
              </span>
              <p className="text-xs text-neutral-400 mt-1">{m.atualizado}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
