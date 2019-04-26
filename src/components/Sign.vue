<template>
  <div class="login-wrap">
    <div>
      <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <router-link to="/login" slot="right">
          <van-icon name="user-circle-o" size="0.3rem"/>
        </router-link>
      </van-nav-bar>
    </div>

    <div class="b">
      <van-cell-group>
        <van-field
          v-model="sign.username"
          required
          clearable
          label="姓名"
          right-icon="question-o"
          placeholder="请输入姓名"
          @click-right-icon="$toast('question')"
        />
      </van-cell-group>

      <van-radio-group v-model="sign.radio">
        <van-radio name="1">男</van-radio>
        <van-radio name="2">女</van-radio>
      </van-radio-group>

      <van-cell-group>
          <van-field label="身份证号" required placeholder="请输入身份证号"></van-field>
          <van-field label="施工年限" required placeholder="请输入施工年限"></van-field>
      </van-cell-group>
       <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />

    </div>
    <van-popup v-model="show" position="right" :overlay="false">
      <van-button @click="show= false">close</van-button>
    </van-popup>
    <van-button type="primary" plain @click="onClickConfirm">对话</van-button>
    <van-button @click="out">弹出层</van-button>
  </div>
</template>

<script>
import Head from "./Head.vue";
import Aeralist from '../assets/js/area.js'
import { setTimeout } from "timers";
export default {
  components: {
    Head
  },
  data() {
    return {
      title: "我要报名",
      sign: {
        username: "",
        password: "",
        phone: "",
        radio:1
      },
      show: false,
      segment: "嘉师傅报名协议",
      segContent: `报名参赛选手须认真阅读以下内容，并认可以下事项：
        1、《中国好声音》全国海选组委会或其授权方有权通过www.singchinahx.com网站及采用其他方式调查、获取和收集有关选手身份、参赛资格、报名资料等相关信息、材料、文档。
        2、《中国好声音》全国海选组委会或其授权方有权在2019《中国好声音》全国海选经营范围内，无限制、无偿使用参赛选手提交的报名信息、材料，包括将该信息用于筛选赛事的选手入围、晋级，赛事宣传推广，人才统计与推荐，及与大赛相关的其他事宜等。
        3、《中国好声音》全国海选组委会或其授权方有权使用参赛选手参赛作品，包括用于筛选赛事的选手入围、晋级，商业合作与开发，赛事宣传推广，人才统计与推荐，及与大赛相关的其他事宜等。
        4、 《中国好声音》全国海选组委会或其授权方在2019《中国好声音》全国海选报名及比赛期间拍摄、录制的选手相关音频、视频、图片等资料，该等作品的版权归属《中国好声音》全国海选组委会及其授权方所有，《中国好声音》全国海选组委会及其授权方可根据其需要进行无偿使用，报名参赛选手同意不对该等作品提出任何权利主张。
        5、报名选手确认已仔细、认真、审慎阅读以上条款，并同意遵守由《中国好声音》全国海选组委会或其授权方制定的各项规则和制度，尊重并接受组委会及赛事评委团做出的评判、决定等。
            该海选活动最终解释权归《中国好声音》全国海选组委会所有，报名选手自愿同意并接受以上条款，《中国好声音》全国海选组委会或其授权方没有必须选择其参加比赛的义务，不存在强迫选手报名参赛行为。`,
            areaList:Aeralist
    };
  },
  methods: {
    onClickConfirm() {
      this.$dialog.confirm({
        title: "协议",
        message: "内容"
      });
    },
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    out() {
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
    overlayClick() {
      this.show = false;
    }
  },
  mounted() {
    this.$dialog.confirm({
      title: this.segment,
      message: this.segContent
    });
  }
};
</script>

<style lang="less" scoped>
.van-popup--right {
  height: 100vh;
  width: 100vw;
}
</style>
