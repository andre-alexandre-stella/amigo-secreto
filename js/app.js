function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    listaDeAmigos.push(nomeAmigo);
    mostrarAmigos();
    document.getElementById("nome-amigo").value = "";
}

function mostrarAmigos() {
    document.getElementById("lista-amigos").textContent = listaDeAmigos.join(", ");
}

function sortear() {
    listaDeAmigos.sort(() => Math.random() - 0.5);
    while (listaDeAmigos.length > 0) {
        listaSorteio.push(listaDeAmigos[0]);
        listaDeAmigos.splice(0, 1);
    }
    mostrarSorteio();
}

function mostrarSorteio() {
    let sorteados = "";
    for (let i = 1; i < listaSorteio.length; i++) {
        sorteados += `${listaSorteio[i - 1]} -> ${listaSorteio[i]}<br>`;
    }
    sorteados += `${listaSorteio[listaSorteio.length - 1]} -> ${listaSorteio[0]}`;
    document.getElementById("lista-sorteio").innerHTML = sorteados;
}

function reiniciar() {
    listaSorteio = [];
    mostrarAmigos();
    document.getElementById("lista-sorteio").innerHTML = "";
}

let listaDeAmigos = [];
let listaSorteio = [];

