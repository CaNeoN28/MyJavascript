var campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);

campoFiltro.addEventListener('input', function(){

    var pacientes = document.querySelectorAll(".paciente");

    var filtro = this.value;

    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var nomeTd = paciente.querySelector(".info-nome");
        var nome =  nomeTd.textContent;

        if (!nome.includes(filtro)){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
    }
});