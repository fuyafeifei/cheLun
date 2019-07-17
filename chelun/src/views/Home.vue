<template>
  <div>
         我是左边组件
         <left-nav :getlistact="getlistact"></left-nav>
  </div>
</template>

<script>

 import leftNav from '@/components/leftNav.vue'
 import { mapActions, mapState } from 'vuex'
 import Vue from 'vue'
export default  {
  props:{

  },
  components:{
     leftNav
  },
  data(){
    return {
  
    } 
  },
  computed:{
      ...mapState({
        getlistact: state => state.left.getlistact
      })
  },
  methods:{
      ...mapActions({
         getleft: 'left/getleftli'
      })
  },
  created(){
 
  },
  mounted(){
       this.getleft()
  }
}
</script>
<style lang="scss">
     
</style>
