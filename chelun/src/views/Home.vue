<template>
  <div class="home">
    <TypeList></TypeList>
    <left-nav :getlistact="getlistact"></left-nav>
    <right-nav :getlistact="getlistact"></right-nav>
  </div>
</template>
<script lang="ts">
import leftNav from "@/components/leftNav.vue";
import rightNav from "@/components/rightNav.vue";
import { mapActions, mapState } from "vuex";
import Vue from "vue";
import TypeList from "../components/TypeList.vue";

export default Vue.extend({
  name: "home",
  props: {},
  components: {
    TypeList,
    leftNav,
    rightNav
  },
  data() {
    return {
      flag: false
    };
  },
  computed: {
    ...mapState({
      getlistact: (state:any) => state.left.getlistact
    })
  },
  methods: {
    ...mapActions({
      getleft: "left/getleftli",
      getCarList:"TypeList/getCarList"
    })
  },
  created() {},
  mounted() {
    this.getleft();
  }
});
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  button {
    width: 50px;
    height: 50px;
  }
}
</style>
