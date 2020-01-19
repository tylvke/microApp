import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router';

Vue.config.productionTip = false

let router = null;
let instance = null;

export async function bootstrap() {
  // console.log('vue app bootstraped');
}

export async function mount() {
  router = new VueRouter({
    routes,
  });

  instance = new Vue({
    el: '#micro_vue',
    render: h => h(App),
    router,
  });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}

if(!window.__POWERED_BY_SINGLE_SPA__){
  mount()
}
