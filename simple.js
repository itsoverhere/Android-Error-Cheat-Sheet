
$(document).ready(function(){
	$('img').click(function(){
		console.log(this);
		console.log(this.src);
		window.open(this.src);
	});
});