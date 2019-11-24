import Vue from 'vue'
import Router from 'vue-router'
import content from '@/page/content'
Vue.use(Router);

export  default new Router({
    routes: [
      {
          path: '/',
          redirect:'/obd/1'
    },{
          path:'/obd',
          name:'obd',
          component:resolve=>require(['@/page/home.vue'],resolve),
          children:[
            {path:'/obd/1', component:resolve=>require(['@/page/home/index.vue'],resolve)},
            {path:'/obd/2', component:resolve=>require(['@/page/obDepartment/inoAnalysis.vue'],resolve)},
            {path:'/obd/3', component:resolve=>require(['@/page/obDepartment/icheck.vue'],resolve)},
            {path:'/obd/4', component:resolve=>require(['@/page/obDepartment/haha.vue'],resolve)},
            {path:'/obd/5', component:resolve=>require(['@/page/obDepartment/table.vue'],resolve)},
            {path:'/obd/11', component:resolve=>require(['@/page/obDepartment/tree.vue'],resolve)},
            {path:'/obd/12', component:resolve=>require(['@/page/obDepartment/tabs.vue'],resolve)},
            {path:'/obd/13', component:resolve=>require(['@/page/obDepartment/upload.vue'],resolve)},
            {path:'/obd/14', component:resolve=>require(['@/page/obDepartment/circle.vue'],resolve)},
            {path:'/obd/15', component:resolve=>require(['@/page/obDepartment/notice.vue'],resolve)},
            {path:'/obd/16', component:resolve=>require(['@/page/obDepartment/timeline.vue'],resolve)},
            {path:'/obd/17', component:resolve=>require(['@/page/obDepartment/scroll.vue'],resolve)},
            {path:'/obd/18', component:resolve=>require(['@/page/obDepartment/steps.vue'],resolve)},
            {
                path:'/obd/vuex', 
                name : 'vuex',
                component:resolve=>require(['@/page/obDepartment/vuex.vue'],resolve),
                children:[
                    { path:'/obd/vuex/article', component:resolve=>require(['@/page/obDepartment/article.vue'],resolve)}
                ]
            },
            {path:'*',component:resolve=>require(['@/page/404.vue'],resolve)}
          ]
    },{
          path:'/content',
          name:'content',
          component:content
    }]
})
