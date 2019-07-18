import { getImg } from '../../servise/index';

const state: any = {
    ImgData:null,//图片数据
}
const mutations: any = {
   setImgData(state:any,payload:any){
       state.ImgData=payload
       
    console.log("......",payload)
   }
}
const actions: any = {
   async getImgData({commit}:any,payload:any){
        const data=await getImg(payload)
        console.log(data)
        data.data.map((item: any) => {
                item.List = item.List.map((val: any) => {
                    return val.Url.replace(/\{0}/g, val.LowSize)
                })
                 return item.List
            })
            // console.log("data.data",data.data)
        commit("setImgData",data.data)
      
    }
}
const getters: any = {
    // upCarListDetail(state:any){
    //     console.log(state)
    // }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}