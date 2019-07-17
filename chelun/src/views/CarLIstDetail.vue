<template>
  <div class="wrap">
    <div class="img">
      <img :src="carListDetailData.CoverPhoto" alt />
    </div>
    <div class="info">
      <div class="info-cont" v-if="carListDetailData.market_attribute">
        <p>{{carListDetailData.market_attribute.dealer_price}}</p>
        <p>指导价 {{carListDetailData.market_attribute.official_refer_price}}</p>
      </div>
      <div class="info-btn">
        <button>询问底价</button>
      </div>
    </div>
    <div class="car-list">
      <div class="car-nav">
        <span v-for="(item,index) in yearList" :key="index" @click="(e)=>carNav(e,index)"
          :class="{'active':i===index}"
          >{{item}}</span>
      </div>
      <cardetail></cardetail>
    </div>
    <div class="flex-column">
      <p>询问底价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState, mapMutations } from "vuex";
import cardetail from "@/components/cardetail.vue";
import Vue from "vue";
export default Vue.extend({
  name: "CarListDetail",
  props: {},
  components: {
    cardetail
  },
  data() {
    return {
      i: 0
    };
  },
  computed: {
    ...mapState({
      carListDetailData: (state: any) => state.TypeList.carListDetailData,
      yearList: (state: any) => state.TypeList.yearList
    })
  },
  methods: {
    ...mapActions({
      getcarListDetail: "TypeList/getcarListDetail"
    }),
    ...mapMutations({
      upDateilData:"TypeList/upDateilData"
    }),
    carNav(e: any, index: number) {
      this.i=index
      this.upDateilData(e.target.innerHTML)
    }
  },
  created() {
    this.getcarListDetail(this.$route.query.SerialID);
  },
  mounted() {}
});
</script>
<style scoped lang="scss">
@import "../scss/global.scss";
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: $page-background-color;
  .img {
    height: 2.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    height: 0.8rem;
    background: #fff;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info-cont {
      width: 45%;
      p:first-child {
        font-size: 0.2rem;
        color: $price-color;
        font-weight: 500;
      }
      p:nth-child(2) {
        font-size: 0.14rem;
        color: $spell-color;
      }
    }
    .info-btn {
      width: 53%;
      button {
        background: $button-background-color;
        color: #fff;
        width: 100%;
        height: 0.4rem;
        border-radius: 0.05rem;
      }
    }
  }
  .car-list {
    flex: 1;
    margin-top: 0.1rem;
    overflow-y: auto;
    .car-nav {
      height: 0.4rem;
      background: #fff;
      display: flex;
      align-items: center;
      padding: 0.1rem;
      span {
        padding-right: 0.2rem;
        &.active {
          color: $button-background-color;
        }
      }
    }
  }
  .flex-column {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background: $button-background-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: #fff;
    }
    p:first-child {
      font-size: 0.16rem;
      margin-top: 0.05rem;
    }
    p:nth-child(2) {
      font-size: 0.14rem;
    }
  }
}
</style>
