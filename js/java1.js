
let descricoes = document.querySelectorAll(".descricoes, .descricoes2, .descricoes3");

descricoes.forEach(botao => botao.addEventListener("click",function(e){
    

    let pai = e.target.parentElement;
    
    let descricao = pai.querySelector(".descricao, descricao2, descricao3")
   
    descricao.classList.toggle("sumir")

}))

