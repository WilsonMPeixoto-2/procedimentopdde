import { ManualLayout } from "@/components/ManualLayout";
import { Hero } from "@/components/sections/Hero";
import { InstitutionalFooter } from "@/components/InstitutionalFooter";
import { SectionBanner } from "@/components/SectionBanner";
import { Apresentacao } from "@/components/sections/Apresentacao";
import { Escopo } from "@/components/sections/Escopo";
import { Abertura } from "@/components/sections/Abertura";
import { Instrucao } from "@/components/sections/Instrucao";
import { Inclusao } from "@/components/sections/Inclusao";
import { Autenticacao } from "@/components/sections/Autenticacao";
import { Assinatura } from "@/components/sections/Assinatura";
import { Finalizacao } from "@/components/sections/Finalizacao";
import { Fiscalizacao } from "@/components/sections/Fiscalizacao";
import { Modelos } from "@/components/sections/Modelos";
import { ChecklistSection } from "@/components/sections/Checklist";
import { Contatos } from "@/components/sections/Contatos";
import { Referencias } from "@/components/sections/Referencias";
import { PrintFrontMatter, PrintColophon } from "@/components/PrintMatter";
import { SearchCommand } from "@/components/SearchCommand";

const ContentDivider = () => (
  <div className="content-divider my-14 flex items-center gap-4 px-2 print:hidden">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="flex gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary/15" />
      <span className="w-2 h-2 rounded-full bg-primary/30" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary/15" />
    </div>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
  </div>
);

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PrintFrontMatter />
      <SearchCommand />
      <ManualLayout onSectionChange={scrollToSection}>
        <Hero />

        <div className="prose prose-slate dark:prose-invert max-w-prose mx-auto px-5 sm:px-6 pb-12 prose-manual print:max-w-none print:px-8">
          <Apresentacao />
          <ContentDivider />
          <Escopo />

          <SectionBanner number={1} title="Abertura do Processo" subtitle="Acesso ao SEI!RIO, criação do processo, numeração e identificação." id="abertura-banner" />
          <Abertura />

          <SectionBanner number={2} title="Instrução Processual" subtitle="Organização documental e preparação das peças que formarão a prestação de contas." id="instrucao-banner" />
          <Instrucao />

          <SectionBanner number={3} title="Inclusão de Documentos" subtitle="Como incluir documentos digitalizados e nato-digitais no SEI!RIO." id="inclusao-banner" />
          <Inclusao />

          <SectionBanner number={4} title="Autenticação de Documentos" subtitle="Procedimento para autenticar documentos externos no SEI!RIO." id="autenticacao-banner" />
          <Autenticacao />

          <SectionBanner number={5} title="Bloco de Assinatura" subtitle="Criação do bloco, assinaturas internas, despacho de encaminhamento e remessa." id="assinatura-banner" />
          <Assinatura />

          <SectionBanner number={6} title="Remessa e Acompanhamento" subtitle="Encaminhamento à GAD, acompanhamento do processo e atendimento a diligências." id="finalizacao-banner" />
          <Finalizacao />

          <ContentDivider />

          <SectionBanner
            number={7}
            title="Fiscalização da Prestação de Contas"
            subtitle="Como examinar evidências, confrontar documentos, classificar achados e orientar diligências."
            id="fiscalizacao-banner"
          />
          <Fiscalizacao />

          <ContentDivider />
          <Modelos />
          <ContentDivider />
          <ChecklistSection />

          <SectionBanner number={8} title="Contatos" subtitle="Canais de atendimento e suporte da GAD/4ª CRE." id="contatos-banner" />
          <Contatos />

          <ContentDivider />
          <Referencias />

          <InstitutionalFooter />
        </div>
      </ManualLayout>
      <PrintColophon />
    </>
  );
};

export default Index;
