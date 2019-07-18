<template>
 <div>
    <div class="wrap">
        <p class="font">可向多个商家咨询最低价，商家及时回复@</p>
         <dl>
             <dt v-if="getcar.details"><img v-lazy="getcar.details.serial.Picture" alt="" /></dt>
             <dd v-if="getcar.details">
                  <p>{{getcar.details.serial.AliasName}}</p>
                  <p> > </p>
                  <p>
                    <span>{{getcar.details.market_attribute.year}}款</span>
                    <span>{{getcar.details.car_name}}</span>
                    </p>
             </dd>
         </dl>
         <p class="geren">个人信息</p>
          <ul>
              <li>
                  <span>姓名</span>
                  <input type="text" placeholder="输入你的真实姓名" maxlength="4">
              </li>
          </ul>
          <ul>
              <li>
                  <span>手机号</span>
                  <input type="text" placeholder="输入你的手机号" maxlength="11">
              </li>
          </ul>
         <ul>
              <li>
                  <span>城市</span>
                  <span @click="citybtn" class="act">北京 ></span>
              </li>
          </ul>
         <div class="but">
              <button class="buttona">询问底价</button>
         </div>
         <make-offers :carlist="getcar.list"></make-offers>  
    </div>
          <city></city>
    </div>
</template>
<script lang="ts">
 import makeOffers from '@/components/makeOffers.vue'
 import city from '@/components/city.vue'
 import { mapActions, mapState } from "vuex"

export default {
  props: {},
  components: {
    makeOffers,// 挂载报价组件
    city, // 城市组件
  },
  data() {
    return {};
  },
  computed: {
     ...mapState({
        getcar:(state:any) => state.carPrice.getcar
     })
  },
  methods: {
    citybtn(){   
    },
   ...mapActions({
         getcarPrice:"carPrice/getcarPrice"
    })
  },
  created() {
 
  },
  mounted() {
      this.getcarPrice(this.$route.query) 
      // console.log("...00",this.$route.query)
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  .font {
    width: 100%;
    text-align: center;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    background: rgb(76, 185, 123);
    color: rgb(247, 232, 232);
  }
  dl {
    width: 100%;
    height: 90px;
    background: #fff;
    display: flex;
    dt {
      width: 35%;
      background: #fff;
      padding: 15px 10px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
      }
    }
    dd {
      flex: 1;
      padding: 16px 5px;
      box-sizing: border-box;
      p {
        font-size: 15px;
      }
      p:nth-child(2) {
        display: flex;
        justify-content: flex-end;
      }
      p:nth-child(3){
        span:nth-child(2){
          padding-left:15px;
        }
      }
    }
  }
  .geren {
    width: 100%;
    height: 25px;
    font-size: 14px;
    background:rgba(0,0,0,.2);
    padding: 0 10px;
    display: flex;
    line-height: 25px;
    color:rgba(0,0,0,.5);
  }
  ul {
    background: #fff;
    padding: 0 0.1rem;
    list-style-type: none;
    li {
      font-size: 0.3rem;
      height: 0.4rem;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      color: #000;
      display: flex;
      align-items: center;
      span {
        color: #000;
        line-height: 0.28rem;
        font-size: 0.15rem;
      }
      input {
        font-size: 0.14rem;
        padding-right: 0.2rem;
        flex: 1;
        text-align: right;
        box-sizing: border-box;
        color: #555;
        outline: none;
        -webkit-appearance: none;
        border: none;
      }
      .act {
        font-size: 0.14rem;
        padding-right: 0.2rem;
        flex: 1;
        text-align: right;
        box-sizing: border-box;
        color: #555;
        outline: none;
        -webkit-appearance: none;
        border: none;
        font-weight: bold;
      }
    }
  }
  .but{
     width:100%;
     display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
  .buttona{
      width:80%;
      height:40px;
      background:rgb(70, 151, 218);
      border-radius: 5px;
      color:#fff;
   }
  }

}
</style>