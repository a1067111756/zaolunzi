/** icon组件 - 直接使用alicon svg雪碧图
 *
 */

<template>
  <svg class="xp-icon">
    <use :xlink:href="`#icon-${icon}`" :class="icon"></use>
  </svg>
</template>

<script>
import './icon.js'
export default {
  props: ['icon']
}
</script>

<style lang="scss" scoped>
  .xp-icon { width: 1.2em; height: 1.2em; }
  
  /* 加载图标动画 */
  @keyframes spin {
    0% { transform: rotate(0deg); transform-origin: 50%; }
    100% { transform: rotate(360deg); transform-origin: 50%; }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
</style>
