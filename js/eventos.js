var botao_adicionar = document.querySelector("#adicionar-paciente");

botao_adicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obterDadosPaciente(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});

function obterDadosPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.altura.value, form.peso.value) 
    }

    return paciente;
}

function montaTr(paciente){
    var tr = document.createElement("tr");
    tr.classList.add("paciente")

    var nomeTd = montarTd(paciente.nome, 'info-nome');
    var pesoTd = montarTd(paciente.peso, 'info-peso');
    var alturaTd = montarTd(paciente.altura, 'info-altura');
    var gorduraTd = montarTd(paciente.gordura, 'info-gordura');
    var imcTd = montarTd(paciente.imc, 'info-imc');

    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(alturaTd);
    tr.appendChild(gorduraTd);
    tr.appendChild(imcTd);

    return tr;
}

function montarTd(dado, classe){
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}