export function Contatos() {
  const lastUpdate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section id="contatos">

      <h2>Gerência de Administração (GAD)</h2>
      <p>
        4ª Coordenadoria Regional de Educação<br />
        Última atualização: {lastUpdate}
      </p>

      <div className="mt-6 text-sm font-sans text-muted-foreground">
        <p>
          Para dúvidas sobre este procedimento, entre em contato com a GAD pelos canais
          institucionais disponíveis.
        </p>
      </div>
    </section>
  );
}
