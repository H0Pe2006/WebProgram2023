//criar referencias aos elementos da pagina
const frm = document.querySelector("form");
const calcular = document.querySelector("h3");




frm.addEventListener("submit", (e) => {
   //evita o envio do formulário
   e.preventDefault();


   //obter os valores digitados
   const Lado1 = Number(frm.inLado1.value);
   const Lado2 = Number(frm.inLado2.value);
   const Lado3 = Number(frm.inLado3.value);


   if(Lado1 > Lado2+Lado3 || Lado2 > Lado3+Lado1 || Lado3 > Lado2+Lado1){
       calcular.innerText = `Não forma Triangulo`;
       calcular.style.color = "black";
    }else if(Lado1 == Lado2 && Lado1 == Lado3){
        calcular.innerText = `Forma um Triangulo Equilátero`;
        calcular.style.color = "red";
    }else if(Lado1 == Lado2 || Lado1 == Lado3 || Lado3 == Lado2){
        calcular.innerText = `Forma um Triangulo Isóceles`;
        calcular.style.color = "blue";
    }else if(Lado1 != Lado2 && Lado1 != Lado3 && Lado3 != Lado2 ){
       calcular.innerText = `Forma um Triangulo Escaleno`;
       calcular.style.color = "green";
   }
})
