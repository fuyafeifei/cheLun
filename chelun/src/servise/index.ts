import request from "../utils/request";

//汽车品牌列表
export let carList = (params:number):Promise<any> => {
    return request.get("/v2-car-getMakeListByMasterBrandId.html?MasterID="+params)
}
//汽车品牌详情列表
export let carListDetail = (params:number):Promise<any> => {
    return request.get("v2-car-getInfoAndListById.html?SerialID="+params)
}