import { ManualLayout } from "@/components/ManualLayout";
import { Hero } from "@/components/sections/Hero";
import { Apresentacao } from "@/components/sections/Apresentacao";
import { Escopo } from "@/components/sections/Escopo";
import { Abertura } from "@/components/sections/Abertura";
import { Instrucao } from "@/components/sections/Instrucao";
import { Inclusao } from "@/components/sections/Inclusao";
import { Autenticacao } from "@/components/sections/Autenticacao";
import { Assinatura } from "@/components/sections/Assinatura";
import { Finalizacao } from "@/components/sections/Finalizacao";
import { Modelos } from "@/components/sections/Modelos";
import { ChecklistSection } from "@/components/sections/Checklist";
import { Contatos } from "@/components/sections/Contatos";
import { Referencias } from "@/components/sections/Referencias";

const SectionDivider = () => (
  <div className="my-16 flex items-center gap-3 px-2">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
    <div className="flex gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary/35" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
    </div>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
  </div>
);

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ManualLayout onSectionChange={scrollToSection}>
      <Hero />
      <Apresentacao />
      <SectionDivider />
      <Escopo />
      <SectionDivider />
      <Abertura />
      <SectionDivider />
      <Instrucao />
      <SectionDivider />
      <Inclusao />
      <SectionDivider />
      <Autenticacao />
      <SectionDivider />
      <Assinatura />
      <SectionDivider />
      <Finalizacao />
      <SectionDivider />
      <Modelos />
      <SectionDivider />
      <ChecklistSection />
      <SectionDivider />
      <Contatos />
      <SectionDivider />
      <Referencias />
    </ManualLayout>
  );
};

export default Index;
