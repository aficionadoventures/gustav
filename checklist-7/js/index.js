$('.field-wrap').click(function(){
	$(this).children('.checkbox').toggleClass('checked');
});

$('.select-toggle').click(function(){
	$(this).parents('.select').toggleClass('open');
});

$('.select > li > ul > li').click(function(){
	var selectedText = $(this).text();
	$('.select-toggle').text(selectedText);
	$(this).parents('.select').removeClass('open');
});