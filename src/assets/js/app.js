var Vue = require("Vue");

Vue.config.debug = true;
var MQButton = require ("../coffee/elements/buttons/button/button.vue");

// Buttons
// Vue.component('mq-button', MQButton);

var Demo = new Vue({
	el: '#demo',
	data : {
		message : "Probando"
	},
	components: {
		'mq-button' : require ("../coffee/elements/buttons/button/button.vue")
	}
});