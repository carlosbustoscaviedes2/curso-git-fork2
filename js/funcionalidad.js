if($(window).width() < '600') {
				
		$(".regresar_ltsxd").attr('href', '#');

		}else{

			$(".regresar_ltsxd").removeAttr('href');
		}
		
		/*--------inicar con los medios pausados-----------*/
		$("#pause_video_ltxs").addClass('oprimido_tv_ltsx'); 
		$("#pause_radio_ltxs").addClass('seleccionado_ltsx');
		/*--------inicar con los medios pausados-----------*/

	
		/*------------------scroll de la portada----------------------*/
		$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1500);
		});
		/*------------------scroll de la portada----------------------*/



		/*----------------------------------audios---------------------------------------*/

		/*
		var podcast = $("#podcast");
		var radiocuento = $("#radiocuento");
		var audio = document.getElementById("audios_ltsx");
		var numero = 0;

		/*------inicio escojer audio-------
		podcast.click(function(event) {
			
			$("#audios_ltsx").attr('src', 'https://www.eltiempo.com/infografias/2021/03/multimedia/audios/amamos-y-somos-amados.mp3');
			audio.play();

			numero = 1;
			console.log(numero);

			$("#play_radio_ltxs").addClass('seleccionado_ltsx');

			$("#terminar_radio_ltxs").removeClass('seleccionado_ltsx')
			$("#pause_radio_ltxs").removeClass('seleccionado_ltsx');
		
		});

		radiocuento.click(function(event) {
			
			$("#audios_ltsx").attr('src', 'https://www.eltiempo.com/infografias/2021/03/multimedia/audios/me_entregaron_a_mi_mujer.mp3');
			audio.play();

			numero = 2;
			console.log(numero);

			$("#play_radio_ltxs").addClass('seleccionado_ltsx');

			$("#terminar_radio_ltxs").removeClass('seleccionado_ltsx')
			$("#pause_radio_ltxs").removeClass('seleccionado_ltsx');
			
			
		});

		*/


		/*------fin escojer audio-------*/


		/*-------inicio controladores audio----*/


		/*
		$("#play_radio_ltxs").click(function(event) {

			audio.play();

			$("#play_radio_ltxs").addClass('seleccionado_ltsx');
			$("#pause_radio_ltxs").removeClass('seleccionado_ltsx');
			$("#terminar_radio_ltxs").removeClass('seleccionado_ltsx');


		});

		$("#pause_radio_ltxs").click(function(event) {
			
			var audio = document.getElementById("audios_ltsx");
			audio.pause();

			$("#pause_radio_ltxs").addClass('seleccionado_ltsx');
			$("#play_radio_ltxs").removeClass('seleccionado_ltsx');
			$("#terminar_radio_ltxs").removeClass('seleccionado_ltsx');
		});


		$("#terminar_radio_ltxs").click(function(event) {

			$("#terminar_radio_ltxs").addClass('seleccionado_ltsx')
			$("#pause_radio_ltxs").removeClass('seleccionado_ltsx');
			$("#play_radio_ltxs").removeClass('seleccionado_ltsx');
			
			$("#audios_ltsx").attr('src', '');

			setTimeout(function(){

				if(numero == 1){
					
					$("#audios_ltsx").attr('src', 'https://www.eltiempo.com/infografias/2021/03/multimedia/audios/amamos-y-somos-amados.mp3');
				}

				if (numero == 2) {

					$("#audios_ltsx").attr('src', 'https://www.eltiempo.com/infografias/2021/03/multimedia/audios/me_entregaron_a_mi_mujer.mp3');
				}

			}, 500)

		});

		*/



		/*-------fin controladores audio----*/

		/*-------------------------------------audios--------------------------------------------------*/




		/*-------------------------------------videos---------------------------------------------------*/
		var recuerdo = $("#recuerdo, #recuerdo2");
		var usaquen  = $("#usaquen");

		var video =   document.getElementById("video1_ltx");
		var video2 =  document.getElementById("video2_ltx");

		var numero2 = 1;
		
		/*--------inicio escojer video-------*/
		recuerdo.click(function(event) {
			
			video.play();/*----reproducir video---*/
			video.style.opacity = '1'
			video.style.display = 'inline-block';


			/*----------video 2--------*/
			video2.pause();/*----reproducir video---*/
			video2.style.opacity = '0';
			video2.style.display = 'none';
			/*----------video 2--------*/

			numero2 = 1;
			console.log(numero2);


		});

		usaquen.click(function(event) {

			video2.play();

			video2.style.opacity = '1';
			video2.style.display = 'inline-block';

		
			/*----------video 1----------*/
			video.pause();
			video.style.opacity = '0'
			video.style.display = 'none';
			/*----------video 1----------*/

			numero2 = 2;
			console.log(numero2);

			
		
		});
		/*--------fin escojer video-------*/


		/*--------inicio contrladores video -------*/
		$("#play_video_ltxs").click(function(event) {
			
			$("#play_video_ltxs").addClass('oprimido_tv_ltsx');
			$("#pause_video_ltxs").removeClass('oprimido_tv_ltsx');  
			$("#terminar_video_ltxs").removeClass('oprimido_tv_ltsx');    


			if(numero2 == 1){

				video.play();
			}

			if(numero2 == 2){

				video2.play();
			}
		
		});


		$("#pause_video_ltxs").click(function(event) {

			$("#play_video_ltxs").removeClass('oprimido_tv_ltsx');
			$("#pause_video_ltxs").addClass('oprimido_tv_ltsx');  
			$("#terminar_video_ltxs").removeClass('oprimido_tv_ltsx');   
			
			if(numero2 == 1){

				video.pause();
			}

			if(numero2 == 2){

				video2.pause();
			}

		});


		$("#terminar_video_ltxs").click(function(event) {

			$("#play_video_ltxs").removeClass('oprimido_tv_ltsx');
			$("#pause_video_ltxs").removeClass('oprimido_tv_ltsx');  
			$("#terminar_video_ltxs").addClass('oprimido_tv_ltsx');   
			
			if(numero2 == 1){

				video.currentTime = 0;
				video.pause();
			}

			if(numero2 == 2){

				video2.currentTime = 0;
				video2.pause();
			}

		});
		/*--------inicio contrladores video -------*/



		/*-------video pantalla completa----*/

		function getFullscreen(element){
		  if(element.requestFullscreen) {
		      element.requestFullscreen();
		    } else if(element.mozRequestFullScreen) {
		      element.mozRequestFullScreen();
		    } else if(element.webkitRequestFullscreen) {
		      element.webkitRequestFullscreen();
		    } else if(element.msRequestFullscreen) {
		      element.msRequestFullscreen();
		    }
		}

		   var pantallaCompleta = document.getElementById("pantalla_completa_ltsx");

		   pantallaCompleta.addEventListener("click", function(){

		   		if(numero2 == 1){

		   			getFullscreen(document.getElementById("video1_ltx"));
		   			$(".video_televisor_ltsxd").css('border-radius', '0');
		   		}

		   		if(numero2 == 2){

		   			getFullscreen(document.getElementById("video2_ltx"));
		   			$(".video_televisor_ltsxd").css('border-radius', '0');
		   		}

		   })
		   /*-------fin video pantalla completa----*/



		/*-------------------------------------fin de videos--------------------------------------------*/



	/*--------------inicio scroll animaciones------------------*/
	if($(window).width() > '1000') {

		function mostrarScroll(){

			let scrollTop = document.documentElement.scrollTop;
			console.log(scrollTop);

			let seccion = document.querySelector(".contenedor_principal_ymyr-dos");
			var alturaSeccion = seccion.offsetTop;
			/*console.log(alturaSeccion);*/ /*------determina la atura hasta llegar a la seccion---*/


			/*----------------menu biblioteca-----------*/
			if(scrollTop >= alturaSeccion){

				$(".contenedor_menu_flotante_ltsx").css('display', 'block');
			}else{
				
				$(".contenedor_menu_flotante_ltsx").css('display', 'none');
			}
			/*----------------menu biblioteca-----------*/



			/*----------------contenido--------------*/
			if(scrollTop > 300){ $(".texto_seccion_ltxdf").addClass('textos_parrafo') }
			if(scrollTop > 600){ $(".logo_secion2_ltsx").addClass('textos_parrafo ') }

			if(scrollTop > 1200){  $(".seccion_la_justicia").addClass('imagen_parrafo ');  }
			if(scrollTop > 3200){  $(".seccion_la_casa").addClass('imagen_parrafo ');  }
			if(scrollTop > 4750){  $(".base_contenedor_5_ltsx").addClass('imagen_parrafo ');  }
			if(scrollTop > 6000){  $(".contenedor_radio_ltsxf").addClass('imagen_parrafo ');  }

			if(scrollTop > 7700){  $(".contenedor_informacion_ltsxd").addClass('imagen_parrafo ');  }
			if(scrollTop > 8000){  $(".base_tu_creatividad").addClass('imagen_parrafo ');  }
			/*--------------fin contenido--------------*/

		}

		window.addEventListener("scroll", mostrarScroll);

	}

	/*--------------inicio scroll animaciones------------------*/




	/*--------------------inicio leer mas desktop---------------------*/
	let leer1 = 0;
	let leer2 = 0;
	let leer3 = 0;


	$("#btn_leer_mas_1, .boton_desktop_leer_lts").click(function(event) {

		if(leer1 == 0){
			$("#leer_mas_1").slideDown(600);
			$("#btn_leer_mas_1").text('Reducir texto');
			leer1 = 1;
		
		}else{
			leer1 = 0;
			$("#leer_mas_1").slideUp(600)
			$("#btn_leer_mas_1").text('Seguir leyendo...');
		}
		
		
	});


	$("#btn_leer_mas_2, .boton_desktop_leer_lts2").click(function(event) {
		
		if(leer2 == 0){
			$("#leer_mas_2").slideDown(600);
			$("#btn_leer_mas_2").text('Reducir texto');
			leer2 = 1;
		
		}else{
			leer2 = 0;
			$("#leer_mas_2").slideUp(600)
			$("#btn_leer_mas_2").text('Seguir leyendo...');
		}
	});


	$("#btn_leer_mas_3, .boton_desktop_leer_lts3").click(function(event) {
		if(leer3 == 0){
			$("#leer_mas_3").slideDown(600);
			$("#btn_leer_mas_3").text('Reducir texto');
			leer3 = 1;
		
		}else{
			leer3 = 0;
			$("#leer_mas_3").slideUp(600)
			$("#btn_leer_mas_3").text('Seguir leyendo...');
		}
	});
	/*--------------------fin leer mas desktop---------------------*/




	
	
	/*--------------------inicio libros secciones internas----------------*/

	/*-----------libro justicia-----------*/
	$("#libro_justicia, #libro_justicia_M").click(function(event) {
		
		if($(window).width() < '600') {

			$(".contenedor_principal_ymyr-tres").css('background-image', 'url(https://www.eltiempo.com/infografias/2020/12/yo_mayor/img/textura_fondo_blanco.png)');

			$(".libro_eliza_ltsx").css('display', 'none');

			$(".regresar_ltsxd").attr('href', '#ancla_menu_responsive_lts');


			/*--------pausar videos y audios-------*/
			$("#play_video_ltxs").removeClass('oprimido_tv_ltsx');
			$("#pause_video_ltxs").addClass('oprimido_tv_ltsx'); 
			$("#pause_radio_ltxs").addClass('seleccionado_ltsx');
			$("#play_radio_ltxs").removeClass('seleccionado_ltsx');
			audio.pause();
			video.pause();
			/*--------pausar videos y audios-------*/


			$(".contenedor_general_menu_flotante_ltsx").css('display', 'none');
			$(".contenedor_subseccion_dos_ltsx").css('position', 'relative');
			$("#seccion1_lts, #seccion2_lts, #seccion3_ltsx, #seccion4_ltsx, #seccion5_ltsx, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'none');

			$(".seccion_la_justicia").removeClass('imagen_parrafo');
			
			$("#libro_casa").css('display', 'block');
			$("#libro_justicia").css('display', 'none');
			$("#libro_rey").css('display', 'block');

			$("#libro_volver").css('display', 'block');

			setTimeout(function(){
				$("#seccion3_ltsx").css('display', 'block');
				$("#seccion3_ltsx").addClass('imagen_parrafo_interno');
				$(".contenedor_subseccion_dos_ltsx").css('position', 'relative');

			}, 100);

		}else{

			
			/*--------pausar videos y audios-------*/
			$("#play_video_ltxs").removeClass('oprimido_tv_ltsx');
			$("#pause_video_ltxs").addClass('oprimido_tv_ltsx'); 
			$("#pause_radio_ltxs").addClass('seleccionado_ltsx');
			$("#play_radio_ltxs").removeClass('seleccionado_ltsx');
			audio.pause();
			video.pause();
			/*--------pausar videos y audios-------*/


			$(".base_enacabezado_tres_ltsxd ").removeClass('seccion_la_justicia')
			$(".base_leer_mas_ltsxd").css('display', 'none');
			$("#leer_mas_1").css('display', 'block');
			$(".justicia_verde_ltsx").css('display', 'inline-block');

			$("#seccion1_lts, #seccion2_lts, #seccion3_ltsx, #seccion4_ltsx, #seccion5_ltsx, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'none');

			$(".seccion_la_justicia").removeClass('imagen_parrafo');
			
			$("#libro_casa").css('display', 'block');
			$("#libro_justicia").css('display', 'block');
			$("#libro_rey").css('display', 'block');

			$("#libro_volver").css('display', 'block');

			setTimeout(function(){
				$("#seccion3_ltsx").css('display', 'block');
				$("#seccion3_ltsx").addClass('imagen_parrafo_interno');


				$(".contenedor_subseccion_dos_ltsx").css({
					'position': 'sticky',
					'top': '0',
					'left': '0',
				});

				/*-------- detector final del scroll--------*/
				$(window).scroll(function(event) {
				
					alturaDocumento = $(document).height();
					alturaScroleada = $(this).scrollTop();
					alturaviewport  = $(this).height();

					if(alturaDocumento == (alturaScroleada + alturaviewport)){

						console.log("llego al final");

					}
				});


			}, 100);

		}

	});


	/*-----------libro casa-----------*/

	$("#libro_rey, #libro_rey_M").click(function(event) {

		if($(window).width() < '600') {

			/*--------pausar videos y audios-------*/
			$("#play_video_ltxs").removeClass('oprimido_tv_ltsx');
			$("#pause_video_ltxs").addClass('oprimido_tv_ltsx'); 
			$("#pause_radio_ltxs").addClass('seleccionado_ltsx');
			$("#play_radio_ltxs").removeClass('seleccionado_ltsx');
			audio.pause();
			video.pause();
			/*--------pausar videos y audios-------*/

			$(".contenedor_general_menu_flotante_ltsx").css('display', 'none');
			$(".contenedor_subseccion_dos_ltsx").css('position', 'relative');
			$("#seccion1_lts, #seccion2_lts, #seccion3_ltsx, #seccion4_ltsx, #seccion5_ltsx, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'none');

			$(".seccion_la_justicia").removeClass('imagen_parrafo');
			
			$("#libro_casa").css('display', 'none');
			$("#libro_justicia").css('display', 'block');
			$("#libro_rey").css('display', 'block');

			$("#libro_volver").css('display', 'block');

			setTimeout(function(){
				$("#seccion4_ltsx").css('display', 'block');
				$("#seccion4_ltsx").addClass('imagen_parrafo_interno');
				$(".contenedor_principal_ymyr-dos").css('z-index', '9');
			}, 100)

		}else{



			$(".contenedor_principal_ymyr-dos").css('background-image', 'url("https://www.eltiempo.com/infografias/2020/12/yo_mayor/img/textura_fondo_blanco.png")');

			/*--------pausar videos y audios-------*/
			$("#play_video_ltxs").removeClass('oprimido_tv_ltsx');
			$("#pause_video_ltxs").addClass('oprimido_tv_ltsx'); 
			$("#pause_radio_ltxs").addClass('seleccionado_ltsx');
			$("#play_radio_ltxs").removeClass('seleccionado_ltsx');
			audio.pause();
			video.pause();
			/*--------pausar videos y audios-------*/

			$(".base_leer_mas_ltsxd").css('display', 'none');
			$("#leer_mas_2").css('display', 'block');


			$(".casa_verde_ltsx").css('display', 'block');

			$("#seccion1_lts, #seccion2_lts, #seccion3_ltsx, #seccion4_ltsx, #seccion5_ltsx, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'none');

			$(".seccion_la_justicia").removeClass('imagen_parrafo');
			
			$("#libro_casa").css('display', 'block');
			$("#libro_justicia").css('display', 'block');
			$("#libro_rey").css('display', 'block');

			$("#libro_volver").css('display', 'block');

			

			setTimeout(function(){
				$("#seccion4_ltsx").css('display', 'block');
				$("#seccion4_ltsx").addClass('imagen_parrafo_interno');
				$(".contenedor_principal_ymyr-dos").css('z-index', '9');

				$(".contenedor_subseccion_dos_ltsx").css({
					'position': 'sticky',
					'top': '0',
					'left': '0',
				});

			}, 100)


		}

	});


	/*-----------libro rey-----------*/
	$("#libro_rey, #libro_rey_M").click(function(event) {


		if($(window).width() < '600') {
			audio.pause();
			video.pause();

			

			$(".contenedor_general_menu_flotante_ltsx").css('display', 'none');
			$(".contenedor_subseccion_dos_ltsx").css('position', 'relative');
			$("#seccion1_lts, #seccion2_lts, #seccion3_ltsx, #seccion4_ltsx, #seccion5_ltsx, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'none');

			$(".seccion_la_justicia").removeClass('imagen_parrafo');
			
			$("#libro_casa").css('display', 'block');
			$("#libro_justicia").css('display', 'block');
			$("#libro_rey").css('display', 'none');

			$("#libro_volver").css('display', 'block');


			setTimeout(function(){
				$("#seccion5_ltsx").css('display', 'block');
				$("#seccion5_ltsx").addClass('imagen_parrafo_interno');
				$(".contenedor_principal_ymyr-dos").css('z-index', '9');
			}, 100)

		}else{
			audio.pause();
			video.pause();
			


			$(".base_leer_mas_ltsxd").css('display', 'none');
			$("#leer_mas_3").css('display', 'block');

			$(".rey_verde_ltsx").css('display', 'block');

			$("#seccion1_lts, #seccion2_lts, #seccion3_ltsx, #seccion4_ltsx, #seccion5_ltsx, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'none');

			$(".seccion_la_justicia").removeClass('imagen_parrafo');
			
			$("#libro_casa").css('display', 'block');
			$("#libro_justicia").css('display', 'block');
			$("#libro_rey").css('display', 'block');

			$("#libro_volver").css('display', 'block');

			setTimeout(function(){
				$("#seccion5_ltsx").css('display', 'block');
				$("#seccion5_ltsx").addClass('imagen_parrafo_interno');
				$(".contenedor_principal_ymyr-dos").css('z-index', '9');

				$(".contenedor_subseccion_dos_ltsx").css({
					'position': 'sticky',
					'top': '0',
					'left': '0',
				});

			}, 100)

		}
		

	});


	/*-----------cerrar libros internos y pasar al home-----------*/

	$("#libro_volver, .regresar_ltsxd, .boton_leer_mas_ltsx").click(function(event) {

		if($(window).width() < '600') {

			$(".contenedor_principal_ymyr-tres").css('background-image', 'inherit');

			$("#seccion1_lts, #seccion2_lts, .contenedor_general_menu_flotante_ltsx.esconder_mobile, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'block');

			$("#seccion4_ltsx, #seccion3_ltsx, #seccion5_ltsx").css('display', 'none');

		}else{

			$(".base_enacabezado_tres_ltsxd ").addClass('seccion_la_justicia');

			$(".justicia_verde_ltsx, .casa_verde_ltsx, .rey_verde_ltsx").css('display', 'none');

			$(".base_leer_mas_ltsxd").css('display', 'block');
			$("#leer_mas_1, #leer_mas_2, #leer_mas_3").css('display', 'none');

			$("#seccion1_lts, #seccion2_lts, #seccion3_ltsx, #seccion4_ltsx, #seccion5_ltsx, #seccion6_ltsx, #seccion7_ltsx, #seccion8_ltsx").css('display', 'block');

			$("#libro_casa").css('display', 'block');
			$("#libro_justicia").css('display', 'block');
			$("#libro_rey").css('display', 'block');

			$("#libro_volver").css('display', 'none');


			$(".contenedor_principal_ymyr-dos").css('z-index', '90');

			$(".contenedor_subseccion_dos_ltsx").css('position', 'relative');

		}

	});

	/*--------------------fin seccion libros de secciones internas----------------*/




	