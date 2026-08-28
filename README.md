# Família na Cozinha

## ORIENTAÇÃO ABERTA (comece por aqui)

Estude a lógica de conversão das páginas abaixo e crie, para o e-book **"50 Receitas

Naturais de Alto Impacto"**, uma página de vendas com a mesma força comercial,

profundidade emocional e qualidade visual — mas com identidade própria (não copie

textos, imagens, cores ou depoimentos de nenhuma referência):

- https://livro-gregorio-receitas.vercel.app/

- https://manueldelcampo.com/products/los-150-remedios

Você tem liberdade total para decidir a estrutura da página, a ordem das seções, os

tipos de bloco e os componentes visuais. As instruções abaixo são o briefing de

produto, público e tom — não um wireframe a seguir à risca.

---

## 1. O produto

**"50 Receitas Naturais de Alto Impacto"** — e-book digital (PDF) com 50 receitas

naturais organizadas por parte do corpo ou necessidade do momento.

**Conceito central (é a espinha dorsal da oferta — deve aparecer na página):**

> Abra o livro, escolha a parte do corpo ou a necessidade que deseja cuidar, e

> encontre receitas simples para incluir na rotina.

O que está dentro do livro (tudo real, nada a inventar):

- 50 receitas completas, cada uma com foto própria.

- Ingredientes com quantidades exatas.

- Modo de preparo passo a passo.

- Orientação de como consumir (quantidade/frequência prudente).

- "O que a ciência diz" — contexto honesto sobre a evidência por trás do ingrediente.

- Cuidados importantes (interações, contraindicações, sinais de alerta).

- Um **mapa visual do corpo humano** que direciona o leitor até a categoria certa.

- Organização em 6 capítulos:

  1. Coração e circulação

  2. Hidratação e reposição

  3. Intestino e digestão

  4. Ossos, músculos e articulações

  5. Equilíbrio e saciedade

  6. Trocas inteligentes e receitas extras (substitutos caseiros de ultraprocessados)

- Ingredientes simples, baratos e reconhecíveis (nada de suplemento caro ou importado).

- Acesso digital imediato após a compra.

## 2. Público

**Principal:** pessoas com mais de 50 anos que sentem o corpo pedindo mais cuidado —

pressão, intestino, circulação, força muscular, ossos e articulações — e que querem

trocar alimentos industrializados por preparos caseiros, mas sem complicação nem

ingrediente difícil de achar.

**Secundário:** filhos/familiares que buscam um presente útil e afetivo para os pais.

A comunicação deve soar como uma conversa de alguém da família — direta, calorosa,

sem jargão técnico, sem soar acadêmica ou clínica. Popular, mas com qualidade de

produto premium.

## 3. Promessas fortes (pode usar, são o motor emocional da página)

- Ter 50 receitas naturais sempre à mão, organizadas por necessidade.

- Parar de depender de receita solta de internet, sem saber se serve para o caso.

- Abrir o livro e já saber exatamente por onde começar.

- Trocar opções industrializadas por preparos feitos em casa, com ingrediente reconhecível.

- Resgatar a simplicidade das receitas da roça dentro de uma rotina moderna.

- Ter em um único lugar receitas para coração, intestino, músculos, ossos, articulações

  e saciedade.

- Sentir mais segurança e organização na hora de cuidar da própria alimentação depois

  dos 50.

**Limite duro (não ultrapassar):** nada de promessa médica categórica — sem "cura",

"elimina doença", "substitui remédio" ou "normaliza pressão em X dias". A força vem de

praticidade, organização, autonomia e tradição — não de promessa clínica.

## 4. O que aprender com as duas referências (lógica, não texto)

Ambas as páginas vendem "conhecimento disperso organizado em um lugar só" para um

público 50+/família tradicional, e usam um padrão de conversão parecido — replique a

**lógica**, não o texto nem a identidade visual:

- **Herói de autoridade + promessa concreta**: abre afirmando o que o livro entrega e

  para quem, com um kicker de contexto ("sabedoria do interior", "guia mais vendida").

- **Reformulação do problema em 2–3 causas-raiz** (por que as tentativas anteriores do

  leitor não funcionaram) antes de apresentar a solução — cria identificação e abre

  espaço emocional para a oferta.

- **Bloco "é para você que..." + "não é para você se..."**: qualifica o público com

  frases de identificação direta (sintomas, sensações, desejos) e usa a exclusão para

  reforçar honestidade e reduzir atrito de compra.

- **Conteúdo mostrado por capítulos/partes do corpo**, cada um com contagem de receitas

  e uma descrição curta do que resolve — isso concretiza o "muito conteúdo organizado"

  em vez de vender "só receitas".

- **Autoridade pela experiência de vida**, não por diploma — história pessoal breve que

  explica por que o autor sabe do que fala.

- **Comparação direta**: "o nosso jeito organizado" vs. "receita solta / farmácia /

  tentar sozinho" — uma tabela ou bloco simples que deixa a alternativa (não comprar)

  visivelmente pior.

- **Stack de valor**: o produto principal ganha "bônus" ou "diferenciais" que somam

  percepção de valor antes do preço aparecer.

- **Garantia e redução de risco** perto do CTA principal.

- **FAQ que quebra objeções reais** (ingrediente difícil de achar? funciona com remédio

  contínuo? em quanto tempo? serve pra mim?).

- **CTA repetido várias vezes**, sempre com a mesma promessa central reforçada, não

  apenas "comprar agora".

- **Prova social**: ambas usam depoimentos e contadores fortemente. **Nós não temos

  isso ainda — não invente.** Deixe uma seção pronta para receber depoimentos e provas

  reais no futuro (placeholder claro, ex.: variáveis/props vazios ou um estado

  "em breve"), mas não publique números, avaliações ou depoimentos fictícios.

## 5. Diferencial visual mais forte: o mapa do corpo interativo

Este é o ativo mais forte da oferta — dê destaque real a ele.

- Ativo disponível em: `imagens/mapa_corpo.png` (ilustração do corpo humano com

  regiões destacadas: cabeça, coração, abdômen, ombros/joelhos, corpo todo).

- Construa uma seção em que o visitante passe o cursor (desktop) ou toque (mobile)

  sobre uma região do corpo e veja aparecer a categoria de receitas correspondente

  (nome do capítulo + contagem de receitas + 1 frase do que resolve).

- Isso prova visualmente a promessa central do produto: "escolha a parte do corpo,

  encontre a receita" — não é uma lista de receitas soltas, é um guia navegável.

- Você decide a melhor implementação (hotspots sobre a imagem, SVG, cards que reagem

  ao hover, tabs sincronizadas com o mapa, etc.).

## 6. Mockups do produto — use páginas reais

Use as imagens reais exportadas do PDF (anexadas nesta

conversa) para montar os mockups em celular, tablet, computador e livro digital em

perspectiva:

- Capa

- Sumário / "Encontre pela ajuda que você procura"

- Mapa de bem-estar (corpo)

- Divisor de capítulo ("Coração e circulação")

- Duas páginas de receita completas

## 7. Direção visual (extraída do próprio e-book — use como base, não como cópia exata)

- **Paleta**: verde-petróleo `#264653` (títulos), teal `#2A9D8F` (categorias/links),

  laranja-terra `#C97B3D` (selos, kickers, acentos rústicos), dourado `#E9C46A`

  (barras de destaque), creme `#FAF7F0` e bege claro (fundos de cards), branco.

- **Tipografia**: uma serifada editorial e acolhedora para títulos (o e-book usa

  Georgia) + uma humanista sem serifa, bem legível, para corpo de texto. Tamanhos

  grandes e alto contraste — o público é 50+.

- **Fotografia**: mesa de cozinha real, ingredientes reconhecíveis, luz natural,

  madeira, tecido de linho — nada de still de estúdio "clínico".

- **Selos/etiquetas** no estilo rótulo de pote de conserva (cor sólida, texto em

  caixa alta) para kickers, categorias e badges — é a assinatura visual do material.

- **Botões grandes**, alto contraste, fáceis de tocar no celular.

- Sensação geral: produto digital premium, mas com calor de tradição e cozinha de

  família — nunca frio, nunca clínico, nunca burocrático.

---

**Resumo em uma frase para orientar o tom geral:** alguém precisa olhar essa página e

pensar "esse livro foi feito para mim — finalmente vou ter todas essas receitas

organizadas e vou saber exatamente por onde começar."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b8caab76-aae6-477b-93ae-edacecb6b8da).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
