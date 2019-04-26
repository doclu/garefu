<template>
  <div class="login-wrap">
    <div>
      <Head :title="title"></Head>
    </div>

    <div class="b">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      </van-cell-group>

      <van-button type="primary" @click="login">登录</van-button>
      <van-button type="primary" @click="updateMessage">测试</van-button>
    </div>
  </div>
</template>

<script>
import Head from "./Head.vue";
export default {
  components: {
    Head
  },
  data() {
    return {
      title: "登录",
      username: "",
      password: "",
      message:'未更新'
    };
  },
  methods: {
    
  },
  mounted() {
    if (this.$cookies.get("name")) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.login-wrap {
  font-size: 0.48rem;
  min-height: 100vh;
  background: #e65518;
}
.b {
  background: #e65518;
  margin-top: 0.4rem;
}
</style>
