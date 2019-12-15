/** button组件
 *  1. 图标按钮
 *  2. 加载中
 *  3. 不同尺寸 medium / small / mini
 */
<template>
  <button class="xp-button" :class="{[`icon-size-${size}`]: true}" @click="$emit('click')">
    <xp-icon v-if="icon" :icon="loading ? 'loading' : icon" style="margin-right: 4px;"></xp-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false  
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return value === 'mini' || value === 'small' || value === 'medium'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .xp-button {
    font-size: var(--font-size);
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: bottom;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }

    /* size */
    &.icon-size-mini {
      padding: 0.3em 0.5em;
    }
    &.icon-size-small {
      padding: 0.5em 0.8em;
    }
    &.icon-size-medium {
      padding: 0.8em 1em;
    }        
  }

  

  
</style>
