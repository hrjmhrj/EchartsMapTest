<!--业务占比-->
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
        name: "hjzxywzb",
        components:{
            divbox,
        },
        data() {
            return {
                width:"31",
                height:"34",
                title:"业务占比",
                chartId:"hjzxywzb",
                data: [
                    {
                        "name": "税务注销",
                        "y": 0
                    },
                    {
                        "name": "处罚解非",
                        "y": 0
                    },
                    {
                        "name": "优惠备案",
                        "y": 0
                    },
                    {
                        "name": "退抵税",
                        "y": 0
                    },
                    {
                        "name": "其它综合文书",
                        "y": 0
                    },
                    {
                        "name": "同城通办",
                        "y": 0
                    },
                    {
                        "name": "预约办税",
                        "y": 0
                    },
                    {
                        "name": "其它",
                        "y": 0
                    },
                    {
                        "name": "新办纳税人套餐(预约)",
                        "y": 0
                    },
                    {
                        "name": "信息变更(预约)",
                        "y": 0
                    }
                ],
                page: 1,
                excutNum: 0, //请求执行次数
            }
        },
        methods:{
            find() {
                //let sum = 0;
                for (let i = 0; i < this.data.length; i++) {
                    this.data[i].value = this.data[i].y;
                    //sum += this.data[i].value;
                }
                let myChart = this.$echarts.init(document.getElementById(this.chartId))
                myChart.setOption({
                    tooltip: {
                        formatter: "{a} <br/>{b} : {c}次",
                        position: function (params) {
                            //固定提示框距离左边的位置
                            return {left: this.getPx(15), top: params[1]}
                        },
                        textStyle: {
                            fontSize: this.getPx(30)
                        },
                        trigger: 'item',
                        axisPointer: {
                            lineStyle: {
                                color: 'RGBA(103,224,227,0.8)',
                                type: 'dashed',
                            }
                        }
                    },
                    legend: {
                        // formatter: '{name}',
                        formatter: function(name) {
                            // 获取legend显示内容
                            return name.length > 6 ? name.substring(0, 6)+'...' : name;
                        },
                        orient: 'vertical',
                        icon: "rect",
                        x: 'right',
                        y: 'center',
                        align: 'left',
                        padding: [0, 0, 0, this.getPx(50)],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
                        itemGap: this.getPx(20), // 图标上下距离
                        textStyle: {
                            color: '#fff',
                            fontSize: this.getPx(30), //文字
                            padding: [0, 0, 0, this.getPx(10)]
                        },
                        itemWidth: this.getPx(20), //图例大小
                        itemHeight: this.getPx(20),
                    },
                    color: ['#E8CC61', '#FB617F', '#FFAD3C', '#FF6860', '#5FD07A' ,'#9BC1D2','#5E99D9','#7070B9','#9F73B5','#8CA2AA'], // 扇形块颜色
                    graphic: {       //图形中间文字
                        type: "group",
                        left: 'left',//靠左
                        width: "3%",
                        top: "43%",
                        children: [
                            {
                                type: "text",
                                style: {
                                    text: "",
                                    textAlign: 'center',
                                    fill: '#fff',
                                    fontSize: this.getPx(40)
                                }
                            }
                        ]
                    },
                    series: [
                        {
                            name: '当日业务办理量',
                            type: 'pie',
                            radius: ['20%', '45%'],
                            center: ['35%', '50%'],
                            labelLine: {
                                show: true,
                                smooth: 0.1,
                                length: this.getPx(14),
                                length2: this.getPx(28)
                            },
                            label: {
                                color:'#fff',
                                formatter: function (params) {
                                    let str = params.value+"次:"+params.name;
                                    let valuelength = params.value+"次:".length;
                                    let namelength = params.name.length;
                                    let returnstr = valuelength+namelength > 8 ? str.substring(0, 8): str;
                                    return returnstr;
                                },
                                fontSize: this.getPx(30)
                            },
                            data: this.data,
                        },
                        {
                            name: ' ',
                            type: 'pie',
                            hoverAnimation: false,
                            startAngle: -18,
                            radius: ['75%', '80%'],
                            center: ['35%', '50%'],
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            tooltip: {
                                formatter: " ",
                                backgroundColor: 'RGBA(0,0,0,0)'
                            },
                            data: [
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'rgba(5,102,232,0.2)',
                                        shadowBlur: 10,
                                        shadowColor: 'rgb(5,102,232)',
                                    }
                                },
                            ]
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
        created(){

        },
        mounted() {
            this.find();
            //this.getList(); //初始页面执行一次
            //this.currentTime(); //执行定时任务
        },
        beforeDestroy() {
            //清除定时任务
            clearInterval(this._inter)
        },
    }
</script>
