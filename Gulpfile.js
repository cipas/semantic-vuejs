var elixir = require("laravel-elixir");

elixir.config.assetsPath = 'src/assets';
elixir.config.publicPath = 'dist';
elixir.config.js.browserify.transformers.push({ name: 'vueify', options: {}});

elixir(function(mix){

	mix.copy('src/index.html', "dist/index.html");
	mix.copy('src/semantic', "dist/semantic");


	mix.copy('node_modules/jquery/dist/jquery.min.js', "dist/js/jquery.min.js");
	mix.copy('node_modules/jquery/dist/jquery.min.map', "dist/js/jquery.min.map");
	
	mix.browserify('app.js', null , 'src/assets/js')
		
	// mix.browserSync({
	// 	open: 'external',
 //    host: 'semantic-vue.dev',
	// 	proxy: 'semantic-vue.dev',
	// 	browser: "google chrome",
 //    port: 3000
	// });
});
