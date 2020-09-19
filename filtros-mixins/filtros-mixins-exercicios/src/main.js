import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor){
	return valor.split('').reverse().join('')
})

Vue.mixin({
	data(){
		return {
			global: 'Estou no mixin global'
		}
	},
	created() {
		// eslint-disable-next-line no-console
		console.log('Global Mixin');
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
