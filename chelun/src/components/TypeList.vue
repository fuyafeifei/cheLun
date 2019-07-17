<template>
  <div :style="{'right':flag?'0':'-75%'}" class="car-list">
    <div class="Type-list" v-for="(item) in CarData" :key="item.GroupId">
        <div class="list-title">{{item.GroupName}}</div>
        <ul v-for="(item) in item.GroupList" :key="item.SerialID">
            <li @click="carDetail(item.SerialID)">
                <img :src="item.Picture">
                <div>
                    <p>{{item.AliasName}}</p>
                    <p>{{item.DealerPrice}}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
export default {
  props: ["flag"],
  components: {},
  data() {
    return {};
  },
  computed: {
      ...mapState({
          CarData:state=>state.TypeList.CarData
      })
  },
  methods: {
      ...mapActions({
          getCarList:"TypeList/getCarList"
      }),
      carDetail(SerialID){
           this.$router.push({path:'/carDetail',query:{SerialID:SerialID}})
      }
  },
  created() {
      this.getCarList()
  },
  mounted() {
      
  }
};
</script>
<style scoped lang="scss">
.car-list {
  width: 75%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: pink;
  transition: right 1s;
  overflow-y: auto;
}
.Type-list{
    width: 100%;
    
    background: #FFF;
    display: flex;
    flex-direction: column;
    .list-title{
        width: 100%;
        background:#f2f2f2;;
        line-height: 0.3rem;
        padding-left: .15rem;
    }
    ul{
        width: 100%;
        flex: 1;
        li{
            height: 0.7rem;
            border-bottom: 1px solid #ddd;
            display: flex;
            padding: .03rem;
            justify-content: space-between;
            img{
                width: 35%;
            }
            div{
                width: 63%;
                p{
                    margin-top: .05rem;
                }
                p:first-child{
                    font-size: 0.18rem;
                    color:#5f687a;
                }
                p:nth-child(2){
                    color:#f00;
                }
            }
        }
    }
}
</style>