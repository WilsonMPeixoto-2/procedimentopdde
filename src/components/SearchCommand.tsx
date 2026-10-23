import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { BookOpen, FileText, SearchCheck } from "lucide-react";

type SearchEntry = {
  id: string;
  title: string;
  group: string;
  text: string;
};

const instructionIds = new Set([
  "abertura",
  "instrucao",
  "inclusao",
  "autenticacao",
  "assinatura",
  "finalizacao",
]);

const supportIds = new Set(["modelos", "checklist", "contatos", "referencias"]);

const compact = (value: string) => value.replace(/\s+/g, " ").trim();

const normalizeForSearch = (value: string) =>
  compact(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");

const groupFor = (id: string) => {
  if (instructionIds.has(id)) return "Instrução Processual";
  if (id === "fiscalizacao") return "Fiscalização";
  if (supportIds.has(id)) return "Apoio e Referências";
  return "Introdução";
};

const buildSearchIndex = (): SearchEntry[] => {
  const root = document.getElementById("main-content");
  if (!root) return [];

  return Array.from(root.querySelectorAll<HTMLElement>("section[id]"))
    .map((section) => {
      const navigationTitle = document.querySelector<HTMLElement>(
        `.sidebar-nav a[href="#${section.id}"] span`,
      )?.innerText.trim();
      const title =
        navigationTitle ||
        section.querySelector<HTMLElement>("h1, h2")?.innerText.trim() ||
        section.id;
      const text = compact(section.innerText);

      return {
        id: section.id,
        title,
        group: groupFor(section.id),
        text,
      };
    })
    .filter((entry) => entry.text.length > 0);
};

const excerptFor = (text: string, query: string) => {
  const cleaned = compact(text);
  if (!query.trim()) {
    return cleaned.length > 170 ? cleaned.slice(0, 167) + "…" : cleaned;
  }

  const source = cleaned.toLocaleLowerCase("pt-BR");
  const terms = query
    .trim()
    .toLocaleLowerCase("pt-BR")
    .split(/\s+/)
    .filter(Boolean);

  let index = source.indexOf(query.trim().toLocaleLowerCase("pt-BR"));
  if (index < 0) {
    index = Math.min(
      ...terms
        .map((term) => source.indexOf(term))
        .filter((position) => position >= 0),
    );
  }
  if (!Number.isFinite(index) || index < 0) index = 0;

  const start = Math.max(0, index - 70);
  const end = Math.min(cleaned.length, index + query.length + 115);
  return (start > 0 ? "…" : "") + cleaned.slice(start, end) + (end < cleaned.length ? "…" : "");
};

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<SearchEntry[]>([]);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();

        if (open) {
          setQuery("");
          setOpen(false);
        } else {
          setEntries(buildSearchIndex());
          setOpen(true);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  useEffect(() => {
    const handleTrigger = () => {
      setEntries(buildSearchIndex());
      setOpen(true);
    };

    window.addEventListener("open-search", handleTrigger);
    return () => window.removeEventListener("open-search", handleTrigger);
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setEntries(buildSearchIndex());
    } else {
      setQuery("");
    }
    setOpen(nextOpen);
  };

  const handleSelect = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  const normalizedQuery = normalizeForSearch(query);
  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);
  const visibleEntries =
    queryTerms.length === 0
      ? entries
      : entries.filter((entry) => {
          const searchable = normalizeForSearch(entry.title + " " + entry.text);
          return queryTerms.every((term) => searchable.includes(term));
        });

  const groups = ["Fiscalização", "Instrução Processual", "Apoio e Referências", "Introdução"];

  return (
    <CommandDialog open={open} onOpenChange={handleOpenChange}>
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Pesquise o texto do manual (ex.: conciliação, nato-digital, bem permanente)..."
      />
      <CommandList className="max-h-[430px]">
        <CommandEmpty>Nenhum trecho do manual corresponde à pesquisa.</CommandEmpty>

        {groups.map((group) => {
          const groupEntries = visibleEntries.filter((entry) => entry.group === group);
          if (groupEntries.length === 0) return null;

          return (
            <CommandGroup key={group} heading={group}>
              {groupEntries.map((entry) => {
                const Icon =
                  entry.group === "Fiscalização"
                    ? SearchCheck
                    : entry.group === "Instrução Processual"
                      ? FileText
                      : BookOpen;

                return (
                  <CommandItem
                    key={entry.id}
                    value={entry.text}
                    aria-label={"Abrir " + entry.title}
                    onSelect={() => handleSelect(entry.id)}
                    className="items-start gap-2.5"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                    <div className="min-w-0">
                      <div className="font-sans text-[13px] font-semibold text-foreground">
                        {entry.title}
                      </div>
                      <div className="mt-0.5 line-clamp-2 font-sans text-[11.5px] leading-relaxed text-muted-foreground">
                        {excerptFor(entry.text, query)}
                      </div>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
}
