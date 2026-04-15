import { useEffect, useState } from "react";

interface SidebarProps {
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "apresentacao", label: "Apresentação", number: "0" },
  { id: "escopo", label: "Escopo do procedimento", number: "" },
  { id: "abertura", label: "Abertura do Processo", number: "1" },
  { id: "instrucao", label: "Instrução Processual", number: "2" },
  { id: "inclusao", label: "Inclusão de Documentos", number: "3" },
  { id: "autenticacao", label: "Autenticação de Documentos", number: "4" },
  { id: "assinatura", label: "Bloco de Assinatura", number: "5" },
  { id: "finalizacao", label: "Despacho e Finalização", number: "6" },
  { id: "modelos", label: "Modelos e Anexos", number: "" },
  { id: "checklist", label: "Checklist", number: "" },
  { id: "contatos", label: "Contatos", number: "7" },
  { id: "referencias", label: "Referências", number: "8" },
];

export function Sidebar({ onSectionChange }: SidebarProps) {
  const [activeId, setActiveId] = useState("apresentacao");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sidebar-nav flex flex-col h-full">
      <div className="px-5 py-6 border-b border-sidebar-border">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sidebar-primary mb-1">
          Procedimento Operacional Padrão
        </div>
        <div className="text-sm text-sidebar-foreground/70 font-medium">
          Prestação de Contas PDDE
        </div>
        <div className="text-[11px] text-sidebar-foreground/35 mt-1.5">
          4ª CRE · GAD · v 2.5
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/35 px-3 mb-3">
          Sumário
        </div>
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={isActive ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onSectionChange(s.id);
              }}
            >
              {s.number && (
                <span className="inline-block w-5 text-sidebar-foreground/40 text-xs font-mono mr-1">
                  {s.number}.
                </span>
              )}
              {s.label}
            </a>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-sidebar-border text-[11px] text-sidebar-foreground/25">
        4ª CRE · GAD · Abril 2026
      </div>
    </div>
  );
}
