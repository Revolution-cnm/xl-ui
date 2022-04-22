<template>

  <div
  class="xl-input"
  :class="{'xl-input--suffix': showSuffix}"
  >
    <input
    type="text"
    :class="['xl-input__inner',{'is-disabled':disabled}]"
    :placeholder = "placeholder"
    :type = "showPassword ? (passwordVisible ? 'text' : 'password') : type"
    :disabled = 'disabled'
    :value = 'value'
    @input="handleInput"
    >
    <span class="xl-input__suffix" v-if="showSuffix">
      <!-- 清空icon -->
      <i
      class="xl-input__icon xl-icon-circle-close"
      v-if='clearable && value'
      @click="clear"></i>
      <!-- 显示密码icon -->
      <i
      class="xl-input__icon xl-icon-view"
      :class="{'xl-icon-view-active':passwordVisible}"
      v-if='showPassword && value'
      @click="handleInputType"></i>

    </span>
  </div>
</template>

<script>
export default {
  name:'xl-input',
  data(){
    return{
      passwordVisible: false
    }
  },
  props:{
    placeholder:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    },
    disabled:{
      type:Boolean,
      default: false
    },
    value:{
      type:String,
      default:''
    },
    clearable:{
      type:Boolean,
      default: false
    },
    showPassword:{
      type:Boolean,
      default: false
    }
  },
  computed:{
    showSuffix(){
      return this.clearable || this.showPassword
    }
  },
  methods:{
    handleInput(e){
      this.$emit('input',e.target.value)
    },
    clear(){
      this.$emit('input','')
    },
    handleInputType(){
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang = 'scss' scoped>
input::-ms-clear{
  /* 去除原来input框可删除输入的叉叉，自己写 */
  display: none;
}
input::-ms-reveal{
  /* 去除原来input密码框中可显示密码的图标，自己另外写一个 */
  display: none;
}
.xl-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .xl-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.xl-input--suffix{
  .xl-input__inner {
    padding-right: 30px;
  }
  .xl-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .xl-icon-view-active{
      color: #409eff;
    }
  }
}
</style>
