var pacientes = document.querySelectorAll(".paciente");
//coleta todos os pacientes em um array

for (var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc = calculaIMC(altura, peso); 

    var pesoEValido = validaPeso(peso);
    var alturaEValida = validaAltura(altura);

    if (!pesoEValido){
        console.log("Peso Inválido");
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEValida){
        console.log("Altura Inválida");
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

function validaPeso(peso){
    if (peso >= 2 && peso <= 1000)
        return true
    
    return false
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3)
        return true
    
    return false
}
