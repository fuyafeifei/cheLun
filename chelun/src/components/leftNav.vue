<template>
  <div class="bscroll" ref="bscroll">
    <div class="bscroll-container">
      <div v-for="(item,index) in getlistact" :key="index">
        <h2>{{index}}</h2>
        <div class="li" v-for="(val,key) in item" :key="key" @click="navList(val.MasterID)">
          <img v-lazy="val.CoverPhoto" alt />
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
  computed: {
    ...mapState({
      flag: state => state.TypeList.flag
    })
  },
  methods: {
    ...mapActions({
      getCarList: "TypeList/getCarList"
    }),
    navList(id) {
      this.getCarList(id);
    }
  },
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




<style scoped lang="scss">
.bscroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
h2 {
  width: 100%;
  background: #f2f2f2;
  line-height: 0.3rem;
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