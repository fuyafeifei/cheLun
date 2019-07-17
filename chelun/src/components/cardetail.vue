<template>
<div>
  <div class="context" v-for="(item) in datailList"  :key="item.car_id">
    <p>1.4L/110kw</p>
    <div class="context-list">
      <div>2019款 35</div>
      <span>150玛丽</span>
      <p>
        <span>指导价 23.90万</span>
        <span>20.65万起</span>
      </p>
      <button>询问底价</button>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import {mapGetters,mapState} from 'vuex';
import Vue from "vue";
export default Vue.extend({
  props: {
    
  },
  components: {},
  data() {
    return {};
  },
  computed: {
      ...mapState({
        datailList:(state:any)=>state.TypeList.datailList
      })
      
  },
  methods: {},
  created() {
     
  },
  mounted() {
   
  }
});
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
.context {
  > p {
    font-size: 0.15rem;
    height: 0.3rem;
    padding: 0.1rem;
    display: flex;
    align-items: center;
    color: $spell-color;
  }
  .context-list {
    padding: 0.1rem 0.1rem 0;
    
    background: #fff;
    div {
      margin-bottom: 0.05rem;
    }
    > span {
      font-size: 0.15rem;
      color: $spell-color;
    }
    > p {
      text-align: right;
      margin-top: 0.05rem;

      span:first-child {
        font-size: 0.14rem;
        color: #818181;
        font-weight: 500;
        padding-right: 0.1rem;
      }
      span:nth-child(2) {
        font-size: 0.16rem;
        color: $price-color;
      }
    }
    button{
        border-top: 1px solid #eee;
        margin-top: 0.1rem;
        width: 100%;
        height: 0.4rem;
        background: #fff;
        color:$button-background-color ;
    
    }
  }
}
</style>