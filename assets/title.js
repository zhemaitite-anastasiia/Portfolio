function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}
$( document ).ready(function() {
  var speed = 175;
  var delay = $('h1').text().length * speed + speed;
  typeEffect($('h1'), speed);
  setTimeout(function(){
    $('.prof').css('display', 'inline-block');
    typeEffect($('.prof'), speed);
  }, delay);
  
});