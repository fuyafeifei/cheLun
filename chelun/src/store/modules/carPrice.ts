
import { carPrice } from '../../servise/index'


const state:any={
    getcar:{} = {}
}

const actions:any={
        async getcarPrice({commit}:any,payload:any){
            // console.log('...',payload )
            let data = await carPrice(payload)
            // console.log('act...',data)
            commit('getcarPrices',data.data)
        }
}

const mutations:any={
    getcarPrices(state:any,payload:any){
        console.log('...aa',payload)
           state.getcar = payload;
    }
}


export default{
    namespaced: true,
    state,
    actions,
    mutations
}