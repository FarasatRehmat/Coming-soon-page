/* Modular fashion.
*	-> For every plugin you make a function and call it.
*/

$(document).ready(function(){
// Code ? When the page finished loading.
	init();

});

function init(){
    countDown1()
}
function countDown1(){
    $('.timer1').countdown('2050/10/11', function(event){
        $(this).find('.days').text(event.strftime('%D'));
        $(this).find('.hours').text(event.strftime('%H'));
        $(this).find('.minutes').text(event.strftime('%M'));
        $(this).find('.seconds').text(event.strftime('%S'));

    });
}