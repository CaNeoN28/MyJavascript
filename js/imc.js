var pacientes = document.querySelectorAll(".paciente");
//coleta todos os pacientes em um array

console.log(pacientes)

for (var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc = calculaIMC(altura, peso); 

    var pesoEValido = true;
    var alturaEValida = true;

    if (peso <= 0 || peso >= 1000){
        console.log("Peso Inválido");
        pesoEValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3){
        console.log("Altura Inválida");
        alturaEValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
        //Adciona uma classe ao campo inválido
    }

    if (pesoEValido && alturaEValida){
        tdImc.textContent = imc;
        //Limita a exibição a duas casas decimais
    }
}

function calculaIMC(altura, peso){

    var imc = peso / (altura * altura)

    return imc.toFixed(2);
};