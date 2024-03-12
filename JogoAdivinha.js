alert("minha versao");
 let numeroSecreto = parseInt(Math.random) * 100 + 1;
 console.log(numeroSecreto);   
let numeroUser = prompt ("escolha um numero de 1 a 100");
let tentativas= 1;

 while(numeroUser != numeroSecreto){
    numeroUser =  prompt ("escolha um numero");
    if(numeroSecreto == numeroUser){ 
        break; 
    }else{
        if(numeroUser > numeroSecreto){
            alert(`${numeroUser}  é maior que o numero secreto`);
        }else{
            alert(`${numeroUser} é menor que o numero secreto`);
        }
        tentativas++;
    }
    
 }
 palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`voce acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavaTentativa}`);
