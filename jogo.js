var rodada = true;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){

    $('#btn_iniciar_jogo').click(function(){
        //valida a digitação dos apelidos

        if($('#entrada_jogador_1').val() == ''){
            alert('O Apelido do Jogador 1, não foi preenchido')
            return false;

        }
         if($('#entrada_jogador_2').val() == ''){
            alert('O Apelido do Jogador 2, não foi preenchido')
            return false;

        }

        // Exibir os Apelidos

        $('#nome_jogador_1').html($('#entrada_jogador_1').val());
        $('#nome_jogador_2').html($('#entrada_jogador_2').val());

       //
       $('#pagina_inicial').hide();
       $('#palco_jogo').show();
    });




    $('.jogada').click(function(){

        var id_campo_clicado = this.id;
        $('#'+ id_campo_clicado).off();
        jogada(id_campo_clicado);


    });
    
    function jogada(id){
        var icone = '';
        var ponto = 0;
        if(rodada){
            icone='url("imagens/marcacao_1.png")';
            ponto = -1;
        } else {
            icone='url("imagens/marcacao_2.png")';
            ponto = 1;
        }
    rodada = !rodada;

    $('#'+id).css('background-image',icone);

    var linha_coluna = id.split('-');
    matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

     verifica_combinacao();
}

    function verifica_combinacao(){
        //verifica na horizontal
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
           var pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);
        pontos = 0;
        for(var i = 1; i <= 3; i++){
           var pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);
        pontos = 0; 
        for(var i = 1; i <= 3; i++){
           var pontos = pontos + matriz_jogo['c'][i];
        }
        ganhador(pontos);

        //verificar na Vertical
        
        for(var l = 1; l<=3 ; l++){
            pontos = 0;
            pontos += matriz_jogo['a'][l]
            pontos += matriz_jogo['b'][l]
            pontos += matriz_jogo['c'][l]
            ganhador(pontos);
        }

        // verificar na Diagonal

        pontos=0;
        pontos = matriz_jogo['a'][1] +matriz_jogo['b'][2]+matriz_jogo['c'][3];
        ganhador(pontos);

        pontos=0;
        pontos = matriz_jogo['a'][3] +matriz_jogo['b'][2]+matriz_jogo['c'][1];
        ganhador(pontos);
    }


    function ganhador(pontos){
        if (pontos == -3){
                var jogada_1 = $('#entrada_jogador_1').val();
                alert(jogada_1 + ' Win!');
                $('.jogada').off();
        }else if (pontos == 3){
                var jogada_2 = $('#entrada_jogador_2').val();
                alert(jogada_2 + ' Win!');
                $('.jogada').off();
        }

    }



});