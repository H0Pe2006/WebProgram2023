const nameList = ["Aline", "Pafuncio", "Julio", "Narebas", "Ana Conda", "James", "Yago", "Elisius"]


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
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

btfl.addEventListener("click", inputHandler);

function addNome(){
    nm = searchField.value.toLowerCase();
    if (nm != ''){
        if (nameList.indexOf(nm) == -1){
            nameList.push(nm);
            saida.innerHTML = "SUCESSO! " + nm + " adicionado";
        } else {
            saida.innerHTML = "VIXI! Esse nome ja esta adicionado"
        }
    
    } else {
        saida.innerHTML = "Insira o nome desejado!"
    }

}

btadd.addEventListener("click", addNome);


function nomeRemove(){
    nm = searchField.value.toLowerCase();

    var index = nameList.indexOf(nm);
    if (index > -1) {
        nameList.splice(index, 1);
        saida.innerHTML = "SUCESSO! " + nm + " removido";
      } else {
        saida.innerHTML = 'OPS! O nome '+ nm +' não existe';
      }
    
}

btrem.addEventListener("click", nomeRemove);