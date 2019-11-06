// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data(){
    return{
    bgColor:['#c90','#c09','#90c','#c99'],
      curIndex:0
    }
  },
  methods:{
    wheelEvent(e){
      if(e.deltaY>0){
        this.curIndex ++
      }
    }

  }
  /*router,
  components: { App },
  template: '<App/>'*/
})
