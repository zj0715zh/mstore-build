import 'static/common/js/kinerLottery.css'
import 'static/common/js/kinerLottery.js'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import promise from 'es6-promise'
import 'common/js/rem.js'
import 'common/css/common.css'
Vue.prototype.$ajax = axios
promise.polyfill()
var app;
var active_bigWheel = {
	init(){
		app = new Vue({
	    	el: '#app',
		  	template: '<App/>',
		  	components: { App }
		});
	}
}
active_bigWheel.init();
