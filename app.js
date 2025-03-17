// Desafio ONE Amigo Secreto
// Desenvolvido por: Lucas "SrKoalo" de França

let nomeAmigos = [];

function adicionarAmigo() {
    let nomeInserido = document.querySelector('input');
    if (nomeInserido.value == ''){
        alert('Preencha o nome antes de adicionar');
    } else {
        nomeAmigos.push(nomeInserido.value);
        console.log(nomeInserido.value);
        nomeInserido.value = '';
        console.log(nomeAmigos);
        atualizarLista();
    }   
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
            for (i = 0 ; i < nomeAmigos.length; i++){
                lista.innerHTML += `<li>${nomeAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (nomeAmigos.length == 0){
        alert('Preencha os nomes antes de sortear');
    } else if (nomeAmigos.length == 1){
        alert('Preencha mais de um nome antes de sortear');
    } else {
        let nomeSorteado = parseInt(Math.random() * nomeAmigos.length)
        console.log(nomeSorteado);
        document.getElementById('listaAmigos').innerHTML = `<il>${nomeAmigos[nomeSorteado]}</il>`;
    }
}