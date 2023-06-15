//criar referencias aos elementos da pagina
const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
   //evita o envio do formulário
   e.preventDefault();


   //obter os valores digitados
   const Valor = Number(frm.inValor.value);
   const Trintamin = 1.00;
   


    if(Valor >= 3){
        resposta.innerText = `Você colocou R$ `+Valor.toFixed(2)+`, portanto, você possui 2 Horas! Seu troco é de R$ `+(Valor-3).toFixed(2);
        resposta.style.color = "green";
    }else if(Valor >= 1.75){
        resposta.innerText = `Você colocou R$ `+Valor.toFixed(2)+`, portanto, você possui 60 Minutos! Seu troco é de R$ `+(Valor-1.75).toFixed(2);
        resposta.style.color = "green";
    }else if(Valor>=1){
        resposta.innerText = `Você colocou R$ `+Valor.toFixed(2)+`, portanto, você possui 30 Minutos! Seu troco é de R$ `+(Valor-1).toFixed(2);
        resposta.style.color = "green";
    }else if(Valor<1){
        resposta.innerText = `Valor Insuficiente`;
        resposta.style.color = "red";
    }
   
})
