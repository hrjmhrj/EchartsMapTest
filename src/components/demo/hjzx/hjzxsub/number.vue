<template>
  <div class="div-number">
    <div class="div-yh div-hrs">
      <div style="float: left;margin-left: 3vw;margin-right: 1vw">
        <img class="img-wh" src="../../../../assets/img/hjzx/hrs.png">
      </div>
      <div style="height: 8vh;float: left; margin-top: -4vh">
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          {{paramdata.hrs}}
          <span style="font-size: 1vw;color: #00F4FF;"> 个</span>
        </div>
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          <span style="font-size: 1vw;color: #FFFFFF;">呼入数</span>
        </div>
      </div>
    </div>
    <div class="div-yh div-znjds">
      <div style="float: left;margin-left: 3vw;margin-right: 1vw">
        <img class="img-wh" src="../../../../assets/img/hjzx/znjds.png">
      </div>
      <div style="height: 8vh;float: left; margin-top: -4vh">
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          {{paramdata.znjds}}
          <span style="font-size: 1vw;color: #00F4FF;"> 个</span>
        </div>
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          <span style="font-size: 1vw;color: #FFFFFF;">智能解答数</span>
        </div>
      </div>
    </div>
    <div class="div-yh div-rgjds">
      <div style="float: left;margin-left: 3vw;margin-right: 1vw">
        <img class="img-wh" src="../../../../assets/img/hjzx/rgjds.png">
      </div>
      <div style="height: 8vh;float: left; margin-top: -4vh">
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          {{paramdata.rgjds}}
          <span style="font-size: 1vw;color: #00F4FF;"> 个</span>
        </div>
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          <span style="font-size: 1vw;color: #FFFFFF;">人工解答数</span>
        </div>
      </div>
    </div>
    <div class="div-yh div-zsc">
      <div style="float: left;margin-left: 3vw;margin-right: 1vw">
        <img class="img-wh" src="../../../../assets/img/hjzx/zsc.png">
      </div>
      <div style="height: 8vh;float: left; margin-top: -4vh">
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          {{paramdata.zsc}}
          <span style="font-size: 1vw;color: #00F4FF;"> 分</span>
        </div>
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          <span style="font-size: 1vw;color: #FFFFFF;">总时长</span>
        </div>
      </div>
    </div>
    <div class="div-yh div-pjsc">
      <div style="float: left;margin-left: 3vw;margin-right: 1vw">
        <img class="img-wh" src="../../../../assets/img/hjzx/pjsc.png">
      </div>
      <div style="height: 8vh;float: left; margin-top: -4vh">
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          {{paramdata.pjsc}}
          <span style="font-size: 1vw;color: #00F4FF;"> 分</span>
        </div>
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          <span style="font-size: 1vw;color: #FFFFFF;">平均时长</span>
        </div>
      </div>
    </div>
    <div class="div-znjdl">
      <div style="float: left;margin-left: 3vw;margin-right: 1vw">
        <img class="img-wh" src="../../../../assets/img/hjzx/znjdl.png">
      </div>
      <div style="height: 8vh;float: left; margin-top: -4vh">
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          {{paramdata.znjdl}}
          <span style="font-size: 1vw;color: #00F4FF;"> %</span>
        </div>
        <div style="height: 3vh;font-size: 2vw;color: #00F4FF">
          <span style="font-size: 1vw;color: #FFFFFF;">智能解答率</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "number",
    data() {
      return{
        paramdata: {
          hrs: 233,
          znjds: 135,
          rgjds: 100,
          zsc: 470,
          pjsc: 2,
          znjdl: 68
        }
      }
    },
    props: {
      countData: {
        type: Object,
        default: () => {}
      },
    },
    watch: {
      countData(newVal){
        this.paramdata.hrs = newVal.incomingCallsTotal;
        this.paramdata.znjds = newVal.countZn;
        this.paramdata.rgjds = newVal.countRg;
        this.paramdata.zsc = newVal.totalDuration;
        this.paramdata.pjsc = newVal.averageDuration;
        this.paramdata.znjdl = newVal.answerRate;
      }
    },
  }
</script>

<style scoped>
  .div-number{
    width: 95vw;
    height: 13vh;
    line-height: 13vh;
    /*background:linear-gradient(to bottom,#00397c,rgba(2,36,100,0));*/
    background: rgba(0, 33, 121, 0.65);
    border: 1px solid #0ca0ff;
    border-radius: 3px;
  }
  .div-yh{
    float: left;
    margin-top: 2.5vh;
    width: 15.5vw;
    height: 8vh;
    border-right: 4px solid #037AD4;
  }
  .div-znjdl{
    float: left;
    margin-top: 2.5vh;
    width: 15.5vw;
    height: 8vh;
  }
  .img-wh{
    margin-top: 1vh;
    width: 3.385417vw;
    height: 6.01852vh;
  }
</style>
