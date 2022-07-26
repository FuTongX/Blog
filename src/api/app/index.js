import request from "@/utils/request";

function getTagListWithArticleNumber() {
  let url = `/tagListWithArticleNum`;
  return request({
    url,
    method: "get",
  });
}

function getCategoryListWithArticleNumber() {
  let url = `/categoryListWithArticleNum`;
  return request({
    url,
    method: "get",
  });
}

function getArticleCount() {
  let url = `/articleCount`;
  return request({
    url,
    method: "get",
  });
}

function getTimeLineList(pagesize, curpage) {
  let url = `/articleListOrderByYear`;
  return request({
    url,
    method: "get",
    params: {
      pagesize,
      curpage,
    },
  });
}

function getStatistics() {
  let url = `/articleStatistics`;
  return request({
    url,
    method: "get",
  });
}

function getWisdomList() {
  let url = "/wisdomList";
  return request({
    url,
    method: "get",
  });
}

function getUserInfo() {
  let url = "/userinfo";
  return request({
    url,
    method: "get",
  });
}

function createComment(obj) {
  let url = "/comment";
  return request({
    url,
    method: "post",
    data: obj,
  });
}

function getCommentList(articleId) {
  let url = "/comment";
  return request({
    url,
    method: "get",
    params: {
      articleId,
    },
  });
}

export {
  getTagListWithArticleNumber,
  getCategoryListWithArticleNumber,
  getArticleCount,
  getTimeLineList,
  getStatistics,
  getWisdomList,
  getUserInfo,
  createComment,
  getCommentList,
};
