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
      <ReadingProgress />
      <BackToTop />

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 print:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[270px] bg-sidebar overflow-y-auto transition-transform duration-300 ease-out lg:translate-x-0 print:hidden ${
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-3 p-1.5 rounded-lg text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <Sidebar onSectionChange={handleSectionChange} />
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:ml-[270px] print:ml-0">
        {/* Mobile header */}
        <div className="sticky top-0 z-30 flex items-center gap-2 border-b border-border bg-background/95 backdrop-blur-md px-4 py-2.5 lg:hidden shadow-sm print:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <span className="font-sans text-sm font-bold text-heading truncate flex-1">
            POP — Prestação de Contas PDDE
          </span>
          <button
            onClick={handlePrint}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-primary/70 hover:text-primary"
            title="Imprimir"
          >
            <Printer className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={generating}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/15 transition-colors text-primary"
            title="Baixar PDF"
          >
            <Download className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Desktop action bar */}
        <div className="hidden lg:flex items-center justify-end gap-2 px-6 py-3 print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-sans font-semibold text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-all"
          >
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={generating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-sans font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
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