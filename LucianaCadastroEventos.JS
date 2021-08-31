
// Sistema Cadastro de Eventos 

// lista do evento.
var Eventos = ["Palestra sobre JAVA", "Palestra sobre SQL"]
var Inscritos = ["Maria","João", "Julia" ]

// Verificação da data do evento.
let DataEvento = 29/08/2021;

  if (DataEvento.length <= 29/08/2021) {
  DataEventole.log("Data inválida - não existe event na data informada.")
  }else if (DataEvento.length == 0) {
      DataEventoog("A data do evento deve ser informada.")
  } else {
      console.log("Data válida para o evento.")
  }  

  // Verificando se o evento possui mais e de 100 palestra.
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
for (let contador = 0; contador = Inscritos; contador++) {

if (contador == 0) {
    console.log(contador + "Palestra JAVA ");
  } else if (contador % 2 == 0) {
    console.log("Palestra JAVA")
  } else if (contador % 2 == 0){
    console.log("Palestra JAVA " + contador)
  } else {
    console.log("Palestra sobre SQL -  " + contador) 
  }    
}