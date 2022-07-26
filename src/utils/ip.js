import axios from "axios";

async function getUserIp() {
  // config 是配置对象，可按需设置，例如 responseType，headers 中设置 token 等
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  let res = await axios.get("/apiSohu/cityjson?ie=utf-8", config);
  // console.log(res.data); // var returnCitySN = {"cip": "14.23.44.50", "cid": "440000", "cname": "广东省"};
  return JSON.parse(res.data.substring(19, res.data.length - 1));
}

export { getUserIp };
