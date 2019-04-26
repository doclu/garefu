<template>
  <van-nav-bar
    :title="stitle"
    left-text="返回"

    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    
    <router-link to='/' slot="right">
    <van-icon name="more-o" size="0.5rem"/>
    </router-link>
  </van-nav-bar>
</template>


<script>
export default {
  props:['title'],
  data() {
    return {
      stitle:this.title
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {

    }
  }
};
</script>

<style lang='less'>


</style>


