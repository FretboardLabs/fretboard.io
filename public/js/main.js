$(function() {
    $('#nav a').click(function(e){
	var $targetName = $(this).attr('href').slice(1);
	var $target = $('#contents').find('div[id=' + $targetName + ']');

	$('#nav a').removeClass('current');
	$(this).addClass('current');

	var $targetOffset = $target.offset().top;
	$('html,body')
	    .animate({
		scrollTop: $targetOffset
	    }, 200, "easeOutQuad", function(){});
	e.preventDefault();
    });
});
