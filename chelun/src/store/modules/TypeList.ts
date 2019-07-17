import { carList,carListDetail } from '../../servise/index';
const state: any = {
    CarData: [],//汽车品牌列表
    carListDetailData:[],//汽车品牌详情列表
    carSetData:[],//汽车品牌详情列表排序
    yearList:["全部"],//获取时间列表
    datailList:[]//汽车数据列表
}
const mutations: any = {
    setCarList(state: any, payload: any) {
        state.CarData = payload

    },
    setCarListDetail(state:any,payload:any){
        state.carListDetailData = payload
        state.datailList=payload.list
        //遍历出时间数据 并处理
        state.carListDetailData.list.forEach((item:any):any=>{
             state.yearList.push(item.market_attribute.year)
        })
        state.yearList=Array.from(new Set(state.yearList))
        console.log(state.datailList)
    },
    //根据时间切换数据
    upDateilData(){

    }
    
}
const actions: any = {
    async getCarList({ commit }: any,payload:number) {
        payload=9
        const data = await carList(payload);
        commit("setCarList", data.data)
    },
    async getcarListDetail({ commit }: any,payload:number) {      
         const data = await carListDetail(payload);
        commit("setCarListDetail", data.data)
    }
}
const getters:any={
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