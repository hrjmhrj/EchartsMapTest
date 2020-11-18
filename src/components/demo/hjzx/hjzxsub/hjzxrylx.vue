<!--人员类型-->
<template>
  <div>
    <divbox
      :width="width"
      :height="height"
      :title="title"
      :clickDetails="false"
    >
      <div style="height: 70%;width: 33%;display: inline-block;"
           :id="chartId"></div>
      <div style="height: 70%;width: 33%;display: inline-block;"
           :id="chartId1"></div>
      <div style="height: 70%;width: 33%;display: inline-block;"
           :id="chartId2"></div>
      <div style="width: 100%;height: 30%;color: #FFFFFF;display: inline-block;">
        <div style="width: 33%;height: 30%;color: #FFFFFF;display: inline-block;text-align: center;font-size: 1vw;">{{this.data[0].name}}</div>
        <div style="width: 33%;height: 30%;color: #FFFFFF;display: inline-block;text-align: center;font-size: 1vw;">{{this.data1[0].name}}</div>
        <div style="width: 33%;height: 30%;color: #FFFFFF;display: inline-block;text-align: center;font-size: 1vw;">{{this.data2[0].name}}</div>
      </div>
    </divbox>
  </div>
</template>

<script>
    import divbox from '../../../../components/divbox';

    export default {
        name: "hjzxrylx",
        components:{
            divbox,
        },
        data() {
            return {
                width:"31",
                height:"34",
                title:"人员类型",
                chartId:"hjzxrylx",
                chartId1:"hjzxrylx1",
                chartId2:"hjzxrylx2",
                data: [
                    {value: 314.36, name: '法人'},
                    {value: 181.27, name: '其他'},
                ],
                data1: [
                    {value: 36, name: '财务人员'},
                    {value: 36, name: '其他'},
                ],
                data2: [
                    {value: 150.36, name: '办税人员'},
                    {value: 181.27, name: '其他'},
                ],
                page: 1,
                excutNum: 0, //请求执行次数
            }
        },
        methods:{
            bfb(data,sjsum){
                let sum = 0;
                let qt = 0;
                for (let i = 0; i < data.length; i++) {
                    sum += data[i].value
                    if(data[i].name == '其他'){
                        qt = data[i].value
                    }
                }
                sjsum = (1-qt/sum)*100;//环形图中间值
                sjsum = sjsum.toFixed(2)+'%'
                return sjsum
            },
            find() {
                let sjsum = 0;
                sjsum = this.bfb(this.data,sjsum);
                let myChart = this.$echarts.init(document.getElementById(this.chartId))
                myChart.setOption({
                    tooltip: {
                        formatter: "{a} <br/>{b} : {c}人",
                        position: function (params) {
                            // console.log(params)
                            //固定提示框距离左边的位置
                            return {left: 0, top: params[1]}
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
                    /*legend: {
                        data:[{
                            name:'法人',

                        }],
                        formatter: function (name) {
                            return name.length > 5 ? name.substring(0, 5) + '..' : name;
                        },
                        //orient: 'vertical', // 竖型摆放
                        orient: 'horizontal', // 横型摆放
                        icon: "rect", //原型图例
                        x: 'center',      //可设定图例在左、右、居中
                        y: 'bottom',     //可设定图例在上、下、居中
                        align: 'left', //图标和文字显示位置
                        padding: [3, 0, 20, 0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
                        itemGap: 20, // 图标上下距离
                        textStyle: {
                            color: '#fff',
                            fontSize: this.getPx(30), //文字
                            padding: [0, 8, 0, 0]
                        },
                        itemWidth: 20, //图例大小
                        itemHeight: 20,
                    },*/
                    color: ['#4cfeb1','#808080'], // 扇形块颜色
                    graphic: {       //图形中间文字
                        type: "group",
                        left: 'center',//居中
                        width: "3%",
                        top: "51%",
                        children: [
                            {
                                type: "text",
                                style: {
                                    text: sjsum,
                                    textAlign: 'center',
                                    fill: '#4cfeb1',
                                    fontWeight: 'bold',//加粗
                                    fontSize: this.getPx(29)
                                }
                            }
                        ]
                    },
                    series: [
                        {
                            name: '人员类型',
                            type: 'pie',
                            radius: ['50%', '60%'],
                            /*调整图形的位置*/
                            center: ['50%', '55%'],
                            hoverAnimation:false,
                            labelLine: {
                                show: false,
                                smooth: 0.2,
                                length: 7,
                                length2: 14
                            },
                            /*labelLine: {
                                show:true,
                                length: 18,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            },*/
                            label: {
                                show: false,
                                formatter: function (params) {
                                    return params.value+"人"
                                },
                                // padding: [-this.getPx(20), -this.getPx(50), 0, -this.getPx(50)],
                                // position:'inside',
                                //fontWeight: 'bold',//加粗
                                fontSize: this.getPx(30)
                            },
                            data: this.data,
                        },
                        {
                            // 外环透明效果
                            name: ' ',
                            type: 'pie',
                            hoverAnimation: false,
                            startAngle: -18,
                            radius: ['64%', '67%'],
                            center: ['50%', '55%'],
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
                                        color: 'rgba(192,192,192,0.3)',
                                        shadowBlur: 10,
                                        shadowColor: 'rgb(5,102,232)',
                                    }
                                },
                            ]
                        },
                    ]
                });
            },
            find1() {
                let sjsum = 0;
                sjsum = this.bfb(this.data1,sjsum);
                let myChart = this.$echarts.init(document.getElementById(this.chartId1))
                myChart.setOption({
                    tooltip: {
                        formatter: "{a} <br/>{b} : {c}人",
                        position: function (params) {
                            // console.log(params)
                            //固定提示框距离左边的位置
                            return {left: 0, top: params[1]}
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
                    color: ['#ff8f15','#808080'], // 扇形块颜色
                    graphic: {       //图形中间文字
                        type: "group",
                        left: 'center',//居中
                        width: "3%",
                        top: "51%",
                        children: [
                            {
                                type: "text",
                                style: {
                                    text: sjsum,
                                    textAlign: 'center',
                                    fill: '#ff8f15',
                                    fontWeight: 'bold',//加粗
                                    fontSize: this.getPx(29)
                                }
                            }
                        ]
                    },
                    series: [
                        {
                            name: '人员类型',
                            type: 'pie',
                            radius: ['50%', '60%'],
                            /*调整图形的位置*/
                            center: ['50%', '55%'],
                            hoverAnimation:false,
                            labelLine: {
                                show: false,
                                smooth: 0.2,
                                length: 7,
                                length2: 14
                            },
                            /*labelLine: {
                                show:true,
                                length: 18,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            },*/
                            label: {
                                show: false,
                                formatter: function (params) {
                                    return params.value+"人"
                                },
                                // padding: [-this.getPx(20), -this.getPx(50), 0, -this.getPx(50)],
                                // position:'inside',
                                //fontWeight: 'bold',//加粗
                                fontSize: this.getPx(30)
                            },
                            data: this.data1,
                        },
                        {
                            // 外环透明效果
                            name: ' ',
                            type: 'pie',
                            hoverAnimation: false,
                            startAngle: -18,
                            radius: ['64%', '67%'],
                            center: ['50%', '55%'],
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
                                        color: 'rgba(192,192,192,0.3)',
                                        shadowBlur: 10,
                                        shadowColor: 'rgb(5,102,232)',
                                    }
                                },
                            ]
                        },
                    ]
                });
            },
            find2() {
                let sjsum = 0;
                sjsum = this.bfb(this.data2,sjsum);
                let myChart = this.$echarts.init(document.getElementById(this.chartId2))
                myChart.setOption({
                    tooltip: {
                        formatter: "{a} <br/>{b} : {c}人",
                        position: function (params) {
                            // console.log(params)
                            //固定提示框距离左边的位置
                            return {left: 0, top: params[1]}
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
                    color: ['#FF000F','#808080'], // 扇形块颜色
                    graphic: {       //图形中间文字
                        type: "group",
                        left: 'center',//居中
                        width: "3%",
                        top: "51%",
                        children: [
                            {
                                type: "text",
                                style: {
                                    text: sjsum,
                                    textAlign: 'center',
                                    fill: '#FF000F',
                                    fontWeight: 'bold',//加粗
                                    fontSize: this.getPx(29)
                                }
                            }
                        ]
                    },
                    series: [
                        {
                            name: '人员类型',
                            type: 'pie',
                            radius: ['50%', '60%'],
                            /*调整图形的位置*/
                            center: ['50%', '55%'],
                            hoverAnimation:false,
                            labelLine: {
                                show: false,
                                smooth: 0.2,
                                length: 7,
                                length2: 14
                            },
                            /*labelLine: {
                                show:true,
                                length: 18,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            },*/
                            label: {
                                show: false,
                                formatter: function (params) {
                                    return params.value+"人"
                                },
                                // padding: [-this.getPx(20), -this.getPx(50), 0, -this.getPx(50)],
                                // position:'inside',
                                //fontWeight: 'bold',//加粗
                                fontSize: this.getPx(30)
                            },
                            data: this.data2,
                        },
                        {
                            // 外环透明效果
                            name: ' ',
                            type: 'pie',
                            hoverAnimation: false,
                            startAngle: -18,
                            radius: ['64%', '67%'],
                            center: ['50%', '55%'],
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
                                        color: 'rgba(192,192,192,0.3)',
                                        shadowBlur: 10,
                                        shadowColor: 'rgb(5,102,232)',
                                    }
                                },
                            ]
                        },
                    ]
                });
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
            this.find1();
            this.find2();
            //this.getList(); //初始页面执行一次
            //this.currentTime(); //执行定时任务
        },
        beforeDestroy() {
            //清除定时任务
            clearInterval(this._inter)
        },
    }
</script>
