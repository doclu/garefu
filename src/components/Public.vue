<template>
  <div class="container-fluid">
    <div>
      <Head :title='title'></Head>
    </div>
    <div class="public_content">
      <div class="wrap">
        <div class="logo">
          <img src alt>
        </div>
        <div>-----2019------</div>
        <h4>嘉师傅之星全国海选赛区公示</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>赛区</th>
            <th>主办方</th>
            <th>联系方式</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list">
            <td>{{item.area}}</td>
            <td>{{item.host}}</td>
            <td>{{item.phone}}</td>
          </tr>
        </tbody>
      </table>
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
        title:"赛区公示",
      list: [],
      finished: false,
      loading: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.list.length) {
          this.finished = true;
        }
      }, 500);
    },
    getData() {
      this.$http
        .get(
          "https://www.easy-mock.com/mock/5cab63bb79c7c609ca2933a9/mise/join"
        )
        .then(
          response => {
            // get body data
            this.list = response.body.data;
          },
          response => {
            // error callback
          }
        );
    }
  },
  mounted() {
    this.getData();
  }
};
</script>


<style lang="scss">
.container-fluid {
  min-height: 100vh;
  background: #e65518;
}
.public_content {
  color: #ffffff;
  font-size: 0.32rem;
  .wrap {
    .logo {
      margin: 0.666667rem auto;
      height: 2.666667rem;
      width: 5.333333rem;
      background: #000;
    }
    h4 {
      margin-top: 0.2rem;
      font-size: 0.64rem;
      font-weight: 8rem;
    }
    text-align: center;
    height: 5.866667rem;
  }
  table {
    margin: 0 auto;
    width: 90%;
    text-align: center;
    border: #000 solid 1px;
    thead {
      tr {
        background: yellow;
        color: #000;
      }
    }
    th,
    td {
      padding: 0.2rem;
    }
  }
}
</style>

