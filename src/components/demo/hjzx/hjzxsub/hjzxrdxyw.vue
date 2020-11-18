<template>
  <div>
    <divbox
      :width="width"
      :height="height"
      :title="title"
      :clickDetails="false"
      :chartId="chartId"
    />
  </div>
</template>
<script>
  import divbox from '../../../../components/divbox';

  export default {
    name: 'hjzxrdxyw',
    data() {
      return {
        width:"31",
        height:"34",
        title:"热点小业务",
        chartId:"hjzxrdxyw",
        data: {
          "name": ['业务1', '业务2', '业务3', '业务4', '业务5', '业务6', '业务7', '业务8'],
          "num": [603,	555	,130,	416,	0,	13,	205,	398],
        },
        page: 1,
        excutNum: 0, //请求执行次数
        option: {},
        cyOption: {
          // 颜色数组
          colors: [
            {offset: 0, color: '#00A8FD'},
            {offset: 0.33, color: '#0080FA'},
            {offset: 0.66, color: '#005CF8'},
            {offset: 1, color: '#003AF7'}
          ],
        },
      }
    },
    methods: {
      barMethods() {
        // 先将this对象赋值给that
        let that = this
        // console.log(maxIndexs)
        let myChart = this.$echarts.init(document.getElementById(this.chartId))
        myChart.setOption({
          barMaxWidth: '30%',
          tooltip: {    //浮框的显示
            // formatter: "{a} <br/>{b} : {c}",  //显示的文字
            formatter: function (params) {
              // console.log(params[0])
              let formatterStr = ''
              formatterStr += params[0].seriesName + '<br/>'
              formatterStr += params[0].name + ':' + params[0].value
              return formatterStr
            },
            textStyle: {
              fontSize: this.getPx(30)
            },
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: 'RGBA(103,224,227,0.8)',
                type: 'dashed',
              }
            }
          },
          grid: {
            top: '12%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.data.name,
              axisLabel: {
                color:'#fff',
                // rotate: 45,
                padding: [this.getPx(10), 0, 0, 0], //可设定[距上方距离，距右方距离，距下方距离，距左方距离]
                fontSize: this.getPx(30),
                formatter: function (value, index) {
                  return value.length > 4 ? value.substring(0, 4) + '..' : value;
                }
              },
              axisTick: {
                alignWithLabel: true
              },
              offset: 5, //通过同时设置x轴的axisLine.onZero和offset实现了x轴的向下平移
              axisLine: {
                onZero: false, //通过同时设置x轴的axisLine.onZero和offset实现了x轴的向下平移
                lineStyle: {
                  color: '#708acc',
                  width: this.getPx(3)
                }
              },
            }
          ],
          yAxis: [
            {
              name: '数量', //y轴标题名称
              nameTextStyle :{ //y轴标题样式
                fontSize: this.getPx(30),
                color: '#FFF',
                padding: [0, 0, this.getPx(15), this.getPx(0)],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
              },
              minInterval: 200,
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#708acc',
                  width: this.getPx(3)
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                color:'#fff',
                fontSize: this.getPx(30),
                padding: [0, this.getPx(10), 0, 0], //可设定[距上方距离，距右方距离，距下方距离，距左方距离]
              },
            }
          ],
          series: [
            {
              name: this.title,
              type: 'bar',
              barWidth: '30%',
              data: this.data.num,
              itemStyle: {
                normal: {
                  label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                      color: '#fff',
                      fontSize: this.getPx(30)
                    },
                  },
                  color: function (params) {
                    let colors = that.option.colors;
                    return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, colors)
                  }
                }
              },
            },
          ]
        });
        window.addEventListener('resize',myChart.resize);
      },
      //请求数据
      getList(){

      },
      //定时任务，每隔5秒运行一次
      currentTime() {
        this._inter = setInterval(() => {
          //请求数据
          this.getList()
        }, 8000)
      },
    },
    created() {
      this.option = this.cyOption;
    },
    mounted() {
      this.barMethods();
      //this.getList(); //初始页面执行一次
      //this.currentTime(); //执行定时任务
    },
    components: {
      divbox
    },
    beforeDestroy() {
      //清除定时任务
      clearInterval(this._inter)
    },
  }
</script>
