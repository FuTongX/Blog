<template>
  <div :style="styleObj" class="new-line">
    <i class="iconfont icon-ziyuan"></i>
  </div>
</template>

<script>
export default {
  name: "BlogNewLine",
  props: ["height"],
  data() {
    return {
      styleObj: {
        margin: ` ${this.height}px    0 `,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.new-line {
  margin: 40px 0;
  height: 1px;
  border: 2px dashed #a4d8fa;
  position: relative;
  i {
    position: absolute;
    color: #049bff;
    top: -9px;
    left: 0%;
    transform: scale(1.2);
    transition: left;
    transition-duration: 1.8s;
  }
  &:hover i {
    left: 100%;
  }
}
</style>>

 