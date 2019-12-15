/** icon组件 - 直接使用alicon svg雪碧图
 *
 */

<template>
  <svg class="xp-icon">
    <use :xlink:href="`#icon-${icon}`"></use>
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
</style>
