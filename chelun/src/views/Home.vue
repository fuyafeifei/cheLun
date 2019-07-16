<template>
  <div class="home">
    <button @click="getfn">动画</button>
    <TypeList :flag="flag"></TypeList>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TypeList from '../components/TypeList.vue';
export default Vue.extend({
  name: "home",
  props: {},
  components: {
    TypeList
  },
  data() {
    return {
      flag:false,
    };
  },
  computed: {},
  methods: {
    getfn() {
      this.flag = true;
    }
  },
  created() {},
  mounted() {}
});
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  button{
    width: 50px;
    height: 50px;
  }
}
</style>


