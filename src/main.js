// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/*引用入口app的vue文件*/
import App from './App'
import Router from './router' // 路由列表
import store from '@/vuex/store'
import iView from 'iview'            //引入iviewUI
import 'iview/dist/styles/iview.css' // 使用 iview CSS
import '@/assets/css/sprite.css' 
import '@/assets/css/style.css' 
import '@/my-theme/index.less'
import VueI18n from 'vue-i18n'


/*Vue.config.productionTip = false;*/

Vue.use(iView);
Vue.use(VueI18n);

const messages = {
    zh: {
      message: {
        hello: '好好学习，天天向上！'
      }
    },
    en: {
      message: {
        hello: 'good good study, day day up!'
      }
    }
}

const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages
})


Router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

Router.afterEach(route => {
    iView.LoadingBar.finish();
});

new Vue({
	el: '#app',
	router: Router,
	store,
	i18n,
	render: h => h(App)
});
