var campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);

campoFiltro.addEventListener('input', function(){

    var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var nomeTd = paciente.querySelector(".info-nome");
        var nome =  nomeTd.textContent;

        var expressao = RegExp(this.value, 'i');

        if (!expressao.test(nome)){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
    }
});