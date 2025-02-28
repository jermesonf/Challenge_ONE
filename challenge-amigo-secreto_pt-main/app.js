//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Variaveis globais
var listaAmigos = [];
var ulListaAmigos = document.querySelector('.name-list');
var ulListaResultado = document.querySelector('.result-list');

function adicionarAmigo(){

    var inputNomeAmigo = document.getElementById('amigo');
    var nomeAmigo = inputNomeAmigo.value;
   
   if(nomeAmigo !== ""){

    //limpa a mensagem "o amigo secreto é... ao adicionar nomes"
    ulListaResultado.innerHTML = ""

    console.log("Adicionado a lista: " + nomeAmigo);
    listaAmigos.push(nomeAmigo);
    
    
    ulListaAmigos.innerHTML = "";
    

    for (let i = 0; i < listaAmigos.length; i++) {
        
        let liElement = document.createElement("li");
        liElement.textContent = listaAmigos[i];
        ulListaAmigos.appendChild(liElement);
    }

    inputNomeAmigo.value="";
    
   }else{
    alert("Preencha o campo corretamente.");
    inputNomeAmigo.value="";
   }
 
}


function sortearAmigo(){

    if(listaAmigos.length > 0)
    {
        var nomeAleatorio = Math.floor(Math.random() * listaAmigos.length);
        var amigoSorteado = listaAmigos[nomeAleatorio];

        ulListaResultado.innerHTML = "O amigo secreto é: " + amigoSorteado;

        //limpa a lista com nomes inseridos
        ulListaAmigos.innerHTML = "";

        //limpa a array
        listaAmigos = [];

    }
    else{
        alert("Adicione amigos para realizar o sorteio" );
    }

}