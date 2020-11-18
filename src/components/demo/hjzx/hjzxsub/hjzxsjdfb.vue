<!--时间段分布-->
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
        name: "hjzxsjdfb",
        components:{
            divbox,
        },
        data() {
            return {
                width:"31",
                height:"34",
                title:"时间段分布",
                chartId:"hjzxsjdfb",
                interval: 2,
                lnsszfData: {
                    "monthName": ['9-10','10-11','11-12','12-13','13-14', '14-15','15-16', '16-17'],
                    "monthCount": [19,40,38,33,22,44,33,23],
                },
                option: {
                    // 颜色数组
                    colors: [
                        {offset: 0, color: 'RGBA(253,182,40,1)'},
                        {offset: 0.33, color: 'RGBA(253,182,40,0.75)'},
                        {offset: 0.66, color: 'RGBA(253,182,40,0.35)'},
                        {offset: 1, color: 'RGBA(253,182,40,0.1)'}],
                    smooth: false,
                },
                optionwc: {
                    // 颜色数组
                    colors: [
                        {offset: 0, color: 'RGBA(23,182,140,1)'},
                        {offset: 0.33, color: 'RGBA(23,182,140,0.8)'},
                        {offset: 0.66, color: 'RGBA(23,182,140,0.35)'},
                        {offset: 1, color: 'RGBA(23,182,140,0.1)'}],
                    smooth: false,
                },
                pointerLineColor:"RGBA(253,182,40,0.8)",
                page: 1,
                excutNum: 0, //请求执行次数
            }
        },
        methods:{
            find() {
                let myChart = this.$echarts.init(document.getElementById(this.chartId))
                myChart.setOption({
                    grid: {
                        top: '18%',
                        left: '0%',
                        right: '0%',
                        bottom: '0%',
                        containLabel: true
                    },
                    tooltip:{
                        show:true,
                        formatter:"{a}<br/>{b}时: {c}通",
                        textStyle:{
                            fontSize: this.getPx(30),
                        },
                        trigger: 'axis',
                    },
                    axisPointer: {
                        lineStyle:{
                            color: this.pointerLineColor,
                            type: 'dashed',
                        },
                        triggerOn:'mousemove'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: this.lnsszfData.monthName,
                        axisLine:{
                            lineStyle:{
                                color: '#708acc',
                                width: this.getPx(3)
                            }
                        },
                        axisLabel: {
                            rotate:0,//角度
                            interval: '0',//x轴标识隔几个显示  auto
                            fontSize: this.getPx(30),
                            color:'#fff',
                        },
                        axisTick:{
                            show:false,
                        },
                        splitLine:{
                            show:false,
                            lineStyle:{
                                color: '#708acc',
                                type: 'dashed',
                            }
                        },
                    },
                    yAxis: {
                        name:'数量',
                        nameTextStyle:{
                            color:'#fff',
                            padding: [0, 0, this.getPx(20),0],
                            fontSize: this.getPx(30),
                        },
                        type: 'value',
                        minInterval: parseInt(this.interval),
                        axisLabel: {
                            formatter: '{value}',
                            fontSize: this.getPx(30),
                            color:'#fff',
                        },
                        axisTick:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        },
                        axisLine:{
                            lineStyle:{
                                color: '#708acc',
                                width: this.getPx(3)
                            }
                        }
                    },
                    series: [{
                        name:this.title,
                        data: this.lnsszfData.monthCount,
                        type: 'line',
                        lineStyle: {
                            color: this.pointerLineColor
                        },
                        itemStyle:{
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'RGBA(253,182,40,0.8)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                        },
                        label: {
                            show: true,
                            position: 'top',
                            color: '#fff',
                            formatter: '{c}',
                            fontSize: this.getPx(30),
                        },
                        areaStyle: {
                            color: new this.$echarts.graphic.LinearGradient(         //颜色渐变
                                0, 0, 0, 1,this.option.colors
                            )
                        },
                        smooth: false
                    }]
                });
                window.addEventListener('resize',myChart.resize);
            },
        },
        created(){

        },
        props: {
            sjdfbData: {
                type: Object,
                default: () => {}
            },
        },
        watch: {
            sjdfbData(newVal){
              this.lnsszfData = newVal;
              this.find();
            }
        },
        mounted() {
            this.find();
        },
        beforeDestroy() {
        },
    }
</script>
