
// Sistema Cadastro de Eventos 
var Eventos = ["Simposio Front End do Senai"]

// Lista de palestra inscritas no eventoinscritos no evento.
let PalestraCadastrada_no_Evento = ["Palestra sobre JAVA", "Palestra sobre SQL", "Palestra GAMIFICAÇÃO"]

for (let nome of PalestraCadastrada_no_Evento) {
    console.log("-> "+ nome);
}

// Verificação do evento.
let Evento = 100;

if (Eventos.length < 100) {
  console.log("Ainda existem vagas disponiveis para cadastrar uma palestra no evento.")
  } else {
  console.log("Não existem mais vagas disponiveis para cadastrar uma palestra no evento.");
  }

// Inscrição no evento.
let Idade = 18;

if (Idade.length <= 18) {
    console.log("Idade válida para a inscrição no evento.")
} else {
    console.log("Idade inválida - o cadastro só é permitido para maiores de 18 anos.")
}

// Lista de inscritos no evento.
let NomeInscritos = ["João", "Maria", "José"]

for (let nome of NomeInscritos) {
    console.log("O nome é - " + nome);
}
    
