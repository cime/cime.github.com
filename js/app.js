$(function(){
	$('#printBtn').click(function(e){
		e.preventDefault();
		print();
	});
	
	$('ul.nav li').click(function(e){
		e.preventDefault();
		
		$('ul.nav li').removeClass('active');
		$('div.container > div.page').hide();
		
		$($('a', this).attr('href')).show();
		$(this).addClass('active');
	});
});
