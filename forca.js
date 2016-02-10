function create_buttons(parent){

	letras = 'abcdefghijklmnopqrstuvwxyz'.split('');

	pai = document.querySelector(parent);

	letras.forEach(function(letra){

		btn = document.createElement('BUTTON');
		texto = document.createTextNode(letra.toUpperCase());

		btn.classList.add('btn');

		btn.appendChild(texto);
		pai.appendChild(btn);

	})
}

create_buttons('.teclado');

botoes = document.querySelectorAll('.btn');
valores = [];
cont = 0;

for(i = 0 ; i < botoes.length ; i++){
	botoes[i].addEventListener('click',function(){

		valor_anterior = valores[cont-1];

		if (valores.length == 0){
			this.classList.add('acerto');
			valores.push('acerto');

		} else if (valor_anterior == 'acerto'){
			this.classList.add('erro');
			valores.push('erro');
			
		}else{
			this.classList.add('acerto');
			valores.push('acerto');
		}

		cont += 1;


	});
}
