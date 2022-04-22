<template>
  <div class="xl-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'xl-checkbox-group',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
