<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'xl-radio-group',
  provide(){
    return {
      RadioGroup : this
    }
  },
  props:{
    value:null
  }
}
</script>

<style>

</style>
