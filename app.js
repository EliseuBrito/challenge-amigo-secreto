//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    let nome = document.getElementById("amigo");
    if(nome.value == ""){
        alert("Por favor, insira um nome.")
    }
    amigos.push(nome.value)
    nome.value = "";
}