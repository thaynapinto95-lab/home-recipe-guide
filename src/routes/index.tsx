import { createFileRoute } from "@tanstack/react-router";
import { MapaCorpo } from "@/components/MapaCorpo";
import { Mockups } from "@/components/Mockups";
import { capitulos, faq } from "@/lib/ebook-data";
import heroImg from "@/assets/hero-cozinha.jpg";
import capa from "@/assets/capa-01.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "50 Receitas Naturais de Alto Impacto | E-book" },
      {
        name: "description",
        content:
          "E-book com 50 receitas naturais organizadas por parte do corpo: coração, intestino, ossos, músculos e saciedade. Ingredientes simples, passo a passo e acesso imediato.",
      },
      { property: "og:title", content: "50 Receitas Naturais de Alto Impacto" },
      {
        property: "og:description",
        content:
          "Escolha a parte do corpo, encontre a receita. 50 preparos caseiros com ingredientes que você reconhece.",
      },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pagina,
});

function CTA({ nota = true }: { nota?: boolean }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <a href="#comprar" className="btn-comprar btn-comprar-hover w-full sm:w-auto">
        Quero as 50 receitas organizadas
      </a>
      {nota && (
        <p className="text-base text-muted-foreground">
          Acesso digital imediato · 7 dias de garantia
        </p>
      )}
    </div>
  );
}

function Pagina() {
  return (
    <main>
      <SocialProofToast />

      {/* HERÓI */}
      <header className="relative overflow-hidden bg-hero">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 20%, rgba(255,255,255,0.95), rgba(250,246,240,0.75))",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <span className="selo">Receitas da roça · edição 2026</span>
            <h1 className="mt-6 text-[2rem] leading-tight sm:text-5xl">
              Conheça as 50 Receitas Naturais da Roça que Ajudam a{" "}
              <span className="text-terra">Desinflamar o Corpo</span>, Amenizar as Dores e Devolver
              a Vitalidade de Milhares de Brasileiros
            </h1>
            <p className="mt-6 max-w-xl text-xl text-muted-foreground">
              50 preparos com ingredientes simples da feira do seu bairro — chás, caldos, compressas
              e sucos organizados por parte do corpo. Sem remédios caros, sem suplementos importados
              e do jeito simples que o interior do Brasil sempre fez.
            </p>
            <div className="mt-9">
              <a href="#comprar" className="btn-verde w-full sm:w-auto">
                Quero as 50 receitas por R$ 29,90
              </a>
              <p className="mt-3 text-base text-muted-foreground">
                🔒 Compra segura · acesso imediato · 7 dias de garantia
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative rounded-[1.6rem] border-[12px] border-petroleo bg-petroleo shadow-[0_34px_60px_-26px_rgba(38,70,83,0.6)]">
              <img
                src={capa.url}
                alt="Capa do e-book 50 Receitas Naturais de Alto Impacto"
                className="livro-3d w-full"
              />
            </div>
            <div className="mx-auto -mt-4 w-fit rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-petroleo shadow-[0_14px_30px_-18px_rgba(38,70,83,0.6)]">
              📖 Formato PDF Digital · Leitura em qualquer tela
            </div>
          </div>
        </div>
      </header>


      {/* PROBLEMA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-5">
          <span className="selo-teal">Por que não funcionou até agora</span>
          <h2 className="mt-5 text-3xl sm:text-5xl">
            O problema nunca foi falta de receita. Foi falta de ordem.
          </h2>
          <span className="barra-dourada mt-5" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Receita solta, sem contexto",
                d: "Você salva um vídeo, anota num papel, ouve de uma amiga. Mas nada diz para quem serve, quanto tomar nem quando evitar. Na dúvida, você deixa pra lá.",
              },
              {
                t: "Ingrediente que ninguém acha",
                d: "Metade do que aparece na internet pede pó importado, semente exótica ou suplemento caro. Na feira do bairro, não existe.",
              },
              {
                t: "Nenhum caminho por necessidade",
                d: "Hoje é o intestino, amanhã é a pressão, depois é a força nas pernas. Sem um índice pelo corpo, você fica girando em círculo.",
              },
            ].map((c) => (
              <article key={c.t} className="border-t-4 border-terra bg-card p-6">
                <h3 className="text-xl">{c.t}</h3>
                <p className="mt-3 text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-xl">
            Este livro nasceu para resolver exatamente isso: reunir num lugar só o que estava
            espalhado, e organizar pelo que o seu corpo está pedindo hoje.
          </p>
        </div>
      </section>

      <MapaCorpo />

      {/* CAPÍTULOS */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5">
          <span className="selo">6 caminhos, 50 receitas</span>
          <h2 className="mt-5 text-3xl sm:text-5xl">O que você recebe, capítulo por capítulo</h2>
          <span className="barra-dourada mt-5" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {capitulos.map((c) => (
              <article key={c.n} className="flex gap-5 border border-border bg-card p-6">
                <span className="font-serif text-4xl text-dourado">{c.n}</span>
                <div>
                  <h3 className="text-2xl">{c.nome}</h3>
                  <p className="mt-1 font-bold text-teal">{c.receitas} receitas</p>
                  <p className="mt-2 text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 bg-bege p-8 sm:grid-cols-2">
            <h3 className="text-2xl sm:col-span-2">E em cada uma das 50 receitas:</h3>
            {[
              "Foto própria do preparo pronto",
              "Ingredientes com quantidades exatas",
              "Modo de preparo em passos numerados",
              "Como consumir: quantidade e frequência prudente",
              "O que a ciência diz, com honestidade sobre a evidência",
              "Cuidados: interações, contraindicações e sinais de alerta",
            ].map((i) => (
              <p key={i} className="flex gap-3 text-lg">
                <span className="font-bold text-terra">✓</span>
                {i}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Mockups />

      {/* PARA QUEM É */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-2">
          <div className="border-l-4 border-teal bg-card p-7">
            <span className="selo-teal">É para você que...</span>
            <ul className="mt-5 grid gap-3 text-lg">
              {[
                "passou dos 50 e sente o corpo pedindo mais cuidado — pressão, intestino, circulação, força, ossos;",
                "quer trocar o industrializado por comida de verdade, feita em casa;",
                "cansou de receita solta de internet sem saber se serve para o seu caso;",
                "gosta de ingrediente simples, de feira, com nome que você reconhece;",
                "quer abrir um material e já saber por onde começar hoje;",
                "procura um presente útil e afetivo para o pai ou a mãe.",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold text-teal">✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l-4 border-terra bg-creme p-7">
            <span className="selo">Não é para você se...</span>
            <ul className="mt-5 grid gap-3 text-lg">
              {[
                "procura cura, milagre ou substituto de remédio — aqui é alimentação, não tratamento;",
                "espera resultado garantido em número de dias;",
                "quer dieta fechada com cardápio e pesagem;",
                "não pretende cozinhar nada, nem por 10 minutos;",
                "busca receitas com suplemento importado e ingrediente raro.",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold text-terra">✕</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-petroleo py-20">
        <div className="mx-auto max-w-3xl px-5">
          <span className="selo">De onde vem este livro</span>
          <h2 className="mt-5 text-3xl text-creme sm:text-4xl">
            Cozinha de roça, caderno de anotação e muita pergunta repetida
          </h2>
          <div className="mt-6 grid gap-4 text-lg text-creme/85">
            <p>
              Este material não nasceu em consultório. Nasceu de uma cozinha de família, daquelas em
              que o chá de hibisco, a ameixa de molho e o mingau de aveia sempre estiveram em cima
              da mesa — e em que a gente aprendeu observando quem já tinha idade e continuava firme.
            </p>
            <p>
              Com o tempo, as mesmas perguntas voltavam: o que tomar para o intestino? o que ajuda a
              circulação? o que dá força para as pernas? As respostas existiam, mas viviam soltas —
              num caderno, num bilhete, na memória de alguém.
            </p>
            <p>
              Então elas foram reunidas, testadas na prática, escritas com quantidade exata e
              conferidas com o que a pesquisa hoje diz de verdade — sem exagero e sem promessa que
              comida nenhuma pode cumprir. O que sobrou dessa peneira são estas 50 receitas.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-5">
          <span className="selo-teal">A alternativa</span>
          <h2 className="mt-5 text-3xl sm:text-5xl">Com o livro na mesa × tentando sozinho</h2>
          <span className="barra-dourada mt-5" />
          <div className="mt-9 overflow-hidden border border-border">
            <div className="grid grid-cols-2 bg-petroleo text-creme">
              <div className="p-4 font-bold">Com o livro</div>
              <div className="p-4 font-bold">Receita solta / tentar sozinho</div>
            </div>
            {[
              ["Índice pelo corpo: você acha em segundos", "Busca no celular a cada dúvida"],
              ["Quantidade exata e frequência prudente", "“Um pouquinho” e torcer para dar certo"],
              ["Cuidados e interações em cada receita", "Nenhum aviso, nenhum contexto"],
              ["50 preparos testados em um lugar só", "Prints e anotações espalhados"],
              ["Ingredientes de feira, baratos", "Suplemento caro que dura duas semanas"],
              ["Fica com você para sempre, no celular", "Você esquece e volta ao industrializado"],
            ].map(([a, b]) => (
              <div key={a} className="grid grid-cols-2 border-t border-border">
                <div className="bg-card p-4">
                  <span className="mr-2 font-bold text-teal">✓</span>
                  {a}
                </div>
                <div className="bg-creme p-4 text-muted-foreground">
                  <span className="mr-2 font-bold text-terra">✕</span>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="comprar" className="bg-bege py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="selo">Acesso imediato</span>
          <h2 className="mt-5 text-3xl sm:text-5xl">Tudo o que entra hoje</h2>
          <div className="mt-9 border border-border bg-card p-8 text-left">
            <ul className="grid gap-4 text-lg">
              {[
                ["E-book completo", "50 receitas com foto, ingredientes, passo a passo, como consumir, o que a ciência diz e cuidados."],
                ["Mapa visual do corpo", "A ilustração que leva você da região do corpo direto ao capítulo certo."],
                ["Sumário por necessidade", "Encontre pela ajuda que você procura, não pelo nome da receita."],
                ["Capítulo de trocas inteligentes", "Substitutos caseiros para o que hoje você compra pronto."],
                ["Leitura em qualquer tela", "PDF para celular, tablet e computador — e imprimível para deixar na cozinha."],
              ].map(([t, d]) => (
                <li key={t} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <p className="font-bold text-petroleo">{t}</p>
                  <p className="text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-center gap-4 border-t border-border pt-8">
              <CTA />
            </div>
          </div>

          <div className="mt-8 border-2 border-dashed border-terra bg-creme p-7 text-left">
            <h3 className="text-2xl">Garantia de 7 dias</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Leia com calma. Se em 7 dias você achar que o livro não é para você, é só pedir o
              reembolso — devolvemos o valor integral, sem interrogatório.
            </p>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL — placeholder */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-5">
          <span className="selo-teal">Em breve</span>
          <h2 className="mt-5 text-3xl sm:text-4xl">Histórias de quem está cozinhando com o livro</h2>
          <span className="barra-dourada mt-5" />
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Esta edição acaba de sair. Assim que os primeiros leitores enviarem suas experiências
            reais, elas aparecem aqui — com nome e autorização. Não publicamos depoimento inventado
            nem número de vendas que não existe.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="border border-dashed border-border bg-creme p-6 text-muted-foreground"
              >
                <p className="text-base">Espaço reservado para depoimento verificado</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-3xl px-5">
          <span className="selo">Dúvidas honestas</span>
          <h2 className="mt-5 text-3xl sm:text-5xl">Perguntas frequentes</h2>
          <span className="barra-dourada mt-5" />
          <div className="mt-9 grid gap-3">
            {faq.map((f) => (
              <details key={f.q} className="group border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-serif text-xl text-petroleo marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl sm:text-4xl">
              Chega de procurar. Abra o livro e comece por onde importa.
            </h2>
            <div className="mt-7 flex justify-center">
              <CTA />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-petroleo py-10 text-creme/70">
        <div className="mx-auto max-w-3xl px-5 text-center text-sm">
          <p>
            Este e-book tem caráter informativo e educativo sobre alimentação. Não substitui
            consulta, diagnóstico ou tratamento médico, nem o uso de medicamentos prescritos.
          </p>
          <p className="mt-3">50 Receitas Naturais de Alto Impacto · Edição 2026</p>
        </div>
      </footer>
    </main>
  );
}
