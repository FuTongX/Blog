<template>
  <div class="swiper">
    <!-- <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="item">
          <div class="img">
            <img
              src="https://tvax1.sinaimg.cn/large/006djwNZgy1gp42cly4rdj30xc0irwme.jpg"
              alt=""
            />
          </div>
          <div class="content">
            <transition name="el-fade-in-linear">
              <span class="time">2021-01-02</span>
              <span class="title">ES6:promise</span>
              <span class="des">这是写的一些笔记</span>
            </transition>
          </div>
        </div>
      </div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div> -->
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->

    <el-carousel
      height="200px"
      direction="vertical"
      :autoplay="true"
      trigger="click"
    >
      <el-carousel-item v-for="item in data" :key="item.id">
        <div class="item">
          <div class="img">
            <!-- <img :src="item.cover" alt="" /> -->
            <el-image :src="item.cover" fit="cover"></el-image>
          </div>
          <div class="content">
            <span class="time">{{ item.createdAt | TimeFormat }}</span>
            <router-link
              :to="{
                path: '/article',
                query: {
                  id: item.id,
                },
              }"
            >
              <span class="title">{{ item.title }}</span></router-link
            >
            <span class="des">{{ item.description }}</span>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import Swiper from "swiper";
// import "swiper/css/swiper.min.css";
export default {
  name: "BlogSwiper",
  props: ["data"],
  data() {
    return {
      bannerList: [],
    };
  },
  methods: {},
  // watch: {
  //   bannerList: {
  //     immediate: true,
  //     handler() {
  //       this.$nextTick(() => {
  //         new Swiper(".swiper", {
  //           direction: "vertical", // 垂直切换选项
  //           loop: true, // 循环模式选项

  //           // 如果需要分页器
  //           pagination: {
  //             el: ".swiper-pagination",
  //           },

  //           // 如果需要前进后退按钮
  //           // navigation: {
  //           //   nextEl: ".swiper-button-next",
  //           //   prevEl: ".swiper-button-prev",
  //           // },
  //         });
  //       });
  //     },
  //   },
  // },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;

  .img {
    box-sizing: border-box;
    overflow: hidden;
    padding: 10px;
    width: 200px;
    height: 200px;
    .el-image {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    padding: 10px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .time {
      font-weight: 600;
      font-size: 0.8rem;
      margin-bottom: 5px;
    }
    .title {
      font-weight: bold;
      font-size: 1.3rem;
      margin-bottom: 15px;
    }
  }
}

::v-deep .el-carousel__button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background-color: rgb(67, 163, 253);
}
</style>>

 