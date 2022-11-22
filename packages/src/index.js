/*
 * @Author: liangjianjun
 * @Date: 2022-11-21 11:13:42
 * @LastEditors: liangjianjun
 * @LastEditTime: 2022-11-22 17:27:34
 * @Description: file content
 * @FilePath: /dmc-plus/packages/src/index.js
 */
import banner from './banner/index.vue';
import bd from './Bd/index.vue';
import icon from './Icon/index.vue';
import product from './Product/index.vue';

const front  = "dmc"

banner.install = (Vue) => {
  Vue.component(front+banner.name, banner)
}
bd.install = (Vue) => {
  Vue.component(front+ bd.name, bd)
}
icon.install = (Vue) => {
  Vue.component(front+ icon.name, icon)
}
product.install = (Vue) => {
  Vue.component(front+product.name, product)
}


export default [
  banner,
  bd,
  icon,
  product
]
