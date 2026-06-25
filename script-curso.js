const formCurso = document.getElementById('formCurso');
const nomeCurso = document.getElementById('nomeCurso');
const descricao = document.getElementById('descricao');
const cargaHoraria = document.getElementById('cargaHoraria');

formCurso.addEventListener('submit', function (evento){
    evento.preventDefault();

    let formularioValido = true;

    if(nomeCurso.value.trim() == ""){
        formularioValido = false;
        nomeCurso.classList.add("is-invalid"); 
        nomeCurso.classList.remove("is-valid");
    } else{
        nomeCurso.classList.add("is-valid");
        nomeCurso.classList.remove("is-invalid");
    }

    if(descricao.value.trim() == ""){
        formularioValido = false;
        descricao.classList.add("is-invalid");
        descricao.classList.remove("is-valid");
    } else{
        descricao.classList.add("is-valid");
        descricao.classList.remove("is-invalid");
    }
    if(cargaHoraria.value.trim() == ""){
        formularioValido = false;
        cargaHoraria.classList.add("is-invalid");
        cargaHoraria.classList.remove("is-valid");
    } else{
        cargaHoraria.classList.add("is-valid");
        cargaHoraria.classList.remove("is-invalid");
    }
  
});