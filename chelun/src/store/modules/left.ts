
import { getleft } from '../../servise/index';
// console.info(getleft)
const state:any = {
    getlistact:[] = []
}

const actions:any = {
    async getleftli({ commit }: any) {
        let data = await getleft()
        commit('getlefts', data.data)
    }
}

const mutations:any = {
    getlefts(statea: any, payload: any) {
        let arr:any = [];
        //过滤数据  获取字母
        payload.forEach((item:any) => {
            // console.log(item)
            const str = item.Spelling.slice(0, 1);
            if (arr.find((item:any) => item === str)) { 
                arr = arr;
            } else {
                arr.push(str);
            
            }
        });

        //添加对象
        let obj:any = {};
        arr.forEach((item:any) => {
            obj[item] = [];
        });

        //获取字母对应的数据
        for (let i in obj) {
            if (payload.find((item:any) => item.Spelling.slice(0, 1) === i)) {
                obj[i] = [
                    ...obj[i],
                    ...payload.filter((item:any)=> item.Spelling.slice(0, 1) === i)
                ];
            }
        }
        console.log('tag...', obj)
        return state.getlistact = obj;
    }
}



export default {
    namespaced: true,
    state,
    actions,
    mutations,
}