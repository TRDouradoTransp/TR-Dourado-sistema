# Sistema TR Dourado — protótipo

Protótipo funcional em Next.js do sistema de operação da TR Dourado Transportes:
painel de status da frota, cadastro de veículos, pneus e kanban de manutenção.
Hoje os dados são simulados (arquivo `lib/data.js`) — a ideia é validar as telas
antes de conectar a um banco de dados e ao robô de WhatsApp de verdade.

## O que tem em cada tela

- `/` — Painel de operação: contagem por status e lista de motoristas/conjuntos
- `/frota` — Veículos, km rodado e alerta de próxima revisão
- `/pneus` — Posição e vida útil dos pneus por veículo (exemplo)
- `/manutencao` — Kanban de ocorrências (Aberto / Em andamento / Concluído)

## Passo 1 — Rodar no seu computador

Pré-requisitos: [Node.js](https://nodejs.org) versão 18 ou superior instalado.

1. Extraia o arquivo `.zip` em uma pasta
2. Abra o terminal nessa pasta
3. Instale as dependências:
   ```
   npm install
   ```
4. Rode o servidor local:
   ```
   npm run dev
   ```
5. Abra `http://localhost:3000` no navegador

Qualquer alteração nos arquivos dentro de `app/` atualiza a tela automaticamente.

## Passo 2 — Colocar o código no GitHub

A Vercel publica direto a partir de um repositório Git. Se você ainda não tem
o projeto no GitHub:

1. Crie um repositório novo (vazio) em https://github.com/new
2. No terminal, dentro da pasta do projeto:
   ```
   git init
   git add .
   git commit -m "Primeira versão do sistema TR Dourado"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
   git push -u origin main
   ```

## Passo 3 — Publicar na Vercel

**Opção A — pelo site (mais simples):**

1. Acesse https://vercel.com e entre com sua conta GitHub
2. Clique em "Add New… → Project"
3. Selecione o repositório que você acabou de subir
4. A Vercel já detecta que é um projeto Next.js — não precisa mudar nada
5. Clique em "Deploy" e aguarde cerca de 1 minuto
6. Você recebe um link público (algo como `tr-dourado.vercel.app`)

**Opção B — pelo terminal, sem precisar do GitHub:**

1. Instale a ferramenta da Vercel:
   ```
   npm install -g vercel
   ```
2. Dentro da pasta do projeto, rode:
   ```
   vercel
   ```
3. Siga as perguntas (login, nome do projeto, confirmar pasta) — a primeira
   publicação é de teste
4. Para publicar a versão definitiva (produção):
   ```
   vercel --prod
   ```

Depois da primeira publicação, toda vez que você rodar `vercel --prod`
(ou der `git push` se usou a Opção A) o site é atualizado automaticamente.

## Atualizar os dados (motoristas, placas, veículos)

Veja o arquivo `COMO-EDITAR.md` — tem o passo a passo simples, direto pelo
site do GitHub, sem precisar programar nem reinstalar nada.

## Próximos passos sugeridos

- Trocar `lib/data.js` por dados reais, vindos de um banco (ex.: Postgres via
  Vercel Postgres, ou Google Sheets como fonte inicial)
- Conectar o painel de operação ao robô de WhatsApp que já existe, em vez de
  dados simulados
- Adicionar login para controlar quem acessa o sistema
