import { carList, carListDetail } from '../../servise/index';
import { format, DataSort } from '@/utils/index';
const state: any = {
    flag: false,//有侧栏是否显示
    CarData: [],//汽车品牌列表
    carListDetailData: [],//汽车品牌详情列表
    carSetData: [],//汽车品牌详情列表排序
    yearList: ["全部"],//获取时间列表
    datailList: [],//汽车数据列表
    datailListAll: [],

}
const mutations: any = {
    setCarList(state: any, payload: any) {
        state.CarData = payload
    },
    setCarListDetail(state: any, payload: any) {
        state.yearList = ["全部"]
        state.carListDetailData = payload
        state.datailList = format(payload.list.sort(DataSort("exhaust")))
        state.datailListAll = payload.list

        //遍历出时间数据 并处理
        state.carListDetailData.list.forEach((item: any): any => {
            state.yearList.push(item.market_attribute.year)
        })
        state.yearList = Array.from(new Set(state.yearList))


    },
    //根据时间切换数据
    upDateilData(state: any, payload: any) {

        if (payload == "全部") {
            state.datailList = format(state.datailListAll.sort(DataSort("exhaust")));
            console.log(".....", state.datailList)
            return false;
        }
        state.datailList = format(state.datailListAll.filter((item: any) => item.market_attribute.year == payload).sort(DataSort("exhaust")))
        console.log(".....", state.datailList)
    }

}
const actions: any = {
    async getCarList({ commit, state }: any, payload: number) {
        if (payload) {
            state.flag = true
        } else {
            state.flag = false
        }
        const data = await carList(payload);
        commit("setCarList", data.data)
    },
    async getcarListDetail({ commit }: any, payload: number) {
        const data = await carListDetail(payload);
        commit("setCarListDetail", data.data)
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