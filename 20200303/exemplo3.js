function escreve_mensagem(valor){
    mensagem = "Você escreveu '"+valor+"' ";
    alert(mensagem);
    if(isNaN(valor)){//is not a number -> verifica se não é um número
        alert(valor + " não é um número");
    }else{
        alert(valor + " é um número");
    }
}