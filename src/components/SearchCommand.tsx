import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FileText, Search, BookOpen, Send, ClipboardList } from "lucide-react";

export function SearchCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Event listener manual para o botão da Sidebar acionar a busca
  useEffect(() => {
    const handleTrigger = () => setOpen(true);
    window.addEventListener("open-search", handleTrigger);
    return () => window.removeEventListener("open-search", handleTrigger);
  }, []);

  const handleSelect = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150); // Delay for Dialog close animation
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Digite um termo ou assunto (ex: Diligência)..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        
        <CommandGroup heading="Etapas do Processo">
          <CommandItem onSelect={() => handleSelect("abertura")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Abertura do Processo</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("instrucao")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Instrução Processual</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("inclusao")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Inclusão de Documentos (Digitais/Externos)</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("autenticacao")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Autenticação de Documentos</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("assinatura")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Bloco de Assinatura</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("finalizacao")}>
            <Send className="mr-2 h-4 w-4" />
            <span>Finalização, Andamento e Diligências</span>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Apoio e Consultas">
          <CommandItem onSelect={() => handleSelect("modelos")}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Modelos de Documentos e Anexos</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("checklist")}>
            <ClipboardList className="mr-2 h-4 w-4" />
            <span>Checklist Documental</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("referencias")}>
            <Search className="mr-2 h-4 w-4" />
            <span>Referências Normativas</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
