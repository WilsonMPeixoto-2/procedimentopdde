import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Menu, X, Printer, Download } from "lucide-react";
import { ReadingProgress } from "./ReadingProgress";
import { BackToTop } from "./BackToTop";

interface ManualLayoutProps {
  children: React.ReactNode;
  onSectionChange: (section: string) => void;
}

export function ManualLayout({ children, onSectionChange }: ManualLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleSectionChange = (section: string) => {
    setSidebarOpen(false);
    onSectionChange(section);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setGenerating(true);
    try {
      window.print();
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Skip-to-content — acessibilidade (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg focus:outline-none print:hidden"
      >
        Pular para o conteúdo principal
      </a>
      <ReadingProgress />
      <BackToTop />

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/40 backdrop-blur-md lg:hidden transition-opacity duration-300 print:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        aria-label="Navegação do manual"
        className={`fixed top-0 left-0 z-50 h-full w-[270px] bg-sidebar overflow-y-auto transition-transform duration-300 ease-out lg:translate-x-0 print:hidden ${
          sidebarOpen ? "translate-x-0 shadow-2xl shadow-black/30" : "-translate-x-full"
        }`}
      >
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Fechar menu de navegação"
            className="absolute top-4 right-3 p-1.5 rounded-lg text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <Sidebar onSectionChange={handleSectionChange} />
      </aside>

      {/* Main content */}
      <main id="main-content" className="flex-1 lg:ml-[270px] print:ml-0">
        {/* Mobile header */}
        <div className="sticky top-0 z-30 flex items-center gap-2 border-b border-border/60 bg-background/80 backdrop-blur-xl px-4 py-2.5 lg:hidden shadow-[0_1px_3px_hsl(224,30%,50%,0.06)] print:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menu de navegação"
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <span className="font-heading text-sm font-bold text-heading truncate flex-1 tracking-tight">
            POP — Prestação de Contas PDDE
          </span>
          <button
            onClick={handlePrint}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            title="Imprimir"
          >
            <Printer className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={generating}
            className="p-2 rounded-lg bg-primary/[0.08] hover:bg-primary/[0.14] transition-colors text-primary"
            title="Baixar PDF"
          >
            <Download className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Desktop action bar */}
        <div className="hidden lg:flex items-center justify-end gap-2 px-6 py-3 print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-sans font-semibold text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all duration-200"
          >
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={generating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-sans font-bold bg-gradient-to-b from-primary to-[hsl(224,58%,28%)] text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 shadow-md shadow-primary/15"
          >
            <Download className="w-4 h-4" />
            Baixar PDF
          </button>
        </div>

        <div className="w-full flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
