let form = document.querySelector(".form")
let forms = document.querySelectorAll(".form-control")
let botao = document.querySelector(".botao")

let msgErro = document.querySelectorAll(".form-floating span")
let msgSucesso = document.querySelector(".form_container h2")

function validaNome(){

    let nomeValidado = false

    if(forms[0].value.length < 3){

        msgErro[0].style.display = "inherit"
        forms[0].classList.add("invalid")
    } else {

        msgErro[0].style.display = "none"
        forms[0].classList.remove("invalid")
        nomeValidado = true
    }

    return nomeValidado
}

function validaEmail(){

    let regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    let emailValor = forms[1].value
    let emailValido = regex.test(emailValor)
    let emailValidado = false

    if(emailValido){

        emailValidado = true
    }

    return emailValidado
}

validaEmail()

botao.addEventListener("click", (event) =>{  

    if(!validaNome()){

        event.preventDefault()
    } else if(!validaEmail()){

        msgErro[1].style.display = "inherit"
        forms[1].classList.add("invalid")
        event.preventDefault()
    }
})