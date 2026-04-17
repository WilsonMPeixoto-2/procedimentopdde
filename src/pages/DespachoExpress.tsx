import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  FileDown,
  ArrowLeft,
  Zap,
  ShieldCheck,
  FileText,
  Building2,
  User,
  Hash,
  FolderOpen,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
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
import { BackToTop } from "@/components/BackToTop";

const formatCNPJ = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

const formatProcessoSei = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 18);
  let out = digits;
  if (digits.length > 6) out = `${digits.slice(0, 6)}.${digits.slice(6)}`;
  if (digits.length > 12) out = `${digits.slice(0, 6)}.${digits.slice(6, 12)}/${digits.slice(12)}`;
  if (digits.length > 16) out = `${digits.slice(0, 6)}.${digits.slice(6, 12)}/${digits.slice(12, 16)}-${digits.slice(16)}`;
  return out;
};

const formSchema = z.object({
  unidadeEscolar: z.string().min(1, "Campo obrigatório"),
  programa: z.string().min(1, "Selecione o programa"),
  presidente: z.string().min(1, "Campo obrigatório"),
  cnpj: z.string().min(18, "CNPJ incompleto"),
  processo: z.string().min(19, "Processo incompleto"),
});

type FormData = z.infer<typeof formSchema>;

const DespachoExpress = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unidadeEscolar: "",
      programa: "",
      presidente: "",
      cnpj: "",
      processo: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsGenerating(true);
      await generateDespachoDocx(data as Required<FormData>);
      toast.success("Despachos gerados com sucesso!", {
        description: "O arquivo .docx foi baixado com os três despachos prontos para revisão.",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao gerar o documento.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleValidationErrors = () => {
    toast.error("Preencha todos os campos corretamente.", {
      description: "Verifique CNPJ (00.000.000/0000-00) e Processo SEI (000000.000000/0000-00).",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      {/* Top bar */}
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
            Ferramenta · 4ª CRE/GAD
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(224,58%,28%)] to-[hsl(224,55%,22%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "48px 48px, 64px 64px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-white/95">
                Despacho Digital
              </span>
            </div>
          </div>
          <h1
            className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight max-w-3xl"
            style={{ textWrap: "balance" }}
          >
            Gerador de Despachos
            <span className="block font-serif italic font-medium text-white/85 text-2xl sm:text-3xl md:text-[2.1rem] mt-2 tracking-normal">
              Prestação de Contas — PDDE
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/75 font-sans text-[15px] sm:text-base leading-relaxed">
            Preencha os dados do CEC e gere automaticamente os três despachos padronizados
            (encaminhamento, análise da GAD e aprovação) em formato Word, prontos para inclusão
            no SEI!RIO.
          </p>

          {/* Trust strip */}
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
              3 despachos em um único arquivo
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Form */}
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
              <Field
                icon={Building2}
                label="Unidade Escolar"
                htmlFor="unidade"
                error={errors.unidadeEscolar?.message}
              >
                <Input
                  id="unidade"
                  placeholder="Ex.: Escola Municipal Carlos Chagas"
                  {...register("unidadeEscolar")}
                />
              </Field>

              <Field
                icon={FolderOpen}
                label="Programa"
                htmlFor="programa"
                error={errors.programa?.message}
              >
                <Controller
                  control={control}
                  name="programa"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="programa">
                        <SelectValue placeholder="Selecione o programa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PDDE BÁSICO/2025">PDDE BÁSICO/2025</SelectItem>
                        <SelectItem value="PDDE QUALIDADE">PDDE QUALIDADE</SelectItem>
                        <SelectItem value="PDDE EQUIDADE">PDDE EQUIDADE</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              <Field
                icon={User}
                label="Presidente do CEC"
                htmlFor="presidente"
                error={errors.presidente?.message}
              >
                <Input
                  id="presidente"
                  placeholder="Nome completo"
                  {...register("presidente")}
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  icon={Hash}
                  label="CNPJ"
                  htmlFor="cnpj"
                  hint="00.000.000/0000-00"
                  error={errors.cnpj?.message}
                >
                  <Controller
                    control={control}
                    name="cnpj"
                    render={({ field: { onChange, value, ...field } }) => (
                      <Input
                        {...field}
                        id="cnpj"
                        inputMode="numeric"
                        placeholder="00.000.000/0000-00"
                        value={value}
                        onChange={(e) => onChange(formatCNPJ(e.target.value))}
                      />
                    )}
                  />
                </Field>

                <Field
                  icon={Hash}
                  label="Processo SEI"
                  htmlFor="processo"
                  hint="000000.000000/0000-00"
                  error={errors.processo?.message}
                >
                  <Controller
                    control={control}
                    name="processo"
                    render={({ field: { onChange, value, ...field } }) => (
                      <Input
                        {...field}
                        id="processo"
                        inputMode="numeric"
                        placeholder="Ex.: 000704.000000/2026-00"
                        value={value}
                        onChange={(e) => onChange(formatProcessoSei(e.target.value))}
                      />
                    )}
                  />
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
                  {isGenerating ? "Gerando..." : "Gerar e baixar Word (.docx)"}
                </Button>
                <p className="font-sans text-[12px] text-muted-foreground text-center mt-3 m-0">
                  O arquivo é gerado no seu navegador. Nada é enviado a servidores.
                </p>
              </div>
            </form>
          </div>

          {/* Side info */}
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
              <ol className="font-sans text-[13px] text-muted-foreground space-y-2 m-0 pl-4 list-decimal marker:text-primary marker:font-bold">
                <li>
                  <strong className="text-foreground/90 font-semibold">Despacho 01</strong> —
                  Encaminhamento da prestação de contas à GAD/4ª CRE.
                </li>
                <li>
                  <strong className="text-foreground/90 font-semibold">Despacho 02</strong> —
                  Análise da GAD com parecer favorável à aprovação.
                </li>
                <li>
                  <strong className="text-foreground/90 font-semibold">Despacho 03</strong> —
                  Aprovação e publicação pela Coordenação da 4ª CRE.
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-[hsl(var(--tip-border))]/30 bg-[hsl(var(--tip-bg))] p-5">
              <div className="font-sans text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--tip-fg))] mb-2">
                Dica
              </div>
              <p className="font-sans text-[13px] text-[hsl(var(--tip-fg))] leading-relaxed m-0">
                Após gerar, revise os despachos no Word, ajuste detalhes específicos do caso e
                faça o upload no SEI!RIO conforme o passo a passo do{" "}
                <Link to="/#instrucao" className="font-semibold underline">
                  Manual
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border/60 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] font-sans text-muted-foreground">
          <span>
            Ferramenta integrada ao <strong className="font-semibold text-foreground/80">POP — Prestação de Contas PDDE</strong>
          </span>
          <span>4ª CRE · GAD · {new Date().getFullYear()}</span>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
};

interface FieldProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ icon: Icon, label, htmlFor, hint, error, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label
          htmlFor={htmlFor}
          className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-heading"
        >
          <Icon className="w-3.5 h-3.5 text-primary/70" />
          {label}
        </Label>
        {hint && (
          <span className="font-mono text-[11px] text-muted-foreground/70">{hint}</span>
        )}
      </div>
      {children}
      {error && (
        <p className="font-sans text-[12px] text-destructive m-0">{error}</p>
      )}
    </div>
  );
}

export default DespachoExpress;
