<template>
  <div class="bscroll" ref="bscroll">
     <div class="bscroll-container">
      <div v-for="(item,index) in getlistact" :key="index" >
          <h2>{{index}}</h2>
          <div class="li" v-for="(val,key) in item" :key="key" >
              <img v-lazy="val.CoverPhoto" alt="">
              <span>{{val.Name}}</span>
          </div> 
       </div>
      </div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
import BScroll from "better-scroll";
import Vue from "vue";

export default Vue.extend({
  props: ["getlistact"],

  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll;
      this.aBScroll = new BScroll(bscrollDom, {
        probeType: 3,
        click: true
      });
      this.$bus.$emit("abscroll", {
        sec: this.aBScroll,
        arrList: this.$refs.bscroll.children[0]
      });
    });
  }
});
</script>
>



<style scoped lang="scss">
.bscroll {
  width: 100%;
  height: 5vh;
}
h2 {
  width: 100%;
  background: #ccc;
  font-size: 20px;
}
.li {
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  margin: 0 20px;

  img {
    width: 40px;
    height: 40px;
    background: #fff;
  }
  span {
    padding: 20px;
    font-size: 17px;
  }
}
</style>