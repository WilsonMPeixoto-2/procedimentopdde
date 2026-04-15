import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Menu, X, Search } from "lucide-react";
import { ReadingProgress } from "./ReadingProgress";
import { BackToTop } from "./BackToTop";

interface ManualLayoutProps {
  children: React.ReactNode;
  onSectionChange: (section: string) => void;
}

export function ManualLayout({ children, onSectionChange }: ManualLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    setSidebarOpen(false);
    onSectionChange(section);
  };

  return (
    <div className="flex min-h-screen">
      <ReadingProgress />
      <BackToTop />

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[270px] bg-sidebar overflow-y-auto transition-transform duration-300 ease-out lg:translate-x-0 ${
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
      <main className="flex-1 lg:ml-[270px]">
        {/* Mobile header */}
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/95 backdrop-blur-md px-4 py-2.5 lg:hidden shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-sans text-sm font-semibold text-heading truncate flex-1">
            POP — Prestação de Contas PDDE
          </span>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div className="max-w-prose mx-auto px-5 sm:px-6 py-10 lg:py-16 prose-manual">
          {children}
        </div>
      </main>
    </div>
  );
}
