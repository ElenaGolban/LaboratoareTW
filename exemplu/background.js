var select = document.querySelector('select');
var html = document.querySelector('body');
html.style.backgroundRepeat = "no-repeat";
html.style.backgroundSize="cover";
select.addEventListener('change', backgrounds);

function backgrounds(){
	var choice = select.value;
	if(choice ==='day'){
		html.style.backgroundImage =  'src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1920px-Flag_of_Bangladesh.svg.png"';
	}
	else if(choice === 'night'){
		html.style.backgroundImage = ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png"';
	}
	else if(choice === 'night'){
		html.style.backgroundImage = ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png"';
	}
	else if(choice === 'night'){
		html.style.backgroundImage = ' src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg"';
	}
}