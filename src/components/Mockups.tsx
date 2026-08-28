import capa from "@/assets/capa-01.png.asset.json";
import sumario from "@/assets/sumario-05.png.asset.json";
import mapa from "@/assets/mapa-04.png.asset.json";
import divisor from "@/assets/divisor-06.png.asset.json";
import receitaA from "@/assets/receita_a-07.png.asset.json";
import receitaB from "@/assets/receita_b-55.png.asset.json";

const paginas = [
  { src: sumario.url, label: "Sumário — encontre pela ajuda que você procura" },
  { src: mapa.url, label: "Mapa de bem-estar do corpo" },
  { src: divisor.url, label: "Abertura do capítulo Coração e circulação" },
  { src: receitaA.url, label: "Receita 01 — Suco de beterraba" },
  { src: receitaB.url, label: "Receita 44 — Homus clássico" },
];

export function Mockups() {
  return (
    <section id="dentro" className="bg-creme py-20">
      <div className="mx-auto max-w-6xl px-5">
        <span className="selo-teal">Páginas reais do livro</span>
        <h2 className="mt-5 text-3xl sm:text-5xl">Veja por dentro, antes de decidir</h2>
        <span className="barra-dourada mt-5" />
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Nada de página de exemplo genérica: estas são as próprias páginas do PDF, do jeito que
          chegam para você no celular, no tablet ou no computador.
        </p>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          {/* livro em perspectiva */}
          <div className="flex items-end justify-center gap-3 bg-bege px-6 py-12">
            <img
              src={divisor.url}
              alt="Página de abertura de capítulo do e-book"
              loading="lazy"
              className="w-[38%] origin-bottom-right rotate-[-6deg] border border-border shadow-[0_24px_48px_-24px_rgba(38,70,83,0.55)]"
            />
            <img
              src={capa.url}
              alt="Capa do e-book 50 Receitas Naturais de Alto Impacto"
              className="w-[52%] border border-border shadow-[0_34px_60px_-26px_rgba(38,70,83,0.65)]"
            />
            <img
              src={receitaA.url}
              alt="Página de receita do e-book"
              loading="lazy"
              className="w-[38%] origin-bottom-left rotate-[6deg] border border-border shadow-[0_24px_48px_-24px_rgba(38,70,83,0.55)]"
            />
          </div>

          {/* celular + tablet */}
          <div className="flex items-center justify-center gap-6">
            <div className="rounded-[1.6rem] border-[10px] border-petroleo bg-petroleo shadow-[0_24px_50px_-24px_rgba(38,70,83,0.7)]">
              <img
                src={receitaB.url}
                alt="Receita aberta na tela de um celular"
                loading="lazy"
                className="w-32 rounded-[0.7rem] sm:w-40"
              />
            </div>
            <div className="rounded-[1rem] border-[12px] border-petroleo bg-petroleo shadow-[0_24px_50px_-24px_rgba(38,70,83,0.7)]">
              <img
                src={sumario.url}
                alt="Sumário aberto na tela de um tablet"
                loading="lazy"
                className="w-40 rounded-[0.4rem] sm:w-52"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-5">
          {paginas.map((p) => (
            <figure key={p.src} className="bg-card p-2 shadow-[0_14px_30px_-24px_rgba(38,70,83,0.6)]">
              <img src={p.src} alt={p.label} loading="lazy" className="w-full border border-border" />
              <figcaption className="px-1 py-2 text-sm leading-snug text-muted-foreground">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
