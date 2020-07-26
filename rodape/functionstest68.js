

$(document).ready(function() {
        
    if ( typeof avisoConfig == 'undefined' || avisoConfig == 'false' ) {
        $(window).on('load',function(){
            $('#aviso-config').modal('show');
        });
        $('body').append('<div class="modal hide fade" id="aviso-config"> <div class="modal-header"> <a class="close" data-dismiss="modal">×</a> <h3>Quase lá!</h3> </div><div class="modal-body"><div class="box-impotante"> <span class="box-dicas box-1"> <strong>Dicas &uacute;teis:</strong> <ul> <li>1 - Mantenha sempre um produto no carrinho para atualizar o cache</li><li>2 - Antes de alterar o visual da loja, leia <a href="https://groomb.com.br/docs/primeshop-loja-integrada/configuracao-inicial/visual-da-loja/">esse artigo</a></li><li>3 - Antes de alterar o arquivo de configura&ccedil;&atilde;o inicial, leia <a href="https://groomb.com.br/docs/primeshop-loja-integrada/configuracao-inicial/entendendo-o-arquivo/">esse artigo</a></li></ul> </span> <span class="box-links box-1"> <strong>Links &uacute;teis(salve todos):</strong> <ul> <li><a href="https://ajuda.lojaintegrada.com.br/">Manual da Plataforma Loja Integrada</a></li><li><a href="https://groomb.com.br/docs/primeshop-loja-integrada/">Manual do tema Primeshop</a></li><li><a href="https://escolaboravender.com.br/">Escola Bora Vender</a></li></ul> </span></div><div class="box-instrucoes"> <strong> Voc&ecirc; j&aacute; concluiu a primeira parte da instala&ccedil;&atilde;o. Agora &eacute; necess&aacute;rio fazer a segunda parte, onde voc&ecirc; ir&aacute; instalar o arquivo de configura&ccedil;&atilde;o inicial.</strong><br/><strong> &Eacute; nesse arquivo de configura&ccedil;&atilde;o inicial que voc&ecirc; ir&aacute; realizar todas as modifica&ccedil;&otilde;es no seu tema. Assim que instalar, esse pop up sumir&aacute; e sua loja ficar&aacute; com o design igual ao do tema comprado. </strong> <span class="passos"><strong>Siga os 3 passos abaixo:</strong> <span> <h1>1 - <a href="https://groomb.com.br/docs/primeshop-loja-integrada/configuracao-inicial/">Clique aqui</a> para acessar o manual do seu tema(recomendamos que salve esse link nos favoritos, pois ir&aacute; utilizar bastante).</h1> </span> <span> <h1>2 - Clique no tema que voc&ecirc; comprou.</h1> <img src="https://cdn.awsli.com.br/807/807233/arquivos/passo2.png"/> </span> <span> <h1>3 - Siga as orienta&ccedil;&otilde;es do artigo.</h1> <img src="https://cdn.awsli.com.br/807/807233/arquivos/passo3.png"/> </span> </span></div></div></div>');
    }
    
    // Importa plugins
    $('head').append('<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">');

    if (typeof corSobrepor !== 'undefined') {
        	var corBranco = corSobrepor;
    }
    
    if ($('.cor-principal').length) {
          
        var corPrimaria1 = $(".cor-principal")[0];
        var corPrimaria2 = document.defaultView.getComputedStyle(corPrimaria1, null);
        var corPrimaria = corPrimaria2["color"];
    
    }
        
    // Obter cor secundaria
    if ($('.cor-secundaria').length) {
    
        var corSecundaria1 = $(".cor-secundaria")[0];
        var corSecundaria2 = document.defaultView.getComputedStyle(corSecundaria1, null);
        var corSecundaria = corSecundaria2["color"];
    
    }
    
    // Obter cor botoes
    if ($('.botao.principal.botao-comprar, .botao.principal.grande, .acoes-produto-responsiva .tag-comprar').length) {
        
        var corBotoesBg1 = $(".botao.principal.botao-comprar, .botao.principal.grande, .acoes-produto-responsiva .tag-comprar")[0];
        var corBotoesBg2 = document.defaultView.getComputedStyle(corBotoesBg1, null);
        var corBotoesBg = corBotoesBg2["background-color"];
        
    }
    
    $('.botao.principal').css('background-color', ''+corBotoesBg+'');
    $('.botao.fundo-secundario').removeClass('fundo-secundario');
    
    
    $(".botao.principal").each(function(){
        if (!$(this).hasClass('pequeno')){
            $(this).addClass('grande');
        }
    });
    
    // Captura de contatos
    
        // Captura e armazena link do facebook
        $('.barra-inicial .lista-redes').find('.icon-facebook').closest('li').addClass('face-prov');
        var facebookLink = $('.face-prov a').attr('href');
        
        // Captura e armazena link do Skype
        var skypeLink = $('.barra-inicial .canais-contato ul li.tel-skype a').attr('href');
        
        // Captura e armazena numero whatsapp
        var tw = $('.barra-inicial .canais-contato ul li.tel-whatsapp span').text();
        var numeroWhatsapp = tw.replace(/\D/g,'');
        
        // Captura armazena numero do telefone
        $('.barra-inicial .canais-contato').find('.icon-phone').closest('li').addClass('tel-phone');
        var tp = $('.barra-inicial .canais-contato ul li.tel-phone span').text();
        var numeroTelefone = tp.replace(/\D/g,'');
        
    //
    

    // Suporte Flutuante
    
    floatwhatsapp = $('#rodape .tel-whatsapp a').text().replace(/\D/g,'');
    
    if(suporteFlutuante === true){
      
	    if( typeof facebookLink !== 'undefined' ){
	        var floatmessenger = facebookLink.replace("https://facebook.com/", "");
		} 
	    
	    var skypelimpar = $('.tel-skype a').attr('href');
	    
	    if( typeof skypelimpar !== 'undefined' ){
			var floatskype = skypelimpar.replace("skype:", "");
		} 
      
      
		var flutuantedk = $('<div class="floating-container"><div class="floating-button"><svg class="icon-chat-flutuante" id="chat-flutuante" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 576 576" xml:space="preserve"><path d="M240,32L240,32c132.549,0,240,86.957,240,194.224S372.549,420.448,240,420.448c-12.729,0-25.223-0.81-37.417-2.355   C151.03,469.44,91.497,478.647,32,480v-12.567c32.126-15.677,58-44.231,58-76.866c0-4.553-0.356-9.023-1.015-13.396   C34.706,341.562,0,287.175,0,226.224C0,118.957,107.452,32,240,32z M498,467.343c0,27.973,18.156,52.449,46,65.886V544   c-51.562-1.159-98.893-9.051-143.57-53.062c-10.57,1.324-21.396,2.021-32.43,2.021c-47.734,0-91.704-12.879-126.807-34.521   c72.336-0.254,140.629-23.428,192.417-65.336c26.105-21.127,46.697-45.914,61.207-73.675C510.199,289.994,518,258.636,518,226.224   c0-5.224-0.225-10.418-0.629-15.584C553.656,240.607,576,281.451,576,326.479c0,52.244-30.078,98.86-77.119,129.383   C498.309,459.608,498,463.44,498,467.343z"/></svg></div><div class="element-container"><a href="#modalContato" data-toggle="modal" data-target="#modalContato" target="blank" class="float-faleconosco" title="E-mail"><span class="float-element tooltip-left"><i class="fas fa-envelope"></i></span></a><a href="callto://'+floatskype+'" target="blank" class="float-skype" title="Skype"><span class="float-element tooltip-left"><i class="fab fa-skype"></i></span></a><a href="https://m.me/'+floatmessenger+'" target="blank" class="float-messenger" title="Messenger"><span class="float-element tooltip-left"><i class="fab fa-facebook-messenger"></i></span></a><a href="https://wa.me/55'+floatwhatsapp+'" target="blank" class="float-whatsapp" title="Whatsapp"><span class="float-element tooltip-left"><i class="fab fa-whatsapp"></i></span></a></div></div>');
		
		$( "body" ).prepend( flutuantedk );
		
		
		$(".floating-button").css('background', ''+corSuporteFlutuante+'');
		
		if ($('.tel-whatsapp').length === 0 ) {
		  $(".float-whatsapp").remove();
		}
		
		if( typeof floatmessenger === 'undefined'){
		$(".float-messenger").remove();
		}
		
		if ($('.tel-skype').length === 0 ) {
		  $(".float-skype").remove();
		}
      
    	$(".floating-button").css('background', ''+corSuporteFlutuante+'');
    	$(".floating-container").css('bottom', ''+suporteAltura+'');
    	
    	if(suporteFlutuantePosicao === "left"){$(".floating-container").css('left', '0');}
    	
    	
    }else if (suporteFlutuante === 1){
    	
	    if (typeof whatsTitulo !== 'undefined') {
	    	
	    	var flutuantedk = $('<div class="float-w"><a href="https://wa.me/55'+floatwhatsapp+'" target="blank" title="Whatsapp"><i class="fab fa-whatsapp"></i><strong>'+whatsTitulo+'</strong></a></div>');
	      
	    	$('body').prepend( flutuantedk );
	    	$('.float-w').css('bottom', ''+suporteAltura+'');
	    	
	    	if(suporteFlutuantePosicao === "left"){
	    		$('.float-w').css('left', '20px');
	    	}else if(suporteFlutuantePosicao === "right"){
	    		$('.float-w').css('right', '20px');
	    	}
	    
	    }
    	
    }
    
    if(suporteFlutuantePosicao === "left"){
		$(".floating-container").css('left', '0');
    }
    
    $(".floating-container").css('bottom', ''+suporteAltura+'');
    
    //
    
    // Remove barra topo
    $('#barraTopo').addClass('hidden-desktop hidden-tablet');
    
    // Remove barra inicial
    $('.barra-inicial').remove();
    
    // Adiciona cor aos botoes
    $('.botao').css('background-color', ''+corBotoesBg+'');
    $('.botao.principal').css('background-color', ''+corBotoesBg+'');
    $('.popup-sob-consulta .controls .botao').css('background-color', ''+corBotoesBg+'');
    
    // Adiciona cor primaria ao titulo do modal de contato
    $('.modal-header .titulo').css('color', ''+corPrimaria+'');
    
    
    // Adicione classe ao logo para manipulacao
    $('#cabecalho .conteiner .row-fluid').find('.logo').closest('.span3').removeClass('span3').addClass('abriga-logo');
    
    
    //Busca
    
        // Altera o placeholder do campo de busca-mobile
        $('.busca input').attr('placeholder', ''+textoBusca+'');
        
        // Adicione o ícone de lupa
        $('.busca').prepend('<svg id="icone-busca" class="icone-busca-topo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M370.068,63.494C329.123,22.549,274.686,0,216.781,0S104.438,22.549,63.494,63.494C22.549,104.438,0,158.876,0,216.78c0,57.905,22.549,112.343,63.494,153.287c40.944,40.944,95.383,63.494,153.287,63.494s112.342-22.55,153.287-63.494c40.944-40.944,63.494-95.382,63.494-153.287C433.561,158.876,411.012,104.438,370.068,63.494z M216.78,392.196c-96.725,0-175.416-78.691-175.416-175.416S120.056,41.364,216.781,41.364s175.415,78.691,175.415,175.416S313.505,392.196,216.78,392.196z"/><path d="M505.943,476.693L369.981,340.732c-8.077-8.077-21.172-8.077-29.249,0c-8.076,8.077-8.076,21.172,0,29.249l135.961,135.961c4.vvvvv,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.625-6.058C514.019,497.865,514.019,484.77,505.943,476.693z"/></svg>');
        
        
        // Mostra/esconde o botao de buscar ao digitar algo
        $('.busca input').bind('keyup change blur', function() {
            if (this.value.length > 0) {
                $('.busca .botao-busca').show();
            }
            else {
                $('.busca .botao-busca').hide();
            }
        });
        
    //
    
    // Recupera de dados de contato
    
        // Adiciona classe unica aos contatos do rodape para manipulacao
        $('#rodape .span12.visible-phone').find('.titulo').closest('.span12.visible-phone').addClass('contatos-loja');
    
        // Adiciona classe unica ao email e telefone do rodape para manipulacao
        $('.contatos-loja').find('.fa-envelope').closest('li').addClass('tel-mail');
        $('.contatos-loja').find('.icon-phone').closest('li').addClass('tel-tel');
        
        // Remove icones antigos dos contatos
        $(".contatos-loja .fa.fa-whatsapp").remove();
        $(".contatos-loja .icon-phone").remove();
        $(".contatos-loja .fa.fa-envelope").remove();
        $(".contatos-loja .fa.fa-skype").remove();
        
        
        // Adiciona novos icones e classes especificas aos contatos
        $(".contatos-loja .tel-whatsapp:contains('Whatsapp:')").html(function(_, html) {
            return  html.replace(/(Whatsapp:)/g, '<span class="whatsapp-n"><i class="fab fa-whatsapp"></i><strong> Whatsapp:</strong></span>')
        });
        $(".contatos-loja .tel-tel:contains('Telefone:')").html(function(_, html) {
            return  html.replace(/(Telefone:)/g, '<span class="telefone-n"><i class="fas fa-phone"></i></i> <strong>Telefone</strong>:</span>')
        });
        $(".contatos-loja .tel-mail:contains('E-mail:')").html(function(_, html) {
            return  html.replace(/(E-mail:)/g, '<span class="email-n"><i class="fas fa-envelope"></i> <strong>E-mail:</strong></span>')
        });
        $(".contatos-loja .tel-skype:contains('Skype:')").html(function(_, html) {
            return  html.replace(/(Skype:)/g, '<span class="skype-n"><i class="fab fa-skype"></i> <strong>Skype:</strong></span>')
        });
        
    //
    
    
    // Novo Painel
    
    	$('.conteudo-topo .inferior .span8.busca-mobile').removeClass('span8').unwrap().unwrap();
    	
    	if ($('.carrinho-checkout').length === 0) {
    		$('#cabecalho').find('.logo').parents('.conteiner').addClass('cabecalho-conteiner');
    	}
    	
        // Adiciona atendimento, conta e carrinho para receber conteudos
        $('.cabecalho-conteiner > .row-fluid').append('<div class="novo-atendimento item-cabecalho hidden-phone"></div><div class="novo-conta item-cabecalho hidden-phone"></div><div class="novo-carrinho item-cabecalho hidden-phone"></div>');
        
        // Adiciona conteudo de atendimento
        $('.novo-atendimento').append('<div class="atendimento-topo"><svg id="icone-atendimento" class="icone-atendimento-topo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 611.932 611.932" xml:space="preserve"><path d="M559.017,210.569H422.774V100.102c0-28.708-23.594-52.301-52.301-52.301H52.301C23.594,47.801,0,71.394,0,100.102v191.476c0,28.708,23.594,52.301,52.301,52.301h30.958l39.004,52.301c2.182,3.682,6.614,5.182,11.047,5.182s8.115-2.182,11.047-5.182l39.004-52.301h5.864v110.467c0,28.708,23.594,52.301,52.301,52.301H428.57l39.004,52.301c2.182,3.682,6.614,5.182,11.047,5.182s8.115-2.182,11.047-5.182l39.004-52.301h30.958c28.708,0,52.301-23.594,52.301-52.301V262.87C612,234.094,588.475,210.569,559.017,210.569z M176.065,316.603c-4.432,0-8.115,2.182-11.047,5.182l-32.39,42.687l-32.39-42.687c-2.182-3.682-6.614-5.182-11.047-5.182H50.869c-13.979,0-25.026-11.047-25.026-25.026V100.102c0-13.979,11.047-25.026,25.026-25.026h318.172c13.979,0,25.025,11.047,25.025,25.026v124.446v67.03c0,13.979-11.047,25.026-25.025,25.026H202.523L176.065,316.603L176.065,316.603z M584.792,454.346c0,13.979-11.047,25.026-25.025,25.026h-38.322c-4.432,0-8.115,2.182-11.047,5.182l-32.39,42.687l-32.39-42.687c-2.182-3.682-6.614-5.182-11.047-5.182H241.595c-13.979,0-25.026-11.047-25.026-25.026V343.879h153.904c10.297,0,19.911-2.932,27.958-8.115h103.102c7.364,0,13.229-5.864,13.229-13.229c0-7.365-5.864-13.229-13.229-13.229h-81.009c2.182-5.182,2.932-11.047,2.932-17.661v-53.051h136.242c13.979,0,25.026,11.047,25.026,25.026v190.726H584.792z M514.08,398.363c0,7.364-5.864,13.229-13.229,13.229h-200.34c-7.364,0-13.229-5.864-13.229-13.229s5.864-13.229,13.229-13.229h200.34C508.148,385.066,514.08,390.998,514.08,398.363z M310.057,248.823h-199.59c-7.364,0-13.229-5.864-13.229-13.229s5.864-13.229,13.229-13.229h199.59c7.364,0,13.229,5.864,13.229,13.229C324.036,242.959,317.422,248.823,310.057,248.823zM97.238,159.018c0-7.364,5.864-13.229,13.229-13.229H230.48c7.364,0,13.229,5.864,13.229,13.229c0,7.364-5.864,13.229-13.229,13.229H110.467C103.102,172.246,97.238,166.382,97.238,159.018z"/></svg><span>Central de<br><strong>Atendimento</strong><i class="icon-angle-down"></i></span></div><div class="dir"><div class="atendimento-inside"></div></div></div>');
        
        // Adiciona cor ao icone de atendimentoAvancado
        
        $('.icone-atendimento-topo').css('fill', ''+corPrimaria+'');
    
        
        if(atendimentoAvancado === true){
            
        $('.atendimento-inside').append('<div class="contatos-loja contatos-loja-topo contato-avancado"> <ul> <li class="tel-tel"><span class="telefone-n"><i class="fas fa-phone"></i><strong>Telefone</strong>:</span> <a href="tel:'+telefone1+'" class="telefone1"> <span class="principal-contato">'+telefone1+'</span> <span class="adicional-contato">'+telefone1Adicional+'</span> </a> <a href="tel:'+telefone2+'" class="telefone2"> <span class="principal-contato">'+telefone2+'</span> <span class="adicional-contato">'+telefone2Adicional+'</span> </a> <a href="tel:'+telefone3+'" class="telefone3"> <span class="principal-contato">'+telefone3+'</span> <span class="adicional-contato">'+telefone3Adicional+'</span> </a> <a href="tel:'+telefone4+'" class="telefone4"> <span class="principal-contato">'+telefone4+'</span> <span class="adicional-contato">'+telefone4Adicional+'</span> </a> <a href="tel:'+telefone5+'" class="telefone5"> <span class="principal-contato">'+telefone5+'</span> <span class="adicional-contato">'+telefone5Adicional+'</span> </a> </li><li class="tel-whatsapp"><span class="whatsapp-n"><i class="fab fa-whatsapp"></i><strong>Whatsapp</strong>:</span> <a href="" class="whatsapp1"> <span class="principal-contato">'+whatsapp1+'</span> <span class="adicional-contato">'+whatsapp1Adicional+'</span> </a> <a href="" class="whatsapp2"> <span class="principal-contato">'+whatsapp2+'</span> <span class="adicional-contato">'+whatsapp2Adicional+'</span> </a> <a href="" class="whatsapp3"> <span class="principal-contato">'+whatsapp3+'</span> <span class="adicional-contato">'+whatsapp3Adicional+'</span> </a> <a href="" class="whatsapp4"> <span class="principal-contato">'+whatsapp4+'</span> <span class="adicional-contato">'+whatsapp4Adicional+'</span> </a> <a href="" class="whatsapp5"> <span class="principal-contato">'+whatsapp5+'</span> <span class="adicional-contato">'+whatsapp5Adicional+'</span> </a> </li><li class="tel-skype"><span class="skype-n"><i class="fab fa-skype"></i><strong>Skype</strong>:</span> <a href="skype:'+skype1+'?call" class="skype1"> <span class="principal-contato">'+skype1+'</span> <span class="adicional-contato">'+skype1Adicional+'</span> </a> <a href="skype:'+skype2+'?call" class="skype2"> <span class="principal-contato">'+skype2+'</span> <span class="adicional-contato">'+skype2Adicional+'</span> </a> <a href="skype:'+skype3+'?call" class="skype3"> <span class="principal-contato">'+skype3+'</span> <span class="adicional-contato">'+skype3Adicional+'</span> </a> <a href="skype:'+skype4+'?call" class="skype4"> <span class="principal-contato">'+skype4+'</span> <span class="adicional-contato">'+skype4Adicional+'</span> </a> <a href="skype:'+skype5+'?call" class="skype5"> <span class="principal-contato">'+skype5+'</span> <span class="adicional-contato">'+skype5Adicional+'</span> </a> </li><li class="tel-mail"><span class="email-n"><i class="fas fa-envelope"></i><strong>E-mail</strong>:</span> <a href="mailto:'+mail1+'" class="mail1"> <span class="principal-contato">'+mail1+'</span> <span class="adicional-contato">'+mail1Adicional+'</span> </a> <a href="mailto:'+mail2+'" class="mail2"> <span class="principal-contato">'+mail2+'</span> <span class="adicional-contato">'+mail2Adicional+'</span> </a> <a href="mailto:'+mail3+'" class="mail3"> <span class="principal-contato">'+mail3+'</span> <span class="adicional-contato">'+mail3Adicional+'</span> </a> <a href="mailto:'+mail4+'" class="mail4"> <span class="principal-contato">'+mail4+'</span> <span class="adicional-contato">'+mail4Adicional+'</span> </a> <a href="mailto:'+mail5+'" class="mail5"> <span class="principal-contato">'+mail5+'</span> <span class="adicional-contato">'+mail5Adicional+'</span> </a> </li></ul></div>');
            
        } else {
            // Clona os dados de contato do rodape e coloca no box de atendimento do topo
            $('.contatos-loja').clone().appendTo('.atendimento-inside');
        }
        
        // Adiciona cor aos icones de contatos-loja
        $('.contatos-loja i').css('color', ''+corPrimaria+'');
        $('.adicional-contato').css('color', ''+corPrimaria+'');
        $('.adicional-contato').css('border-color', ''+corPrimaria+'');
        
        // Esconde o contato caso esteja vazio
        $(".principal-contato:empty").parent().hide();
        $(".adicional-contato:empty").hide();
        
    
        
        if($('.telefone1').css('display') == 'none'){
            $('.contato-avancado .tel-tel').hide(); 
        }
        
        if($('.whatsapp1').css('display') == 'none'){
            $('.contato-avancado .tel-whatsapp').hide();    
        }
        
        if($('.skype1').css('display') == 'none'){
            $('.contato-avancado .tel-skype').hide();   
        }
        
        if($('.mail1').css('display') == 'none'){
            $('.contato-avancado .tel-mail').hide();    
        }
        
        // Adiciona link aos numeros de whatsapp
        var wp1 = $('.whatsapp1 .principal-contato').text();
        var wp1num = +wp1.replace(/[^0-9.]/g,"");
        $(".whatsapp1").attr('href', 'https://wa.me/55'+wp1num+'');
        $(".whatsapp1").attr('target', '_blank');
        
        var wp2 = $('.whatsapp2 .principal-contato').text();
        var wp2num = +wp2.replace(/[^0-9.]/g,"");
        $(".whatsapp2").attr('href', 'https://wa.me/55'+wp2num+'');
        $(".whatsapp2").attr('target', '_blank');
        
        var wp3 = $('.whatsapp3 .principal-contato').text();
        var wp3num = +wp3.replace(/[^0-9.]/g,"");
        $(".whatsapp3").attr('href', 'https://wa.me/55'+wp3num+'');
        $(".whatsapp3").attr('target', '_blank');
        
        var wp4 = $('.whatsapp4 .principal-contato').text();
        var wp4num = +wp4.replace(/[^0-9.]/g,"");
        $(".whatsapp4").attr('href', 'https://wa.me/55'+wp4num+'');
        $(".whatsapp4").attr('target', '_blank');
        
        var wp5 = $('.whatsapp5 .principal-contato').text();
        var wp5num = +wp5.replace(/[^0-9.]/g,"");
        $(".whatsapp5").attr('href', 'https://wa.me/55'+wp5num+'');
        $(".whatsapp5").attr('target', '_blank');
        
        // Valida e adiciona horario de atendimento
        if(horarioAtendimento === true){
            $('.contatos-loja').append('<ul class="moldehorario"><li class="horarioatendimento"><i class="far fa-clock"></i> Hor&aacute;rio de Atendimento</li><li class="linhahorario">'+horarioAtendimentoLinha1+'</li><li class="linhahorario">'+horarioAtendimentoLinha2+'</li><li class="linhahorario">'+horarioAtendimentoLinha3+'</li><li class="linhahorario">'+horarioAtendimentoLinha4+'</li></ul>');
        }
        
    
        // Move carrinho para dentro do novo-carrinho
        $('.novo-carrinho').append($('#cabecalho .carrinho'));
        
        
        // Limpa classes antigas e adiciona a nova
        $('.atendimento-inside .span12.visible-phone.contatos-loja').removeClass('span12').removeClass('visible-phone').addClass('contatos-loja-topo');
        
        //Remove o titulo original
        $('.contatos-loja-topo .titulo').remove();
        

        
        
    // Minha conta
        
        // Adiciona classe para manipulacao da minha conta
        $('#cabecalho').find('.bem-vindo').closest('.span8').removeClass('span8').addClass('novo-login');
        $('#cabecalho').find('.btn-group').closest('.span8').removeClass('span8').addClass('novo-login');
        
        $('#cabecalho').find('.btn-group').parent().prepend('<a href="/conta/login"><svg id="icone-user" class="icone-user-topo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" xml:space="preserve"><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083C42.677,47.979,42.567,48.054,42.459,48.132z"/></svg><div class="login-a"><span class="login-b">Minha</span><span class="login-c">Conta</span><i class="icon-angle-down"></i></div></a>');
        
        // Edita o texto padrao do login para o texto do minha conta
        var $bemvindo = $('#cabecalho .bem-vindo');
        if($bemvindo.length){
            $bemvindo.html($bemvindo.html().replace('Bem-vindo,', '<div class="login-a"><span class="login-b">Entrar ou </span><span class="login-c">Cadastrar</span><i class="icon-angle-down"></i></div>'));
            $bemvindo.html($bemvindo.html().replace('identifique-se', ''));
            $bemvindo.html($bemvindo.html().replace('para', ''));
            $bemvindo.html($bemvindo.html().replace('fazer pedidos', ''));
        }
        
        // Adiciona icone ao minha conta
        $('.bem-vindo').prepend('<svg id="icone-user" class="icone-user-topo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" xml:space="preserve"><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083C42.677,47.979,42.567,48.054,42.459,48.132z"/></svg>');
        
        // Adiciona cor ao icone de conta
        $('.icone-user-topo').css('fill', ''+corPrimaria+'');
        
        // Insere o login dentro do novo campo de minha conta do painel
        $('.novo-conta').append($('.novo-login'));
        
        // Remove/trata nome do usuario e coloca dentro da variavel para manipulacao
        var usernome = $('.novo-login .btn-group>a').text();
        var usernometrat = usernome.replace('Olá, ', '');
        
        
        
        if($('.novo-login .btn-group').length ){
            $('.novo-conta').append('<div class="dir"><div class="conta-inside"><div class="conta-esq-inside"><ul class="conta-esq"><li class="user-logo-inside"><span class="user-logo"><span class="user-logo-fora"><i class="fas fa-user"></i></span></span><span class="user-logo-nome"><span class="user-bv-1">Olá,</span><strong class="user-bv-2">'+usernometrat+'</strong></span><span class="user-logo-sair"><a href="/conta/logout">Sair</a></span></li><li class="user-logo-conta"><a href="/conta/index" class="botao grande principal">Minha Conta</a></li></ul></div><div class="conta-dir-inside"><ul class="conta-dir"><li class="conta-config login-itens"><a href="/conta/editar"><strong><i class="fas fa-cog"></i> Meus Dados</strong></a></li><li class="conta-pedidos login-itens"><a href="/conta/pedido/listar"><strong><i class="fas fa-archive"></i> Meus Pedidos</strong></a></li><li class="conta-favoritos login-itens"><a href="/conta/favorito/listar"><strong><i class="fas fa-heart"></i> Lista de Desejos</strong></a></li></ul></div></div></div>');
            
        }else{
            $('.novo-conta').append('<div class="dir"><div class="conta-inside"><div class="conta-esq-inside"><ul class="conta-esq"><li class="user-logo-inside"><span class="user-logo"><span class="user-logo-fora"><i class="fas fa-user"></i></span></span><span class="user-logo-nome"><span class="user-bv-1">Olá,</span><strong class="user-bv-2">Bem-vindo!</strong></span></li><li class="user-logo-conta"><a href="/conta/index" class="botao grande principal">Minha Conta</a></li></ul></div><div class="conta-dir-inside"><ul class="conta-dir"><li class="conta-cadastro login-itens"><a href="/conta/login"><strong><i class="fas fa-plus-circle"></i> Cadastrar</strong></a></li><li class="conta-login login-itens"><a href="/conta/login"><strong><i class="fas fa-user"></i> Entrar</strong></a></li><li class="conta-pedidos login-itens"><a href="/conta/login?next=/conta/pedido/listar"><strong><i class="fas fa-archive"></i> Meus Pedidos</strong></a></li></ul></div></div></div>');
            $('.user-bv-1').css('display', 'block');
            
        };
        
        // Adiciona cor ao botao minha conta
        $('.user-logo-conta a').css('background-color', ''+corBotoesBg+'');
        
        // Remove o antigo grupo logado
        $('.novo-login .btn-group').remove();
        
        // Adiciona cor primária ao hover da conta
        $('.login-itens').hover(function(){
            $(this).find('strong').css('color', ''+corPrimaria+'');
            $(this).find('i').css('color', ''+corPrimaria+'');
            }, function(){
            $(this).find('strong').css('color', '#646464');
            $(this).find('i').css('color', '#646464');
        });
        
		
		$('.cabecalho-conteiner .span4.hidden-phone').remove();
        $('.cabecalho-conteiner .superior.row-fluid').remove();
        
    //
    
    // Carrinho
        
        // Remove icone do carrinho
        $('#cabecalho .carrinho').addClass('carrinho-manipula');
        
        // Remove icone do carrinho
        $('.carrinho-interno.borda-principal').removeClass('borda-principal');
    
        // Remove icone do carrinho
        $('.novo-carrinho .carrinho>a i').remove();
        
        // Adiciona icone ao carrinho
        $('.novo-carrinho .carrinho>a').prepend('<svg id="icone-carrinho" class="icone-carrinho-topo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" xml:space="preserve"><path d="M214.685,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029C259.713,423.028,239.513,402.828,214.685,402.828z M214.685,467.742c-10.966,0-19.887-8.922-19.887-19.887c0-10.966,8.922-19.887,19.887-19.887s19.887,8.922,19.887,19.887C234.572,458.822,225.65,467.742,214.685,467.742z"/><path d="M372.63,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029C417.658,423.028,397.458,402.828,372.63,402.828z M372.63,467.742c-10.966,0-19.887-8.922-19.887-19.887c0-10.966,8.922-19.887,19.887-19.887c10.966,0,19.887,8.922,19.887,19.887C392.517,458.822,383.595,467.742,372.63,467.742z"/><path d="M383.716,165.755H203.567c-6.943,0-12.571,5.628-12.571,12.571c0,6.943,5.629,12.571,12.571,12.571h180.149c6.943,0,12.571-5.628,12.571-12.571C396.287,171.382,390.659,165.755,383.716,165.755z"/><path d="M373.911,231.035H213.373c-6.943,0-12.571,5.628-12.571,12.571s5.628,12.571,12.571,12.571h160.537c6.943,0,12.571-5.628,12.571-12.571C386.481,236.664,380.853,231.035,373.911,231.035z"/><path d="M506.341,109.744c-4.794-5.884-11.898-9.258-19.489-9.258H95.278L87.37,62.097c-1.651-8.008-7.113-14.732-14.614-17.989l-55.177-23.95c-6.37-2.767-13.773,0.156-16.536,6.524c-2.766,6.37,0.157,13.774,6.524,16.537L62.745,67.17l60.826,295.261c2.396,11.628,12.752,20.068,24.625,20.068h301.166c6.943,0,12.571-5.628,12.571-12.571c0-6.943-5.628-12.571-12.571-12.571H148.197l-7.399-35.916H451.69c11.872,0,22.229-8.44,24.624-20.068l35.163-170.675C513.008,123.266,511.136,115.627,506.341,109.744z M451.69,296.301H135.619l-35.161-170.674l386.393,0.001L451.69,296.301z"/></svg>');
        
        if (window.matchMedia('screen and (max-width: 767px)').matches){
            $('.novo-carrinho .carrinho svg').css('fill', '#fff');
        }else{
            $('.novo-carrinho .carrinho svg').css('fill', ''+corPrimaria+'');
        }
        
        // Modifica textos do carrinho vazio
        $('.titulo.vazio-text').html('<span class="carrinho-vazio-titulo">Meu Carrinho</span><span class="carrinho-vazio-preco">R$ 0,00</span>');
        
        // Adiciona classe ao carrinho cheio
        $('.carrinho-manipula>a b').parent().addClass('carrinho-cheio');
        
        // Modifica texto carrinho cheio
        $('.carrinho-manipula .carrinho-cheio .titulo span').text('Meu Carrinho');
        
        // Limpa o preço antigo
        $('.carrinho-manipula .carrinho-cheio>span').html('');
        
        // Clona o total
        $(".carrinho-manipula .carrinho-rodape .carrinho-info .carrino-total strong").clone().appendTo(".carrinho-manipula .carrinho-cheio>span");
        
        // Remove o strong clonado
        $strong = $('.carrinho-manipula .carrinho-cheio>span strong');
        $strong.replaceWith($strong.html());
        
        // Atualiza preço carrinho
    
            $(document).click(function() {
        
            setTimeout(function() {
    
                    // Limpa o preço antigo
                    $('.carrinho-manipula .carrinho-cheio>span').html('');
                    
                    // Clona o total
                    $(".carrinho-manipula .carrinho-rodape .carrinho-info .carrino-total strong").clone().appendTo(".carrinho-manipula .carrinho-cheio>span");
                    
                    // Remove o strong clonado
                    $strong = $('.carrinho-manipula .carrinho-cheio>span strong');
                    $strong.replaceWith($strong.html());
                
                // Adiciona cor do botao ao ir para o carrinho
                $('.carrinho-manipula .carrinho-interno .carrinho-rodape .botao').css('background-color', ''+corBotoesBg+'');
             
            }, 2250);
            });
        
         // Adiciona cor principal a quantidade do carrinho
        $('.novo-carrinho .qtd-carrinho').css('color', ''+corPrimaria+''); 
        
        // Adiciona cor secundaria ao background da quantidade do carrinho
        $('.novo-carrinho .qtd-carrinho').css('background-color', ''+corSecundaria+''); 
        
        // Adiciona cor primaria ao total do carrinho
        $('.novo-carrinho .carrinho .carrinho-interno .carrinho-rodape .carrinho-info .carrino-total strong').css('color', ''+corPrimaria+''); 
    
    //
    

    if (typeof mostrarDesejos !== 'undefined') {
        if(mostrarDesejos === true){
            
            $('head').append($('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css">'));
            $('head').append($('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js"></script>'));
                        
            $('<a class="btn-favorite" href="#"><svg id="icon-desejos1" class="icon-desejos" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M374,31c-58.214,0-97.482,29.5-118,50.404C235.482,60.5,196.214,31,138,31C57.044,31,0,102.857,0,187.667C0,318.82,130.497,419.012,246.861,478.79c5.736,2.947,12.542,2.947,18.278,0C381.563,418.982,512,318.888,512,187.667C512,103.007,455.085,31,374,31z M256,438.449C157.865,386.596,40,297.982,40,187.667C40,126.922,78.035,71,138,71c47.307,0,84.768,27.882,101.22,52.382c3.65,5.75,9.923,9.167,16.736,9.2c6.851,0.024,13.153-3.504,16.854-9.245C273.147,122.813,307.322,71,374,71c59.978,0,98,55.945,98,116.667C472,297.913,353.928,386.705,256,438.449z"/></svg></a>').prependTo('.listagem-item'); 
                
            $('.listagem-item').each(function() {
                var a = $(this).find('.info-produto .hide.trustvox-stars').attr('data-trustvox-product-code');
                $(this).find('.btn-favorite').attr('href', '/conta/favorito/' + a + '/adicionar');
            }
            ), $(document).on('click', '.btn-favorite', function(a) {
                a.preventDefault();
                var e = $(this),
                t = e.attr('href');
                $.post(t).done(function(a) {
                    var t = JSON.parse(a);
                    "erro" === t.status ? $.alert({
                        theme: 'modern',
                        icon: 'fas fa-exclamation-triangle',
                        title: 'Produto n&atilde;o adicionado',
                        type: 'red',
                        columnClass: 'span6 offset3',
                        typeAnimated: true,    
                        boxWidth: '50%',
                        content: 'Voc&ecirc; precisa estar logado para adicionar um produto &agrave; lista.',
                    }) : ($.alert({
                        theme: 'modern',
                        icon: 'fas fa-check',
                        title: 'Produto adicionado &agrave; lista!',
                        type: 'green',
                        typeAnimated: true,    
                        boxWidth: '50%',
                        columnClass: 'span6 offset3',
                        content: 'O produto foi adicionado &agrave; lista.',
                    }));
                }
                )
            }
            )
        
        }
    }
    
    // Menu Superior
        
    // Codigo JS only desktop
    if (window.matchMedia('screen and (min-width: 768px)').matches){
        
        // Adiciona classe para manipular nivel um e remove de paginas e marcas
        $('.menu.superior .nivel-um>li').addClass('menu-manipula');
        $('.menu.superior .nivel-um>li.categoria-paginas').removeClass('menu-manipula');
        $('.menu.superior .nivel-um>li.categoria-marcas').removeClass('menu-manipula');
        
        // Cria abrigador para menu e o retira do conteiner, deixando-o de ponta a ponta
        $('#cabecalho').append('<div class="abriga-menu"><div class="conteiner"></div></div>');
        $('.abriga-menu .conteiner').append($('.menu.superior'));
        
        // Adiciona cor primaria ao menu
        $('.abriga-menu').css('background-color', ''+corPrimaria+''); 
        
        // Ativa os icones no menu superior
        if(iconesMenu === true){
            
            // Checa se os icones possuem imagens e adiciona icones ao menu superior
            if(icone1Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(1)>a').prepend('<span class="icone-menu-1 icone-menu"><img src="'+icone1Menusuperior+'"></span>');};
            if(icone2Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(2)>a').prepend('<span class="icone-menu-2 icone-menu"><img src="'+icone2Menusuperior+'"></span>');};
            if(icone3Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(3)>a').prepend('<span class="icone-menu-3 icone-menu"><img src="'+icone3Menusuperior+'"></span>');};
            if(icone4Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(4)>a').prepend('<span class="icone-menu-4 icone-menu"><img src="'+icone4Menusuperior+'"></span>');};
            if(icone5Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(5)>a').prepend('<span class="icone-menu-5 icone-menu"><img src="'+icone5Menusuperior+'"></span>');};
            if(icone6Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(6)>a').prepend('<span class="icone-menu-6 icone-menu"><img src="'+icone6Menusuperior+'"></span>');};
            if(icone7Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(7)>a').prepend('<span class="icone-menu-7 icone-menu"><img src="'+icone7Menusuperior+'"></span>');};
            if(icone8Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(8)>a').prepend('<span class="icone-menu-8 icone-menu"><img src="'+icone8Menusuperior+'"></span>');};
            if(icone9Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(9)>a').prepend('<span class="icone-menu-9 icone-menu"><img src="'+icone9Menusuperior+'"></span>');};
            if(icone10Menusuperior.length > 10){$('.menu.superior .nivel-um>li.menu-manipula:nth-child(10)>a').prepend('<span class="icone-menu-10 icone-menu"><img src="'+icone10Menusuperior+'"></span>');};
            
            if(iconePaginas.length > 10){$('.menu.superior .nivel-um>li.categoria-paginas>a').prepend('<span class="icone-menu-paginas icone-menu"><img src="'+iconePaginas+'"></span>');};
            if(iconeMarcas.length > 10){$('.menu.superior .nivel-um>li.categoria-marcas>a').prepend('<span class="icone-menu-marcas icone-menu"><img src="'+iconeMarcas+'"></span>');};
            
            // Adiciona posicao dos icones lateral ou superior
            if(posicaoiconesMenu === 1){
                $('.menu.superior .nivel-um>li>a').addClass('icone-lateral');
            } else if(posicaoiconesMenu === 2){
                $('.menu.superior .nivel-um>li>a').addClass('icone-superior');
            } 
    
        }
        
        // Limitador de categorias no menu superior
        var categoriasoma = categoriasMenu + 1;
        $('.menu.superior .nivel-um>li:nth-of-type(1n+'+categoriasoma+')').css("display", "none");
    
        // Ativa os produtos no menu
        if(produtosMenu === true){
            $('.menu.superior .nivel-um>li .nivel-dois').addClass('menu-com-produtos');
        } else {
            $('.menu.superior .nivel-um>li .nivel-dois').addClass('menu-sem-produtos');
        }
        
        
        // Cria box para as categorias do submenu
        $('.menu.superior .nivel-um>li .nivel-dois').wrapInner('<div class="menu-categorias"><div class="menu-categorias-inside"><div class="menu-categorias-lista"></div></div></div>');
        
        // Cria box para os produtos do submenu
        $('.menu.superior .nivel-um>li .nivel-dois.menu-com-produtos').append('<div class="menu-produtos"><div class="menu-produtos-inside"><div id="listagemProdutos" class="listagem"><ul><li class="listagem-linha"></li></ul></div></div></div>');
        
        // Cria box especifico para produto do submenu
        $('.menu-produtos .menu-produtos-inside .listagem ul li').append('<ul class="menu-produto-1"></ul>');
    
        // Adiciona produto destaque ao submenu
        $('.menu.superior .nivel-um>li').each(function(index){      
        var $this = $(this);
        var linkCat = $($this).find('a').clone().attr('href');
        $this.find('.menu-produtos-inside .listagem ul li ul.menu-produto-1').load(''+linkCat+' .listagem .listagem-linha:first-child ul li:first-child');
        }); 
        
        // Adiciona o titulo da categoria ao submenu
        $('.menu.superior .nivel-um>li').each(function(index){      
        var $this = $(this);
        var $textoCat = $($this).find('a strong.titulo').clone();
        $this.find('.nivel-dois .menu-categorias .menu-categorias-inside').prepend($('<span class="titulo-categoria"></span>'));
        $this.find('.nivel-dois .menu-categorias .menu-categorias-inside .titulo-categoria').prepend($textoCat);
        });  
        
        // Adiciona cor primaria ao titulo do submenu
        $('.menu.superior .nivel-um>li .nivel-dois .menu-categorias .menu-categorias-inside .titulo-categoria strong').css('color', ''+corPrimaria+'');    
        
        // Adiciona box destaque no produto do submenu
        $('.menu.superior .nivel-um>li .nivel-dois.menu-com-produtos .menu-produtos .menu-produtos-inside .listagem ul li').append('<div class="produto-menu-destaque"><span class="tema-cor-secundaria-bg"><i class="fas fa-medal tema-cor-primaria-color"></i><strong class="tema-cor-primaria-color">Destaque</strong></span></div>');
        
        // Adiciona cor ao box destaque
        $('.produto-menu-destaque span').css('background-color', ''+corSecundaria+'');  
        $('.produto-menu-destaque i').css('color', ''+corPrimaria+'');  
        $('.produto-menu-destaque strong').css('color', ''+corPrimaria+'');  
        
        // Adiciona hover no nivel um ao entrar no nivel dois
        $('.menu.superior .nivel-um>li .nivel-dois').hover(function(){
            $(this).siblings().toggleClass('hover-submenu');
        })
       
        $('.menu.superior .nivel-um>li.categoria-paginas .nivel-dois.menu-com-produtos').removeClass('menu-com-produtos').addClass('menu-sem-produtos');
        $('.menu.superior .nivel-um>li.categoria-marcas .nivel-dois.menu-com-produtos').removeClass('menu-com-produtos').addClass('menu-sem-produtos');
        
        $('.menu.superior .nivel-um>li.categoria-paginas .nivel-dois .menu-produtos').remove();
        $('.menu.superior .nivel-um>li.categoria-marcas .nivel-dois .menu-produtos').remove();

        
        // Ativa o todos os departamentos
        if(departamentos === true){
            // Cria e adiciona o todos os departamentos no menu superior
            $('.menu.superior .nivel-um').append('<li class="todos-departamentos com-filho"><a href="#" title="'+tituloDepartamentos+'"><svg class="icone-menu-departamentos" id="icone-departamentos" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 459 459"  xml:space="preserve"><path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"/></svg><strong class="titulo">'+tituloDepartamentos+'</strong><i class="icon-chevron-down"></i></a><ul class="nivel-dois"></ul></li>');
            
            // Clona as categorias do menu superior e coloca no todos os departamentos
            $('.menu.superior .nivel-um>li.menu-manipula').clone().appendTo('.todos-departamentos>ul');
            
            // Adiciona posicao dos icones lateral ou superior ao todos os departamentos
            if(posicaoiconesMenu === 1){
                $('.menu.superior .nivel-um .todos-departamentos>a').addClass('icone-lateral');
            } else if(posicaoiconesMenu === 2){
                $('.menu.superior .nivel-um .todos-departamentos>a').addClass('icone-superior');
            } 
            
            // Remove os icones e o todos os departamentos duplicado de todos os departamentos
            $('.menu.superior>ul .todos-departamentos>ul>li>a span').remove();
            $('.menu.superior>ul .todos-departamentos>ul>li.todos-departamentos').remove();
            
            // Limpa o que foi clonado e nao sera utilizado em todos os departamentos
            $('.menu.superior>ul .todos-departamentos .nivel-dois.menu-com-produtos .menu-produtos').remove();
            $('.menu.superior>ul .todos-departamentos .nivel-dois.menu-com-produtos').removeClass('menu-com-produtos');
            $('.menu.superior>ul .todos-departamentos .nivel-dois .menu-categorias .menu-categorias-inside .titulo-categoria').remove();
            $('.menu.superior>ul .todos-departamentos .nivel-dois .menu-categorias .menu-categorias-lista li ul').remove();
            
            // Adiciona cor primaria ao titulo do nivel dois do todas as categorias
            $('.menu.superior>ul .todos-departamentos .nivel-dois>li>a strong').css('color', ''+corPrimaria+'');  
    
        }
        
        // Remove nivel quatro em diante do submenu
        $('.menu.superior .nivel-um>li .nivel-dois li>.nivel-tres li.com-filho .nivel-tres').remove();
        
        // Adiciona efeito no nivel tres em diante
        var itemtres = $('.menu.superior .nivel-um>li .nivel-dois li>.nivel-tres');
        $('.menu.superior .nivel-um>li .nivel-dois .menu-categorias .menu-categorias-lista>li').hover(function (){
            setTimeout(function () {
                itemtres.addClass('is-open');
            }, 20);},
            function() {
                itemtres.removeClass('is-open');
            }
        );
       
        // Adiciona efeito no nivel dois
        var itemdois = $('.menu.superior .nivel-um>li .nivel-dois');
        $('.menu.superior .nivel-um>li.com-filho').hover(function (){
        	
        	var divHeight = $('.menu.superior').height(); 
            setTimeout(function () {
                itemdois.addClass('is-open-1').css('top', +divHeight+'px');
            }, 20);},
            function() {
                itemdois.removeClass('is-open-1').css('top', '80px');
            }
        );
 
        
    //

    
    } // Fim only desktop
    
    // Altera titulo das paginas e marcas do menu superior
    $('.menu.superior .categoria-paginas .titulo').text(''+tituloPaginas+'');
    $('.menu.superior .categoria-marcas .titulo').text(''+tituloMarcas+'');    
    $('.menu .nivel-dois .com-filho i.fundo-secundario').removeClass('fundo-secundario')
    
  
    //Banners
    
        // adiciona abrigador ao full banner e remove span12 padrao
        $('.banner.cheio .span12').removeClass('span12').addClass('abriga-fullbanner');
        
        // adiciona abrigador ao banner tarja
        $('.banner.tarja').parent().addClass('abriga-bannertarja').removeClass('hidden-phone');
        $('.secao-banners .conteiner').append($('.banner.mini-banner'));
        
        // Modelos de mini banner
        if(miniBanners === 2){
            $(".modulo.span4:nth-child(3)").remove();
            $('.modulo.span4').removeClass('span4').addClass('span6');
        }
        
        $('.mini-banner .modulo:nth-child(1) img, .mini-banner .modulo:nth-child(2) img, .mini-banner .modulo:nth-child(3) img').each(function(){
            $(this).attr('src', $(this).attr('src').replace('/400x400', ''));
        })
        
        // Banner Full
        if ($('.info-banner.titulo:contains("Full")').length > 0) {
	        $('.secao-banners').prepend($('.banner.cheio'));
	        $('.pagina-inicial .secao-banners').css('padding-top', '0px'); 
	        $('.abriga-fullbanner .flexslider .slides img').css('border', 'none'); 
	        $('.abriga-fullbanner .flexslider .slides img').css('border-radius', '0');
	        $('.flexslider').css('border-radius', '0'); 
        }
        
        if ($('.info-banner.titulo:contains("Full")').length > 0) {
	        $('.secao-banners').prepend($('.banner.cheio'));
	        $('.pagina-inicial .secao-banners').css('padding-top', '0px'); 
	        $('.abriga-fullbanner .flexslider .slides img').css('border', 'none'); 
	        $('.abriga-fullbanner .flexslider .slides img').css('border-radius', '0');
	        $('.flexslider').css('border-radius', '0'); 
        }
        
        if (typeof bannerListagem !== 'undefined') {
        	
        	if(bannerListagem === true){
        		
        		$('#corpo .listagem .titulo-categoria.vitrine-'+bannerlistagemId+'').next().after('<div id="bannerListagem"><div class="banners-listagem"></div></div>');
        		
        		if(bannerListagem1 != ''){
        			$('#bannerListagem .banners-listagem').append('<div class="banners-listagem1 banner-listagem"><a href="'+bannerListagemLink1+'"><img src="'+bannerListagem1+'"></a></div>');
                }
                if(bannerListagem2 != ''){
        			$('#bannerListagem .banners-listagem').append('<div class="banners-listagem2 banner-listagem"><a href="'+bannerListagemLink2+'"><img src="'+bannerListagem2+'"></a></div>');
                }
                if(bannerListagem3 != ''){
        			$('#bannerListagem .banners-listagem').append('<div class="banners-listagem3 banner-listagem"><a href="'+bannerListagemLink3+'"><img src="'+bannerListagem3+'"></a></div>');
                }
        		
        		
        	}
        	
        }

        
        
        $(".info-banner.titulo").remove();
        
        // Cria regra caso a pagina tenha breadcrumbs
        
        if ($('.breadcrumbs').length ) {
        
            $('#corpo').prepend($('.secao-banners'));   
            
        }
        
        if(miniBannersMobile === true){
            
            $('.pagina-inicial .row-fluid.banner.mini-banner.hidden-phone').removeClass('hidden-phone');
            
        }
        
        if(tarjaMobile === false){
            
            $('.abriga-bannertarja').addClass('hidden-phone');
            
        }

    //
    
    //Ofertas
        
    // Ativa/desativa ofertas
        if(ofertas === true){
        	
        	if ($('.pagina-inicial').length){
        		
            // Ativa ofertas na pagina inicial
    
                // Cria o box da oferta
                $('.pagina-inicial .conteudo>.row-fluid').prepend('<div id="listagemProdutos" class="listagem ofertas-listagem"><div class="ofertas-box"><div class="ofertas-inside"></div></div></div>');
                
                // Captura a categoria desejada e aplica no box
                var ofs = $('.titulo-categoria.vitrine-'+categoriaOfertas+'').next();
                $('.ofertas-box .ofertas-inside').append(ofs);
                
                // Remove o titulo da categoria
                $('.titulo-categoria.vitrine-'+categoriaOfertas+'').remove();
                
                // Adiciona o timer a oferta na pagina inicial
                $('.ofertas-box .ofertas-inside').prepend('<div class="ofertas-timer"><div class="countdown-ofertas"><div class="texto-ofertas"><span>'+textoOfertas+'</span></div><ul><li class="countdown-dias"><span id="days" class="tempo-a"></span><span class="tempo-b">dias</span></li><li class="countdown-horas"><span id="hours" class="tempo-a"></span><span class="tempo-b">hrs</span></li><strong>:</strong><li class="countdown-minutos"><span id="minutes" class="tempo-a"></span><span class="tempo-b">min</span></li><strong>:</strong><li class="countdown-segundos"><span id="seconds" class="tempo-a"></span><span class="tempo-b">seg</span></li></ul></div></div>');
                
                // Adiciona cor ao contador de ofertas
                $('.countdown-ofertas li').css('background-color', ''+corPrimaria+'');  
                
                // Adicionar destaque as ofertas
                $('.ofertas-box .listagem-linha li .listagem-item').append('<div class="ofertas-destaque"><i class="fas fa-star"></i><strong>'+textoOfertaDestaque+'</strong></div>');
                
                // Adicionar cor ao destaque
                $('.ofertas-destaque').css('background-color', ''+corPrimaria+'');
                $('.ofertas-destaque i').css('color', ''+corSecundaria+'');
            
            
	            // Timer
	
	            const second = 1000,minute = second * 60,hour = minute * 60,day = hour * 24;
	            let countDown = new Date(''+timerTempo+'').getTime(),x = setInterval(function() {
	            
	            let now = new Date().getTime(),distance = countDown - now;
	            
	            document.getElementById('days').innerText = Math.floor(distance / (day)),
	            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
	            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
	            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
	                  
	                  if (distance < 0) {
	                    $(".ofertas-timer").html('');
	                  }
	                }, second)
	            
	        	}
        	
        	if ($('.pagina-produto').length){
        		
        	}

        }
        
        if (typeof videoYoutube !== 'undefined') {
            if(videoYoutube === true){

                var yt = videoLink.match("[\?&]v=([^&#]*)")[1];	
                $('.pagina-inicial #corpo').after($('<div id="videoYoutube"> <div class="conteiner"> <div class="row-fluid"> <div class="span12"> <div class="titulo-categoria"> <strong><i class="fab fa-youtube"></i>'+tituloVideo+'</strong> </div><div class="abriga-video"> <span><iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+yt+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span> </div></div></div></div></div>'));
            	
            	$('#videoYoutube .titulo-categoria').css('color', ''+corPrimaria+'');  
            	
              
            }
        }
    
    //
    
    

        //Adiciona subtitulo as vitrines
        $('.listagem .titulo-categoria').append('<span class="subtitulo-geral">'+tituloGeral+'</span>');
        $('.listagem .titulo-categoria.vitrine-lancamento').append('<span>'+tituloLancamentos+'</span>');
        $('.listagem .titulo-categoria.vitrine-mas-vendido').append('<span>'+tituloVendidos+'</span>');
        $('.listagem .titulo-categoria.vitrine-destaque').append('<span>'+tituloDestaques+'</span>');
        //Remove subtitulo geral das listagens lancamentos, mais vendidos e destaques
        $('.listagem .titulo-categoria.vitrine-lancamento .subtitulo-geral').remove();
        $('.listagem .titulo-categoria.vitrine-mas-vendido .subtitulo-geral').remove();
        $('.listagem .titulo-categoria.vitrine-destaque .subtitulo-geral').remove();
    
        // Adiciona cores do tema aos precos
        $('.preco-parcela strong').css('color', ''+corPrimaria+'');
        $('.preco-a-partir strong').css('color', ''+corPrimaria+'');  
        
        
        //Atualiza os textos das bandeiras e do pagamento a vista
        var $bandeirapromo = $('.bandeiras-produto>.bandeira-promocao');
        var $avista = $('.desconto-a-vista');
    
        function updateText(){
            if($bandeirapromo.length){ 
                $.each( $bandeirapromo, function(){
                    $(this).html( $(this).html().replace(' Desconto', ''+descontoDepois+'') );
                });
            } 
            if($avista.length){ 
                $.each( $avista, function(){
                    $(this).html( $(this).html().replace('ou', '') );
                    $(this).html( $(this).html().replace('via Pagamento na entrega', '<span>'+textoEntrega+'</span>') );
                    $(this).html( $(this).html().replace('via Boleto Bancário', '<span>'+textoBoleto+'</span>') );
                    $(this).html( $(this).html().replace('via Depósito', '<span>'+textoDeposito+'</span>') );
                });
            }    
        }
        updateText();
        $(document).ajaxComplete(function() {
        updateText();
        });
        
        // Adiciona icone no preco a vista
        if(iconeAvista === true){
            $('.desconto-a-vista').prepend('<svg id="icone-avista" class="icone-listagem-avista" viewBox="0 -86 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m396 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m356 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m316 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m276 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m236 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m196 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m156 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m116 260c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m482 0h-452c-16.542969 0-30 13.457031-30 30v280c0 16.542969 13.457031 30 30 30h452c16.542969 0 30-13.457031 30-30v-280c0-16.542969-13.457031-30-30-30zm10 310c0 5.515625-4.484375 10-10 10h-452c-5.515625 0-10-4.484375-10-10v-280c0-5.515625 4.484375-10 10-10h452c5.515625 0 10 4.484375 10 10zm0 0"/><path d="m76 60c-5.523438 0-10 4.476562-10 10v200c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-200c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m116 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m156 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m196 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m236 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m276 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m316 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m356 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m396 60c-5.523438 0-10 4.476562-10 10v160c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm0 0"/><path d="m436 60c-5.523438 0-10 4.476562-10 10v200c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-200c0-5.523438-4.476562-10-10-10zm0 0"/></svg>');
            
            // Adiciona cores no preco a vista
            $('.desconto-a-vista').css('color', ''+corAvista+'');
            $('.desconto-a-vista strong').css('color', ''+corAvista+'');
            $('.icone-listagem-avista').css('fill', ''+corAvista+'');
            
        }
        
        $('.smarthint .listagem .titulo-categoria strong a').remove();
     
        
        // Adiciona icone na bandeira de pagamento
        $('.bandeira-promocao').prepend($('<i class="fas fa-caret-down"></i>'));
        
        //Adiciona seletor de quantidade a listagem
        $(document).on("change keyup focusout", ".qtde-adicionar-carrinho .qtde-carrinho", function() {
            var d = $(this).val();
            var c = $(this).parent().siblings(".botao-comprar");
                c.attr("href", c.attr("href").replace(/adicionar.*/g, "adicionar/" + d))
        }) 
        
        $('.listagem-item').find('.botao-comprar-ajax').closest('.acoes-produto').prepend('<div class="qtde-adicionar-carrinho"><input type="number" min="1" value="1" class="qtde-carrinho" name="qtde-carrinho"></div>');
        
        
        $('.listagem-item .botao-comprar-ajax').html('<i class="fas fa-shopping-cart"></i> Adicionar');
        $('.listagem-item .botao-comprar-ajax').attr("data-loading-text", "<i class='icon-refresh icon-animate'></i> Adicionando");        
            
        $('<div class="quantity-nav"><div class="quantity-button quantity-up botao-quantidade"><i>+</i></div><div class="quantity-button quantity-down botao-quantidade"><i>-</i></div></div>').insertAfter('.qtde-carrinho');
        $('.qtde-adicionar-carrinho').each(function() {
          var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
    
          btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
          btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });
    
        });
        
        // Cria abrigador para conteudo do botao hover de compras da listagem
        $('.listagem-item .acoes-produto').wrapInner('<div class="abriga-seletor"></div>');
        
        
        // Adiciona classe para manipular prec sob consulta
        $('.listagem-item .preco-produto .titulo:contains("Preço sob consulta")').parent().addClass('nova-consulta');
        $('.nova-consulta').css('color', ''+corPrimaria+'');
        

      // Listagem de produtos
      if ($('.listagem').length) {

		!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
		
		
		$('.listagem .produtos-carrossel .listagem-item').unwrap().unwrap().unwrap().unwrap();
		$('.listagem .produtos-carrossel .flex-nav-prev').remove();
		$('.listagem .produtos-carrossel .flex-nav-next').remove();
		$('.listagem .produtos-carrossel .flex-direction-nav').remove();
		
        if (typeof vitrineProdutos !== 'undefined') {
            $(window).on("load", function() {

                $('.listagem .produtos-carrossel').owlCarousel({
                    loop:true,
                    nav: true,
                    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
                    dots: false,
                    autoplay: vitrineAutoplay,
                    autoplaySpeed: vitrineAutoplaySpeed,
                    responsiveClass:true,
                    responsive:{
                        1025:{
                            items:vitrineProdutos,
                        },
                        769:{
                            items:3,
                        },
                        301:{
                            items:vitrineMobile,
                        },
                        0:{
                            items:1,
                        },
                        

                    }
                });
                
            });

        }else{
            $(window).on("load", function() {

                $('.listagem .produtos-carrossel').owlCarousel({
                    loop:true,
                    nav: true,
                    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
                    dots: false,
                    autoplay: false,
                    responsiveClass:true,
                    responsive:{
                        1025:{
                            items:4,
                        },
                        769:{
                            items:3,
                        },
                        301:{
                            items:2,
                        },
                        0:{
                            items:1,
                        },
                        

                    }
                });
                
            });
        }
		

    }
    
      if (typeof depoimentos !== 'undefined') {
    	
    	if(depoimentos === true){
    		
    		$('.pagina-inicial #corpo').after($('<div id="depoimentos"> <div class="conteiner"> <div class="row-fluid"> <div class="span12"> <div class="titulo-categoria cor-principal"> <i class="fas fa-star"></i> <strong>'+tituloDepoimentos+'</strong> </div><div class="abriga-depoimentos"> <div class="depoimento1 dep"> <a href="'+linkDepoimento1+'" target="_blank"> <div class="dep-nome">'+nomeDepoimento1+'</div><div class="dep-local">'+localDepoimento1+'</div><div class="dep-msg">'+MsgDepoimento1+'</div><div class="dep-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></a> </div><div class="depoimento2 dep"> <a href="'+linkDepoimento2+'" target="_blank"> <div class="dep-nome">'+nomeDepoimento2+'</div><div class="dep-local">'+localDepoimento2+'</div><div class="dep-msg">'+MsgDepoimento2+'</div><div class="dep-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></a> </div><div class="depoimento3 dep"> <a href="'+linkDepoimento3+'" target="_blank"> <div class="dep-nome">'+nomeDepoimento3+'</div><div class="dep-local">'+localDepoimento3+'</div><div class="dep-msg">'+MsgDepoimento3+'</div><div class="dep-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></a> </div><div class="depoimento4 dep"> <a href="'+linkDepoimento4+'" target="_blank"> <div class="dep-nome">'+nomeDepoimento4+'</div><div class="dep-local">'+localDepoimento4+'</div><div class="dep-msg">'+MsgDepoimento4+'</div><div class="dep-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></a> </div><div class="depoimento5 dep"> <a href="'+linkDepoimento5+'" target="_blank"> <div class="dep-nome">'+nomeDepoimento5+'</div><div class="dep-local">'+localDepoimento5+'</div><div class="dep-msg">'+MsgDepoimento5+'</div><div class="dep-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></a> </div><div class="depoimento6 dep"> <a href="'+linkDepoimento6+'" target="_blank"> <div class="dep-nome">'+nomeDepoimento6+'</div><div class="dep-local">'+localDepoimento6+'</div><div class="dep-msg">'+MsgDepoimento6+'</div><div class="dep-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div></a> </div></div></div></div></div></div>'));
    		
    		$('.dep-nome').css('color', ''+corPrimaria+''); 
    		$('#depoimentos .dep').css('border-bottom-color', ''+corPrimaria+''); 
    		
    		if(MsgDepoimento1 == ''){$('.depoimento1').remove();}
    		if(MsgDepoimento2 == ''){$('.depoimento2').remove();}
    		if(MsgDepoimento3 == ''){$('.depoimento3').remove();}
    		if(MsgDepoimento4 == ''){$('.depoimento4').remove();}
    		if(MsgDepoimento5 == ''){$('.depoimento5').remove();}
    		if(MsgDepoimento6 == ''){$('.depoimento6').remove();}
    		
    		if(estrelas === false){
    			
    			$('.dep-star').remove();
    		}
    		
    		$(window).on("load", function() {

				$('.abriga-depoimentos').owlCarousel({
				    loop:true,
				    dots: false,
			    	autoplay: true,
		            autoplaySpeed: 3000,
		            autoplayHoverPause: true,
		            nav: true,
		            navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
				    responsiveClass:true,
				    responsive:{
				        1025:{
				            items:3,
				        },
				        769:{
				            items:2,
				        },
				        0:{
				            items:1,
				        },
				        
		
				    }
				});
			
			});

    		
    	}
    	
    }
    
        
    
    //
    
    // Codigo JS only desktop
    if (window.matchMedia('screen and (min-width: 769px)').matches){
        
    // Menu Flutuante
    
    if(menuFlutuante === true){
    	var cabeheight = $('#cabecalho').height(); 
        if ($('.pagina-carrinho').length === 0) {
            if ($('.menu.superior').length ) {
                	$("body").css("padding-top", +cabeheight+"px");
            $('#cabecalho').css({"position": "fixed", "z-index": "201"});
            }
    
        var num = 0;
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('#cabecalho').addClass('fixed');
            } else {
                $('#cabecalho').removeClass('fixed');
            }});
        }
    } 
    
    //  
    
    // Voltar ao topo
    
    if(voltaraoTopo === true){
    
      $('body').prepend('<a href="javascript:" id="return-to-top"><i class="icon-chevron-up"></i></a>');
      $('#return-to-top i').css('color', ''+corPrimaria+'');
      
      
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {       
            $('#return-to-top').fadeIn(200);   
        } else {
            $('#return-to-top').fadeOut(200);  
        }
      });
      $('#return-to-top').click(function() {     
        $('body,html').animate({
            scrollTop : 0                      
        }, 500);
      });
    
    } 
    
    //
    
    } // Encerra código only desktop
    
    
    


// Instagram
function feed(){

	if( $('.pagina-inicial').length ){	
	
	if( $('#barraNewsletter').length ){	
      $('.pagina-inicial #barraNewsletter').before('<div id="feedinstagram2"> <div class="conteiner"> <div class="row-fluid"> <div class="case-instagram"> <div id="instagram-feed1"></div></div></div></div></div>');
    }else{
		$('.pagina-inicial #rodape').before('<div id="feedinstagram2"> <div class="conteiner"> <div class="row-fluid"> <div class="case-instagram"> <div id="instagram-feed1"></div></div></div></div></div>');
    }

    (function(a){function b(a){return a.replace(/[&<>"'`=\/]/g,function(a){return e[a]})}var c={host:"https://www.instagram.com/",username:"",tag:"",container:"",display_profile:!0,display_biography:!0,display_gallery:!0,display_igtv:!1,get_data:!1,callback:null,styling:!0,items:8,items_per_row:4,margin:.5,image_size:640},d={150:0,240:1,320:2,480:3,640:4},e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};a.instagramFeed=function(e){var f=a.fn.extend({},c,e);if(""==f.username&&""==f.tag)return console.error("Instagram Feed: Error, no username or tag found."),!1;if("undefined"!=typeof f.get_raw_json&&(console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead"),f.get_data=f.get_raw_json),!f.get_data&&""==f.container)return console.error("Instagram Feed: Error, no container found."),!1;if(f.get_data&&null==f.callback)return console.error("Instagram Feed: Error, no callback defined to get the raw json"),!1;var g=""==f.username,h=g?f.host+"explore/tags/"+f.tag+"/":f.host+f.username+"/";return a.get(h,function(c){try{c=c.split("window._sharedData = ")[1].split("</script>")[0]}catch(a){return void console.error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26")}if(c=JSON.parse(c.substr(0,c.length-1)),c=c.entry_data.ProfilePage||c.entry_data.TagPage,"undefined"==typeof c)return void console.error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25");if(c=c[0].graphql.user||c[0].graphql.hashtag,f.get_data)return void f.callback(c);var e={profile_container:"",profile_image:"",profile_name:"",profile_biography:"",gallery_image:""};if(f.styling){e.profile_container=" style='text-align:center;'",e.profile_image=" style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'",e.profile_name=" style='font-size:1.2em;'",e.profile_biography=" style='font-size:1em;'";var h=(100-2*f.margin*f.items_per_row)/f.items_per_row;e.gallery_image=" style='margin:"+f.margin+"% "+f.margin+"%;width:"+h+"%;float:left;'"}var j="";f.display_profile&&(j+="<div class='instagram_profile'"+e.profile_container+">",j+="<img class='instagram_profile_image' src='"+c.profile_pic_url+"' alt='"+(g?c.name+" tag pic":c.username+" profile pic")+"'"+e.profile_image+" />",j+=g?"<p class='instagram_tag'"+e.profile_name+"><a href='https://www.instagram.com/explore/tags/"+f.tag+"' rel='noopener' target='_blank'>#"+f.tag+"</a></p>":"<p class='instagram_username'"+e.profile_name+">@"+c.full_name+" (<a href='https://www.instagram.com/"+f.username+"' rel='noopener' target='_blank'>@"+f.username+"</a>)</p>",!g&&f.display_biography&&(j+="<p class='instagram_biography'"+e.profile_biography+">"+c.biography+"</p>"),j+="</div>");var k="undefined"==typeof d[f.image_size]?d[640]:d[f.image_size];if(f.display_gallery)if("undefined"!=typeof c.is_private&&!0===c.is_private)j+="<p class='instagram_private'><strong>This profile is private</strong></p>";else{var l=(c.edge_owner_to_timeline_media||c.edge_hashtag_to_media).edges;s=l.length>f.items?f.items:l.length,j+="<div class='instagram_gallery'>";for(var m=0;m<s;m++){var n,o,p,q="https://www.instagram.com/p/"+l[m].node.shortcode;switch(l[m].node.__typename){case"GraphSidecar":o="sidecar",n=l[m].node.thumbnail_resources[k].src;break;case"GraphVideo":o="video",n=l[m].node.thumbnail_src;break;default:o="image",n=l[m].node.thumbnail_resources[k].src;}p="undefined"!=typeof l[m].node.edge_media_to_caption.edges[0]&&"undefined"!=typeof l[m].node.edge_media_to_caption.edges[0].node&&"undefined"!=typeof l[m].node.edge_media_to_caption.edges[0].node.text&&null!==l[m].node.edge_media_to_caption.edges[0].node.text?l[m].node.edge_media_to_caption.edges[0].node.text:"undefined"!=typeof l[m].node.accessibility_caption&&null!==l[m].node.accessibility_caption?l[m].node.accessibility_caption:(g?c.name:c.username)+" image "+m,j+="<a href='"+q+"' class='instagram-"+o+"' rel='noopener' target='_blank'>",j+="<img src='"+n+"' alt='"+b(p)+"'"+e.gallery_image+" />",j+="</a>"}j+="</div>"}if(f.display_igtv&&"undefined"!=typeof c.edge_felix_video_timeline){var r=c.edge_felix_video_timeline.edges,s=r.length>f.items?f.items:r.length;if(0<r.length){j+="<div class='instagram_igtv'>";for(var m=0;m<s;m++)j+="<a href='https://www.instagram.com/p/"+r[m].node.shortcode+"' rel='noopener' target='_blank'>",j+="<img src='"+r[m].node.thumbnail_src+"' alt='"+f.username+" instagram image "+m+"'"+e.gallery_image+" />",j+="</a>";j+="</div>"}}a(f.container).html(j)}).fail(function(a){console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ",a.status)}),!0}})(jQuery);
	
	if( $('#rodape .icon-instagram').length ){
		var ia = $('#rodape .lista-redes .icon-instagram').parent().attr('href');
		var ib = ia.split("/").pop();
	}
			
	$(window).on('load', function(){
        $.instagramFeed({
            'username': ib,
            'container': "#instagram-feed1",
            'display_profile': true,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': false,
            'items': 6,
            'items_per_row': 6,
            'margin': 1 
        });
        
	});
}

};

if (typeof instagram !== 'undefined') {
	if(instagram === true){
		feed();
	};
}else{
	if(feedInstagram === true){
		feed();
	};
}
	
	
	
    // Marcas
    	
    	if( $('.marcas.hidden-phone').length ){
	        if( $('#barraNewsletter').length ){
	            $('#barraNewsletter').before('<div class="abriga-marcas hidden-phone"><div class="conteiner"></div></div>');
	        }else{
	            $('#rodape').before('<div class="abriga-marcas hidden-phone"><div class="conteiner"></div></div>');
	        }
    	}
        
        $('.abriga-marcas .conteiner').append($('.marcas.hidden-phone'));
        
        
    
    // Newsletter
    
        // Adiciona icone ao newsletter
        $('#barraNewsletter .componente.newsletter .titulo').prepend('<span class="icone-newsletter2"><svg class="icone-newsletter" id="icone-newsletter" xmlns="http://www.w3.org/2000/svg" viewBox="0 -76 512 512"><path d="m190 240c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m482 0h-392c-16.671875 0-30 13.59375-30 30v30h-30c-16.542969 0-30 13.457031-30 30v240c0 16.542969 13.457031 30 30 30h392c16.542969 0 30-13.457031 30-30v-30h30c16.578125 0 30-13.460938 30-30v-240c0-16.539062-13.433594-30-30-30zm-387.859375 280 129.3125-129.3125 43.0625 35.78125c5.648437 4.8125 12.554687 7.222656 19.460937 7.222656 6.921876 0 13.84375-2.417968 19.5-7.253906l39.863282-33.246094 132.050781 126.808594zm198.476563-108.878906c-.039063.03125-.078126.0625-.117188.097656-3.773438 3.242188-9.253906 3.25-13.03125.011719-.039062-.035157-.078125-.070313-.117188-.101563-5.652343-4.695312-176.210937-146.449218-181.855468-151.140625h376.332031c-5.433594 4.53125-177.328125 147.890625-181.210937 151.132813zm-84.609376-33.269532-128.007812 128.003907v-234.390625zm152.785157 2.453126 131.207031-109.417969v235.414062zm71.207031 189.695312c0 5.515625-4.484375 10-10 10h-392c-5.515625 0-10-4.484375-10-10v-240c0-5.515625 4.484375-10 10-10h30v190c0 16.574219 13.425781 30 30 30h342zm0 0"/><path d="m382 240h-152c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h152c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/></svg></span>');
        
        $('.coluna .componente.newsletter .titulo').prepend('<span class="icone-newsletter2"><svg class="icone-newsletter" id="icone-newsletter" xmlns="http://www.w3.org/2000/svg" viewBox="0 -76 512 512"><path d="m190 240c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m482 0h-392c-16.671875 0-30 13.59375-30 30v30h-30c-16.542969 0-30 13.457031-30 30v240c0 16.542969 13.457031 30 30 30h392c16.542969 0 30-13.457031 30-30v-30h30c16.578125 0 30-13.460938 30-30v-240c0-16.539062-13.433594-30-30-30zm-387.859375 280 129.3125-129.3125 43.0625 35.78125c5.648437 4.8125 12.554687 7.222656 19.460937 7.222656 6.921876 0 13.84375-2.417968 19.5-7.253906l39.863282-33.246094 132.050781 126.808594zm198.476563-108.878906c-.039063.03125-.078126.0625-.117188.097656-3.773438 3.242188-9.253906 3.25-13.03125.011719-.039062-.035157-.078125-.070313-.117188-.101563-5.652343-4.695312-176.210937-146.449218-181.855468-151.140625h376.332031c-5.433594 4.53125-177.328125 147.890625-181.210937 151.132813zm-84.609376-33.269532-128.007812 128.003907v-234.390625zm152.785157 2.453126 131.207031-109.417969v235.414062zm71.207031 189.695312c0 5.515625-4.484375 10-10 10h-392c-5.515625 0-10-4.484375-10-10v-240c0-5.515625 4.484375-10 10-10h30v190c0 16.574219 13.425781 30 30 30h342zm0 0"/><path d="m382 240h-152c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h152c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/></svg></span>');
        
        $('#modalNewsletter .componente.newsletter .titulo').prepend('<span class="icone-newsletter2"><svg class="icone-newsletter" id="icone-newsletter" xmlns="http://www.w3.org/2000/svg" viewBox="0 -76 512 512"><path d="m190 240c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0"/><path d="m482 0h-392c-16.671875 0-30 13.59375-30 30v30h-30c-16.542969 0-30 13.457031-30 30v240c0 16.542969 13.457031 30 30 30h392c16.542969 0 30-13.457031 30-30v-30h30c16.578125 0 30-13.460938 30-30v-240c0-16.539062-13.433594-30-30-30zm-387.859375 280 129.3125-129.3125 43.0625 35.78125c5.648437 4.8125 12.554687 7.222656 19.460937 7.222656 6.921876 0 13.84375-2.417968 19.5-7.253906l39.863282-33.246094 132.050781 126.808594zm198.476563-108.878906c-.039063.03125-.078126.0625-.117188.097656-3.773438 3.242188-9.253906 3.25-13.03125.011719-.039062-.035157-.078125-.070313-.117188-.101563-5.652343-4.695312-176.210937-146.449218-181.855468-151.140625h376.332031c-5.433594 4.53125-177.328125 147.890625-181.210937 151.132813zm-84.609376-33.269532-128.007812 128.003907v-234.390625zm152.785157 2.453126 131.207031-109.417969v235.414062zm71.207031 189.695312c0 5.515625-4.484375 10-10 10h-392c-5.515625 0-10-4.484375-10-10v-240c0-5.515625 4.484375-10 10-10h30v190c0 16.574219 13.425781 30 30 30h342zm0 0"/><path d="m382 240h-152c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h152c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"/></svg></span>');
        
        $('.componente.newsletter .icone-newsletter').css('fill', ''+corSecundaria+'');
        
        
        // Move o subtitulo para baixo do titulo
        $('#barraNewsletter .componente.newsletter .titulo').append($('#barraNewsletter .componente .texto-newsletter'));
        
        $('.coluna .componente.newsletter .titulo').append($('.coluna .componente .texto-newsletter'));
        
        // Adiciona cor primaria ao BG do newsletter rodape
        $('#barraNewsletter, #barraNewsletter .show-hide, #barraNewsletter .componente, #barraNewsletter.posicao-rodape .conteiner').css('background-color', ''+corPrimaria+'');
    
        // Adiciona cor secundaria ao texto do botao do newsletter rodape
        $('#barraNewsletter .componente .botao').css('color', ''+corSecundaria+'');
    
        if(cupomNewsletter === true){
            $('.newsletter-confirmacao>span').remove();
            $('.newsletter-confirmacao').append('<span class="cupom-newsletter">Obrigado! Seu cupom: <span class="codigo-cupom">'+codigoCupom+'</span></span');
        }
        
        // Adiciona cor secundaria ao cupom
        $('.newsletter .newsletter-confirmacao .codigo-cupom').css('color', ''+corSecundaria+'');
        $('.newsletter .newsletter-confirmacao .codigo-cupom').css('border-color', ''+corSecundaria+'');
    
        $('.componente.newsletter').css('background-color', ''+corPrimaria+'');
        $('.coluna .newsletter .botao').css('color', ''+corSecundaria+'');
        $('#modalNewsletter .newsletter .botao').css('color', ''+corSecundaria+'');
    
    //
    
    // Rodape
        
        $('#rodape .institucional.fundo-secundario').removeClass('fundo-secundario')
        
        // Remove span 9 original e adiciona span 12 ao rodape institucional
        $('#rodape .institucional .conteiner .row-fluid .span9').removeClass('span9').addClass('span12');
        
        // Cria e adiciona coluna de atendimento
        $('#rodape .institucional .conteiner .row-fluid .span12 .row-fluid').prepend('<div id="contato-mobile" class="atendimento-rodape span3"><span class="titulo">'+tituloAtendimento+'</span><div class="recebe-atendimento-rodape"></div></div>');
        
        // Clona atendimento e adiciona a coluna
        $('.contatos-loja:nth-child(1)').clone().appendTo('.recebe-atendimento-rodape');
        
        // Limpa classes antiga e adiciona a nova
        $('.recebe-atendimento-rodape .span12.visible-phone.contatos-loja').removeClass('span12').removeClass('visible-phone').addClass('contatos-loja-rodape');
        
        // Remove o titulo original do atendimento
        $('.contatos-loja-rodape .titulo').remove();
        
        // Remove span 4 original e adiciona novo span3
        $('.span4.links-rodape.links-rodape-categorias').removeClass('span4').addClass('span3');
        
        // Remove span 4 original e adiciona span 2 ao rodape conteudo do rodape
        $('.span4.links-rodape.links-rodape-paginas').removeClass('span4').addClass('span2');
        // Altera o titulo original do conteudo
        $('.links-rodape.links-rodape-paginas .titulo').text(''+tituloConteudo+'');
        
        // Adiciona cor primária aos hovers textos do rodape
        $('.links-rodape ul li a').hover(function(){
            $(this).css('color', ''+corPrimaria+''); 
            }, function(){
            $(this).css('color', '#646464'); 
        });
        
        
        if (typeof socialRodape !== 'undefined') {
        	
        	if(socialRodape === true){
        		
        		$('#rodape .institucional .conteiner .row-fluid .span12 .row-fluid').append('<div class="social-rodape only-social span4"><span class="titulo">'+tituloSocial+'</span></div>');
        		$('.social-rodape').append($('#rodape .redes-sociais .lista-redes'));
        		$('#rodape .institucional .conteiner .row-fluid .span3').find('.redes-sociais').closest('.span3').addClass('old-facebook');
        		$('#rodape .institucional .conteiner .row-fluid .old-facebook').remove();
        		$('.social-rodape .lista-redes ul li').removeClass('visible-phone');
        		$('#rodape .social-rodape .lista-redes i').css('color', ''+corPrimaria+''); 
        		
        		
        	}else{
        		
        		$('#rodape .institucional .conteiner .row-fluid .span12 .row-fluid').append('<div class="social-rodape span4"><div class="facebook-rodape"></div></div>');
        		$('.social-rodape .facebook-rodape').append($('<div class="fb-page" data-href="' + facebookLink + '" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="' + facebookLink + '" class="fb-xfbml-parse-ignore"></div>' ));
        		$('.social-rodape').prepend($('#rodape .redes-sociais .lista-redes'));
        		$('#rodape .institucional .conteiner .row-fluid .span3').find('.redes-sociais').closest('.span3').addClass('old-facebook');
        		$('#rodape .institucional .conteiner .row-fluid .old-facebook').remove();
        		
        		// Adiciona cor primária aos icones das redes sociais
		        $('#rodape .social-rodape .lista-redes i').hover(function(){
		            $(this).css('color', ''+corPrimaria+''); 
		            }, function(){
		            $(this).css('color', '#cccccc'); 
		        });
        		
        	}
        	
        } else{
        	
	        $('#rodape .institucional .conteiner .row-fluid .span12 .row-fluid').append('<div class="social-rodape span4"><div class="facebook-rodape"></div></div>');
	        // Cria caixa do facebook e adiciona ao social rodape
	        $('.social-rodape .facebook-rodape').append($('<div class="fb-page" data-href="' + facebookLink + '" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="' + facebookLink + '" class="fb-xfbml-parse-ignore"></div>' ));
	        
	        // Move redes sociais para novo box
	        $('.social-rodape').prepend($('#rodape .redes-sociais .lista-redes'));
	        // Remove caixa facebook original
	        $('#rodape .institucional .conteiner .row-fluid .span3').find('.redes-sociais').closest('.span3').addClass('old-facebook');
	        $('#rodape .institucional .conteiner .row-fluid .old-facebook').remove();
	        
	        // Adiciona cor primária aos icones das redes sociais
	        $('#rodape .social-rodape .lista-redes i').hover(function(){
	            $(this).css('color', ''+corPrimaria+''); 
	            }, function(){
	            $(this).css('color', '#cccccc'); 
	        });
        	
        }
        	

        // Move o sobre a loja para o pagamento-selos
        $('#rodape .pagamento-selos .conteiner .row-fluid').prepend($('.sobre-loja-rodape'));
        // Remove titulo do sobre a loja
        $('#rodape .sobre-loja-rodape .titulo').remove();
        // Clona o logo e adiciona no sobre a loja
        $('.abriga-logo .logo').clone().prependTo('.sobre-loja-rodape');
        
        // Altera o titulo original das formas de pagamento
        $('#rodape .pagamento .titulo').text(''+tituloPagamento+'');
        
        // Altera o titulo original dos selos
        $('#rodape .selos .titulo').text(''+tituloSelos+'');
        
        if(formaEnvio === true){
            // Adiciona coluna formas de envio
            $('#rodape .pagamento-selos .conteiner .row-fluid').append('<div class="formas-envio span3"><span class="titulo">'+tituloEnvio+'</span><ul><li>'+formaEnvio1+'</li><li>'+formaEnvio2+'</li><li>'+formaEnvio3+'</li><li>'+formaEnvio4+'</li></ul></div>');
        }
        
        // Altera span de formas de pagamento e selo
        $('.span4.pagamento').removeClass('span4').addClass('span3');
        $('.span4.selos').removeClass('span4').addClass('span2');
        
        // Adiciona cor principal aos titulos do rodape
        $('#rodape .titulo').css('color', ''+corPrimaria+'');
        
        // Reforma o bloco de creditos do rodape
        $('#rodape').find('.span9.span12').parent().parent().parent().addClass('creditos-rodape');
        $('.creditos-rodape').removeAttr('style');
        
        $('#rodape').find('.span9.span12').removeAttr('style').removeClass('span9').removeClass('span12').addClass('abriga-creditos');
        $('#rodape .creditos-rodape .abriga-creditos p').removeAttr('style').addClass('creditos-razaosocial');
        
        $('#rodape .creditos-rodape .abriga-creditos p').removeAttr('style').addClass('creditos-razaosocial');
        
        // Remove atribuicoes de style no logo da loja integrada e da nome as classes
        $('.creditos-rodape div>a').removeAttr('style').addClass('logo-lojaintegrada');
        $('.creditos-rodape div>a img').removeAttr('style');
        $('.logo-lojaintegrada').parent().removeAttr('style').addClass('logos-creditos');
        
        // Adiciona texto plataforma
        $('.logo-lojaintegrada').prepend('<small>Plataforma:</small>');
        $('.logo-lojaintegrada').attr('href', 'https://lojaintegrada.com.br/?utm_source=partners&utm_campaign=260')

        
        // Adiciona logo da agencia
        $('.logos-creditos').prepend('<a href="https://groomb.com.br" target="_blank" class="logo-agencia"><small>Desenvolvimento:</small><img src="https://cdn.awsli.com.br/934/934541/arquivos/logotemas.png"></a>');
        
    //
    
    
    // Pagina do produto e breadcrumbs
        
        // Adiciona nova classe a marca do produto
        $('.produto .codigo-produto .pull-right').removeClass('pull-right').addClass('marca-produto');
        
        // Remove nome marca:
        $('.produto .codigo-produto .marca-produto b').remove();
        
        // Move marca produto
        $('.info-principal-produto .nome-produto').before($('.marca-produto'));
        
        // Adiciona cor primária aos hovers da marca
        $('.marca-produto a').hover(function(){
            $(this).css('color', ''+corPrimaria+''); 
            }, function(){
            $(this).css('color', '#a1a1a1'); 
        });
        
        
        // Abriga e separa preço a vista
        $('.produto .principal .desconto-a-vista').wrapInner('<div class="abriga-precoavista"><div class="preco-avista"></div></div>');
        
        // Coloca ícone do preço a vista no lugar correto
        $('.preco-avista .icone-listagem-avista').each(function() {
            $(this).parent().parent().before(this);
        });
        

        
        // Trata o preço e faz a subtração

        
        // Cria economize e coloca valor
        $('.abriga-precoavista').append('<div class="preco-economiza"></div>');

    		$('.produto .principal .acoes-produto.disponivel').each(function(){
				var promocional = $(this).find('.preco-promocional').text().replace('R$ ', '');
				var avista = $(this).find('.preco-avista strong').text().replace('R$ ', '');
				var eco = parseFloat(promocional.replace(".", "").replace(",", ".")) - parseFloat(avista.replace(".", "").replace(",", "."));
				var economiza = eco.toFixed(2).replace(".", ",");
				$(this).find('.preco-economiza').html('<span>Economize: <strong>R$ '+economiza+'</strong></span>');
	        });
	        
        	if($('.atributos div ul li').length){
		        $('.atributos div ul li').click(function(){
		        	$('.preco-economiza').html('<span>Economize: <strong>R$ '+economiza+'</strong></span>');	
		        });
        	};


        // Adiciona classe ao parcelamento
        $('.produto .principal .preco-parcela').parent().addClass('todas-parcelas');
        
        // Cria classes para abrigar icones e parcelamento
        $('.produto .principal .preco-parcela').parent().wrapInner('<div class="abriga-parcelas"><div class="parcelas-abrigadas"></div></div>');
        
        // Adiciona icone ao parcelamento
        $('.todas-parcelas').prepend('<svg class="icone-cartao" id="icone-cartao" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 508 508" xml:space="preserve"><g><g><path d="M467,90.1H41c-22.6,0-41,18.4-41,41v245.8c0,22.6,18.4,41,41,41h426c22.6,0,41-18.4,41-41V131.1C508,108.5,489.6,90.1,467,90.1z M491.6,376.9c0,13.6-11,24.6-24.6,24.6H41c-13.6,0-24.6-11-24.6-24.6V221.2h475.2V376.9z M491.6,204.8H16.4v-49.2h475.2V204.8z M491.6,139.3H16.4v-8.2c0-13.6,11-24.6,24.6-24.6h426c13.6,0,24.6,11,24.6,24.6V139.3z"/></g></g><g><g><rect x="49.2" y="352.3" width="65.5" height="16.4"/></g></g><g><g><rect x="147.5" y="352.3" width="65.5" height="16.4"/></g></g><g><g><rect x="245.8" y="352.3" width="65.5" height="16.4"/></g></g><g><g><rect x="344.1" y="352.3" width="65.5" height="16.4"/></g></g><g><g><path d="M417.9,245.7c-7.5,0-14.4,2.2-20.5,5.7c-6.3-3.7-13.2-5.7-20.5-5.7c-22.6,0-41,18.4-41,41c0,22.7,18.4,41,41,41c7.3,0,14.3-2,20.5-5.7c6,3.5,13,5.7,20.5,5.7c22.6,0,41-18.4,41-41C458.9,264.1,440.5,245.7,417.9,245.7z M384.3,310.2c-2.4,0.8-4.9,1.2-7.4,1.2c-13.6,0-24.6-11-24.6-24.6c0-13.6,11-24.6,24.6-24.6c2.6,0,5,0.4,7.4,1.2c-4.8,6.8-7.4,14.9-7.4,23.4S379.5,303.4,384.3,310.2z M417.9,311.4c-13.6,0-24.6-11-24.6-24.6c0-13.6,11-24.6,24.6-24.6c13.6,0,24.6,11,24.6,24.6C442.5,300.4,431.5,311.4,417.9,311.4z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>');
        $('.icone-cartao').css('fill', ''+corPrimaria+'');
        
        if ($('.atributos').length === 0) {
	        // Tabela de parcelamento
	        $('.abriga-parcelas').append('<div class="parcelamento"><span>'+textoParcelamento+'</span></div>');
	        $('.todas-parcelas').append($('.parcelas-produto'));
        }
        
        // Adiciona cor a tabela parcelamento
        $('.parcelamento span').css('color', ''+corPrimaria+'');
        
        if ($('.produto .principal').find('.atributos').length !== 0){
            
            $('.produto .principal .parcelamento span').addClass('desabilitado');
        }
        
        $('.produto .principal .parcelamento span').click(function() {
            $('.produto .principal .parcelas-produto').slideToggle("slow");
        });
        
        // Adiciona cor primária aos hovers dos atributos
        $('.atributos ul li a').hover(function(){
            $(this).children().css('color', ''+corPrimaria+''); 
            $(this).css('border-color', ''+corPrimaria+''); 
            }, function(){
            $(this).children().css('color', '#646464'); 
            $(this).css('border-color', '#dedede'); 
        });
        
        // Adiciona icone ao frete
        $('.produto .principal .cep label').prepend('<span><i class="fas fa-truck"></i></span>');
       
        
        // Mostra/esconde o botao de frete
        $('.produto .principal .cep .input-append.input-prepend input').bind('keyup change blur', function() {
            if (this.value.length > 0) {
                $('.produto .principal .cep .input-prepend.input-append .btn').show();
            }
            else {
                $('.produto .principal .cep .input-prepend.input-append .btn').hide();
            }
        });
        
        // Adiciona classes para manipulação em principal e frete
        $('.produto .principal').find('.info-principal-produto').closest('.principal').addClass('geral');
        $('.produto .principal .cep').find('.aviso-disponibilidade').closest('.cep').addClass('real');
       
        // Remove classes primarias		
        $('.cor-secundaria.disponibilidade-produto').removeClass('cor-secundaria');
        $('.disponibilidade-produto .cor-principal').removeClass('cor-principal');
        $('.produto .principal .cep label i').css('color', ''+corPrimaria+'');
        
        $('.produto .principal .cep .input-prepend.input-append .btn').css('background-color', ''+corBotoesBg+'');

        //Cria novo local breadcrumbs
        
        if ($('.breadcrumbs').length ){
        
            $('#corpo').prepend('<div class="abriga-breadcrumbs"><div class="conteiner"><div class="row-fluid"><div class="bread-inside span6"></div></div></div></div></div>');
            $('.pagina-produto .abriga-breadcrumbs .conteiner .row-fluid').append('<div class="abriga-compartilhamento span6"></div>');
            
        }
        
        // Move breadcrumbs
        $('#corpo .abriga-breadcrumbs .conteiner .row-fluid .bread-inside').prepend($('.breadcrumbs'));
        
        if(compartilhamento === true){
            
            // Importa compartilhamento
            $('body').append('<script src="//platform-api.sharethis.com/js/sharethis.js#property=5c202d74f6809e0011a91dc9&product=inline-share-buttons"></script>');
            
            // Adiciona novo compartilhamento
            $('.abriga-compartilhamento').append('<div class="compartilhamento"><div class="compartilhamento-inside"><span class="compartilhamento-titulo"><i class="fas fa-share-alt"></i>Compartilhe:</span><div class="sharethis-inline-share-buttons"></div></div></div>');
            
        }
        
            
        $('.abriga-compartilhamento').append('<div class="abriga-fav"></div>');
        $('.abriga-fav').append($('.produto-compartilhar .lista-favoritos'));
        $('.lista-favoritos').html('<i class="far fa-heart"></i><span>Favoritos</span>');
        
        // Remove antigo compartilhamento
        $('.produto .produto-compartilhar').remove();
        
        // Adiciona cor ao icone home breadcrumbs
        $('.breadcrumbs ul li i').css('color', ''+corPrimaria+''); 
        
        // Adiciona cor primária aos hovers dos breadcrumbs
        $('.breadcrumbs ul li a').hover(function(){
            $(this).css('color', ''+corPrimaria+''); 
            }, function(){
            $(this).css('color', '#a1a1a1'); 
        });
        
        // Descrição curta
        
        if(descricaoCurta === true){
      
            $('.info-principal-produto').after($('.descricao-short'));
    
        }
        
        // Descrição no produto
        $('.row-fluid').find('#descricao').closest('.row-fluid').addClass('descricao-new');
        $('.descricao-new').wrapInner('<div class="box-descricao"></div>');
        $('.descricao-new').prepend('<div class="descricao-titulo padrao-desc"><strong>'+tituloDescricao+'</strong></div>');
        
        $('.listagem.aproveite-tambem>.titulo.cor-secundaria').removeClass('titulo cor-secundaria').addClass('padrao-desc');
        $('.listagem.aproveite-tambem .padrao-desc').html('<strong>'+tituloAproveite+'</strong>');
        
        $('.descricao-titulo.padrao-desc strong').css('color', ''+corPrimaria+''); 
        $('.descricao-titulo.padrao-desc strong').css('border-color', ''+corPrimaria+''); 
        
        $('.listagem.aproveite-tambem .padrao-desc strong').css('color', ''+corPrimaria+''); 
        $('.listagem.aproveite-tambem .padrao-desc strong').css('border-color', ''+corPrimaria+''); 
        
        // Novo produto flutuante
        $('.pagina-produto #corpo').append('<div id="resumo-produto" class="hidden-phone hidden-tablet"><div class="conteiner"></div></div>');
        $('.acoes-flutuante').wrapInner('<div class="produto-flutuante"></div>');
            
        $('#resumo-produto .conteiner').append($('.produto-flutuante'));
            
        $('.acoes-flutuante').remove();
            
        $('.produto-flutuante .close_float').remove();
        
        $('#resumo-produto .produto-flutuante .acoes-produto .preco-produto').parent().addClass('abriga-precos');
        
        $(window).scroll(function(){
            if ($(this).scrollTop() > 500) {
                $('#resumo-produto').css('bottom', '0px');
            } else {
                $('#resumo-produto').css('bottom', '-100px');
            }
        });
    
    //
    
    // Tabela de Medidas
    
    $('.pagina-produto').prepend('<div class="modal fade" id="tabela-medidas" tabindex="-1" role="dialog" aria-labelledby="nome-tabela"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="nome-tabela"></h4></div><div class="modal-body"></div></div></div></div>');
    
    $.extend($.expr[':'], {
	  'containsi': function(elem, i, match, array)
	  {
	    return (elem.textContent || elem.innerText || '').toLowerCase()
	    .indexOf((match[3] || "").toLowerCase()) >= 0;
	  }
	});
    
    
        if(tabelaMedidas1 === true){
        
          if ($('.info-principal-produto .nome-produto:containsi("'+palavraChaveTabela1+'")').length > 0) {
            $("#tabela-medidas .modal-body").append('<img src="'+imgTabela1+'">');
            $(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas" id="fita-medidas" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M193.65,156.647c-36.028,0-62.835,14.829-65.191,36.061c-0.109,0.986-0.165,1.984-0.165,2.964c0,21.366,24.679,37.366,60.019,38.91c1.787,0.078,3.583,0.117,5.337,0.117c37.87,0,65.357-16.413,65.357-39.026C259.007,173.06,231.52,156.647,193.65,156.647z M193.65,203.354c-1.302,0-2.638-0.029-3.971-0.088c-15.277-0.668-24.739-4.874-28.581-7.608c4.389-3.133,15.725-7.663,32.552-7.663c16.856,0,28.204,4.547,32.577,7.68C221.854,198.808,210.506,203.354,193.65,203.354z"/><path d="M387.3,263.657v-67.982c0-28.763-21.711-54.808-61.135-73.338c-35.657-16.761-82.719-25.992-132.515-25.992c-48.057,0-93.907,8.675-129.104,24.428c-38.388,17.179-61.189,41.593-64.202,68.744C0.116,191.572,0,193.644,0,195.674v120.651c0,27.153,19.619,52.17,55.243,70.442c31.905,16.365,74.893,26.488,121.046,28.505c5.824,0.254,11.666,0.383,17.361,0.383H512V263.657H387.3z M31.499,192.974c3.498-31.527,69.49-65.282,162.15-65.282c95.648,0,162.303,35.828,162.303,67.983c0,32.155-66.655,67.982-162.303,67.982c-5.245,0-10.626-0.119-15.993-0.354c-2.283-0.099-4.559-0.224-6.825-0.367c-0.119-0.007-0.239-0.014-0.359-0.022c-35.193-2.259-68.219-9.711-93.66-21.2c-0.883-0.399-1.754-0.801-2.615-1.208c-0.087-0.042-0.173-0.084-0.26-0.124c-0.735-0.348-1.46-0.699-2.178-1.051c-0.415-0.205-0.824-0.412-1.235-0.619c-0.394-0.199-0.79-0.396-1.179-0.596c-0.583-0.3-1.16-0.603-1.73-0.906c-0.13-0.069-0.259-0.137-0.388-0.205c-21.341-11.434-34.124-25.26-35.711-38.541c-0.016-0.135-0.025-0.27-0.039-0.404c-0.033-0.322-0.066-0.644-0.086-0.964c-0.028-0.474-0.045-0.948-0.045-1.421C31.347,194.794,31.398,193.885,31.499,192.974z M355.953,251.057v12.6H336.69C343.833,259.722,350.257,255.508,355.953,251.057z M480.653,384.308h-32.889v-41.32h-31.347v41.32h-38.861v-66.746h-31.347v66.746h-38.113v-41.32H276.75v41.32h-38.862v-66.746h-31.347v66.746H193.65c-5.241,0-10.621-0.119-15.993-0.353c-3.096-0.135-6.172-0.315-9.229-0.527v-40.441h-31.347v36.803c-13.785-2.275-26.847-5.377-38.861-9.236v-66.401H66.873v53.31c-22.619-12.202-35.527-27.096-35.527-41.139v-65.242c4.296,3.351,9.026,6.561,14.15,9.626c0.057,0.034,0.113,0.07,0.17,0.104c0.646,0.386,1.306,0.765,1.964,1.145c0.645,0.373,1.295,0.745,1.951,1.114c0.517,0.289,1.035,0.578,1.559,0.863c0.995,0.543,2.004,1.081,3.025,1.614c0.254,0.132,0.502,0.266,0.758,0.398c0.108,0.055,0.21,0.112,0.318,0.167c1.247,0.639,2.517,1.266,3.797,1.887c0.187,0.091,0.377,0.181,0.565,0.271c1.348,0.648,2.713,1.286,4.096,1.913c0.071,0.032,0.138,0.066,0.21,0.098c0.026,0.011,0.053,0.023,0.08,0.034c1.691,0.763,3.412,1.507,5.153,2.237c0.338,0.141,0.674,0.283,1.013,0.423c1.522,0.629,3.062,1.248,4.621,1.852c0.712,0.277,1.43,0.548,2.149,0.819c0.793,0.299,1.593,0.592,2.396,0.885c22.229,8.131,47.548,13.707,74.746,16.464c0.41,0.042,0.818,0.085,1.228,0.125c1.18,0.116,2.36,0.23,3.547,0.335c1.728,0.155,3.463,0.297,5.203,0.428c0.678,0.051,1.358,0.099,2.039,0.146c2.088,0.146,4.182,0.28,6.285,0.393c0.086,0.004,0.17,0.011,0.256,0.016l1.028,0.561h306.999V384.308z"/></svg> '+textoBotao1+'</button>');
            $('#tabela-medidas .modal-title').text(''+textoBotao1+'');
          }
        
        }
        
        if(tabelaMedidas2 === true){
        
          if ($('.info-principal-produto .nome-produto:containsi("'+palavraChaveTabela2+'")').length > 0) {
            $("#tabela-medidas .modal-body").append('<img src="'+imgTabela2+'">');
            $(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas" id="fita-medidas" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M193.65,156.647c-36.028,0-62.835,14.829-65.191,36.061c-0.109,0.986-0.165,1.984-0.165,2.964c0,21.366,24.679,37.366,60.019,38.91c1.787,0.078,3.583,0.117,5.337,0.117c37.87,0,65.357-16.413,65.357-39.026C259.007,173.06,231.52,156.647,193.65,156.647z M193.65,203.354c-1.302,0-2.638-0.029-3.971-0.088c-15.277-0.668-24.739-4.874-28.581-7.608c4.389-3.133,15.725-7.663,32.552-7.663c16.856,0,28.204,4.547,32.577,7.68C221.854,198.808,210.506,203.354,193.65,203.354z"/><path d="M387.3,263.657v-67.982c0-28.763-21.711-54.808-61.135-73.338c-35.657-16.761-82.719-25.992-132.515-25.992c-48.057,0-93.907,8.675-129.104,24.428c-38.388,17.179-61.189,41.593-64.202,68.744C0.116,191.572,0,193.644,0,195.674v120.651c0,27.153,19.619,52.17,55.243,70.442c31.905,16.365,74.893,26.488,121.046,28.505c5.824,0.254,11.666,0.383,17.361,0.383H512V263.657H387.3z M31.499,192.974c3.498-31.527,69.49-65.282,162.15-65.282c95.648,0,162.303,35.828,162.303,67.983c0,32.155-66.655,67.982-162.303,67.982c-5.245,0-10.626-0.119-15.993-0.354c-2.283-0.099-4.559-0.224-6.825-0.367c-0.119-0.007-0.239-0.014-0.359-0.022c-35.193-2.259-68.219-9.711-93.66-21.2c-0.883-0.399-1.754-0.801-2.615-1.208c-0.087-0.042-0.173-0.084-0.26-0.124c-0.735-0.348-1.46-0.699-2.178-1.051c-0.415-0.205-0.824-0.412-1.235-0.619c-0.394-0.199-0.79-0.396-1.179-0.596c-0.583-0.3-1.16-0.603-1.73-0.906c-0.13-0.069-0.259-0.137-0.388-0.205c-21.341-11.434-34.124-25.26-35.711-38.541c-0.016-0.135-0.025-0.27-0.039-0.404c-0.033-0.322-0.066-0.644-0.086-0.964c-0.028-0.474-0.045-0.948-0.045-1.421C31.347,194.794,31.398,193.885,31.499,192.974z M355.953,251.057v12.6H336.69C343.833,259.722,350.257,255.508,355.953,251.057z M480.653,384.308h-32.889v-41.32h-31.347v41.32h-38.861v-66.746h-31.347v66.746h-38.113v-41.32H276.75v41.32h-38.862v-66.746h-31.347v66.746H193.65c-5.241,0-10.621-0.119-15.993-0.353c-3.096-0.135-6.172-0.315-9.229-0.527v-40.441h-31.347v36.803c-13.785-2.275-26.847-5.377-38.861-9.236v-66.401H66.873v53.31c-22.619-12.202-35.527-27.096-35.527-41.139v-65.242c4.296,3.351,9.026,6.561,14.15,9.626c0.057,0.034,0.113,0.07,0.17,0.104c0.646,0.386,1.306,0.765,1.964,1.145c0.645,0.373,1.295,0.745,1.951,1.114c0.517,0.289,1.035,0.578,1.559,0.863c0.995,0.543,2.004,1.081,3.025,1.614c0.254,0.132,0.502,0.266,0.758,0.398c0.108,0.055,0.21,0.112,0.318,0.167c1.247,0.639,2.517,1.266,3.797,1.887c0.187,0.091,0.377,0.181,0.565,0.271c1.348,0.648,2.713,1.286,4.096,1.913c0.071,0.032,0.138,0.066,0.21,0.098c0.026,0.011,0.053,0.023,0.08,0.034c1.691,0.763,3.412,1.507,5.153,2.237c0.338,0.141,0.674,0.283,1.013,0.423c1.522,0.629,3.062,1.248,4.621,1.852c0.712,0.277,1.43,0.548,2.149,0.819c0.793,0.299,1.593,0.592,2.396,0.885c22.229,8.131,47.548,13.707,74.746,16.464c0.41,0.042,0.818,0.085,1.228,0.125c1.18,0.116,2.36,0.23,3.547,0.335c1.728,0.155,3.463,0.297,5.203,0.428c0.678,0.051,1.358,0.099,2.039,0.146c2.088,0.146,4.182,0.28,6.285,0.393c0.086,0.004,0.17,0.011,0.256,0.016l1.028,0.561h306.999V384.308z"/></svg> '+textoBotao2+'</button>');
            $('#tabela-medidas .modal-title').text(''+textoBotao2+'');
        
          }
        
        }
        
        if(tabelaMedidas3 === true){
        
          if ($('.info-principal-produto .nome-produto:containsi("'+palavraChaveTabela3+'")').length > 0) {
            $("#tabela-medidas .modal-body").append('<img src="'+imgTabela3+'">');
            $(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas" id="fita-medidas" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M193.65,156.647c-36.028,0-62.835,14.829-65.191,36.061c-0.109,0.986-0.165,1.984-0.165,2.964c0,21.366,24.679,37.366,60.019,38.91c1.787,0.078,3.583,0.117,5.337,0.117c37.87,0,65.357-16.413,65.357-39.026C259.007,173.06,231.52,156.647,193.65,156.647z M193.65,203.354c-1.302,0-2.638-0.029-3.971-0.088c-15.277-0.668-24.739-4.874-28.581-7.608c4.389-3.133,15.725-7.663,32.552-7.663c16.856,0,28.204,4.547,32.577,7.68C221.854,198.808,210.506,203.354,193.65,203.354z"/><path d="M387.3,263.657v-67.982c0-28.763-21.711-54.808-61.135-73.338c-35.657-16.761-82.719-25.992-132.515-25.992c-48.057,0-93.907,8.675-129.104,24.428c-38.388,17.179-61.189,41.593-64.202,68.744C0.116,191.572,0,193.644,0,195.674v120.651c0,27.153,19.619,52.17,55.243,70.442c31.905,16.365,74.893,26.488,121.046,28.505c5.824,0.254,11.666,0.383,17.361,0.383H512V263.657H387.3z M31.499,192.974c3.498-31.527,69.49-65.282,162.15-65.282c95.648,0,162.303,35.828,162.303,67.983c0,32.155-66.655,67.982-162.303,67.982c-5.245,0-10.626-0.119-15.993-0.354c-2.283-0.099-4.559-0.224-6.825-0.367c-0.119-0.007-0.239-0.014-0.359-0.022c-35.193-2.259-68.219-9.711-93.66-21.2c-0.883-0.399-1.754-0.801-2.615-1.208c-0.087-0.042-0.173-0.084-0.26-0.124c-0.735-0.348-1.46-0.699-2.178-1.051c-0.415-0.205-0.824-0.412-1.235-0.619c-0.394-0.199-0.79-0.396-1.179-0.596c-0.583-0.3-1.16-0.603-1.73-0.906c-0.13-0.069-0.259-0.137-0.388-0.205c-21.341-11.434-34.124-25.26-35.711-38.541c-0.016-0.135-0.025-0.27-0.039-0.404c-0.033-0.322-0.066-0.644-0.086-0.964c-0.028-0.474-0.045-0.948-0.045-1.421C31.347,194.794,31.398,193.885,31.499,192.974z M355.953,251.057v12.6H336.69C343.833,259.722,350.257,255.508,355.953,251.057z M480.653,384.308h-32.889v-41.32h-31.347v41.32h-38.861v-66.746h-31.347v66.746h-38.113v-41.32H276.75v41.32h-38.862v-66.746h-31.347v66.746H193.65c-5.241,0-10.621-0.119-15.993-0.353c-3.096-0.135-6.172-0.315-9.229-0.527v-40.441h-31.347v36.803c-13.785-2.275-26.847-5.377-38.861-9.236v-66.401H66.873v53.31c-22.619-12.202-35.527-27.096-35.527-41.139v-65.242c4.296,3.351,9.026,6.561,14.15,9.626c0.057,0.034,0.113,0.07,0.17,0.104c0.646,0.386,1.306,0.765,1.964,1.145c0.645,0.373,1.295,0.745,1.951,1.114c0.517,0.289,1.035,0.578,1.559,0.863c0.995,0.543,2.004,1.081,3.025,1.614c0.254,0.132,0.502,0.266,0.758,0.398c0.108,0.055,0.21,0.112,0.318,0.167c1.247,0.639,2.517,1.266,3.797,1.887c0.187,0.091,0.377,0.181,0.565,0.271c1.348,0.648,2.713,1.286,4.096,1.913c0.071,0.032,0.138,0.066,0.21,0.098c0.026,0.011,0.053,0.023,0.08,0.034c1.691,0.763,3.412,1.507,5.153,2.237c0.338,0.141,0.674,0.283,1.013,0.423c1.522,0.629,3.062,1.248,4.621,1.852c0.712,0.277,1.43,0.548,2.149,0.819c0.793,0.299,1.593,0.592,2.396,0.885c22.229,8.131,47.548,13.707,74.746,16.464c0.41,0.042,0.818,0.085,1.228,0.125c1.18,0.116,2.36,0.23,3.547,0.335c1.728,0.155,3.463,0.297,5.203,0.428c0.678,0.051,1.358,0.099,2.039,0.146c2.088,0.146,4.182,0.28,6.285,0.393c0.086,0.004,0.17,0.011,0.256,0.016l1.028,0.561h306.999V384.308z"/></svg> '+textoBotao3+'</button>');
            $('#tabela-medidas .modal-title').text(''+textoBotao3+'');
        
          }
        
        }
        
        if(tabelaMedidas4 === true){
        
          if ($('.info-principal-produto .nome-produto:containsi("'+palavraChaveTabela4+'")').length > 0) {
            $("#tabela-medidas .modal-body").append('<img src="'+imgTabela4+'">');
            $(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas" id="fita-medidas" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M193.65,156.647c-36.028,0-62.835,14.829-65.191,36.061c-0.109,0.986-0.165,1.984-0.165,2.964c0,21.366,24.679,37.366,60.019,38.91c1.787,0.078,3.583,0.117,5.337,0.117c37.87,0,65.357-16.413,65.357-39.026C259.007,173.06,231.52,156.647,193.65,156.647z M193.65,203.354c-1.302,0-2.638-0.029-3.971-0.088c-15.277-0.668-24.739-4.874-28.581-7.608c4.389-3.133,15.725-7.663,32.552-7.663c16.856,0,28.204,4.547,32.577,7.68C221.854,198.808,210.506,203.354,193.65,203.354z"/><path d="M387.3,263.657v-67.982c0-28.763-21.711-54.808-61.135-73.338c-35.657-16.761-82.719-25.992-132.515-25.992c-48.057,0-93.907,8.675-129.104,24.428c-38.388,17.179-61.189,41.593-64.202,68.744C0.116,191.572,0,193.644,0,195.674v120.651c0,27.153,19.619,52.17,55.243,70.442c31.905,16.365,74.893,26.488,121.046,28.505c5.824,0.254,11.666,0.383,17.361,0.383H512V263.657H387.3z M31.499,192.974c3.498-31.527,69.49-65.282,162.15-65.282c95.648,0,162.303,35.828,162.303,67.983c0,32.155-66.655,67.982-162.303,67.982c-5.245,0-10.626-0.119-15.993-0.354c-2.283-0.099-4.559-0.224-6.825-0.367c-0.119-0.007-0.239-0.014-0.359-0.022c-35.193-2.259-68.219-9.711-93.66-21.2c-0.883-0.399-1.754-0.801-2.615-1.208c-0.087-0.042-0.173-0.084-0.26-0.124c-0.735-0.348-1.46-0.699-2.178-1.051c-0.415-0.205-0.824-0.412-1.235-0.619c-0.394-0.199-0.79-0.396-1.179-0.596c-0.583-0.3-1.16-0.603-1.73-0.906c-0.13-0.069-0.259-0.137-0.388-0.205c-21.341-11.434-34.124-25.26-35.711-38.541c-0.016-0.135-0.025-0.27-0.039-0.404c-0.033-0.322-0.066-0.644-0.086-0.964c-0.028-0.474-0.045-0.948-0.045-1.421C31.347,194.794,31.398,193.885,31.499,192.974z M355.953,251.057v12.6H336.69C343.833,259.722,350.257,255.508,355.953,251.057z M480.653,384.308h-32.889v-41.32h-31.347v41.32h-38.861v-66.746h-31.347v66.746h-38.113v-41.32H276.75v41.32h-38.862v-66.746h-31.347v66.746H193.65c-5.241,0-10.621-0.119-15.993-0.353c-3.096-0.135-6.172-0.315-9.229-0.527v-40.441h-31.347v36.803c-13.785-2.275-26.847-5.377-38.861-9.236v-66.401H66.873v53.31c-22.619-12.202-35.527-27.096-35.527-41.139v-65.242c4.296,3.351,9.026,6.561,14.15,9.626c0.057,0.034,0.113,0.07,0.17,0.104c0.646,0.386,1.306,0.765,1.964,1.145c0.645,0.373,1.295,0.745,1.951,1.114c0.517,0.289,1.035,0.578,1.559,0.863c0.995,0.543,2.004,1.081,3.025,1.614c0.254,0.132,0.502,0.266,0.758,0.398c0.108,0.055,0.21,0.112,0.318,0.167c1.247,0.639,2.517,1.266,3.797,1.887c0.187,0.091,0.377,0.181,0.565,0.271c1.348,0.648,2.713,1.286,4.096,1.913c0.071,0.032,0.138,0.066,0.21,0.098c0.026,0.011,0.053,0.023,0.08,0.034c1.691,0.763,3.412,1.507,5.153,2.237c0.338,0.141,0.674,0.283,1.013,0.423c1.522,0.629,3.062,1.248,4.621,1.852c0.712,0.277,1.43,0.548,2.149,0.819c0.793,0.299,1.593,0.592,2.396,0.885c22.229,8.131,47.548,13.707,74.746,16.464c0.41,0.042,0.818,0.085,1.228,0.125c1.18,0.116,2.36,0.23,3.547,0.335c1.728,0.155,3.463,0.297,5.203,0.428c0.678,0.051,1.358,0.099,2.039,0.146c2.088,0.146,4.182,0.28,6.285,0.393c0.086,0.004,0.17,0.011,0.256,0.016l1.028,0.561h306.999V384.308z"/></svg> '+textoBotao4+'</button>');
            $('#tabela-medidas .modal-title').text(''+textoBotao4+'');
        
          }
        
        }
        
        if(tabelaMedidas5 === true){
        
          if ($('.info-principal-produto .nome-produto:containsi("'+palavraChaveTabela5+'")').length > 0) {
            $("#tabela-medidas .modal-body").append('<img src="'+imgTabela5+'">');
            $(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas" id="fita-medidas" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M193.65,156.647c-36.028,0-62.835,14.829-65.191,36.061c-0.109,0.986-0.165,1.984-0.165,2.964c0,21.366,24.679,37.366,60.019,38.91c1.787,0.078,3.583,0.117,5.337,0.117c37.87,0,65.357-16.413,65.357-39.026C259.007,173.06,231.52,156.647,193.65,156.647z M193.65,203.354c-1.302,0-2.638-0.029-3.971-0.088c-15.277-0.668-24.739-4.874-28.581-7.608c4.389-3.133,15.725-7.663,32.552-7.663c16.856,0,28.204,4.547,32.577,7.68C221.854,198.808,210.506,203.354,193.65,203.354z"/><path d="M387.3,263.657v-67.982c0-28.763-21.711-54.808-61.135-73.338c-35.657-16.761-82.719-25.992-132.515-25.992c-48.057,0-93.907,8.675-129.104,24.428c-38.388,17.179-61.189,41.593-64.202,68.744C0.116,191.572,0,193.644,0,195.674v120.651c0,27.153,19.619,52.17,55.243,70.442c31.905,16.365,74.893,26.488,121.046,28.505c5.824,0.254,11.666,0.383,17.361,0.383H512V263.657H387.3z M31.499,192.974c3.498-31.527,69.49-65.282,162.15-65.282c95.648,0,162.303,35.828,162.303,67.983c0,32.155-66.655,67.982-162.303,67.982c-5.245,0-10.626-0.119-15.993-0.354c-2.283-0.099-4.559-0.224-6.825-0.367c-0.119-0.007-0.239-0.014-0.359-0.022c-35.193-2.259-68.219-9.711-93.66-21.2c-0.883-0.399-1.754-0.801-2.615-1.208c-0.087-0.042-0.173-0.084-0.26-0.124c-0.735-0.348-1.46-0.699-2.178-1.051c-0.415-0.205-0.824-0.412-1.235-0.619c-0.394-0.199-0.79-0.396-1.179-0.596c-0.583-0.3-1.16-0.603-1.73-0.906c-0.13-0.069-0.259-0.137-0.388-0.205c-21.341-11.434-34.124-25.26-35.711-38.541c-0.016-0.135-0.025-0.27-0.039-0.404c-0.033-0.322-0.066-0.644-0.086-0.964c-0.028-0.474-0.045-0.948-0.045-1.421C31.347,194.794,31.398,193.885,31.499,192.974z M355.953,251.057v12.6H336.69C343.833,259.722,350.257,255.508,355.953,251.057z M480.653,384.308h-32.889v-41.32h-31.347v41.32h-38.861v-66.746h-31.347v66.746h-38.113v-41.32H276.75v41.32h-38.862v-66.746h-31.347v66.746H193.65c-5.241,0-10.621-0.119-15.993-0.353c-3.096-0.135-6.172-0.315-9.229-0.527v-40.441h-31.347v36.803c-13.785-2.275-26.847-5.377-38.861-9.236v-66.401H66.873v53.31c-22.619-12.202-35.527-27.096-35.527-41.139v-65.242c4.296,3.351,9.026,6.561,14.15,9.626c0.057,0.034,0.113,0.07,0.17,0.104c0.646,0.386,1.306,0.765,1.964,1.145c0.645,0.373,1.295,0.745,1.951,1.114c0.517,0.289,1.035,0.578,1.559,0.863c0.995,0.543,2.004,1.081,3.025,1.614c0.254,0.132,0.502,0.266,0.758,0.398c0.108,0.055,0.21,0.112,0.318,0.167c1.247,0.639,2.517,1.266,3.797,1.887c0.187,0.091,0.377,0.181,0.565,0.271c1.348,0.648,2.713,1.286,4.096,1.913c0.071,0.032,0.138,0.066,0.21,0.098c0.026,0.011,0.053,0.023,0.08,0.034c1.691,0.763,3.412,1.507,5.153,2.237c0.338,0.141,0.674,0.283,1.013,0.423c1.522,0.629,3.062,1.248,4.621,1.852c0.712,0.277,1.43,0.548,2.149,0.819c0.793,0.299,1.593,0.592,2.396,0.885c22.229,8.131,47.548,13.707,74.746,16.464c0.41,0.042,0.818,0.085,1.228,0.125c1.18,0.116,2.36,0.23,3.547,0.335c1.728,0.155,3.463,0.297,5.203,0.428c0.678,0.051,1.358,0.099,2.039,0.146c2.088,0.146,4.182,0.28,6.285,0.393c0.086,0.004,0.17,0.011,0.256,0.016l1.028,0.561h306.999V384.308z"/></svg> '+textoBotao5+'</button>');
            $('#tabela-medidas .modal-title').text(''+textoBotao5+'');
        
          }
        
        }
    
    //
    
    
    // Pagina Categoria e Busca
    
        // Adiciona cor primária aos hovers dos atributos
        $('.menu.lateral .nivel-dois a').hover(function(){
            $(this).css('color', ''+corPrimaria+''); 
            }, function(){
            $(this).css('color', '#646464'); 
        });
        
        // Adiciona cor primária aos filtros
        $('.filtro.lista ul li.active label').css('background-color', ''+corPrimaria+''); 
    	
    	$('.caixa-destaque .botao').removeClass('secundario').addClass('principal grande');
    
        $('.filtro.lista ul li label').hover(function(){
            $(this).css('background-color', ''+corPrimaria+''); 
            }, function(){
            $(this).css('background-color', '#fff'); 
        });
        
        
        $('.filtro h4').css('color', ''+corPrimaria+''); 
        
        $('.menu.lateral .nivel-um>li.ativo>a i.fundo-secundario').removeClass('fundo-secundario');
        
        // Adiciona cor primária ao menu lateral
        $('.menu.lateral .nivel-um>li.ativo>a i').css('color', ''+corPrimaria+'');
        
        $('.menu.lateral .nivel-um a strong').css('color', ''+corPrimaria+''); 
        
        // Adiciona cor primária aos títulos
        $('.conteudo h1').css('color', ''+corPrimaria+''); 
        
        // Move descrição para o topo
        $('.conteudo.span9 h1').after($('.coluna > .componente'));
        
        // Conserta o título da pagina
        $('.conteudo.span9 .componente .interno').prepend($('.conteudo h1'));
        $('.conteudo.span9 .componente h4').remove();
        
        $('.pagina-busca .span9 .span6 .botao').addClass('principal grande').removeClass('secundario'); 

       
        
    //
    
    
    // Carrinho, conta e finalizar
    
        // Adiciona cor primaria ao preço total do carrinho
        $('.tabela-carrinho .total strong').css('color', ''+corPrimaria+''); 
        
        // Adiciona cor primária ao atendimento do checkout
        $('.carrinho-checkout .atendimento li a').css('color', ''+corPrimaria+''); 
        $('.carrinho-checkout .atendimento').css('color', ''+corPrimaria+''); 
        
        // Adiciona cor primária aos títulos internos
        $('.cabecalho-interno .titulo').css('color', ''+corPrimaria+''); 
        
        // Adiciona cor primária aos itens da conta interna
        $('.caixa-dados h3').css('color', ''+corPrimaria+''); 
        $('.conta-menu .nome-usuario i').css('color', ''+corPrimaria+''); 
        
        $('.tabela-carrinho * .cor-secundaria').removeClass('cor-secundaria');
        $('.resumo-compra .tabela-carrinho .cor-secundaria').removeClass('cor-secundaria');
        $('.campos-pedido legend.cor-secundaria').removeClass('cor-secundaria');
        
        
        
        // Ajeita botoes da pagina de conta interna
        if ($('.pagina-conta .botao.principal:contains("Alterar a senha")').length > 0) {
            $('.botao').addClass('mudasenha');
        }
        
        $('.pagina-conta .formulario-editar-cliente .acao-editar .span4.offset8').removeClass('span4 offset8').addClass('span9 offset3');
        
        // COnserta cores das paginas conta e finalizar
        $('.abas-conta li a.cor-secundaria').removeClass('cor-secundaria');
        
        
    //  
    
    // Adiciona multicolor
    
    
        // Adiciona cor background ao botao de busca
        $('.busca .botao-busca').css('background-color', ''+corBotoesBg+''); 
        
        // Adiciona sombra e borda a busca
        $('.busca').css('box-shadow', '0px 3px 6px 0px rgba(100, 100, 100, 0.19)');
        $('.busca').css('border-color', '#efefef');
        $('.busca').css('border-style', 'solid');
        $('.busca').css('border-width', '1px');
        
        // Adiciona cor background ao botao de rastreio rapido
        $('.rastreio .campo-rastreio .botao').css('background-color', ''+corBotoesBg+''); 
       
        // Adiciona cor a bandeira promocao
        $('.bandeira-promocao').css('background-color', ''+corBandeiraPromocao+''); 
        // Adiciona cor a bandeira frete gratis
        $('.bandeira-frete-gratis').css('background-color', ''+corBandeiraFrete+''); 
        
        $('.avise-me .avise-btn input').css('background-color', ''+corPrimaria+''); 
        
        
        // Remove classes de cor que não serão usadas
        
        $('.lista-favoritos.fundo-principal').removeClass('fundo-principal');
        $('.codigo-produto .cor-secundaria').removeClass('cor-secundaria');
        
    //  
    
    
    
    if ($(window).width() <= 767) {
        
    
            
            // Codigo JS only mobile
            
            $('.cep.real').after($('.abriga-compartilhamento'));
    
            $('#cabecalho').addClass('cabecalho-mobile');
    
            // remove icone anterior e adiciona classe ao home da barra superior
            $('.atalhos-mobile ul').find('.icon-home').removeClass('icon-home').parent().addClass('home-mobile');
                    
            // Insere icone SVG da home
            $('.atalhos-mobile ul .home-mobile a').append('<svg id="icone-home" class="icone-home" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 611.997 611.998" xml:space="preserve"><path d="M511.114,300.251c-9.94,0-17.638,7.663-17.638,17.651v241.105H368.401v-98.453c0-9.236-7.697-17.31-17.002-17.31h-90.435c-9.948,0-17.96,8.073-17.96,17.31v98.453h-124.76v-233.1c0-9.306-7.69-17.036-17.638-17.036c-9.298,0-16.995,7.73-16.995,17.036v250.752c0,9.305,7.697,17.036,16.995,17.036h160.358c9.298,0,16.995-7.731,16.995-17.036v-98.454h55.801v98.454c0,9.305,7.697,17.036,17.639,17.036h159.715c9.299,0,16.995-7.731,16.995-17.036V317.903C528.109,307.915,520.413,300.251,511.114,300.251z"/><path d="M607.003,314.003L467.819,174.225V78.919c0-9.921-8.019-17.583-17.96-17.583c-9.305,0-17.001,7.663-17.001,17.583v60.345L318.046,23.774c-3.518-3.558-7.697-5.474-11.864-5.474c-4.81,0-8.983,1.984-12.507,5.474L5.361,312.087c-6.917,6.91-7.375,17.994,0,24.357c6.411,7.389,17.454,6.91,24.371,0l276.45-275.793l275.807,278.393c2.873,2.874,7.054,4.516,12.507,4.516c4.81,0,8.976-1.642,12.507-4.516C613.42,332.613,613.899,320.982,607.003,314.003z"/></svg>');
                    
            // Remove todos os li menos o home
            $('.atalhos-mobile ul li').not('.home-mobile').remove();
            
            // Adiciona icone de contato a barra superior
            $('.atalhos-mobile ul').append('<li class="contato-mobile-topo"><a href="#contato-mobile"><svg class="icone-atendimento-mobile" id="icone-atendimento" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 611.932 611.932" xml:space="preserve"><path d="M559.017,210.569H422.774V100.102c0-28.708-23.594-52.301-52.301-52.301H52.301C23.594,47.801,0,71.394,0,100.102v191.476c0,28.708,23.594,52.301,52.301,52.301h30.958l39.004,52.301c2.182,3.682,6.614,5.182,11.047,5.182s8.115-2.182,11.047-5.182l39.004-52.301h5.864v110.467c0,28.708,23.594,52.301,52.301,52.301H428.57l39.004,52.301c2.182,3.682,6.614,5.182,11.047,5.182s8.115-2.182,11.047-5.182l39.004-52.301h30.958c28.708,0,52.301-23.594,52.301-52.301V262.87C612,234.094,588.475,210.569,559.017,210.569z M176.065,316.603c-4.432,0-8.115,2.182-11.047,5.182l-32.39,42.687l-32.39-42.687c-2.182-3.682-6.614-5.182-11.047-5.182H50.869c-13.979,0-25.026-11.047-25.026-25.026V100.102c0-13.979,11.047-25.026,25.026-25.026h318.172c13.979,0,25.025,11.047,25.025,25.026v124.446v67.03c0,13.979-11.047,25.026-25.025,25.026H202.523L176.065,316.603L176.065,316.603z M584.792,454.346c0,13.979-11.047,25.026-25.025,25.026h-38.322c-4.432,0-8.115,2.182-11.047,5.182l-32.39,42.687l-32.39-42.687c-2.182-3.682-6.614-5.182-11.047-5.182H241.595c-13.979,0-25.026-11.047-25.026-25.026V343.879h153.904c10.297,0,19.911-2.932,27.958-8.115h103.102c7.364,0,13.229-5.864,13.229-13.229c0-7.365-5.864-13.229-13.229-13.229h-81.009c2.182-5.182,2.932-11.047,2.932-17.661v-53.051h136.242c13.979,0,25.026,11.047,25.026,25.026v190.726H584.792z M514.08,398.363c0,7.364-5.864,13.229-13.229,13.229h-200.34c-7.364,0-13.229-5.864-13.229-13.229s5.864-13.229,13.229-13.229h200.34C508.148,385.066,514.08,390.998,514.08,398.363z M310.057,248.823h-199.59c-7.364,0-13.229-5.864-13.229-13.229s5.864-13.229,13.229-13.229h199.59c7.364,0,13.229,5.864,13.229,13.229C324.036,242.959,317.422,248.823,310.057,248.823zM97.238,159.018c0-7.364,5.864-13.229,13.229-13.229H230.48c7.364,0,13.229,5.864,13.229,13.229c0,7.364-5.864,13.229-13.229,13.229H110.467C103.102,172.246,97.238,166.382,97.238,159.018z"/></svg></a></li>');
            
            // Cria novo carrinho no mobile
            $('.atalhos-mobile ul').append('<li class="carrinho-mobile"></li>');
            
            // Cria botao do menu
            $('.atalhos-mobile ul').prepend('<li class="menu-mobile-botao"><button type="button" class="navbar-toggle" data-toggle="slide-collapse" data-target="#slide-collapse" aria-expanded="false"><svg class="icone-menu" id="icone-departamentos" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 459 459"  xml:space="preserve"><path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"/></svg></button></li>');
            
            $('#cabecalho').append('<div class="menu-mobile" id="slide-collapse"><div class="painel-mobile"><div class="menu-fechar"><span><i class="fas fa-times"></i> Fechar</span></div><div class="painel-mobile-inside"><div class="acesso-conta-mobile"><a href="/conta/login"><svg id="icone-user" class="icone-user-mobile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" xml:space="preserve"><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083C42.677,47.979,42.567,48.054,42.459,48.132z"/></svg><span class="abriga-acesso"><span class="acesso-1"></span><span class="acesso-2"></span></span></a></div><div class="pedidos-conta-mobile"><a href="/conta/login?next=/conta/pedido/listar"><i class="fas fa-archive"></i><span>Pedidos</span></a></div></div></div><div class="menusuperior-mobile"></div></div>');
    
    
            $(".menu.superior .nivel-um>li").each(function(){
                $(this).find('>a>i').insertAfter($(this).find('>a'));
            });
                
            $(".menu.superior .nivel-um>li>i").click(function () {
                if ($('.menu.superior .nivel-um>li>i').next().hasClass('mobile-open')) {
                    $('.menu.superior .nivel-um>li>i').next().removeClass("mobile-open");
                }else{
                    $(".menu.superior .nivel-um>li>i").next().removeClass("mobile-open");
                    $(this).next().addClass("mobile-open"); 
                }
            });
    
            $('body').append('<div class="menu-overlay"></li>');
                
            $('[data-toggle="slide-collapse"]').on('click', function() {
                $navMenuCont = $($(this).data('target'));
                $navMenuCont.animate({
                    'width': 'toggle'
                    }, 350);
                $(".menu-overlay").fadeIn(500);
                
             });
                
            $(".menu-overlay, .menu-fechar").click(function(event) {
                $(".navbar-toggle").trigger("click");
                $(".menu-overlay").fadeOut(500);
            });
    
            $('.conteudo-topo .busca-mobile .atalho-menu').remove();
                
            $('.span12.visible-phone.contatos-loja').remove();
                
            $('.tabela-carrinho .formas-envio').parent().parent().removeClass('hidden-phone')
    
            $('.menusuperior-mobile').append($('.menu.superior'));
                
            // Puxa o carrinho do desktop para o mobile
            $('.carrinho-mobile').append($('.novo-carrinho .carrinho'));
                
            if($('.user-logo-sair').length ){       
                $('.acesso-1').append($('.user-logo-nome'));
                $('.acesso-2').append('<a href="/conta/logout">Sair</a>');
                }else{
                $('.acesso-1').html('Acesse sua conta');
                $('.acesso-2').html('ou cadastre-se');
            };
            
            if ($('.pagina-inicial').length == 0) {
        
        		$('.secao-banners').remove();
        	
        	}
    
            // Tarja de vantagens mobile
            if(vantagensMobile === true){
                
                $('.cabecalho-mobile').css('padding-top', '75px');
                
                $('.atalhos-mobile').prepend('<div class="tarja-mobile"><span class="vantagem-mobile"></span></div>');
    
                var vantagem1 = $('<span class="vantagem-texto">'+vantagemTexto1+'</span><a href="'+vantagemLink1+'">'+vantagemTextoLink1+'</a>');
                var vantagem2 = $('<span class="vantagem-texto">'+vantagemTexto2+'</span><a href="'+vantagemLink2+'">'+vantagemTextoLink2+'</a>');
                var vantagem3 = $('<span class="vantagem-texto">'+vantagemTexto3+'</span><a href="'+vantagemLink3+'">'+vantagemTextoLink3+'</a>');
                var vantagem4 = $('<span class="vantagem-texto">'+vantagemTexto4+'</span><a href="'+vantagemLink4+'">'+vantagemTextoLink4+'</a>');
                var vantagem5 = $('<span class="vantagem-texto">'+vantagemTexto5+'</span><a href="'+vantagemLink5+'">'+vantagemTextoLink5+'</a>');
                
                var vantagens = [];
                
                if(vantagemTexto1 != ''){
                    vantagens.push(vantagem1);
                }
                
                if(vantagemTexto2 != ''){
                    vantagens.push(vantagem2);
                }
                
                if(vantagemTexto3 != ''){
                    vantagens.push(vantagem3);
                }
                
                if(vantagemTexto4 != ''){
                    vantagens.push(vantagem4);
                }
                
                if(vantagemTexto5 != ''){
                    vantagens.push(vantagem5);
                }
    
                
                (function update(idx) {
                
                $(".vantagem-mobile").html(vantagens[idx]);
                
                $('.vantagem-mobile').css('background', ''+corVantagemFundo+''); 
                $('.vantagem-texto').css('color', ''+corVantagemTexto+'');
                $('.vantagem-mobile a').css('color', ''+corVantagemLink+'');
                
                        setTimeout(update, tempoVantagem, ((++idx) % vantagens.length));
                })(0);
                
                        
                $('.vantagem-mobile').css('background', ''+corVantagemFundo+''); 
                $('.vantagem-1').css('color', ''+corVantagemTexto+'');
                $('.vantagem-mobile a').css('color', ''+corVantagemLink+'');
                
            }
    
            $('.listagem-item .acoes-produto-responsiva.visible-phone').remove();
            $('.listagem-item .acoes-produto.hidden-phone').removeClass('hidden-phone');
            $('#barraNewsletter.hidden-phone.posicao-rodape').removeClass('hidden-phone');
            
            // Adiciona cores
            $('.icone-menu').css('fill', ''+corSecundaria+''); 
            $('.atalhos-mobile').css('background-color', ''+corPrimaria+'');
            $('.icone-home').css('fill', ''+corIconesCabecalhoMobile+'');
            $('.carrinho-mobile .icone-carrinho-topo').css('fill', ''+corIconesCabecalhoMobile+'');
            $('.icone-atendimento-mobile').css('fill', ''+corIconesCabecalhoMobile+''); 
            $('.qtd-carrinho').css('border-color', ''+corPrimaria+''); 
            $('.carrinho>a span').css('color', ''+corIconesCabecalhoMobile+''); 
            $('.pedidos-conta-mobile a').css('color', ''+corIconesCabecalhoMobile+''); 
            $('.painel-mobile').css('background-color', ''+corPrimaria+'');
            $('.abriga-acesso').css('color', ''+corIconesCabecalhoMobile+''); 
            $('.abriga-acesso a').css('color', ''+corIconesCabecalhoMobile+''); 
            $('.rastreio-mobile-titulo').css('color', ''+corPrimaria+'');
            $('.icone-user-mobile').css('fill', ''+corIconesCabecalhoMobile+''); 
            
            
      
       
        
    }
 
 
     // Rastreio Rapido
        if(rastreioRapido === true){
            
    	// Adiciona rastreio ao menu conta
        $('.conta-inside .conta-dir').append('<li class="conta-rastreio login-itens"><span><strong><i class="fas fa-truck"></i> Rastrear Pedido</strong><div class="rastreio"><div class="campo-rastreio"><input type="text" placeholder="Digite seu código" id="input-rastreio"><button onclick="rastreioRapido()" class="botao grande principal"><i class="fas fa-angle-right"></i></button></div></div></span></li>');
        
        // Adiciona rastreio ao mobile
        
        $('.painel-mobile').after('<div class="rastreio-mobile"><div class="rastreio-inside"><span class="rastreio-mobile-titulo"><i class="fas fa-truck"></i><strong>Rastrear</strong></span><span class="rastreio-content"></span></div></div>');
            
        // Adiciona cor ao rastreio
        $('.conta-rastreio strong').css('color', ''+corPrimaria+'');
        $('.conta-rastreio strong i').css('color', ''+corPrimaria+'');
            
        // Mostra/esconde o botao de rastreio rapido
        $('.rastreio .campo-rastreio input').bind('keyup change blur', function() {
            if (this.value.length > 0) {
                $('.rastreio .campo-rastreio .botao').show();
            }
            else {
                $('.rastreio .campo-rastreio .botao').hide();
            }
        });
        
        // Rastreio rapido
        $(".rastreio .botao").click(function() {
            var codigorastreio = document.getElementById('input-rastreio').value;
            window.open('https://melhorrastreio.com.br/rastreio/'+codigorastreio,'_blank');
        });
        
        $('.rastreio-content').append($('.rastreio'));
            
        }   
            
        // Adiciona cor aos títulos das categorias principais do menu principal
        $('.menu.superior .nivel-um>li>a>.titulo').css('color', ''+corTituloMenuSuperior+''); 
        $('.menu.superior .nivel-um>li>a>i').css('color', ''+corTituloMenuSuperior+'');
        
        // Adiciona cor a aba de departamentos     
        $('.icone-menu-departamentos').css('fill', ''+corSecundaria+'');
        $('.todos-departamentos .titulo').css('color', ''+corSecundaria+'');
        $('.todos-departamentos i').css('color', ''+corSecundaria+''); 
        
        $('.menu.superior>ul .todos-departamentos .nivel-dois>li>a strong').css('color', ''+corPrimaria+'');
        
        if(inverteCores === true){
    
            $('.busca').css('box-shadow', 'none');
            $('.busca').css('border', 'none');
            
            $('#cabecalho').css('background', ''+corPrimaria+''); 
            $('.novo-atendimento .icone-atendimento-topo').css('fill', '#fff');
            $('.novo-atendimento .atendimento-topo span').css('color', '#fff');
            $('.novo-login .icone-user-topo').css('fill', '#fff');
            $('.novo-login a').css('color', '#fff');
            $('.novo-carrinho .icone-carrinho-topo').css('fill', '#fff');
            $('.novo-carrinho .carrinho>a span').css('color', '#fff');
            $('.novo-carrinho .carrinho-cheio .titulo').css('color', '#fff');
            
            
            $('.item-cabecalho').css('background', 'none');
            $('.item-cabecalho').css('border-color', 'transparent');
            $('.item-cabecalho').css('box-shadow', 'none');
            $('.novo-carrinho .carrinho').css('background', 'none');
            $('.novo-carrinho .carrinho').css('border-color', 'transparent');
            $('.novo-carrinho .carrinho').css('box-shadow', 'none');

            $('.novo-carrinho .carrinho').css('box-shadow', 'none');
            
            $('.item-cabecalho').hover(function(){
                $(this).css('background', 'rgba(255, 255, 255, 0.08)'); 
                }, function(){
                $(this).css('background', 'none'); 
            });
            
            $('.novo-carrinho .carrinho').hover(function(){
                $(this).css('background', 'rgba(255, 255, 255, 0.08)'); 
                }, function(){
                $(this).css('background', 'none'); 
            });
            
            $('.abriga-menu').css('background-color', '#fff');
            
            $('.abriga-breadcrumbs').css('background', '#f4f4f4');
            
            $('.menu.superior>ul .todos-departamentos>a').css('box-shadow', 'none');
            $('.menu.superior>ul .todos-departamentos>a').css('background-color', ''+corSecundaria+'');
            $('.menu.superior>ul .todos-departamentos>a .icone-menu-departamentos').css('fill', ''+corPrimaria+'');
            $('.menu.superior>ul .todos-departamentos>a>strong').css('color', ''+corPrimaria+'');
            $('.menu.superior>ul .todos-departamentos>a>i').css('color', ''+corPrimaria+'');
            $('.menu.superior .nivel-um>li>a').css('box-shadow', 'none');
            
            // Adiciona cor primaria aos hovers textos do rodape
            $('.menu.superior .nivel-um>li>a').hover(function(){
                $(this).children().css('opacity', '0.7'); 
                }, function(){
                $(this).children().css('opacity', '1'); 
            });
        
            $('.qtd-carrinho').css('border-color', ''+corPrimaria+''); 
            $('.atalhos-mobile').css('border-bottom', '1px solid #2c2b2b2e');
            
            $('.sobre-loja-rodape .logo a').css('height', '33px');
            $('.sobre-loja-rodape .logo a img').css('border-radius', '5px'); 
            $('.sobre-loja-rodape .logo a img').css('padding', '10px'); 
            $('.sobre-loja-rodape .logo a img').css('background-color', ''+corPrimaria+'');
            
            $('.carrinho-checkout .atendimento *').css('color', '#fff');
            
       
        }
        

        if (typeof adicionaSobrepor !== 'undefined') {
            if(adicionaSobrepor === true){

                $('.ofertas-destaque i').css('color', ''+corBranco+'');
                $('.menu.superior>ul .todos-departamentos>a .icone-menu-departamentos').css('fill', ''+corBranco+'');
                $('.menu.superior>ul .todos-departamentos>a strong').css('color', ''+corBranco+'');
                $('.menu.superior>ul .todos-departamentos>a>i').css('color', ''+corBranco+'');
                $('.carrinho>a strong').css('color', ''+corBranco+'');
                $('.menu.superior .nivel-um>li .nivel-dois.menu-com-produtos .menu-produtos .produto-menu-destaque span i').css('color', ''+corBranco+'');
                $('.menu.superior .nivel-um>li .nivel-dois.menu-com-produtos .menu-produtos .produto-menu-destaque span strong').css('color', ''+corBranco+'');
                $('.componente.newsletter .botao').css('color', ''+corBranco+'');
                $('.componente.newsletter .icone-newsletter').css('fill', ''+corBranco+'');
            }
        }
        

        if (typeof fonteTema !== 'undefined') {

            if(fonteTema === 1){
           
            }

            if(fonteTema === 2){

                $('body').css('font-family', 'Open Sans');
                $('input').css('font-family', 'Open Sans');
                $('button').css('font-family', 'Open Sans');
                $('select').css('font-family', 'Open Sans');
                $('textarea').css('font-family', 'Open Sans');
                $('.titulo').css('font-family', 'Open Sans'); 
                $('.newsletter.componente .botao').css('font-family', 'Open Sans'); 
                $('.novo-painel>ul>li').css('margin-left', '1%'); 
                $('.novo-painel>ul>li').css('letter-spacing', '-0.5px');     
                $('.novo-login .login-a').css('margin-left', '10px'); 
                $('.novo-atendimento .atendimento-topo span').css('margin-left', '10px'); 


            }

            if(fonteTema === 3){

                $('body').css('font-family', 'Frank Ruhl Libre');
                $('input').css('font-family', 'Frank Ruhl Libre');
                $('button').css('font-family', 'Frank Ruhl Libre');
                $('select').css('font-family', 'Frank Ruhl Libre');
                $('textarea').css('font-family', 'Frank Ruhl Libre');
                $('.titulo').css('font-family', 'Frank Ruhl Libre'); 
                $('.newsletter.componente .botao').css('font-family', 'Frank Ruhl Libre'); 
                $('.novo-painel>ul>li').css('margin-left', '1%'); 

                        
            }

            if(fonteTema === 4){

                $('body').css('font-family', 'Saira Semi Condensed');
                $('input').css('font-family', 'Saira Semi Condensed');
                $('button').css('font-family', 'Saira Semi Condensed');
                $('select').css('font-family', 'Saira Semi Condensed');
                $('textarea').css('font-family', 'Saira Semi Condensed');
                $('.titulo').css('font-family', 'Saira Semi Condensed'); 
                $('.newsletter.componente .botao').css('font-family', 'Saira Semi Condensed'); 
                        
            }

            if(fonteTema === 5){

                $('body').css('font-family', 'Amaranth');
                $('input').css('font-family', 'Amaranth');
                $('button').css('font-family', 'Amaranth');
                $('select').css('font-family', 'Amaranth');
                $('textarea').css('font-family', 'Amaranth');
                $('.titulo').css('font-family', 'Amaranth'); 
                $('.newsletter.componente .botao').css('font-family', 'Amaranth'); 
                        
            }       
            

            if(fonteTema === 6){

                $('body').css('font-family', 'Play');
                $('input').css('font-family', 'Play');
                $('button').css('font-family', 'Play');
                $('select').css('font-family', 'Play');
                $('textarea').css('font-family', 'Play');
                $('.titulo').css('font-family', 'Play'); 
                $('.newsletter.componente .botao').css('font-family', 'Play'); 
                $('.novo-painel>ul>li').css('margin-left', '1%'); 
                        
            }
        } else{
            $('body').css('font-family', 'Roboto');
            $('input').css('font-family', 'Roboto');
            $('button').css('font-family', 'Roboto');
            $('select').css('font-family', 'Roboto');
            $('textarea').css('font-family', 'Roboto');
            $('.titulo').css('font-family', 'Roboto'); 
            $('.newsletter.componente .botao').css('font-family', 'Roboto'); 
        }
        
        
        
        

        


        
       
    }); 

    