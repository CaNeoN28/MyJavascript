var botao_adicionar = document.querySelector("#adicionar-paciente");

botao_adicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obterDadosPaciente(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeErros(erros);
        
        return;
    }

    var mensagens_erros = document.querySelector("#mensagens-erro");
    mensagens_erros.innerHTML = "";

    adicionarPaciente(paciente);

    form.reset();
});

function adicionarPaciente(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

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

function validaPaciente(paciente){
    var erros = [];

    if(!validaNome(paciente.nome))
        erros.push("O nome deve possuir pelo menos 3 caractéres!");

    if(!validaPeso(paciente.peso))
        erros.push("Peso inválido!");

    if(!validaAltura(paciente.altura))
        erros.push("Altura inválida!");

    if(!validaGordura(paciente.gordura))
        erros.push("A gordura está inválida!");
    
    return erros;
}

function exibeErros(erros){
    var ul = document.querySelector("#mensagens-erro")

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function montarErrosLi(erro){
    var li = document.createElement("li");
    li.textContent = erro;

    return li;
}