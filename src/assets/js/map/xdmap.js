import xindoudt from './xindouditumap.json'//底图
import xdwapiant from './xindoumap.json'
import shibantan from './shibantan.json'//石板滩街道
import banzuyuan from './banzuyuan.json'//斑竹园街道
import dafeng from './dafeng.json'//大丰街道
import guihu from './guihu.json'//桂湖街道
import juntun from './juntun.json'//军屯镇
import qingliu from './qingliu.json'//清流镇
import sanhe from './sanhe.json'//三河街道
import xindou from './xindou.json'//新都街道
import xinfan from './xinfan.json'//新繁街道

export default {
    name: "xindoumap",
    components: {},
    data() {
        return {
            colordata:[
                '#f00',
                '#0FF'
            ],
            xzscdata:[],
            xdscData:[
                {name:"新繁街道",
                 value:[{name: '新繁初号', value: [104.00619506835936,30.873940237887624],
                    tooltip:{formatter:'{b}'},
                    lx:200,
                },
                {name: '新繁二号点', value: [104.01019506835936,30.876040237887624],
                    tooltip:{formatter:'{b}'},
                    lx:97,
                },
                {name: '新繁三号', value: [104.00119506835936,30.871940237887624],
                    tooltip:{formatter:'{b}'},
                    lx:88,
                }]
                },
                {name:"斑竹园街道",
                 value:[{name: '初号', value: [104.11567138671875, 30.85623693902637],
                     tooltip:{formatter:'{b}'},
                     lx:77,
                 },
                     {name: '二号点', value: [104.10567138671875, 30.85923693902637],
                         tooltip:{formatter:'{b}'},
                         lx:99,
                     },
                     {name: '三号公司', value: [104.12567138671875, 30.85123693902637],
                         tooltip:{formatter:'{b}'},
                         lx:135,
                     }]
                },
            ],
            companyData:{},
            companyDetails:[
                {
                    name: "新繁初号",
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
                {
                    name: "三号公司",
                    jnss:1233,
                    bzsf:3453,
                    nsrsbh:54231233,
                    yydz:"四川省成都市新都区",
                    qyfr:"带土",
                    zcdz:"四川省成都市新都区",
                    djlx:"私营股份有限公司",
                    djrq:"2020-09-21",
                    swjg:"XXXXXX",
                    nsrzt:"正常",
                    xydj:"A",
                    sfsqyqsb:"是"
                },
                {
                    name: "初号",
                    jnss:1233,
                    bzsf:3453,
                    nsrsbh:54231233,
                    yydz:"四川省成都市新都区",
                    qyfr:"鸣人",
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
            show1: false,
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
            _this.chart.on('click',function (params) {
                _this.xzscdata = [];
                if( _this.testName.hasOwnProperty(params.name)){
                    for (let i = 0; i <_this.xdscData.length ; i++) {
                        if (_this.xdscData[i].name == params.name){
                            _this.xzscdata = _this.xdscData[i].value
                        }
                    }
                    _this.tcmap(_this.testName[params.name]);
                }
            })
            _this.chart.setOption({
                visualMap: {
                    show: false,
                    type: 'piecewise',
                    min: 0,
                    max: 100,
                    calculable: false,
                    realtime: false,
                    inverse:false,
                    splitNumber: 4,
                    right: 20,
                    bottom: 50,
                    inRange: {
                        color: ['rgba(0,153,255, 0.5)', 'rgba(37,185,155, 0.5)', 'rgba(238,194,17, 0.5)', 'rgba(255,0,0, 0.5)']
                    },
                },
                tooltip:{
                    formatter:'{b}<br/>{c}万',
                },
                geo: {
                    map: 'inintMap',
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
                        emphasis:{
                            show: false,
                        },
                    },
                    aspectScale:0.85,
                    zoom:1,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    },
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
                    aspectScale: 0.85,
                    silent: true,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(255,255,255, 0.5)',
                            borderWidth: 4
                        },
                        emphasis:{
                            show: false
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white',
                            formatter: '{b}\n{c}万',
                        },
                        emphasis:{
                            show:false
                        },
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    },
                },
                    //点
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        center: [104.12567138671875, 30.84623693902637],
                        zoom: 1,
                        aspectScale: 0.85,
                        symbol: 'circle',
                        legendHoverLink:true,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                       rippleEffect: {
                            scale: 6,
                            brushType: 'stroke',
                        },
                        symbolSize: 8,
                        data: [//xindouscData  全部的点
                            {name: '初号', value: [104.11567138671875, 30.85623693902637],
                                tooltip:{formatter:'{b}'},
                            },
                            {name: '二号点', value: [104.10567138671875, 30.85923693902637],
                                tooltip:{formatter:'{b}'},
                            },
                            {name: '三号公司', value: [104.12567138671875, 30.85123693902637],
                                tooltip:{formatter:'{b}'},
                            },{name: '新繁初号', value: [104.00619506835936,30.873940237887624],
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
                        aspectScale: 0.85,
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
                        aspectScale: 0.85,
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
                        aspectScale: 0.85,
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
            _this.chart4.on('click',function (params) {
                _this.show1 = false
                if ((params.componentType == "series") || (params.seriesType == "effectScatter")) {
                    for (let i = 0; i <_this.companyDetails.length ; i++) {
                        if (_this.companyDetails[i].name == params.name){
                            _this.companyData = _this.companyDetails[i]
                            _this.show1 = true
                            for (let j = 0; j <_this.xzscdata.length ; j++) {
                                if(params.name == _this.xzscdata[j].name) {
                                    if (_this.xzscdata[j].lx > 100) {
                                        document.getElementById("companyDetails").style.backgroundColor = "rgba(98,225,64, 0.5)"
                                    } else {
                                        document.getElementById("companyDetails").style.backgroundColor = "rgba(253,135,103, 0.5)"
                                    }
                                }
                            }
                        }
                    }
                }
            })
            this.chart4.setOption({
                tooltip:{
                    formatter:'{b}<br/>{c}万'
                },
                geo: {
                    map: 'showmap4',
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(255,255,255, 0.5)',
                            borderWidth: 4
                        },
                        emphasis:{
                            show: false,
                        },
                    },
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        emphasis:{
                            show: false,
                        },
                    },
                    aspectScale:0.85,
                    zoom:0.7,
                },
                series: [
                    //图
                    {
                        type: 'map',
                        coordinateSystem: 'geo',
                        mapType: 'showmap4',
                        data: this.testData,
                        zoom: 0.7,
                        aspectScale: 0.85,
                        silent: true,
                        itemStyle: {
                            normal: {
                                areaColor:'#3a94fb',
                                borderColor: 'rgba(187,187,187, 0.5)',
                                borderWidth: 4
                            },
                            emphasis:{
                                show:false
                            },
                        },
                        label: {
                            normal: {
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
                            emphasis:{
                                show:false,
                            },
                        },

                    },
                    //点
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zoom: 1,
                        data: _this.xzscdata,
                        aspectScale: 0.85,
                        symbol: 'circle',
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
                                color: function(e){
                                    for (let i = 0; i <_this.xzscdata.length ; i++) {
                                        if(e.name == _this.xzscdata[i].name){
                                            if (_this.xzscdata[i].lx > 100){
                                                return '#62e140';
                                            }else{
                                                return '#fd8767';
                                            }
                                        }
                                    }
                                },
                            },
                            emphasis: {
                                show:false
                            }
                        },
                        textFixed: {
                            Alaska: [20, -20]
                        },
                        rippleEffect: {
                            scale: 8,
                            brushType: 'stroke',
                        },
                        symbolSize: 9,
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