/** 按钮组组件
 *
 */
<template>
  <div class="xp-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted () {
    // 检测插槽中的元素是否时button
    for (let node of this.$el.$children) {
      if (node.nodeName !== 'button') {
        console.log(`xp-button-group的子元素应该时button, 但是当前传入是${node.nodeName}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .xp-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .xp-button {
      margin-left: -1px;
      border-radius: 0;
      &:first-child {
        border-top-left-radius: var(--button-radius);
        border-bottom-left-radius: var(--button-radius);
        margin-left: 0;
      }
      &:last-child {
        border-top-right-radius: var(--button-radius);
        border-bottom-right-radius: var(--button-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
