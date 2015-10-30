$(function() {
    $('#nav a').click(function(e){
	var $targetName = $(this).attr('href').slice(1);
	var $target = $('#contents').find('div[id=' + $targetName + ']');

	var $targetOffset = $target.offset().top;
	$('html,body')
	    .animate({
		scrollTop: $targetOffset
	    }, 200, "easeOutQuad", function(){});
	e.preventDefault();
    });

    $(window).scroll(function() {
	var windowCenter = $(window).scrollTop() + $(window).height() * 0.5;
	$('#contents div.full').each(function(ii) {
	    if ($(this).position().top <= windowCenter) {
		$('#nav a').removeClass('current');
		$('#nav a').eq(ii).addClass('current');
	    }
	});

    }).scroll();
});
