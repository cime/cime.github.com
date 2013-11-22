Repository = Backbone.Model.extend({

});

Repositories = Backbone.Collection.extend({
	model: Repository,
	url: 'https://api.github.com/users/cime/repos',
	
	initialize: function(){
		
	}
});

$(function(){
	$('#printBtn').click(function(e){
		e.preventDefault();
		print();
	});
	
	$('ul#main-nav li').click(function(e){
		e.preventDefault();
		
		var $this = $(this);
		
		$('ul#main-nav li').removeClass('active');
		$('div.container > div.page').hide();
		
		$($('a', $this).attr('href')).show();
		$this.addClass('active');
	});
	
	var github = new Repositories();

	github.fetch().done(function(e){
		_.each(e, function(m){
			console.dir(m);
			if(!!!m.fork){
				var project = $('<li class="list-group-item">' +
					'<h4 class="list-group-item-heading">' + m.name + ' <small>(<a href="' + m.html_url + '">' + m.html_url + '</a>)</small></h4>' +
					'<p class="list-group-item-text">' + m.description + '</p>' +
					'<p class="list-group-item-text"><small>Language: <strong>' + m.language + '</strong></small></p>' +
					'<small><i class="fa fa-git"></i>' + m.git_url + '</small>' +
				'</li>')
				$('#github').append(project);
			}
		});
	});
});
