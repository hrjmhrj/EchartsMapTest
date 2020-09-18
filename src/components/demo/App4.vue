<template>
    <div  :style="{width:'22vw'}" class="mapDiv">
        <div :style="{width:'100vw'}" class="echart" :id="dtdivid"></div>
        <div :style="{width:'100vw'}" class="echart1" :id="dtdivid+'1'"></div>
        <div :style="{width:'100vw'}" class="echart2" :id="dtdivid+'2'"></div>
        <div :style="{width:'100vw'}" class="echart3" :id="dtdivid+'3'"></div>
    </div>
</template>

<script>
    import xindoudt from '../../../static/json/xindouditumap.json'//引进底图
    import xdwapiant from '../../../static/json/xindoumap.json'//引进线条图形
    const testDemo = []
    testDemo.push({name: '斑竹园街道', value: '99'})
    testDemo.push({name: '大丰街道', value: '11'})
    testDemo.push({name: '桂湖街道', value: '22'})
    testDemo.push({name: '军屯镇', value: '33'})
    testDemo.push({name: '清流镇', value: '44'})
    testDemo.push({name: '三河街道', value: '55'})
    testDemo.push({name: '石板滩街道', value: '66'})
    testDemo.push({name: '新都街道', value: '77'})
    testDemo.push({name: '新繁街道', value: '88'})
    const testData = []
    const testName = {
        '石板滩街道':"shibantan",
        '斑竹园街道':"banzuyuan",
        '大丰街道':"dafeng",
        '桂湖街道':"guihu",
        '军屯镇':"juntun",
        '清流镇':"qingliu",
        '三河街道':"sanhe",
        '新都街道':"xindou",
        '新繁街道':"xinfan",
    }
    for (let i = 0; i < testDemo.length; i++) {
        testData.push({
            name: testDemo[i].name,
            value: testDemo[i].value,
            label: {
                normal: {//常态
                    show: true,
                    align: 'center',
                    verticalAlign: 'middle',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    formatter: '{b}\n{c}万',
                },
                emphasis:{//选中状态
                },
            }
        })
    }
    export default {
        name: "demo",
        components: {},
        data() {
            return {
                dtdivid:'map',
                chart: null,
                chart2: null,
                chart3: null,
                chart4: null,
                testData: testData
            }
        },
        mounted() {
            this.inintCharts1()
            this.inintCharts2()
            this.inintCharts3()
            this.inintMap()
        },
        methods: {
            inintMap() {
                this.chart = this.$echarts.init(document.getElementById(this.dtdivid))
                this.$echarts.registerMap('inintMap', xdwapiant)
                this.chart.on('click',function (params) {//点击事件
                    console.log(params);
                    if( testName.hasOwnProperty(params.name)){
                        console.log("0000000000000000000000000");
                        $.getJSON('static/json/'+ testName[params.name] +'.json', function(data){
                            this.$echarts.registerMap(params.name, data);
                            console.log(data);
                            let d = [];
                            for( let i=0;i<data.length;i++ ){
                                d.push({
                                    name:data[i].name
                                })
                            }
                            console.log(d);
                            this.$echarts.renderMap(params.name,d);
                        });
                    }else {
                        console.log("22222222222222222222222222222");
                        console.log(params.name);
                        console.log("1111");
                        console.log(testName);
                    }
                })
                this.chart.setOption({
                    visualMap: {
                        show: false,
                        type: 'piecewise',
                        min: 0,//最小值
                        max: 100,//最大值  用下面的颜色数组实现热力体现
                        calculable: false, //是否显示拖拽用的手柄
                        realtime: false,//拖拽时，是否实时更新
                        inverse:false, //是否反转 visualMap 组件
                        splitNumber: 4,//对于连续型数据，自动平均切分成几段。默认为5段
                        right: 20,//组件离容器右侧的距离,‘20%’
                        bottom: 50, //组件离容器下侧的距离,‘20%’
                        inRange: {//定义 在选中范围中 的视觉元素
                            // color: ['#3674e8', '#38de91', '#fbf75b', '#ff8f14']
                            color: ['rgba(0,153,255, 0.5)', 'rgba(37,185,155, 0.5)', 'rgba(238,194,17, 0.5)', 'rgba(255,0,0, 0.5)']
                        },
                        textStyle: {//文本样式
                            color: '#fff',
                            fontSize: 16 //文字
                        },
                    },
                    tooltip:{
                        formatter:'{b}<br/>{c}万',
                        position: ['35%', '80%']
                    },
                    geo: {
                        map: 'inintMap',  //必须以注册的地图名称一致
                        center: [104.12567138671875, 30.84623693902637],
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(255,255,255, 0.5)',
                                borderWidth: 4
                            }
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            }
                        },
                        aspectScale:0.85,//长宽比
                        zoom:1,//放大比例
                    },
                    //地图
                    series: [{
                        type: 'map',
                        coordinateSystem: 'geo',
                        mapType: 'inintMap',
                        data: testData,
                        center: [104.12567138671875, 30.84623693902637],
                        zoom: 1,
                        geoIndex: 10,
                        aspectScale: 0.85, // 长宽比
                        silent: true, //响应和触发鼠标事件
                        itemStyle: {//图形样式。
                            normal: {//常态
                                borderColor: 'rgba(255,255,255, 0.5)',
                                borderWidth: 4
                            },
                            emphasis:{//选中状态
                            },
                        },
                        label: {//地图文本
                            normal: {//常态
                                align: 'center',
                                verticalAlign: 'middle',
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'white',
                            },
                            emphasis:{//选中状态
                            }
                        },
                    },
                    //点
                        {
                            // scatter  heatmap ,
                            //name: '基金小镇',
                            type: 'effectScatter',
                            legendHoverLink: true,
                            coordinateSystem: 'geo',
                            center: [104.12567138671875, 30.84623693902637],
                            zoom: 1,
                            aspectScale: 0.85, // 长宽比
                            symbol: 'diamond',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgba(255,255,255, 0.5)',
                                    borderWidth: 4
                                },
                                emphasis: {
                                    borderColor: '#fff',
                                    borderWidth: 1
                                }
                            },
                            // 文本位置修正
                            textFixed: {
                                Alaska: [20, -20]
                            },
                            rippleEffect: {
                                scale: 8,
                                brushType: 'stroke',
                            },
                            legendHoverLink: true,//点波纹动态效果
                            symbolSize: 12,
                            /*function (val) {//根据数值大小控制点的大小
                               return val[2] / 1;
                           },*/
                            data: [//jjxzscData
                                {name: '初号机', value: [104.11567138671875, 30.85623693902637],
                                    tooltip:{formatter:'{b}'},
                                },
                                {name: '二号点', value: [104.10567138671875, 30.85923693902637],
                                    tooltip:{formatter:'{b}'},
                                },
                                {name: '三号公司', value: [104.12567138671875, 30.85123693902637],
                                    tooltip:{formatter:'{b}'},
                                },
                            ],
                        }
                    ]
                })
            },
            inintCharts1() {
                this.chart2 = this.$echarts.init(document.getElementById(this.dtdivid+'1'))
                this.$echarts.registerMap('mymap1', xindoudt)
                this.chart2.setOption({
                    series: [
                        {
                            type: 'map',
                            mapType: 'mymap1',
                            center: [104.12567138671875, 30.84623693902637],
                            zoom: 1,
                            aspectScale: 0.85, // 长宽比
                            itemStyle: {
                                normal: {
                                    areaColor: '#fccc19'
                                }
                            }
                        }
                    ]
                })
            },
            inintCharts2() {
                this.chart3 = this.$echarts.init(document.getElementById(this.dtdivid+'2'))
                this.$echarts.registerMap('mymap2', xindoudt)
                this.chart3.setOption({
                    series: [
                        {
                            type: 'map',
                            mapType: 'mymap2',
                            center: [104.12567138671875, 30.84623693902637],
                            zoom: 1,
                            aspectScale: 0.85, // 长宽比
                            itemStyle: {
                                normal: {
                                    areaColor: '#b8a643'
                                }
                            }
                        }
                    ]
                })
            },
            inintCharts3() {
                this.chart4 = this.$echarts.init(document.getElementById(this.dtdivid+'3'))
                this.$echarts.registerMap('mymap3', xindoudt)
                this.chart4.setOption({
                    series: [
                        {
                            type: 'map',
                            mapType: 'mymap3',
                            center: [104.12567138671875, 30.84623693902637],
                            zoom: 1,
                            aspectScale: 0.85, // 长宽比
                            itemStyle: {
                                normal: {
                                    areaColor: '#b8a643'
                                }
                            }
                        }
                    ]
                })
            },
        },
    }
</script>

<style scoped>
    .anchorBL {
        display: none;
    }
    /*中间div*/
    .mapDiv {
        height: 87.3vh;
        position: relative;
        float: left;
    }

    /*瓦片图形*/
    .echart {
        position: absolute;
        z-index: 120;
        height: 90vh;
    }

    /*背景1*/
    .echart1 {
        position: absolute;
        z-index: 80;
        height: 90vh;
        padding-left: 0.3%;
        padding-top: 1.7%;
    }

    /*背景2*/
    .echart2 {
        position: absolute;
        z-index: 60;
        height: 90vh;
        padding-left: 0.8%;
        padding-top: 3%;
    }

    /*背景3*/
    .echart3 {
        position: absolute;
        z-index: 40;
        height: 90vh;
        padding-left: 1%;
        padding-top: 4%;
    }


</style>
