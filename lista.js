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

function nomeSeleciona(){
    nm = searchField.value.toLowerCase();

    var index = nameList.indexOf(nm);
    if (index > -1) {
        nameList.splice(index, 1);
        saida.innerHTML = "SUCESSO! " + nm + " removido";
      }
    
}

function a(){
    let k = document.querySelector("ul")
    k.style.color = "red"
}

btsel.addEventListener("click", nomeSeleciona);

const frm = document.querySelector("form")      // obtém elementos da página
//const dvQuadro = document.querySelector("#divQuadro")
const dvQuadro = document.getElementById('divQuadro')

frm.addEventListener("submit", (e) => {
  e.preventDefault()                            // evita envio do form

  const tarefa = frm.inTarefa.value             // obtém o conteúdo digitado
  console.log(e)
  const h5 = document.createElement("h5")       // cria o elemento HTML h5
  const texto = document.createTextNode(tarefa) // cria um texto
  h5.appendChild(texto)                         // define que texto será filho de h5
  dvQuadro.appendChild(h5)                      // e que h5 será filho de divQuadro

  frm.inNom.value = ""                       // limpa o campo de edição
  frm.inNom.focus()                          // joga o cursor neste campo
})

frm.btsel.addEventListener("click", () => { 
    const listEl = document.querySelectorAll("h5")  // obtém tags h5 da página
  
    if (listEl.length == 0) {
      alert("Não existe nenhum nome para selecionar")       // se não há tarefas, exibe alerta
      return                                        // e retorna
    }
  
    let aux = -1                   // variável auxiliar para indicar linha selecionada
  
    // percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < listEl.length; i++) {
      // se tag é da class tarefa-selecionada (está selecionada)
      if (listEl[i].className == "nome-selecionado") {
        listEl[i].className = "tarefa-normal"      // troca para normal
        aux = i                                     // muda valor da variável auxiliar
        break                                       // sai da repetição
      }
    }
  
    // se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == tarefas.length - 1) {
      aux = -1
    }
  
    tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha
  })
  
  frm.btrem.addEventListener("click", () => { 
    const nm = document.querySelectorAll("h5") // obtém tags h5 da página
  
    let aux = -1               // variável auxiliar para indicar linha selecionada
  
    // percorre a lista das tarefas inseridas na página (elementos h5)
    tarefas.forEach((tarefa, i) => {
      if (tarefa.className == "tarefa-selecionada") {  // se é classe tarefa-selecionada
        aux = i
        console.log(i)                                   // muda valor da variável aux
      }
    })
  
    if (aux == -1) {             // se não há tarefa selecionada (ou se lista vazia...)
      alert("Selecione uma tarefa para removê-la...")
      return
    }
  
    // solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
      dvQuadro.removeChild(tarefas[aux])        // remove um dos filhos de divQuadro
    }
  })
  