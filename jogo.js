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

        $(this.id).val();
        this.id.val = -1;
        alert(this.id.val());


    });
    
});