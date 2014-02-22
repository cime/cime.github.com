App = {
	View: {},
	Model: {},
	Collection: {},
	context: {}
};

App.Model.Repository = Backbone.Model.extend({

});

App.Collection.Repositories = Backbone.Collection.extend({
	model: App.Model.Repository,
	url: 'https://api.github.com/users/cime/repos'
});

App.View.Repository = Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',
	template: _.template($('#repo-template').html()),
	
	initialize: function(options){
		this.model = options.model;
	},
	
	render: function(){
		this.$el.empty();
		
		this.$el.html(this.template(this.model));
	
		return this;
	}
});

App.View.Repositories = Backbone.View.extend({
	el: '#github',
	initialize: function(options){
		this.collection = options.collection;
	},
	render: function(){
		var self = this;
		this.$el.empty();
		
		_.each(this.collection, function(m){
			if(!!!m.fork){
				self.$el.append(new App.View.Repository({ model: m }).render().el);
			}
		});
	
		return this;
	}
});

App.context.github = new App.Collection.Repositories();

App.Router = Backbone.Router.extend({
	routes: {
		'blog/:post': 'blog',
		'projects': 'projects',
		'*any': 'any'
	},
	blog: function(post){
		this.any('blog');
		
		$('#blog > ul.nav li').removeClass('active');
		$('#blog > ul.nav li a[href="#blog/' + post +'"]').parent().addClass('active');
		
		$('#blog h2').text('Post ' + post);
	},
	projects: function(page){
		this.any('projects');
		
		App.context.github.fetch().done(function(e){
			new App.View.Repositories({ collection: e }).render();
		});
	},
	any: function(page){
		page = page || 'about';
	
		var $this = $('ul#main-nav li a[href="#' + page + '"]');
		
		$('ul#main-nav li').removeClass('active');
		$('div.container > div.page').hide();
		
		$('#' + page).show();
		$this.parent().addClass('active');
	}
});

App.router = new App.Router();

Backbone.history.start();

$(function(){
	$('#printBtn').click(function(e){
		e.preventDefault();
		print();
	});
	
	$('ul#main-nav li a, #blog > ul.nav li a').click(function(e){
		e.preventDefault();
		
		App.router.navigate($(this).attr('href'), {trigger: true});
	});
});
