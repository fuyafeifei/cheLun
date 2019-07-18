import request from "../utils/request";

//汽车品牌列表
export let carList = (params: number): Promise<any> => {
    return request.get("/v2-car-getMakeListByMasterBrandId.html?MasterID=" + params)
}
//汽车品牌详情列表
export let carListDetail = (params: number): Promise<any> => {
    return request.get("v2-car-getInfoAndListById.html?SerialID=" + params)
}
export function getleft() {
    return request.get('/v2-car-getMasterBrandList.html?_1563182342439')
}
export function getImg(params:number) {
    return request.get("/v2-car-getImageList.html?SerialID=" + params)
}

 // http://baojia.chelun.com/v2-car-getMasterBrandList.html?_1563182342439
//