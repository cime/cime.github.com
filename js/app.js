$(function(){
	$('#printBtn').click(function(e){
		e.preventDefault();
		print();
	});
	
	$('ul#main-nav li').click(function(e){
		e.preventDefault();
		
		$('ul#main-nav li').removeClass('active');
		$('div.container > div.page').hide();
		
		$($('a', this).attr('href')).show();
		$(this).addClass('active');
	});
});
