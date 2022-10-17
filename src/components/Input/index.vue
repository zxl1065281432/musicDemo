<template>
    <div class="InputIndex">
        <svg class="InputIndex_icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
        <input type="text" class="InputForm" :placeholder="placeHolder" v-model="key" @input="getSearchKey()">
    </div>
</template>

<script>
export default {
  name: 'InputIndex',
  data () {
    return {
      key: ''
    }
  },
  props: {
    placeHolder: {
      type: [String, Number]
    },
    inputValue: {
      type: [String, Number]
    }
  },
  emits: ['update:inputValue'],
  methods: {
    getSearchKey () {
      this.$emit('update:inputValue', this.key)
    }
  }
}
</script>

<style lang="less" scoped>
.InputIndex{
        display: flex;
        align-items: center;
        height: .7rem;
        width: 5rem;
    .InputIndex_icon{
        position: absolute;
        margin-left: .2rem;
        line-height: .4rem;
        width: .4rem;
        height: .4rem;
    }
    .InputForm{
        border:  none;
        padding-left: .8rem;
        border-radius: .3rem;
        height: .7rem;
        width: 5rem;
        background-color: #fff;
    }
}

</style>
