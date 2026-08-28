import { useState } from "react";
import { regioes } from "@/lib/ebook-data";
import mapaCorpo from "@/assets/mapa_corpo.png.asset.json";

export function MapaCorpo() {
  const [ativo, setAtivo] = useState<string>("coracao");
  const atual = regioes.find((r) => r.id === ativo) ?? regioes[1];

  return (
    <section id="mapa" className="bg-petroleo/[0.04] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <span className="selo">O diferencial do livro</span>
        <h2 className="mt-5 text-3xl sm:text-5xl">
          Escolha a parte do corpo.
          <br />
          Encontre a receita.
        </h2>
        <span className="barra-dourada mt-5" />
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Passe o cursor ou toque em uma região do corpo. O livro funciona exatamente assim: você
          não procura receita, você procura o que quer cuidar hoje.
        </p>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm border border-border bg-creme p-4">
            <img
              src={mapaCorpo.url}
              alt="Ilustração do corpo humano com as regiões cobertas pelas receitas"
              className="w-full"
              loading="lazy"
            />
            {regioes.map((r) => (
              <button
                key={r.id}
                type="button"
                onMouseEnter={() => setAtivo(r.id)}
                onFocus={() => setAtivo(r.id)}
                onClick={() => setAtivo(r.id)}
                aria-label={`${r.regiao}: ${r.capitulo}`}
                aria-pressed={ativo === r.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
                  ativo === r.id
                    ? "h-11 w-11 bg-terra/35 ring-3 ring-terra"
                    : "h-9 w-9 bg-teal/20 ring-2 ring-teal/60 hover:bg-terra/25"
                }`}
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              />
            ))}
          </div>

          <div className="border border-border bg-card p-7 shadow-[0_18px_40px_-30px_rgba(38,70,83,0.6)]">
            <span className="selo-teal">{atual.regiao}</span>
            <h3 className="mt-4 text-2xl sm:text-3xl">{atual.capitulo}</h3>
            <p className="mt-1 font-bold text-terra">{atual.receitas} receitas neste caminho</p>
            <p className="mt-3 text-lg text-muted-foreground">{atual.frase}</p>

            <ul className="mt-7 grid gap-2 border-t border-border pt-6">
              {regioes.map((r) => (
                <li key={r.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setAtivo(r.id)}
                    onClick={() => setAtivo(r.id)}
                    className={`w-full px-3 py-2 text-left text-base transition-colors ${
                      ativo === r.id
                        ? "bg-bege font-bold text-petroleo"
                        : "text-muted-foreground hover:bg-creme"
                    }`}
                  >
                    <span className="font-bold text-terra">{r.regiao}</span>
                    <span className="mx-2 text-border">|</span>
                    {r.capitulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
