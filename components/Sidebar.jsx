"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Operação" },
  { href: "/frota", label: "Frota" },
  { href: "/pneus", label: "Pneus" },
  { href: "/manutencao", label: "Manutenção" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex w-56 flex-col bg-ink text-paper px-5 py-8">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 rounded-md bg-panel border border-line flex items-center justify-center text-gold text-sm font-medium">
          TR
        </div>
        <div>
          <p className="text-sm font-medium leading-tight">TR Dourado</p>
          <p className="text-xs text-neutral-400 leading-tight">Transportes</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                active
                  ? "bg-panel text-gold"
                  : "text-neutral-300 hover:bg-panel hover:text-paper"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-8 text-xs text-neutral-500">
        Dados de demonstração
      </div>
    </aside>
  );
}
