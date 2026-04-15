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
import { Modelos } from "@/components/sections/Modelos";
import { ChecklistSection } from "@/components/sections/Checklist";
import { Contatos } from "@/components/sections/Contatos";
import { Referencias } from "@/components/sections/Referencias";

const ContentDivider = () => (
  <div className="my-14 flex items-center gap-4 px-2">
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ManualLayout onSectionChange={scrollToSection}>
      <Hero />

      <Apresentacao />
      <ContentDivider />
      <Escopo />

      <SectionBanner
        number={1}
        title="Abertura do Processo"
        subtitle="Acesso ao SEI!RIO, criação do processo, numeração e identificação."
        id="abertura-banner"
      />
      <Abertura />

      <SectionBanner
        number={2}
        title="Instrução Processual"
        subtitle="Criação de documentos internos, despacho e ofício no SEI!RIO."
        id="instrucao-banner"
      />
      <Instrucao />

      <SectionBanner
        number={3}
        title="Inclusão de Documentos"
        subtitle="Como incluir documentos digitalizados e nato-digitais no SEI!RIO."
        id="inclusao-banner"
      />
      <Inclusao />

      <SectionBanner
        number={4}
        title="Autenticação de Documentos"
        subtitle="Procedimento para autenticar documentos externos no SEI!RIO."
        id="autenticacao-banner"
      />
      <Autenticacao />

      <SectionBanner
        number={5}
        title="Bloco de Assinatura"
        subtitle="Criação do bloco, assinaturas internas, despacho de encaminhamento e remessa."
        id="assinatura-banner"
      />
      <Assinatura />

      <SectionBanner
        number={6}
        title="Despacho e Finalização"
        subtitle="Análise pela GAD, diligências e etapas finais de aprovação."
        id="finalizacao-banner"
      />
      <Finalizacao />

      <ContentDivider />

      <Modelos />
      <ContentDivider />
      <ChecklistSection />

      <SectionBanner
        number={7}
        title="Contatos"
        subtitle="Canais de atendimento e suporte da GAD/4ª CRE."
        id="contatos-banner"
      />
      <Contatos />

      <ContentDivider />
      <Referencias />

      <InstitutionalFooter />
    </ManualLayout>
  );
};

export default Index;