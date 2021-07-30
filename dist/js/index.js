// (function (){
// 	const burgerButton = document.querySelector('.header__burger-button');
// 	const burgerDiv = document.querySelector('.header__burger');
// 	const header = document.querySelector('.header');
// 	const nav = document.querySelector('.header__menu');
// 	burgerButton.AddEventListener('click', () => {
// 		burgerDiv.classList.toggle('.burger-active');
// 		header.classList.toggle('.burger-active__header');
// 		nav.classList.toggle('.burger-active__menu');
// 	});
// })()

let el = document.querySelector('header');
var className = el.classList;


function changeBurgerState(){
		// window.scrollTo(90,90)
		
		$('.header').toggleClass('burger-active__header');
		$('.header__burger').toggleClass('burger-active');
		$('.header__menu').toggleClass('burger-active__menu');
		$('.container').toggleClass('active--menu');



		if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
	   	if(className.contains('burger-active__header') === false){
	      	$('#burger').css('marginTop','34px');
	      	$('header').css('height','60px');
	      }
	      else {
	      	$('header').css('height','100vh'); 
      		$('#burger').css('marginTop','68px');
	      } 
	      
	   } 
	   else if (document.body.scrollTop <= 40 || document.documentElement.scrollTop <= 40){
	      if(className.contains('burger-active__header') === false){
	      	$('#burger').css('marginTop','68px');
	      	$('header').css('height','76px');
	      }
	      else {
	      	$('header').css('height','100vh'); 
      		$('#burger').css('marginTop','68px');
	      } 
	   }

	   // навесить обработчик на ссылки через toggle
}
let clickRef = () => {
	if (document.getElementById('burger').classList.contains('burger-active')) changeBurgerState();
	// document.location.href = "S{url} + "/" + ${ref}";
}
$(document).ready(
	function burger(){
	$('.header__burger-button').click(function(event){
		changeBurgerState();
	});
});


// scroll 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   // document.getElementsByTagName('body')[0].style.overflow = "visible";
   if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    	if(className.contains('burger-active__header') === false){
      	$('#burger').css('marginTop','34px');
      	$('header').css('height','60px');
      }
		else {
	      	$('header').css('height','100vh'); 
      		$('#burger').css('marginTop','68px');
      } 
   } 
   else if (document.body.scrollTop <= 40 || document.documentElement.scrollTop <= 40){
      if(className.contains('burger-active__header') === false){
      	$('#burger').css('marginTop','68px');
      	$('header').css('height','76px');
      }
      else {
	      	$('header').css('height','100vh'); 
      		$('#burger').css('marginTop','68px');
      } 
   }

	
}

