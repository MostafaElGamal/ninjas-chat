import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      props:true,
      beforeEnter:(to, from, next) => {
      	if(to.params.name){
	      	next()
      	}else{
      		next( {name:'Welcome'} )
      	}
      }
    }
  ]
})
