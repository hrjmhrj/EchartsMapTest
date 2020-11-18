<!--通时分布-->
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
    import qs from 'qs';
    export default {
        name: "hjzxtsfb",
        components:{
            divbox,
        },
        data() {
            return {
                width:"31",
                height:"34",
                title:"通时分布",
                chartId:"hjzxtsfb",
                tsfbdata: ['0.00','12.50','17.00','23.00', '11.00', '15.00','19.00'],
                page: 1,
                excutNum: 0, //请求执行次数
                colorarr:['#7070B9','#FF68FF','#FF6860', '#5FD0FF','#5FD03A','#9BC1D2','RGB(253,182,40)'],
            }
        },
        methods:{
            find() {
                let cdata = [];
                for (let i = 0; i < (this.tsfbdata.length == 7?this.tsfbdata.length:7) ; i++) {
                    cdata[i] = {
                        value : (this.tsfbdata[i] != undefined && this.tsfbdata[i] != null)?this.tsfbdata[i]:"0.00",
                        itemStyle:{
                            color:this.colorarr[i],
                        },
                    }
                }
                // console.log(cdata);
                let myChart = this.$echarts.init(document.getElementById(this.chartId))
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        textStyle:{
                            fontSize: this.getPx(30),
                        },
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter:'{b} :  {c}%',
                    },
                    grid: {
                        top: '10%',
                        left: '0%',
                        right: '8%',
                        bottom: '0%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                    },
                    yAxis: {
                        type: 'category',
                        axisLine:{show:false},
                        axisTick:{show:false},
                        axisLabel:{
                            show:true,
                            fontSize:this.getPx(30),
                            color:'#fff',
                        },
                        data: ['0-10s','10-20s','20-30s','30-40s','40-50s','50-60s','>60s']
                    },
                    series: [
                        {
                            type: 'bar',
                            barMinHeight:this.getPx(10),
                            barWidth:this.getPx(30),
                            label: {
                                show: true,
                                position:'right',
                                color:'#fff',
                                fontSize:this.getPx(30),
                                formatter:'{c}%',
                            },
                            data: cdata
                        }
                    ]
                });
                window.addEventListener('resize',myChart.resize);
            },
        },
        created(){

        },
        props: {
            tsfbData: {
                type: Array,
                default: () => []
            },
        },
        watch: {
            tsfbData(newVal){
                this.tsfbdata = newVal;
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
