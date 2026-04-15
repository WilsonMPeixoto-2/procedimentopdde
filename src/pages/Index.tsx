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
  <div className="my-14 flex items-center gap-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
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
