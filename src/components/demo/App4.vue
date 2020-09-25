<template>
    <div class="mapDiv">
        <div class="echart" :id="dtdivid"></div>
        <div class="echart1" :id="dtdivid+'1'"></div>
        <div class="echart2" :id="dtdivid+'2'"></div>
        <div class="echart3" :id="dtdivid+'3'"></div>
        <div v-show="this.show" @dblclick="closediv" class="echart4" :id="dtdivid+'4'"></div>
        <div v-show="this.show1" @dblclick="closediv1" class="companyDetails">
            <table :data="companyData" align="center" class="companytable">
                <tr>
                    <td>纳税人名称：{{companyData.name}}</td>
                </tr>
                <tr>
                    <td>今年税收：{{companyData.jnss}}</td>
                </tr>
                <tr>
                    <td>标准税负：{{companyData.bzsf}}</td>
                </tr>
                <tr>
                    <td>纳税人识别号：{{companyData.nsrsbh}}</td>
                </tr>
                <tr>
                    <td>经营地址：{{companyData.yydz}}</td>
                </tr>
                <tr>
                    <td>企业法人：{{companyData.qyfr}}</td>
                </tr>
                <tr>
                    <td>注册地址：{{companyData.zcdz}}</td>
                </tr>
                <tr>
                    <td>登记注册类型：{{companyData.djlx}}</td>
                </tr>
                <tr>
                    <td>登记日期：{{companyData.djrq}}</td>
                </tr>
                <tr>
                    <td>所属税务机关：{{companyData.swjg}}</td>
                </tr>
                <tr>
                    <td>纳税人状态：{{companyData.nsrzt}}</td>
                </tr>
                <tr>
                    <td>信用等级：{{companyData.xydj}}</td>
                </tr>
                <tr>
                    <td>当前是否申请延期申报：{{companyData.sfsqyqsb}}</td>
                </tr>
            </table>
        </div>
    </div><!--dblclick 双击  click 单击-->
</template>

<script>
    import xindoudt from '../../../static/json/xindouditumap.json'//引进底图
    import xdwapiant from '../../../static/json/xindoumap.json'//引进线条图形
    import shibantan from '../../../static/json/shibantan.json'//引进石板滩街道
    import banzuyuan from '../../../static/json/banzuyuan.json'//引进斑竹园街道
    import dafeng from '../../../static/json/dafeng.json'//引进大丰街道
    import guihu from '../../../static/json/guihu.json'//引进桂湖街道
    import juntun from '../../../static/json/juntun.json'//引进军屯镇
    import qingliu from '../../../static/json/qingliu.json'//引进清流镇
    import sanhe from '../../../static/json/sanhe.json'//引进三河街道
    import xindou from '../../../static/json/xindou.json'//引进新都街道
    import xinfan from '../../../static/json/xinfan.json'//引进新繁街道

    export default {
        name: "demo",
        components: {},
        data() {
            return {
                companyData:{},
                companyDetails:[
                    {
                     name: "新繁初号机",
                     jnss:123,
                     bzsf:345,
                     nsrsbh:5423123,
                     yydz:"四川省成都市新都区",
                     qyfr:"绫波丽",
                     zcdz:"四川省成都市新都区",
                     djlx:"私营股份有限公司",
                     djrq:"2020-09-22",
                     swjg:"XXXXX",
                     nsrzt:"正常",
                     xydj:"A",
                     sfsqyqsb:"否"
                    },
                    {
                    name: "新繁二号点",
                    jnss:123,
                    bzsf:345,
                    nsrsbh:5423123,
                    yydz:"四川省成都市新都区",
                    qyfr:"倪豆子",
                    zcdz:"四川省成都市新都区",
                    djlx:"私营股份有限公司",
                    djrq:"2020-09-21",
                    swjg:"XXXXXX",
                    nsrzt:"正常",
                    xydj:"A",
                    sfsqyqsb:"是"
                    },
        ],
                testName: {
                    '石板滩街道':"shibantan",
                    '斑竹园街道':"banzuyuan",
                    '大丰街道':"dafeng",
                    '桂湖街道':"guihu",
                    '军屯镇':"juntun",
                    '清流镇':"qingliu",
                    '三河街道':"sanhe",
                    '新都街道':"xindou",
                    '新繁街道':"xinfan",
                },
                testData:[
                    {name: "斑竹园街道", value: "99"},
                    {name: "大丰街道", value: "11"},
                    {name: "桂湖街道", value: "22"},
                    {name: "军屯镇", value: "33"},
                    {name: "清流镇", value: "44"},
                    {name: "三河街道", value: "55"},
                    {name: "石板滩街道", value: "66"},
                    {name: "新都街道", value: "77"},
                    {name: "新繁街道", value: "88"}],
                show: false,
                show1: false,//详情
                dtdivid:'mapdiv',
                chart: null,
                chart2: null,
                chart3: null,
                chart4: null,
                json:{
                    xindoudt:xindoudt,
                    xdwapiant:xdwapiant,
                    shibantan:shibantan,
                    banzuyuan:banzuyuan,
                    dafeng:dafeng,
                    guihu:guihu,
                    juntun:juntun,
                    qingliu:qingliu,
                    sanhe:sanhe,
                    xindou:xindou,
                    xinfan:xinfan,
                }
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
                let _this = this
                _this.chart = _this.$echarts.init(document.getElementById(_this.dtdivid))
                _this.$echarts.registerMap('inintMap', xdwapiant)
                _this.chart.on('click',function (params) {//点击事件
                    //console.log(params);
                    if( _this.testName.hasOwnProperty(params.name)){
                        //console.log("0000000000000000000000000");
                        //console.log(testName[params.name]);
                        _this.tcmap(_this.testName[params.name]);
                    }else {
                        console.log("点击事件出错，不包含点击的地图");
                    }
                })
                _this.chart.setOption({
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
                            },
                            emphasis:{//选中状态
                                show: false,
                            },
                        },
                        aspectScale:0.85,//长宽比
                        zoom:1,//放大比例
                    },
                    //地图
                    series: [{
                        type: 'map',
                        coordinateSystem: 'geo',
                        mapType: 'inintMap',
                        data: this.testData,
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
                        },
                    },
                    //点
                        {
                            type: 'effectScatter',
                            legendHoverLink: true,//联动高亮效果
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
                            legendHoverLink: true,//联动高亮效果
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
                                },{name: '新繁初号机', value: [104.00619506835936,30.873940237887624],
                                    tooltip:{formatter:'{b}'},
                                },
                                {name: '新繁二号点', value: [104.00919506835936,30.875940237887624],
                                    tooltip:{formatter:'{b}'},
                                },
                                {name: '新繁三号', value: [104.00119506835936,30.871940237887624],
                                    tooltip:{formatter:'{b}'},
                                },
                            ],
                        }
                    ]
                })
            },
            inintCharts1() {
                this.chart2 = this.$echarts.init(document.getElementById(this.dtdivid+'1'))
                this.$echarts.registerMap('showmap1', xindoudt)
                this.chart2.setOption({
                    series: [
                        {
                            type: 'map',
                            mapType: 'showmap1',
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
                this.$echarts.registerMap('showmap2', xindoudt)
                this.chart3.setOption({
                    series: [
                        {
                            type: 'map',
                            mapType: 'showmap2',
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
                this.$echarts.registerMap('showmap3', xindoudt)
                this.chart4.setOption({
                    series: [
                        {
                            type: 'map',
                            mapType: 'showmap3',
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
            tcmap(name) {
                this.show = true;
                this.chart4 = this.$echarts.init(document.getElementById(this.dtdivid+'4'))
                this.$echarts.registerMap('showmap4', this.json[name])
                let _this = this
                _this.chart4.on('click',function (params) {//点击事件
                    console.log(params);
                    _this.show1 = false
                    if ((params.componentType == "series") || (params.seriesType == "effectScatter")) {
                        console.log("1111");
                        console.log(params.name);
                        for (let i = 0; i <_this.companyDetails.length ; i++) {
                            if (_this.companyDetails[i].name == params.name){
                                console.log("名字相等进");
                                _this.companyData = _this.companyDetails[i]
                                _this.show1 = true
                            }
                        }
                    }
                })
                this.chart4.setOption({
                    visualMap: {//会与下面点的颜色冲突  可以看map里面的页面  实现不同数据 点颜色不同
                        show: false,
                        silent: true,//是否可以触发点击事件
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
                    },
                    tooltip:{
                        formatter:'{b}<br/>{c}万',//格式化鼠标聚焦时显示的内容
                        position: ['35%', '80%']//位置比例 距离左边 距离上部
                    },
                    geo: {
                        map: 'showmap4',  //必须以注册的地图名称一致
                        //center: [104.00619506835936,30.873940237887624],//中心点 就是页面显示以这个点为中心
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(255,255,255, 0.5)',//瓦片的边 半透明白色
                                borderWidth: 4//边粗
                            }
                        },
                        label: {
                            normal: {
                                textStyle: {//文本
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            },
                            emphasis:{//选中状态
                                show: false,
                            },
                        },
                        aspectScale:0.85,//长宽比
                        zoom:1,//放大比例
                    },
                    //图
                    series: [
                        {
                            type: 'map',
                            coordinateSystem: 'geo',
                            mapType: 'showmap4',
                            data: this.testData,
                            //center: [104.00619506835936,30.873940237887624],//中心点 就是页面显示以这个点为中心
                            zoom: 1,//放大比例
                            aspectScale: 0.85, // 长宽比
                            silent: true, //响应和触发鼠标事件
                            itemStyle: {//图形样式。
                                normal: {//常态
                                    borderColor: 'rgba(187,187,187, 0.5)',
                                    borderWidth: 4
                                },
                                emphasis:{//选中状态
                                },
                            },
                            label: {//地图文本
                                normal: {//常态
                                    show:true,
                                    textStyle: {
                                        ontSize: 16,
                                        fontWeight: 'bold',
                                        color: 'white'
                                    },
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    formatter: '{b}\n{c}万',
                                },
                                emphasis:{//选中状态
                                    color: 'white'
                                },
                            },
                        },
                        //点
                        {
                            type: 'effectScatter',
                            animationDelay: function (idx) {
                                return idx * 30;
                            },//初始动画效果
                            animationThreshold: 100,//大于这个数会关闭动画
                            legendHoverLink: true,//联动高亮效果
                            coordinateSystem: 'geo',//坐标系
                            //center: [104.00619506835936,30.873940237887624],//中心点 就是页面显示以这个点为中心
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
                            legendHoverLink: true,//联动高亮效果
                            symbolSize: 18,
                            /*function (val) {//根据数值大小控制点的大小
                               return val[2] / 1;
                           },*/
                            data: [//jjxzscData
                                {name: '新繁初号机', value: [104.00619506835936,30.873940237887624],
                                    tooltip:{formatter:'{b}'},
                                },
                                {name: '新繁二号点', value: [104.01019506835936,30.876040237887624],
                                    tooltip:{formatter:'{b}'},
                                },
                                {name: '新繁三号', value: [104.00119506835936,30.871940237887624],
                                    tooltip:{formatter:'{b}'},
                                },
                            ],
                        }
                    ]
                })
            },
            closediv(){
                this.show = false
                this.show1 = false
            },
            closediv1(){
                this.show1 = false
            },
        },
    }
</script>

<style scoped>
    /*中间div*/
    .mapDiv {
        width: 30vw;
        height: 80vh;
        position: relative;
        float: left;
    }

    /*瓦片图形*/
    .echart {
        width: 100vw;
        position: absolute;
        z-index: 120;
        height: 80vh;
    }

    /*背景1*/
    .echart1 {
        width: 100vw;
        position: absolute;
        z-index: 80;
        height: 80vh;
        padding-left: 0.3%;
        padding-top: 1.7%;
    }

    /*背景2*/
    .echart2 {
        width: 100vw;
        position: absolute;
        z-index: 60;
        height: 80vh;
        padding-left: 0.8%;
        padding-top: 3%;
    }

    /*背景3*/
    .echart3 {
        width: 100vw;
        position: absolute;
        z-index: 40;
        height: 80vh;
        padding-left: 1%;
        padding-top: 4%;
    }

    /*4弹出的瓦片图*/
    .echart4 {
        position: absolute;
        z-index: 160;
        height: 100vh;
        width: 102vw;
        left: -4%;
        background: rgba(0,0,0,0.6)!important;
    }

    /*表格外层div*/
    .companyDetails{
        margin-top: 52vh;
        margin-left: 11vw;
        z-index: 180;
        position: absolute;
        border:1px solid rgba(255,255,255,0.4);
        background: rgba(85,255,119,0.5);
    }

    /*表格*/
    .companytable{
        width: 20vw;
        height: 30vh;
        margin-left: 5%;
        color: #FFF;
    }
</style>
