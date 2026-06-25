const formProf = document.getElementById('formProf');
const nomeProf = document.getElementById('nomeProf');
const registro = document.getElementById('registro');
const funcaoAula = document.getElementById('funcao');

formProf.addEventListener('submit', function (evento){
    evento.preventDefault();

    let formularioValido = true;

    if(nomeProf.value.trim() == ""){
        formularioValido = false;
        nomeProf.classList.add("is-invalid"); 
        nomeProf.classList.remove("is-valid");
    } else{
        nomeProf.classList.add("is-valid");
        nomeProf.classList.remove("is-invalid");
    }

    if(registro.value.trim() ==""){
        formularioValido = false;
        registro.classList.add("is-invalid");
        registro.classList.remove("is-valid");
    } else{
        registro.classList.add("is-valid");
        registro.classList.remove("is-invalid");
    }
    if(registro.value.trim() ==""){
        formularioValido = false;
        funcaoAula.classList.add("is-invalid");
        funcaoAula.classList.add("is-valid");
    } else{
        funcaoAula.classList.add("is-valid");
        funcaoAula.classList.add("is-invalid");
    }
  
});