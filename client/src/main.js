import Vue from 'vue'
import App from '@/App.vue'
import routes from '@/routes/index.js';
import vueRouter from 'vue-router';
import materialize from 'materialize-css';

Vue.use(vueRouter);
const router = new vueRouter({
  mode: 'history',
  routes: routes
});

Vue.use(materialize);
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')