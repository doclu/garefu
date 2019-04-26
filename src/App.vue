<template>
  <div id="app">
    <div class="nav_common" v-show="0">
      <van-nav-bar
        title="use"
        left-text="退出"
        right-text="我的"
        left-arrow
      />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted(){

  }
};
</script>

<style lang='scss'>
@import 'assets/css/animate.css';
.nav_common{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
