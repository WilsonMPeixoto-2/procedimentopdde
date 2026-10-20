import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster as Sonner, toast } from "@/components/ui/sonner";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  FileDown,
  FileText,
  FolderOpen,
  Hash,
  ShieldCheck,
  User,
  Zap,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateDespachoDocx } from "@/lib/templates/docxTemplate";
import { despachoFormSchema, type DespachoData } from "@/lib/despacho";
import { BackToTop } from "@/components/BackToTop";

type FormData = DespachoData;

const DespachoExpress = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(despachoFormSchema),
    defaultValues: {
      unidadeEscolar: "",
      programa: "",
      exercicio: String(new Date().getFullYear()),
      presidente: "",
      cnpj: "",
      processo: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsGenerating(true);
      await generateDespachoDocx(data);
      toast.success("Minuta gerada com sucesso!", {
        description: "O arquivo .docx foi baixado para revisão antes da inclusão no SEI!RIO.",
      });
      reset({
        unidadeEscolar: "",
        programa: "",
        exercicio: String(new Date().getFullYear()),
        presidente: "",
        cnpj: "",
        processo: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao gerar a minuta.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleValidationErrors = () => {
    toast.error("Preencha todos os campos obrigatórios.", {
      description: "Confira especialmente programa, exercício, unidade, CNPJ e processo SEI.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      <div className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao manual
          </Link>
          <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
            Ferramenta de apoio · 4ª CRE/GAD
          </div>
        </div>
      </div>

      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(224,58%,28%)] to-[hsl(224,55%,22%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-white/95">
                Minuta de encaminhamento
              </span>
            </div>
          </div>

          <h1
            className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight max-w-3xl"
            style={{ textWrap: "balance" }}
          >
            Gerador de Minuta
            <span className="block font-serif italic font-medium text-white/85 text-2xl sm:text-3xl md:text-[2.1rem] mt-2 tracking-normal">
              Prestação de Contas — PDDE
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-white/75 font-sans text-[15px] sm:text-base leading-relaxed">
            Preencha os dados do processo e gere uma minuta editável do despacho de encaminhamento
            à GAD. A ferramenta não produz parecer de análise nem aprovação.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] font-sans text-white/70">
            <div className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              Processado localmente no navegador
            </div>
            <div className="inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-sky-300" />
              Saída em .docx editável
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              Apenas a peça de encaminhamento
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div className="rounded-2xl border border-border bg-card shadow-[0_1px_2px_hsl(224,30%,50%,0.04),0_8px_28px_hsl(224,30%,50%,0.06)] overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-border/60 bg-gradient-to-b from-muted/40 to-transparent">
              <h2 className="font-heading text-lg font-bold text-heading tracking-tight m-0">
                Dados do processo
              </h2>
              <p className="font-sans text-[13px] text-muted-foreground mt-1 m-0">
                Todos os campos são obrigatórios.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit, handleValidationErrors)}
              className="px-6 sm:px-8 py-7 space-y-6"
            >
              <Field icon={Building2} label="Unidade Escolar" htmlFor="unidade" error={errors.unidadeEscolar?.message}>
                <Input
                  id="unidade"
                  placeholder="Ex.: Escola Municipal Carlos Chagas"
                  {...register("unidadeEscolar")}
                />
              </Field>

              <div className="grid sm:grid-cols-[1fr_150px] gap-6">
                <Field icon={FolderOpen} label="Programa" htmlFor="programa" error={errors.programa?.message}>
                  <Controller
                    control={control}
                    name="programa"
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="programa">
                          <SelectValue placeholder="Selecione o programa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PDDE BÁSICO">PDDE BÁSICO</SelectItem>
                          <SelectItem value="PDDE QUALIDADE">PDDE QUALIDADE</SelectItem>
                          <SelectItem value="PDDE EQUIDADE">PDDE EQUIDADE</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>

                <Field icon={CalendarDays} label="Exercício" htmlFor="exercicio" error={errors.exercicio?.message}>
                  <Input
                    id="exercicio"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="2026"
                    {...register("exercicio")}
                  />
                </Field>
              </div>

              <Field icon={User} label="Presidente do CEC" htmlFor="presidente" error={errors.presidente?.message}>
                <Input id="presidente" placeholder="Nome completo" {...register("presidente")} />
              </Field>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field icon={Hash} label="CNPJ" htmlFor="cnpj" error={errors.cnpj?.message}>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" {...register("cnpj")} />
                </Field>

                <Field icon={Hash} label="Processo SEI" htmlFor="processo" error={errors.processo?.message}>
                  <Input id="processo" placeholder="Ex.: 000704.001704/2026" {...register("processo")} />
                </Field>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isGenerating}
                  className="w-full gap-2 text-base font-bold bg-gradient-to-b from-primary to-[hsl(224,58%,28%)] hover:shadow-lg hover:shadow-primary/25 shadow-md shadow-primary/15 transition-all"
                >
                  <FileDown className="w-5 h-5" />
                  {isGenerating ? "Gerando..." : "Gerar minuta em Word (.docx)"}
                </Button>
                <p className="font-sans text-[12px] text-muted-foreground text-center mt-3 m-0">
                  Revise a minuta antes da inclusão no processo.
                </p>
              </div>
            </form>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-sm text-heading m-0">
                  O que é gerado
                </h3>
              </div>
              <p className="font-sans text-[13px] text-muted-foreground leading-relaxed m-0">
                Uma minuta de despacho para a unidade escolar encaminhar a prestação de contas à
                GAD/4ª CRE, com identificação do programa, exercício, CEC e processo.
              </p>
            </div>

            <div className="rounded-xl border border-[hsl(var(--warning-border))]/35 bg-[hsl(var(--warning-bg))] p-5">
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--warning-fg))] mb-2">
                Limite da ferramenta
              </div>
              <p className="font-sans text-[13px] text-[hsl(var(--warning-fg))] leading-relaxed m-0">
                Parecer favorável, diligência e aprovação dependem do resultado da fiscalização.
                Consulte a seção{" "}
                <Link to="/#fiscalizacao" className="font-semibold underline">
                  Fiscalização
                </Link>{" "}
                do manual.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border/60 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] font-sans text-muted-foreground">
          <span>
            Ferramenta integrada ao <strong className="font-semibold text-foreground/80">POP Digital PDDE</strong>
          </span>
          <span>4ª CRE · GAD · {new Date().getFullYear()}</span>
        </div>
      </footer>

      <Sonner />
      <BackToTop />
    </div>
  );
};

interface FieldProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ icon: Icon, label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={htmlFor}
        className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-heading"
      >
        <Icon className="w-3.5 h-3.5 text-primary/70" />
        {label}
      </Label>
      {children}
      {error && <p className="font-sans text-[12px] text-destructive m-0">{error}</p>}
    </div>
  );
}

export default DespachoExpress;
