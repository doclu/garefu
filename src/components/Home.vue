<template>
  <div class="container">
    <v-mask v-show="ismask"></v-mask>
    <user-sider v-show="usersidebar"></user-sider>
    <div class="head">
      <div class="banner">
        <div class="count">
          <countTo
            :startVal="startVal"
            :endVal="endVal"
            :duration="3000"
            :prefix="prefix"
            :suffix="suffix"
          ></countTo>
        </div>
        <div class="nav_l" v-show="0">
          <van-button type="primary">退出</van-button>
        </div>
        <div class="title">
            <icon name="flag" @click.native="telephone_input"></icon>
          <h2>"嘉师傅之星"</h2>
          <h4>-2019-</h4>
          <span>新浪地产Sina</span>
        </div>
      </div>
      <div class="wrap">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="content">
      <div class="sign">
        <router-link to="/sign">我要报名</router-link>
      </div>
      <div>
        <a href>比赛日历</a>
      </div>
      <div class="public">
        <router-link to="/public">赛区公示</router-link>
      </div>
      <div>
        <a href>我是评委</a>
      </div>
      <div>
        <a href>施工课堂Community</a>
      </div>
      <div>
        <a href>全国招商</a>
      </div>
      <div>
        <a href>联系我们</a>
      </div>
      <div class="welfare">
        <a href>嘉师傅之星福利</a>
      </div>
    </div>
    <div class="footer">
      《嘉师傅之星》全国海选组委会
      GAREFU STAR
    </div>
  </div>
</template>
<script>
import icon from 'vue-awesome/components/Icon'
import countTo from "vue-count-to";
import vMask from "./Mask.vue";
import userSider from './userSideBar/SideBar.vue'
import { mapActions, mapState } from "vuex";
export default {
  components: { countTo, vMask ,userSider,icon},
  data() {
    return {
      startVal: 0,
      endVal: 2295,
      prefix: "",
      suffix: "人已报名",
      username: "",
      images: ["", ""]
    };
  },
  computed: {
    ...mapState(["ismask","usersidebar"])
  },
  methods: {
    ...mapActions(["telephone_input"])
  },
  mounted() {}
};
</script>

<style lang='scss'>
.container {
  background: #efe9e9;
  font-size: 0.226667rem;
}
.head {
  position: relative;
  margin-bottom: 2.4rem;
  .banner {
    .title {
      position: absolute;
      top: 100px;
      right: 30px;
      text-align: center;
      color: white;
      font-size: 32px;
      padding: 15px;
      h2,
      h4 {
        margin: 0;
      }
      span {
        font-size: 24px;
      }
    }
    .count {
      position: absolute;
      top: 200px;
      left: 30px;
      text-align: center;
      color: white;
      background: #333;
      font-size: 32px;
      padding: 15px;
    }
    .nav_l {
      position: absolute;
      top: 0;
      left: 0;
    }
    height: 5.866667rem;
    overflow: hidden;
    background: darken(#e65518, 30%);
    text-align: center;
    img {
      margin: 0 auto;
      //   width: 120px;
      height: 300px;
    }
  }
  .wrap {
    height: 4rem;
    width: 90%;
    background: #000;

    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    border-radius: 0.2rem;
    .van-swipe-item {
      img {
        max-width: 100%;
      }
    }
  }
}
.content {
  margin: 0 0.2rem;
  overflow: hidden;
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1.333333rem 1.333333rem 3.333333rem 3.333333rem 2rem;
  grid-gap: 0.1rem;
  div {
    margin: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e65518;

    a {
      position: relative;
      color: white;
      font-size: 0.426667rem;
    }
  }
  .public,
  .welfare,
  .sign {
    a::after {
      font-size: 0.24rem;
      content: "hot";
      position: absolute;
      top: 0;
      right: -0.26;
      padding: 0 0.133333rem;
      background: #c40000;
      animation: Updown 1s infinite alternate;
    }
  }

  div:nth-child(1) {
    grid-row: 1/3;
  }
  div:nth-child(1),
  div:nth-child(5),
  div:nth-child(6) {
    background: #e65518;
  }
  div:nth-child(2),
  div:nth-child(4),
  div:nth-child(8) {
    background: rgb(66, 66, 66);
  }
  div:nth-child(3),
  div:nth-child(7) {
    background: rgb(190, 190, 190);
  }
  div:nth-child(8) {
    grid-column: 1/3;
  }
}
.footer {
  padding: 0.466667rem 0.4rem;
  text-align: center;
  font-size: 0.32rem;
  color: rgb(95, 95, 95);
}

@keyframes Updown {
  from {
    top: 0.133333rem;
  }
  to {
    top: -0.133333rem;
  }
}
</style>
