import { useState } from "react";
import { ManualLayout } from "@/components/ManualLayout";
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

const sectionComponents: Record<string, React.FC> = {
  apresentacao: Apresentacao,
  escopo: Escopo,
  abertura: Abertura,
  instrucao: Instrucao,
  inclusao: Inclusao,
  autenticacao: Autenticacao,
  assinatura: Assinatura,
  finalizacao: Finalizacao,
  modelos: Modelos,
  checklist: ChecklistSection,
  contatos: Contatos,
  referencias: Referencias,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("apresentacao");

  const SectionComponent = sectionComponents[activeSection] || Apresentacao;

  return (
    <ManualLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      <SectionComponent />
    </ManualLayout>
  );
};

export default Index;
