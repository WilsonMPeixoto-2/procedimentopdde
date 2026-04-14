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
      <hr className="my-12 border-border" />
      <Escopo />
      <hr className="my-12 border-border" />
      <Abertura />
      <hr className="my-12 border-border" />
      <Instrucao />
      <hr className="my-12 border-border" />
      <Inclusao />
      <hr className="my-12 border-border" />
      <Autenticacao />
      <hr className="my-12 border-border" />
      <Assinatura />
      <hr className="my-12 border-border" />
      <Finalizacao />
      <hr className="my-12 border-border" />
      <Modelos />
      <hr className="my-12 border-border" />
      <ChecklistSection />
      <hr className="my-12 border-border" />
      <Contatos />
      <hr className="my-12 border-border" />
      <Referencias />
    </ManualLayout>
  );
};

export default Index;
