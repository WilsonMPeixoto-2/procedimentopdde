import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  BookOpen,
  ClipboardList,
  FileText,
  RotateCcw,
  Search,
  SearchCheck,
  Send,
  TriangleAlert,
} from "lucide-react";

export function SearchCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((current) => !current);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const handleTrigger = () => setOpen(true);
    window.addEventListener("open-search", handleTrigger);
    return () => window.removeEventListener("open-search", handleTrigger);
  }, []);

  const handleSelect = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Digite um assunto (ex.: diligência, autenticação, fiscalização)..." />
      <CommandList>
        <CommandEmpty>Nenhum tópico encontrado.</CommandEmpty>

        <CommandGroup heading="Instrução Processual">
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
            <span>Inclusão de Documentos</span>
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
            <span>Remessa, acompanhamento e diligências</span>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Fiscalização">
          <CommandItem onSelect={() => handleSelect("fiscalizacao")}>
            <SearchCheck className="mr-2 h-4 w-4" />
            <span>Roteiro de Fiscalização</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("fiscalizacao-achados")}>
            <TriangleAlert className="mr-2 h-4 w-4" />
            <span>Classificação dos Achados</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("fiscalizacao-diligencia")}>
            <Search className="mr-2 h-4 w-4" />
            <span>Como elaborar uma diligência</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("fiscalizacao-reanalise")}>
            <RotateCcw className="mr-2 h-4 w-4" />
            <span>Reanálise após diligência</span>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Apoio e Consultas">
          <CommandItem onSelect={() => handleSelect("modelos")}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Modelos e Anexos</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("checklist")}>
            <ClipboardList className="mr-2 h-4 w-4" />
            <span>Checklist de Instrução</span>
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
