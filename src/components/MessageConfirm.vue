<template>
  <div class="login-popup showPopup" style="display: block; top: 212px;">
    <div class="pop-slogin">
      <div class="title">输入验证码</div>
      <div class="back back-hook">
        <span></span>
      </div>
      <div class="error error-hook"></div>
      <div class="phone-wrapper">
        <div class="phone">验证码将发送至 {{telephone}}</div>
        <div class="btn btn-hook active" v-show="timeCount">{{tipsContent}}</div>
        <div class="btn btn-hook active" @click="time" v-show="!timeCount">重新发送</div>
      </div>
      <div class="user-input user-input-hook">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <input type="text" v-model="confirmValue" maxlength="4">
      </div>
      <div class="desc desc-hook">
          
          输入验证码表示同意<br>《法律声明及隐私政策》
        </div>
    </div>
    <div class="close" @click="close_mask">
      <span></span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      confirmValue: ""
    };
  },
  computed: {
    ...mapState([
      "telephone",
      "tipsContent",
      "Verification",
      "VerificationNumArray",
      "timeCount",
      "save_telephone"
    ])
  },
  watch: {
    confirmValue(value) {
      // console.log(value)
      if (value.length == 4) {
        console.log("ok");
        this.close_mask();
        this.$store.dispatch("save_telephone");
      }
    },
    tipsContent(value) {
      // console.log(value)
    },
    VerificationNumArray(value) {
      console.log(value);
    }
  },
  methods: {
    time() {
      this.$store.dispatch("time", 60);
    },
    ...mapActions(["close_mask"])
  },
  mounted() {
    this.time();
  },
  beforeDestroy() {}
};
</script>
<style scoped>
.user-input.user-input-hook .active {
  border-color: #e8a400;
}

.pop-slogin {
  position: relative;
  padding-top: 40px;
}

.pop-slogin .title {
  text-align: center;
  font-size: 16px;
  color: #333;
  margin-bottom: 7px;
}

.pop-slogin .error {
  height: 10px;
  opacity: 0;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  text-align: center;
  font-size: 10px;
  color: #ff5454;
}

.pop-slogin .phone-wrapper {
  margin-top: 10px;
  text-align: center;
}

.pop-slogin .phone-wrapper .phone {
  vertical-align: center;
  font-size: 12px;
  color: #999;
}

.pop-slogin .phone-wrapper .btn.active {
  border-color: #666;
  color: #666;
}

.pop-slogin .phone-wrapper .btn {
  display: inline-block;
  box-sizing: border-box;
  width: 180px;
  height: 50px;
  margin: 20px auto;
  line-height: 50px;
  vertical-align: top;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  color: #ccc;
  text-align: center;
}

.pop-slogin .user-input {
  margin: auto;
  width: 245px;
  position: relative;
  background-color: #fff;
  z-index: 601;
}

.pop-slogin .user-input > span {
  display: inline-block;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin-right: 5px;
  vertical-align: middle;
  border: 2px solid #e5e5e5;
  border-radius: 2px;
  text-align: center;
  font-size: 26px;
  color: #333;
  overflow: hidden;
}
.pop-slogin .user-input input {
  position: absolute;
  z-index: 0;
  width: 245px;
  height: 50px;
  left: 0;
  top: 0;
  letter-spacing: 55px;
  font-size: 30px;
  text-indent: 13.5px;
}

.pop-slogin .desc {
  height: 80px;
  margin-bottom: 8px;
  margin-top: 15px;
  /* visibility: hidden; */
  text-align: center;
  font-size: 10px;
  color: #adadad;
}
</style>