<template>
  <label class="xl-switch"
  @click="handleClick"
  :class="{'is-checked':value}"
  for = 'name'
  >
    <span class="xl-switch__core" ref = 'core'>
      <span class="xl-switch__button"></span>
    </span>

    <input
    class="xl-switch__input"
    type="checkbox"
    :name="name"
    ref = 'input'
    >

  </label>
</template>

<script>
export default {
  name:'xl-switch',
  props:{
    value:{
      type:Boolean,
      default:false
    },
    activeColor:{
      type:String,
      default:''
    },
    inactiveColor:{
      type:String,
      default:''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 等待改变input框的值后再操作
      await this.$nextTick()
      this.$refs.input.checked = this.value
      this.setColor()
    },
    setColor(){
      if(this.activeColor || this.inactiveColor){
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted(){
    // 初次加载时就判断switch的颜色是否被用户传入并执行
    this.setColor()
    // 控制checkbox的值与value同步
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang = 'scss' scoped>

.xl-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .xl-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .xl-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }

}
.xl-switch.is-checked {
  .xl-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .xl-switch__button {
      transform: translateX(20px);
    }
  }
}
.xl-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}

</style>
