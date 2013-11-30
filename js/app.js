Repository = Backbone.Model.extend({

});

Repositories = Backbone.Collection.extend({
	model: Repository,
	url: 'https://api.github.com/users/cime/repos',
	
	initialize: function(){
		
	}
});

Router = Backbone.Router.extend({
	routes: {
		'blog/:post': 'blog',
		'*any': 'any'
	},
	blog: function(post){
		this.any('blog');
		
		$('#blog > ul.nav li').removeClass('active');
		$('#blog > ul.nav li a[href="#blog/' + post +'"]').parent().addClass('active');
		
		$('#blog h2').text('Post ' + post);
	},
	any: function(page){
		var $this = $('ul#main-nav li a[href="#' + page + '"]');
		
		$('ul#main-nav li').removeClass('active');
		$('div.container > div.page').hide();
		
		$('#' + page).show();
		$this.parent().addClass('active');
	}
});

router = new Router();

Backbone.history.start();

$(function(){
	$('#printBtn').click(function(e){
		e.preventDefault();
		print();
	});
	
	$('ul#main-nav li a, #blog > ul.nav li a').click(function(e){
		e.preventDefault();
		
		router.navigate($(this).attr('href'), {trigger: true});
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
