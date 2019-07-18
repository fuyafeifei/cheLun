<template>
    <div>
          <p class="pc">选择报价经销商</p>
           <div v-for="(item,index) in carlist" :key="index" class="baojia">
                <div class="show"><i></i></div>
                <div class="baojiayi">
                    <p>{{item.dealerShortName}}</p>
                    <p>{{item.address}}</p>
                </div>
                <div class="baojiaer">
                    <p>{{item.vendorPrice}}万</p>
                    <p>售{{item.saleRange}}</p>
                    
                </div>
           </div>
    </div>
</template>
<script>
export default {
    props:['carlist'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .pc{
        width:100%;
        height: 27px;
        color:rgba(0,0,0,.5);
        font-size: 14px;
        line-height:27px;
        padding: 0 10px;
        background:rgba(0,0,0,.2);
    }

    .baojia{
         width:100%;
         height:90px;
         border-bottom: 1px solid #ccc;
         display: flex;
         .show{
             width:50px;
             background:#fff;
               display: flex;
                justify-content: center;
                align-items: center;
               
            i{
                width:20px;
                height:20px;
                border:1px solid #ccc;
                 display: inline-block;
                 border-radius: 100%;
            }

         }
         .baojiayi{
             flex:1;
             padding:20px;
             p:nth-child(2){
                 font-size: 13px;
                 padding:5px 0;
                  color:rgb(161, 161, 161);
             }
             p:nth-child(1){
                 font-size: 15px;
             }
         }

         .baojiaer{
             padding:20px;
             p:nth-child(2){
                 font-size: 13px;
                 padding:5px 0;
                
                 
             }
             p:nth-child(1){
                 font-size:15px;
                 color:red;
                 
             }
         }
     }
   
   
</style>