var botao = document.querySelector("#buscar-paciente");

botao.addEventListener('click', function(){
    console.log("Buscando paciente");

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        var spanErro = document.querySelector("#erro-requisicao");        

        if(xhr.status == 200){
            var resposta = xhr.responseText; 
            var pacientes = JSON.parse(resposta);

            spanErro.classList.add("invisivel");
            pacientes.forEach(function(paciente){
                adicionarPaciente(paciente);
            });
        }else{
            spanErro.classList.remove("invisivel");
        }
    });

    xhr.send();
});