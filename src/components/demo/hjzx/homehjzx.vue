<template>
  <div>
    <!--中间地图  、 光环-->
    <img src="../../../assets/img/index2.png" class="img-dt">
    <!--上方div数量统计-->
    <Number :countData="resData.countData" style="position: absolute;top: 12vh; left: 2.5vw;"/>
    <!--echarts图形-->
    <hjzxywzb style="position: absolute;top: 27vh; left: 2.5vw;"/>
    <hjzxzxzt style="position: absolute;top: 27vh; left: 34.5vw;"/>
    <hjzxrdxyw style="position: absolute;top: 27vh; left: 66.5vw;"/>
    <hjzxtsfb :tsfbData="resData.tsfbData" style="position: absolute;top: 63vh; left: 2.5vw;"/>
    <hjzxsjdfb :sjdfbData="resData.sjdfbData" style="position: absolute;top: 63vh; left: 34.5vw;"/>
    <hjzxrylx style="position: absolute;top: 63vh; left: 66.5vw;"/>
  </div>
</template>

<script>
  import Number from "./hjzxsub/number";
  import hjzxywzb from "./hjzxsub/hjzxywzb";
  import hjzxzxzt from "./hjzxsub/hjzxzxzt";
  import hjzxrdxyw from "./hjzxsub/hjzxrdxyw";
  import hjzxtsfb from "./hjzxsub/hjzxtsfb";
  import hjzxsjdfb from "./hjzxsub/hjzxsjdfb";
  import hjzxrylx from "./hjzxsub/hjzxrylx";
  export default {
    name: "homehjzx",
    components:{
      Number,
      hjzxywzb,
      hjzxzxzt,
      hjzxrdxyw,
      hjzxtsfb,
      hjzxsjdfb,
      hjzxrylx
     },
    data() {
      return {
        resData: {
          countData: {},
          tsfbData: [],
          sjdfbData: {}
        }
      }
    },
    methods: {
      getList(){
        this.axios({
          url:'/cloudCallCenter/list',
          method: 'post'
        }).then(res => {
          if(res.data.status == 200){
            let responseData = res.data.obj;
            this.resData.countData = responseData.countData;
            this.resData.tsfbData = responseData.tsfbData;
            this.resData.sjdfbData = responseData.sjdfbData;
          }else {
            this.failedTip("数据查询失败", 1500);
          }
        }).catch(error => {
          this.failedTip("数据查询失败", 1500);
        });
      },
      //定时任务，每隔1分钟运行一次
      currentTime() {
        this._inter = setInterval(() => {
          //请求数据
          this.getList()
        }, 60000)
      },
    },
    mounted() {
      //this.getList();
      //this.currentTime(); //执行定时任务
    },
    beforeDestroy() {
      //清除定时任务
      clearInterval(this._inter)
    },
  }
</script>

<style lang='scss'>
  .img-dt{
    position: absolute;
    width: 59.89vw;
    height: 36.85vh;
    z-index: 0;
    bottom: 0;
    left: calc(50% - 29.94vw);
  }

</style>
