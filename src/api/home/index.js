import request from "@/utils/request";
 

function GetList(keyword,curPage=1,pageSize=10) {
    let url=`/article/list?curpage=${curPage}&pagesize=${pageSize}`;
    let keyWord=keyword || '';
    url+=keyWord;
    return request({
        url,
        method:"GET"
    })
}

function GetCarouseList(pageSize=3) {
    let url=`/article/carouselList?pagesize=${pageSize}`
    return request({
        url,
        method:"GET"
    })
}

 

export { GetList, GetCarouseList };
