# BLOG 用户端 API 接口文档

## 1. API 接口说明

- 基准地址:http://127.0.0.1:8000/api
- 返回数据为 JSON
- 用 HTTP 状态码来标识状态

### 通用返回状态说明

| _状态码_ | _含义_                | _说明_                                              |
| -------- | --------------------- | --------------------------------------------------- |
| 200      | OK                    | 请求成功                                            |
| 201      | CREATED               | 创建成功                                            |
| 204      | DELETED               | 删除成功                                            |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数                |
| 401      | UNAUTHORIZED          | 未授权                                              |
| 403      | FORBIDDEN             | 被禁止访问                                          |
| 404      | NOT FOUND             | 请求的资源不存在                                    |
| 422      | Unprocesable entity   | [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误 |
| 500      | INTERNAL SERVER ERROR | 内部错误                                            |
|          |                       |                                                     |

---

### 请求方法

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

### 响应的基本格式

```json
//返回基本格式
{
  "data": {},
  "meta": {
    "msg": "请求成功",
    "status": 200
  }
}
```

## 2. 文章

### 2.1.1 获取公开的文章列表

- path: /article/list
- method: get
- 请求参数:
  | 参数名   | url参数     | 备注     |
  | -------- | ------------ | -------- |
  | keyword    |  title关键字 | 为空不继续过滤 |
  | curpage  | 当前页码     | 为空默认第一页 |
  | pagesize | 每页显示条数 | 为空默认10篇一页 |
- 请求参数示例
  ```
    /article/list?keyword=js&curpage=1&pagesize=5
  ```

- 响应参数:
  | 参数名    | 参数说明     | 备注 |
  | --------- | ------------ | ---- |
  | totalpage | 总记录数     |      |
  | pagenum   | 当前页码     |      |
  | users     | 用户数据集合 |      |
- 响应参数示例：
  ```json
  {
    "data": {
      "totalpage": 4,
      "curpage": 1,
      "pagesize":10,
      "articles": [
        {
          "id": 1,
          "title": "文章标题",
          "cover": "/img/xx.png",
          "created_at": "2022-5-09T20:34:00.000Z",
          "views":0,
          "like":0,
          "star":0,
          "tag":"",
          "category":"",
          "numberofcomments":0
        }
      ]
    },
    "meta": {
      "msg": "获取成功",
      "status": 200
    }
  }
  ```

### 2.1.2 获取最新文章列表

- path: /article/lastlist
- method: get
- 请求参数:
  | 参数名   | url参数     | 备注     |
  | -------- | ------------ | -------- |
  | num    |   返回列表数目 | 为空默认5条 |
- 请求参数示例
  ```
    /article/lastlist?num=5
  ```

- 响应参数:
  | 参数名    | 参数说明     | 备注 |
  | --------- | ------------ | ---- |
  | articles | 返回最新文章数组 |      |
- 响应参数示例：
  ```json
  {
    "data": {
      "articles": [
        {
          "id": 1,
          "title": "文章标题",
          "cover": "/img/xx.png",
          "created_time": "2022-5-09T20:34:00.000Z",
        }
      ]
    },
    "meta": {
      "msg": "获取成功",
      "status": 200
    }
  }
  ```

### 2.1.3 获取一篇文章内容
- path: /article/blog
- method: get
- 请求参数:
  | 参数名   | url参数     | 备注     |
  | -------- | ------------ | -------- |
  | id    |  请求列表已经告诉id了 | 不能为空 否则返回400 |
- 请求参数示例
  ```
    /article/blog?id=1
  ```

- 响应参数:
  | 参数名    | 参数说明     | 备注 |
  | --------- | ------------ | ---- |
  | data | 包含文章内容     |      |
- 响应参数示例：
  ```json
  {
    "data": {
          "id": 1,
          "title": "文章标题",
          "content": "文章内容",
          "cover": "/img/xx.png",
          "update_time":"2022-5-09T20:34:00.000Z",
          "word_count":1000,
          "views":0,
          "like":0,
          "star":0,
          "tag":"",
          "category":"",
    },
    "meta": {
      "msg": "获取成功",
      "status": 200
    }
  }
  ```


### 2.1.4 轮播图文章列表
- path: /article/carouselList
- method: get
- 请求参数:
  | 参数名   | url参数     | 备注     |
  | -------- | ------------ | -------- |
  | pagesize    |   返回列表数目 | 为空默认5条 |
- 请求参数示例
  ```
    /article/carouselList?pagesize=5
  ```

- 响应参数:
  | 参数名    | 参数说明     | 备注 |
  | --------- | ------------ | ---- |
  | article | 返回最新文章数组 |      |
- 响应参数示例：
  ```json
  {
    "data": {
      "articles": [
        {
          "id": 1,
          "title": "文章标题",
          "cover": "/img/xx.png",
          "created_time": "2022-5-09T20:34:00.000Z",
          "description":"文章描述"
        }
      ]
    },
    "meta": {
      "msg": "获取成功",
      "status": 200
    }
  }
  ```