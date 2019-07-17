<template>
  <div>
       
         <left-nav :getlistact="getlistact"></left-nav>
        
         <right-nav :getlistact="getlistact"></right-nav>
        
      
  </div>
</template>

<script>

 import leftNav from '@/components/leftNav.vue'
 import rightNav from '@/components/rightNav.vue'
 import { mapActions, mapState } from 'vuex'
 import Vue from 'vue'
export default  {
  props:{

  },
  components:{
     leftNav,
     rightNav
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
