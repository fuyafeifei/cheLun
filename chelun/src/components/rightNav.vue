<template>
    <div>
        <ul
        @touchstart="touchstart"
        @touchend="touchend"
        @touchmove="touchmove"
        ref="spelling"
        >
          <li v-for="(item,key,index) in getlistact" :key="index">{{key}}</li>     
       </ul> 
         <p v-if="isTouch" class="showList">{{current}}</p>
    </div>
</template>
<script lang='ts'>
export default {
  props: ["getlistact"],

  components: {},
  data() {
    return {
      current: "",
      isTouch: false,
      sec: null,
      arrList: []
    };
  },
  computed: {},
  methods: {
    touchstart(e: Event):any {
      this.isTouch = true;
    //   this.sec.scrollToElement(this.arrList[], 200);
    },
    touchmove(e:any):any {
      let dataLength = this.$refs.spelling.children.length;
      let pageY = e.touches[0].pageY;
      let letterHeight = 0.4 * window.innerWidth / 750 * 100;
      let letterOffsetTop =
        (window.innerHeight - letterHeight * dataLength) / 2;
      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      // 处理上边界
      if (letterIndex < 0) {
        letterIndex = 0;
      }
      // 处理下边界
      if (letterIndex > dataLength - 1) {
        letterIndex = dataLength - 1;
      }
      this.current = this.$refs.spelling.children[letterIndex].innerHTML;
      this.sec.scrollToElement(this.arrList[letterIndex], 200);
    },

    touchend(e: Event): void {
      this.isTouch = false;
    }
  },
  created() {
    this.$bus.$on("abscroll", (res:any) => {
      this.arrList = res.arrList.children;
      this.sec = res.sec;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
ul {
  z-index: 99;
  position: fixed;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 0.2rem;
  display: flex;
  flex-direction: column;
  li {
    font-size: 0.15rem;
    height: 0.2rem;
    line-height: 0.2rem;
    text-align: center;
    width: 100%;
  }
}
.showList {
  width: 50px;
  height: 50px;
  background: rgba(0,0,0,.6);
  position: absolute;
  left: 45%;
  top: 50%;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  border-radius: 50%;
}
</style>