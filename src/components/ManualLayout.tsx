import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Menu, X } from "lucide-react";
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

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-sidebar overflow-y-auto transition-transform duration-250 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-3 p-1 rounded-md text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <Sidebar onSectionChange={handleSectionChange} />
      </aside>

      <main className="flex-1 lg:ml-[260px]">
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-md hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-sans text-sm font-semibold text-heading truncate">
            POP — Prestação de Contas PDDE
          </span>
        </div>

        <div className="max-w-prose mx-auto px-6 py-10 lg:py-16 prose-manual">
          {children}
        </div>
      </main>
    </div>
  );
}
