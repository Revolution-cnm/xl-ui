<template>
  <transition name = 'dialog-fade'>
    <div
    class="xl-dialog__wrapper"
    v-show= 'visible'
    @click.self= "handleClose"
    >

      <div class="xl-dialog" :style="{width,marginTop:top}">
        <div class="xl-dialog__header">

          <slot name="title">
            <span class="xl-dialog__title">{{title}}</span>
          </slot>

          <button class="xl-dialog__headerbtn" @click= "handleClose">
            <i class="xl-icon-close"></i>
          </button>
        </div>

        <div class="xl-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>

        <div class="xl-dialog__footer" v-if = '$slots.footer'>
          <!-- v-if = '$slots.footer'代表给footer插槽传了值div才显示 -->
          <slot name="footer"></slot>
        </div>

      </div>

    </div> 
  </transition>
</template>

<script>
export default {
  name:'xl-dialog',
  props:{
    title:{
      type:String,
      default:'提示'
    },
    width:{
      type:String,
      default:"50%"
    },
    top:{
      type:String,
      default:'15vh'
    },
    visible:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    handleClose(){
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang = 'scss' scoped>
.xl-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .xl-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .xl-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xl-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hm-button:first-child {
        margin-right: 20px;
      }
      ::v-deep .xl-button:first-child{
      margin-right: 10px;
    }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .5s;
}
.dialog-fade-leave-active{
  animation: fade .5s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
