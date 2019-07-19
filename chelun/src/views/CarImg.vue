<template>
  <div class="wrap">
    <div class="navType">
      <p @click="SeleColor">颜色</p>
      <p>车款</p>
    </div>
    <div class="imgList">
      <ul v-for="(item) in ImgData" :key="item.Id">
        <li v-for="(val,index) in item.List" :key="index">
          <img :src="val" alt />
          <div v-if="index===0">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  name: "CarImg",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ImgData: (state: any) => state.CarImg.ImgData
    })
  },
  methods: {
    ...mapActions({
      getImgData: "CarImg/getImgData"
    }),
    SeleColor(){
      this.$router.push({path:'/color',query:{SerialID:this.$route.query.SerialID}})
    }
  },
  created() {
    this.getImgData(this.$route.query.SerialID);
  },
  mounted() {}
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
  .navType {
    height: 0.4rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p:after {
      content: "";
      display: inline-block;
      padding-top: 0.09rem;
      padding-right: 0.09rem;
      border-top: 0.02rem solid #ccc;
      border-right: 0.02rem solid #ccc;
      transform: rotate(135deg);
      margin-left: 0.1rem;
      margin-top: 0.04rem;
      vertical-align: 6%;
    }
  }
  .imgList {
    flex: 1;
    width: 100%;
    background: #fff;
    margin-bottom: 0.2rem;
    margin-top: 0.1rem;
    overflow-y: auto;
    ul {
      flex: 1;
      width: 100%;
      background: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 32.8%;
        height: 1.2rem;
        margin-top: 0.05rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        div {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          background: rgba(56, 90, 130, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>