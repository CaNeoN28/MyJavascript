var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
   var paciente = event.target.parentNode;
   
   paciente.classList.add("fadeOut");

   setTimeout(function(){
       paciente.remove();
   }, 500)
});

/*var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Removendo paciente");
        this.remove();
    })
})*/