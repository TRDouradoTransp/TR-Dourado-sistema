// ==========================================================
// DADOS DO SISTEMA — EDITE AQUI
// Este é o único arquivo que você precisa mexer no dia a dia.
// Veja o guia "COMO-EDITAR.md" para o passo a passo completo.
// ==========================================================

// Lista de motoristas/conjuntos.
// Troque "A preencher" pela placa real e o status real de cada um.
// Status possíveis (escreva exatamente assim): Carregado, Em rota, Chegada, Descarga, Problema
export const motoristas = [
  { nome: "Aloisio", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Alvaro", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Cleriston", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Daniel", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Edberg", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Edenilton", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Elson", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Fabio", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Fabrício", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Fagner", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Flávio", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Jefferson", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "João", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Reginaldo", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Roger", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Targino", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Vanilson", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
  { nome: "Wesley", placa: "A preencher", status: "Carregado", local: "A preencher", atualizado: "-" },
];

// Cor de cada status na tela — não precisa mexer aqui.
export const statusCor = {
  "Em rota": "bg-blue-50 text-blue-700 border-blue-200",
  "Carregado": "bg-neutral-100 text-neutral-700 border-neutral-200",
  "Descarga": "bg-amber-50 text-amber-700 border-amber-200",
  "Chegada": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Problema": "bg-red-50 text-red-700 border-red-200",
};

// Frota: 23 conjuntos, já com a composição real de tratores.
// Troque "A preencher" pela placa e pela quilometragem real de cada um.
export const frota = [
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Iveco Sway 2024 - Tanque 9 eixos", km: 0, proximaRevisao: 15000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Volvo FH 540 2021 - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "Volvo FH 540 2021 - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Alugado" },
  { placa: "A preencher", modelo: "DAF XF FTT 530 (20/21) - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Próprio" },
  { placa: "A preencher", modelo: "DAF XF FTT 530 (20/21) - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Próprio" },
  { placa: "A preencher", modelo: "DAF XF FTT 530 (22/22) - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Próprio" },
  { placa: "A preencher", modelo: "DAF XF FTT 530 (22/22) - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Próprio" },
  { placa: "A preencher", modelo: "DAF XF FTT 530 (22/22) - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Próprio" },
  { placa: "A preencher", modelo: "DAF XF FTT 530 (2025) - Tanque 9 eixos", km: 0, proximaRevisao: 30000, tipo: "Próprio" },
];

// Ocorrências de manutenção em aberto.
// Apague o exemplo abaixo e vá adicionando as reais conforme surgirem.
// Status possíveis: Aberto, Em andamento, Concluído
// Responsável possíveis: Larco, Agregado, Motorista
export const manutencoes = [
  { id: 1, placa: "A preencher", descricao: "Exemplo: troca de pneu dianteiro", responsavel: "Motorista", status: "Aberto" },
];
