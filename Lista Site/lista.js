const nameList = ["Aline", "Pafuncio", "Julio", "Narebas", "Ana Conda", "James", "Yago", "Elisius"]

const nomeAux = nameList;

var num_seleciona = -1;

const btfl = document.getElementById("fl");
const btadd = document.getElementById("add");
const btsel = document.getElementById("sel");
const btrem = document.getElementById("rem");
const saida = document.getElementById("saida");
const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");


this.fillList();

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {

        let listItems = document.createElement("li");

        if (num_seleciona == i){
            listItems.className = "alert alert-link";
        } else{
            listItems.className = "";
        }
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
  
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

btfl.addEventListener("click", inputHandler);

function addNome(){
    num_seleciona = 0;
    nome = searchField.value.toLowerCase();
    if (nome != ''){
        if (nameList.indexOf(nome) == -1){
            nameList.push(nome);
            saida.innerHTML = "SUCESSO! "+nome+" adicionado";
        } else {
            saida.innerHTML = "OPS! Este nome ja foi adicionado"
        }
    } else {
        saida.innerHTML = " Por favor insira um nome válido"
    }
}

btadd.addEventListener("click", addNome);


function remNome(){
    
    nome = nameList[num_seleciona ];

    nameList.splice(num_seleciona , 1);
    saida.innerHTML = "SUCESSO! "+ nome+ " removido";

    inputHandler();
    
}
btrem.addEventListener("click", remNome);
    
function selNome(){
    saida.innerHTML = ""

    var aux = nameList[num_seleciona]

    if (nameList.length == num_seleciona){
        num_seleciona = 0;
    } else{
    num_seleciona += 1;
    }

    console.log(num_seleciona);

    inputHandler();

}

btsel.addEventListener("click", selNome)