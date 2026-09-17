import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "TR Dourado — Painel de Operação",
  description: "Sistema interno de acompanhamento de frota e operação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-paper text-ink">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 md:p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
