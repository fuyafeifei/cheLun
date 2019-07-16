import request from "../utils/request";

//汽车品牌列表
export let carList = ():Promise<any> => {
    return request.get("/v2-car-getMakeListByMasterBrandId.html?MasterID=9")
}
//汽车品牌详情列表