<template>
  <div>
    <PersonalInfo></PersonalInfo>
    <Notice></Notice>
    <Clock></Clock>
    <Tags></Tags>
    <Classification></Classification>
  </div>
</template>

<script>
import PersonalInfo from "./PersonalInfo.vue";
import Notice from "./Notice.vue";
import Clock from "./Clock.vue";
import Tags from "./Tag.vue";
import Classification from "./Classification.vue";
export default {
  name: "BlogAside",
  components: {
    PersonalInfo,
    Notice,
    Clock,
    Tags,
    Classification
  },
};
</script>

<style lang="scss" scoped>
</style>>

 