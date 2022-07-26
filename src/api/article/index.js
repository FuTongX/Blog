import request from "@/utils/request";

function GetBLog(id){
    let url=`/article/?id=${id}`;
    return request({
        url,
        method:'get'
    })
}

export {
    GetBLog
}