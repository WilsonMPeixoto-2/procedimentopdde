import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Menu, X } from "lucide-react";

interface ManualLayoutProps {
  children: React.ReactNode;
  onSectionChange: (section: string) => void;
}

export function ManualLayout({ children, onSectionChange }: ManualLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [activeSection]);

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-sidebar overflow-y-auto transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar activeSection={activeSection} onSectionChange={onSectionChange} />
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:ml-[260px]">
        {/* Mobile header */}
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/95 backdrop-blur px-4 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-md hover:bg-muted"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-sans text-sm font-semibold text-heading">
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
