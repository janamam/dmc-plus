<!--
 * @Author: liangjianjun
 * @Date: 2022-11-21 11:13:42
 * @LastEditors: liangjianjun
 * @LastEditTime: 2022-11-22 16:49:34
 * @Description: file content
 * @FilePath: /dmc-plus/packages/src/icon/index.vue
-->
<template>
  <div>
    <div class="style" @click="HandleClick">我是plus超级Icon</div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    data: {
      type: Object | Array,
      default: {},
    },
  },
  methods: {
    HandleClick() {
      this.$emit("HandleClick", "我是Icon");
    },
  },
};
</script>

<style  scoped>
.style {
  font-size: 24px;
  font-weight: bold;
  color: yellow;
  width: 100%;
  height: 200px;
}
</style>
