import { frota } from "../../lib/data";

export default function FrotaPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-medium mb-1">Frota</h1>
      <p className="text-sm text-neutral-500 mb-8">
        {frota.length} veículos cadastrados · dados de demonstração
      </p>

      <div className="flex flex-col gap-2">
        {frota.map((v) => {
          const restante = v.proximaRevisao - v.km;
          const alerta = restante <= 10000;
          return (
            <div
              key={v.placa}
              className="bg-white border border-neutral-200 rounded-xl px-4 py-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{v.placa}</p>
                  <p className="text-xs text-neutral-500">{v.modelo}</p>
                </div>
                <span className="text-xs text-neutral-500 border border-neutral-200 rounded-full px-2.5 py-1">
                  {v.tipo}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-neutral-500">
                  {v.km.toLocaleString("pt-BR")} km rodados
                </span>
                <span className={alerta ? "text-amber-700 font-medium" : "text-neutral-500"}>
                  Próxima revisão em {restante.toLocaleString("pt-BR")} km
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
