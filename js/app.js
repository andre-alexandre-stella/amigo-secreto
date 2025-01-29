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

    mostrarAmigos();
    nomeAmigo.value = "";
}

function mostrarAmigos() {
    document.getElementById("lista-amigos").textContent = listaDeAmigos.join(", ");
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

let listaDeAmigos = [];

