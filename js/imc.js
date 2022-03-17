var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var imc = peso / (altura * altura)

var pesoEValido = true;
var alturaEValida = true;

if (peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoEValido = false;
    tdImc.textContent = "Peso Inválido";
}

if (altura <= 0 || altura >= 3){
    console.log("Altura Inválida");
    alturaEValida = false;
    tdImc.textContent = "Altura Inválida"
}

if (pesoEValido && alturaEValida){
    tdImc.textContent = imc;
}
