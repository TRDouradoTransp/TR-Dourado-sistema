# Como atualizar os dados do sistema (sem saber programar)

Todo o conteúdo que aparece nas telas (motoristas, placas, veículos, status)
vem de um único arquivo: `lib/data.js`. Editar esse arquivo é parecido com
editar um bloco de notas — você só troca o texto que está entre aspas.

## Passo a passo

1. Vá até o repositório do projeto no GitHub (o mesmo onde você subiu os
   arquivos no passo anterior)
2. Clique na pasta `lib`, depois no arquivo `data.js`
3. Clique no ícone de lápis (✏️) no canto superior direito para editar
4. Você vai ver blocos assim, um para cada motorista:
   ```
   { nome: "Aloisio", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
   ```
5. Troque apenas o que está **entre aspas**. Por exemplo, para preencher a
   placa do Aloisio:
   ```
   { nome: "Aloisio", placa: "QAX-1201", status: "Carregado", local: "Base - Salvador", atualizado: "-" },
   ```
6. Role até o final da página e clique em "Commit changes" (é o botão verde
   de salvar)
7. Pronto — a Vercel detecta a mudança sozinha e atualiza o site publicado
   em cerca de 1 minuto, sem você precisar fazer mais nada

## Regras importantes ao editar

- **Nunca apague as aspas `"`, vírgulas `,` ou chaves `{ }`** — só troque o
  texto que fica dentro das aspas
- O campo `status` só aceita exatamente estas palavras (com a mesma
  acentuação): `Carregado`, `Em rota`, `Chegada`, `Descarga`, `Problema`
- No arquivo de manutenção, o campo `responsavel` só aceita: `Larco`,
  `Agregado`, `Motorista` — e `status` só aceita: `Aberto`, `Em andamento`,
  `Concluído`
- Se quiser **adicionar** um motorista, um veículo ou uma ocorrência de
  manutenção nova, copie um bloco inteiro parecido (do `{` até o `},`) e
  cole logo abaixo, trocando as informações
- Se quiser **remover** um motorista ou veículo, apague o bloco inteiro
  correspondente, do `{` até o `},`

## O que ainda é manual, por enquanto

Hoje é você (ou alguém da equipe) quem atualiza o status de cada motorista
manualmente no GitHub. O próximo passo natural — quando fizer sentido — é
ligar essa tela diretamente ao robô de WhatsApp que já existe, para que os
status sejam atualizados sozinhos, sem ninguém precisar editar arquivo
nenhum.
