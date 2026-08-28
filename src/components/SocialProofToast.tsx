import { useEffect, useState } from "react";

const compras = [
  { nome: "Dona Lourdes", cidade: "Juiz de Fora/MG" },
  { nome: "Seu Antônio", cidade: "Pelotas/RS" },
  { nome: "Marlene", cidade: "Sorocaba/SP" },
  { nome: "Dona Cleusa", cidade: "Anápolis/GO" },
  { nome: "Sebastião", cidade: "Caruaru/PE" },
  { nome: "Rosângela", cidade: "Londrina/PR" },
  { nome: "Dona Iracema", cidade: "Feira de Santana/BA" },
  { nome: "Nilza", cidade: "Blumenau/SC" },
];

export function SocialProofToast() {
  const [indice, setIndice] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const [minutos, setMinutos] = useState(4);

  useEffect(() => {
    let timeoutOculta: ReturnType<typeof setTimeout>;

    const mostrar = () => {
      setIndice((i) => (i + 1) % compras.length);
      setMinutos(2 + Math.floor(Math.random() * 12));
      setVisivel(true);
      timeoutOculta = setTimeout(() => setVisivel(false), 6500);
    };

    const inicial = setTimeout(mostrar, 6000);
    const intervalo = setInterval(mostrar, 11000);

    return () => {
      clearTimeout(inicial);
      clearTimeout(timeoutOculta);
      clearInterval(intervalo);
    };
  }, []);

  if (!visivel) return null;
  const compra = compras[indice]!;

  return (
    <div
      role="status"
      aria-live="polite"
      className="toast-in fixed bottom-5 left-4 z-50 flex max-w-[19rem] items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-[0_18px_40px_-18px_rgba(38,70,83,0.45)]"
    >
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-verde text-sm font-bold text-creme">
        ✓
      </span>
      <div>
        <p className="text-sm leading-snug text-foreground">
          <strong>{compra.nome}</strong> de {compra.cidade} adquiriu as 50 Receitas Naturais
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">há {minutos} minutos · compra verificada</p>
      </div>
      <button
        type="button"
        onClick={() => setVisivel(false)}
        aria-label="Fechar aviso"
        className="ml-1 text-muted-foreground hover:text-foreground"
      >
        ×
      </button>
    </div>
  );
}
