<!--
 * @Author: liangjianjun
 * @Date: 2022-11-21 11:13:42
 * @LastEditors: liangjianjun
 * @LastEditTime: 2022-11-22 16:49:37
 * @Description: file content
 * @FilePath: /dmc-plus/packages/src/product/index.vue
-->
<template>
  <div>
    <div class="style" @click="HandleClick">我是plus超级Product</div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    data: {
      type: Object | Array,
      default: {},
    },
  },
  methods: {
    HandleClick() {
      this.$emit("HandleClick", "我是Product");
    },
  },
};
</script>

<style  scoped>
.style {
  font-size: 24px;
  font-weight: bold;
  color: green;
  width: 100%;
  height: 200px;
}
</style>
