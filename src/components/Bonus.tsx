const bonus = [
  {
    n: "Bônus 01",
    t: "Guia Rápido de Chás de Emergência da Roça",
    d: "As infusões que a gente prepara na hora do aperto: má digestão depois do almoço pesado, noite mal dormida, garganta arranhando, cólica e barriga estufada. Uma página por chá, com quantidade e quando evitar.",
  },
  {
    n: "Bônus 02",
    t: "Tabela de Trocas Inteligentes para o Dia a Dia",
    d: "Uma folha só para colar na porta do armário: o que sai do carrinho industrializado e o que entra no lugar, com a versão caseira equivalente e o que muda de verdade no prato.",
  },
  {
    n: "Bônus 03",
    t: "O Protocolo Matinal de Desinflamação",
    d: "A sequência dos primeiros 30 minutos do dia — o que beber em jejum, o que comer na sequência e o que deixar para depois — montada com as próprias receitas do livro.",
  },
];

export function Bonus() {
  return (
    <section id="bonus" className="bg-bege py-20">
      <div className="mx-auto max-w-6xl px-5">
        <span className="selo">Bônus exclusivos desta edição</span>
        <h2 className="mt-5 text-3xl sm:text-5xl">
          Três materiais que vão junto — sem custo nenhum
        </h2>
        <span className="barra-dourada mt-5" />
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Eles chegam no mesmo acesso do e-book, no mesmo minuto da compra. Não é upsell, não é
          teste grátis: é seu para sempre.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {bonus.map((b) => (
            <article
              key={b.n}
              className="relative flex flex-col border border-border bg-card p-7 shadow-[0_18px_40px_-32px_rgba(38,70,83,0.6)]"
            >
              <span className="absolute -top-3 right-4 rounded-full bg-verde px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-creme">
                Grátis
              </span>
              <span className="font-serif text-sm font-bold uppercase tracking-widest text-terra">
                {b.n}
              </span>
              <h3 className="mt-3 text-2xl">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
