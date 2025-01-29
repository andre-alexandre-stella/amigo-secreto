function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo");

    if (nomeAmigo.value == "") {
        alert("Insira um nome.");
        return;
    } else if (listaDeAmigos.includes(nomeAmigo.value)) {
        alert("Nome já inserido.");
        nomeAmigo.value = "";
        return;
    } else {
        listaDeAmigos.push(nomeAmigo.value);
    }
    
    atualizarLista();
    nomeAmigo.value = "";
}

function sortear() {
    if (listaDeAmigos.length < 3) {
        alert("A quantidade mínima de pessoas para o sorteio são 3. Insira mais nomes.");
        return;
    }
    listaDeAmigos.sort(() => Math.random() - 0.5);
    let sorteados = "";
    for (let i = 1; i < listaDeAmigos.length; i++) {
        sorteados += `${listaDeAmigos[i - 1]} -> ${listaDeAmigos[i]}<br>`;
    }
    sorteados += `${listaDeAmigos[listaDeAmigos.length - 1]} -> ${listaDeAmigos[0]}`;
    document.getElementById("lista-sorteio").innerHTML = sorteados;
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada item da lista
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaDeAmigos[i];
        // Adiciona um evento de clique para excluir o item da lista
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });
        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function excluirAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById("lista-sorteio");
    sorteio.innerHTML = "";
}

let listaDeAmigos = [];

