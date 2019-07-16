import { carList } from '../../servise/index';
const state: any = {
    CarData: []
}
const mutations: any = {
    setCarList(state: any, payload: any) {
        state.CarData = payload
        console.log("...",payload)
    }
}
const actions: any = {
    async getCarList({ commit }: any) {
        const data = await carList();
        commit("setCarList", data.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}