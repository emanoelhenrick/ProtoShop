
# Ignite Shop

<div align="center">

<p>Um marketplace de estudos construído com Next.js, Stripe e TypeScript.</p>

<p>
  <img src="https://img.shields.io/badge/Next.js-13.1.6-111111?style=flat-square&logo=next.js&logoColor=white" alt="Next.js 13.1.6" />
  <img src="https://img.shields.io/badge/React-18.2.0-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 18.2.0" />
  <img src="https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 4.9.5" />
  <img src="https://img.shields.io/badge/Stripe-test_mode-635BFF?style=flat-square&logo=stripe&logoColor=white" alt="Stripe em modo de teste" />
</p>

</div>

## Sobre o projeto

O Ignite Shop é um protótipo de loja virtual desenvolvido como projeto de estudo. A aplicação apresenta produtos cadastrados no Stripe, gera páginas estáticas para o catálogo e para os produtos e direciona o cliente para o Checkout hospedado do Stripe.

O objetivo principal é praticar:

- geração estática com `getStaticProps` e revalidação incremental;
- renderização no servidor com `getServerSideProps`;
- integração de uma API Route do Next.js com o Stripe Checkout;
- estilização com Stitches;
- navegação de produtos com Keen Slider.

## Funcionalidades

- Catálogo de produtos carregado a partir do Stripe.
- Slider horizontal para explorar os produtos.
- Página de detalhes com imagem, descrição e preço.
- Checkout de pagamento único em ambiente de teste.
- Página de sucesso com dados da sessão e do produto comprado.
- Imagens remotas hospedadas pelo Stripe configuradas no `next.config.js`.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| Next.js | Páginas, SSG, SSR e API Routes |
| React | Interface da aplicação |
| TypeScript | Tipagem do projeto |
| Stripe | Catálogo, preços e checkout |
| Stitches | Estilos e design tokens |
| Keen Slider | Carrossel de produtos |
| Axios | Requisição para a API de checkout |

## Como executar

### Pré-requisitos

- Node.js instalado;
- uma conta Stripe;
- pelo menos um produto ativo com preço no Stripe, preferencialmente no modo de teste.

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
STRIPE_SECRET_KEY=sk_test_sua_chave_secreta
NEXT_URL=http://localhost:3000
```

Use a chave secreta de teste do Stripe. O arquivo `.env.local` já está ignorado pelo Git e não deve ser versionado.

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Fluxo da aplicação

1. A página inicial busca os produtos no Stripe e os exibe em um slider.
2. Ao selecionar um produto, a página de detalhes é gerada a partir do ID do produto.
3. O botão **Comprar Agora** chama `/api/checkout` com o ID do preço.
4. A API cria uma sessão de checkout do Stripe e redireciona o cliente para o pagamento.
5. Após o pagamento de teste, o Stripe retorna para `/success`, que consulta a sessão e mostra a confirmação.

## Scripts disponíveis

```bash
npm run dev      # inicia o ambiente de desenvolvimento
npm run build    # gera o build de produção
npm run start    # inicia a aplicação em produção
npm run lint     # executa o lint do Next.js
```

## Estrutura principal

```text
src/
├── lib/stripe.ts          # cliente do Stripe
├── pages/
│   ├── index.tsx          # catálogo
│   ├── product/[id].tsx   # detalhes do produto
│   ├── success.tsx        # confirmação do checkout
│   └── api/checkout.ts    # criação da sessão Stripe
└── styles/                # tema e estilos das páginas
```

## Observações

Este projeto é uma implementação educacional. Ele usa o Stripe em modo de teste, não possui banco de dados ou autenticação próprios e não representa uma loja pronta para produção. Para um cenário real, seria necessário adicionar tratamento de erros mais completo, validação de entrada, controle de estoque, pedidos persistidos e webhooks para confirmar pagamentos com segurança.

## Licença

Projeto criado para fins de estudo.
