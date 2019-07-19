import { getImg, getColor } from '../../servise/index';

const state: any = {
    ImgData: null,//图片数据
    ColorData: null,//颜色数据
    ColorYear: [],//存放颜色年份
    result:[]
}
const mutations: any = {
    setImgData(state: any, payload: any) {
        state.ImgData = payload
    },
    setColorData(state: any, payload: any) {
        state.ColorYear = []
        for (let i in payload) {
            state.ColorYear.push(i)
        }
        state.ColorYear = state.ColorYear.sort(function (a: any, b: any) {
            return b - a
        })
        
        
        state.ColorData = payload
    },
    //根据点击过来的年份过滤数据
    upColorData(state:any,payload:any){
        console.log(payload)
        state.result=[]
        for (let key in state.ColorData) {
          if (payload.includes(key)) {
            state.result.push(state.ColorData[key]);
           
          }
        }
        console.log(".....", state.result)
    }
}
const actions: any = {
    async getImgData({ commit }: any, payload: any) {
        const data = await getImg(payload)
        data.data.map((item: any) => {
            item.List = item.List.map((val: any) => {
                return val.Url.replace(/\{0}/g, val.LowSize)
            })
            return item.List
        })
        commit("setImgData", data.data)

    },
    async getCarColor({ commit }: any, payload: any) {

        const data = await getColor(payload)

        // console.log("data.data", data.data)
        commit("setColorData", data.data)

    }
}
const getters: any = {
    
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}