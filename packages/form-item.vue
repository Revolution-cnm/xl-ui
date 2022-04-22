<template>
  <div class="xl-form-item">
    <label class="xl-form-item__label" :style="{width : this.Form.labelWidth}">{{label}}</label>
    <div class="xl-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'xl-form-item',
  inject: ['Form'],
  props:{
    label:String
  }
}
</script>

<style lang="scss">
.xl-form-item {
  margin-bottom: 25px;
  .xl-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .xl-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
