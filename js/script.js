/*$(document).ready(function() {
	$('._first').click(function(event) {
		$('._first').toggleClass('active')
	})
})
$(document).ready(function() {
	$('._second').click(function(event) {
		$('._second').toggleClass('active')
	}) 
})*/

const buttonSearch = document.querySelector('#search-block__button_first');
const buttonSearch2 = document.querySelector('#search-block__button_second');

buttonSearch.addEventListener('click', function(){

	if (buttonSearch.classList.contains('_fill')){

		buttonSearch.classList.remove('_fill');
	} else {

		buttonSearch.classList.add('_fill')
		if (buttonSearch2.classList.contains('_fill')){
			buttonSearch2.classList.remove('_fill')
		}
	}
})

buttonSearch2.addEventListener('click', function(){

	if (buttonSearch2.classList.contains('_fill')){

		buttonSearch2.classList.remove('_fill');
	} else {

		buttonSearch2.classList.add('_fill')
		if (buttonSearch.classList.contains('_fill')){
			buttonSearch.classList.remove('_fill')
		}
	}
})

/*buttonSearch.addEventListener('click', function(){

	buttonSearch2.classList.toggle('_fill')

	if (buttonSearch2.classList.contains('_fill')) {

		buttonSearch.addEventListener('click', function(){
			buttonSearc2.classList.remove('_fill');
			buttonSearch.classList.add('_fill');
		})
	}
})*/