<!--
 * @Author: liangjianjun
 * @Date: 2022-11-21 11:13:42
 * @LastEditors: liangjianjun
 * @LastEditTime: 2022-11-22 16:49:25
 * @Description: file content
 * @FilePath: /dmc-plus/packages/src/banner/index.vue
-->
<template>
  <div>
    <div class="style" @click="HandleClick">我是plus超级Banner</div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    data: {
      type: Object | Array,
      default: {},
    },
  },
  methods: {
    HandleClick() {
      this.$emit("HandleClick", "我是Banner");
    },
  },
};
</script>

<style  scoped>
.style {
  font-size: 24px;
  font-weight: bold;
  color: red;
  width: 100%;
  height: 200px;
}
</style>
