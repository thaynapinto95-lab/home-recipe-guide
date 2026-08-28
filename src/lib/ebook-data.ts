export type Regiao = {
  id: string;
  regiao: string;
  capitulo: string;
  receitas: number;
  frase: string;
  /** posição do hotspot sobre a ilustração, em % */
  x: number;
  y: number;
};

export const regioes: Regiao[] = [
  {
    id: "cabeca",
    regiao: "Cabeça",
    capitulo: "Descanso e rotina noturna",
    receitas: 1,
    frase: "Um ritual simples para fechar o dia com mais calma.",
    x: 50,
    y: 8,
  },
  {
    id: "coracao",
    regiao: "Coração",
    capitulo: "Coração e circulação",
    receitas: 10,
    frase: "Sucos, chás e pratos para apoiar pressão e circulação.",
    x: 50,
    y: 27,
  },
  {
    id: "abdomen",
    regiao: "Abdômen",
    capitulo: "Intestino e digestão",
    receitas: 15,
    frase: "Fibras, fermentados e preparos que soltam a rotina.",
    x: 50,
    y: 43,
  },
  {
    id: "ombros",
    regiao: "Ombros e joelhos",
    capitulo: "Ossos, músculos e articulações",
    receitas: 10,
    frase: "Proteína, cálcio e verdes para sustentar a força.",
    x: 30,
    y: 68,
  },
  {
    id: "corpo",
    regiao: "Corpo todo",
    capitulo: "Hidratação, equilíbrio e saciedade",
    receitas: 8,
    frase: "Água saborizada, eletrólitos caseiros e refeições que seguram a fome.",
    x: 50,
    y: 55,
  },
  {
    id: "cozinha",
    regiao: "Cozinha",
    capitulo: "Trocas inteligentes e receitas extras",
    receitas: 7,
    frase: "Substitutos caseiros para o que hoje vem em pacote.",
    x: 78,
    y: 33,
  },
];

export const capitulos = [
  {
    n: "01",
    nome: "Coração e circulação",
    receitas: 10,
    desc: "Suco de beterraba, chá de hibisco, gazpacho, salada de lentilha, bacalhau mediterrâneo e mais preparos para quem quer cuidar da pressão e da circulação.",
  },
  {
    n: "02",
    nome: "Hidratação e reposição",
    receitas: 3,
    desc: "Água de coco com limão, bebida eletrolítica caseira e água de melancia com hortelã — para calor, remédio diurético e dias de pouca sede.",
  },
  {
    n: "03",
    nome: "Intestino e digestão",
    receitas: 15,
    desc: "Mingaus, ameixas hidratadas, kefir, chucrute, chia, gengibre e mamão: o capítulo mais completo, para o intestino voltar a funcionar sem sofrimento.",
  },
  {
    n: "04",
    nome: "Ossos, músculos e articulações",
    receitas: 10,
    desc: "Vitaminas com proteína, iogurte grego, salmão, quinoa, brócolis e tofu — comida de verdade para manter força e firmeza depois dos 50.",
  },
  {
    n: "05",
    nome: "Equilíbrio e saciedade",
    receitas: 5,
    desc: "Overnight oats, saladas mornas, panqueca de banana e aveia: pratos que seguram a fome e evitam o beliscar da tarde.",
  },
  {
    n: "06",
    nome: "Trocas inteligentes e receitas extras",
    receitas: 7,
    desc: "Homus, pasta de feijão-branco, grão-de-bico crocante, maçã assada: o que fazer em casa no lugar do que vem em pacote.",
  },
];

export const faq = [
  {
    q: "Os ingredientes são fáceis de achar?",
    a: "Sim. Beterraba, aveia, limão, gengibre, hibisco, feijão, iogurte, ovo, banana, maçã. Tudo de feira, mercado de bairro ou hortifruti. Não há suplemento importado, pó caro nem nada que você precise encomendar pela internet.",
  },
  {
    q: "Posso usar as receitas se tomo remédio contínuo?",
    a: "As receitas são alimentos, não medicamentos, e não substituem nenhum tratamento. Por isso cada uma traz uma seção de Cuidados com interações conhecidas e sinais de atenção. Continue seu tratamento e converse com quem acompanha você antes de mudanças grandes na alimentação.",
  },
  {
    q: "Preciso saber cozinhar bem?",
    a: "Não. A maioria das receitas é bater, misturar, ferver ou assar. O passo a passo é numerado e escrito em linguagem simples, com quantidades exatas — sem termo técnico de cozinha.",
  },
  {
    q: "Como recebo o livro?",
    a: "É um PDF digital. Depois da compra, o acesso chega no seu e-mail em poucos minutos. Você pode ler no celular, no tablet ou no computador, e imprimir as páginas que quiser deixar na cozinha.",
  },
  {
    q: "Serve para quem tem menos de 50 anos?",
    a: "Serve. O conteúdo foi pensado para o corpo depois dos 50, mas as receitas são de comida caseira e simples — funcionam para a casa inteira.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Basta pedir o reembolso dentro desse prazo e o valor é devolvido, sem interrogatório.",
  },
];
