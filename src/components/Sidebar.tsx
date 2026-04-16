import { useEffect, useState } from "react";
import { BookOpen, FileText, FolderOpen, Shield, PenTool, Send, Phone, Scale, ClipboardList, Paperclip, FileCheck } from "lucide-react";

import { useScrollSpy } from "@/hooks/use-scroll-spy";

interface SidebarProps {
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "apresentacao", label: "Apresentação", number: "", icon: BookOpen, group: "intro" },
  { id: "escopo", label: "Escopo", number: "", icon: Scale, group: "intro" },
  { id: "abertura", label: "Abertura do Processo", number: "1", icon: FolderOpen, group: "etapas" },
  { id: "instrucao", label: "Instrução Processual", number: "2", icon: FileText, group: "etapas" },
  { id: "inclusao", label: "Inclusão de Documentos", number: "3", icon: Paperclip, group: "etapas" },
  { id: "autenticacao", label: "Autenticação", number: "4", icon: Shield, group: "etapas" },
  { id: "assinatura", label: "Bloco de Assinatura", number: "5", icon: PenTool, group: "etapas" },
  { id: "finalizacao", label: "Despacho e Finalização", number: "6", icon: Send, group: "etapas" },
  { id: "modelos", label: "Modelos e Anexos", number: "", icon: FileCheck, group: "apoio" },
  { id: "checklist", label: "Checklist", number: "", icon: ClipboardList, group: "apoio" },
  { id: "contatos", label: "Contatos", number: "7", icon: Phone, group: "apoio" },
  { id: "referencias", label: "Referências", number: "8", icon: BookOpen, group: "apoio" },
];

const groups = [
  { key: "intro", label: "" },
  { key: "etapas", label: "Etapas do Processo" },
  { key: "apoio", label: "Material de Apoio" },
];

export function Sidebar({ onSectionChange }: SidebarProps) {
  const sectionIds = sections.map((s) => s.id);
  const activeSection = useScrollSpy(sectionIds, 120);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar-nav flex flex-col h-full">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary/15 flex items-center justify-center">
            <FileText className="w-4 h-4 text-sidebar-primary" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-sidebar-primary leading-tight">
              POP
            </div>
            <div className="text-[10px] text-sidebar-foreground/40 leading-tight">
              Prestação de Contas
            </div>
          </div>
        </div>

        {/* Progress bar with shimmer */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground/35">
              Progresso
            </span>
            <span className="text-[10px] font-mono text-sidebar-primary font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-sidebar-accent overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sidebar-primary to-[hsl(215,65%,58%)] transition-[width] duration-200 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2.5">
        {groups.map((group) => {
          const groupSections = sections.filter((s) => s.group === group.key);
          return (
            <div key={group.key} className="mb-2">
              {group.label && (
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-sidebar-foreground/30 px-3 pt-3 pb-2">
                  {group.label}
                </div>
              )}
              {groupSections.map((s) => {
                const isActive = activeSection === s.id;
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`group relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-all duration-200 mb-0.5 ${
                      isActive
                        ? "bg-sidebar-primary/12 text-sidebar-primary font-semibold shadow-sm"
                        : "text-sidebar-foreground/60 hover:text-sidebar-foreground/90 hover:bg-sidebar-accent/60"
                    }`}
                    style={{ textDecoration: 'none', borderLeft: 'none' }}
                    onClick={(e) => {
                      e.preventDefault();
                      onSectionChange(s.id);
                    }}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-sidebar-primary transition-all duration-300" />
                    )}
                    <Icon className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                      isActive ? "text-sidebar-primary" : "text-sidebar-foreground/35 group-hover:text-sidebar-foreground/60"
                    }`} />
                    <span className="truncate leading-tight">{s.label}</span>
                    {s.number && (
                      <span className={`ml-auto text-[10px] font-mono shrink-0 ${
                        isActive ? "text-sidebar-primary/70" : "text-sidebar-foreground/25"
                      }`}>
                        {s.number}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-sidebar-border">
        <div className="text-[10px] text-sidebar-foreground/25 leading-relaxed">
          4ª CRE · GAD<br />
          Abril 2025 · v1.0
        </div>
      </div>
    </div>
  );
}
