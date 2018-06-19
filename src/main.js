import Vue from 'vue'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {router} from "./classes/router";
import vuescroll from 'vue-scroll'
import vueScrollTo from 'vue-scroll-to';
import Axios from 'axios';
window.axios = Axios;
Vue.use(vueScrollTo);
Vue.use(vuescroll)


new Vue({
  el: '#header',
  router,
  render: h => h(Navbar)
});

new Vue({
  el: '#main',
  router
});

new Vue({
  el: '#footer',
  render: h => h(Footer)
})
