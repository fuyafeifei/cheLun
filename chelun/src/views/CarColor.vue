<template>
  <div class="wrap">
    <div class="wrapTit">全部颜色</div>
    <div class="nav" >
      <span v-for="(item,index) in ColorYear" :key="index"
        :class="{'active':i===index}"
       @click="navFn(item,index)">{{item}}</span>
    </div>
    <div class="navList">
      <ul>
        <li>
          <span></span>
          0000
        </li>
        <li></li>
        <li>
          <span></span>
          0000
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions,mapMutations } from "vuex";
export default Vue.extend({
  name: "CarColor",
  props: {},
  components: {},
  data() {
    return {
      i:0
    };
  },
  computed: {
    ...mapState({
      ColorData: (state: any) => state.CarImg.ColorData,//ColorYear
      ColorYear: (state: any) => state.CarImg.ColorYear
    })
  },
  methods: {
    ...mapActions({
      getCarColor: "CarImg/getCarColor"
    }),
    ...mapMutations({
      upColorData:"CarImg/upColorData"
    }),
    navFn(item:any,index:any){
      this.i=index
     this.upColorData(item)
    }
  },
  created() {
    this.getCarColor(this.$route.query.SerialID);
    this.upColorData(this.ColorYear[0])
  },
  mounted() {},
  watch:{
      ColorYear(val,old){
       this.upColorData(val[0])
      }
  }
});
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
.wrap {
  width: 100%;
  height: 100%;
  background: $page-background-color;
  display: flex;
  flex-direction: column;
  .wrapTit {
    height: 0.4rem;
    background: #fff;
    margin-top: 0.1rem;
    color: $button-background-color;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.17rem;
  }
  .nav {
    height: 0.4rem;
    background: #fff;
    margin-top: 0.1rem;
    display: flex;
    align-items: center;
    span {
      margin: 0 0.12rem;
      &.active{
        color: #3aacff;
      }
    }
  }
  .navList {
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 0.1rem;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 47%;
        height: 0.4rem;
        border: 1px solid #3aacff;
        margin: 0.1rem 0;
        display: flex;
        align-items: center;
        span {
          margin: 0 0.05rem;
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          margin-left: 0.2rem;
          vertical-align: -12%;
          background: #fe9210;
          border: 1px solid #818181;
        }
        // justify-content: space-around;
      }
    }
  }
}
</style>