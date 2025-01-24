//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById("amigo");
    if(nome.value == ""){
        alert("Por favor, insira um nome.");
    }
    amigos.push(nome.value);
    nome.value = "";
    listaDeAmigos();
}

function listaDeAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    if(amigos.length > 0){
        amigos.forEach(element => {
            let item = document.createElement("li");
            item.textContent = element;
            lista.appendChild(item);
        });
    }
}

function sortearAmigo(){
    if(!amigos.length){
        alert("A lista de nomes está vazia! Adicione nomes para realizar o sorteio.");
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.textContent = amigos[numeroAleatorio];
}