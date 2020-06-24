<template>
    <div id="demo" :style="{height:insertHeight}">


        <div class="rContainer">
            <div ref="demoMap" id="demoMap"></div>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    import './js/world.js'  //'echarts/map/js/world.js'
    //npm install echarts --save  第一步 上面第二步引入

    export default {
        name: 'demo',
        data() {
            return {
                insertHeight: '',
                geoCoordMap: {
                    '中国': [130.0823, 34.2568],
                    '沙特阿拉伯': [56.640625,24.4703125],
                    '斐济': [209.414413,-23.078193],
                    '新西兰': [210.885971,-48.400557],
                    '澳大利亚': [163.959158,-30.376706],
                    '印度利西亚': [138.959158,-4.376706],
                    '巴布亚新几内亚': [173.959158,-10.876706],
                    '马来西亚': [136.959158,2.376706],
                    '菲律宾': [148.959158,11.376706],
                    '日本': [165.959158,41.376706],
                    '韩国': [152.959158,40.376706],
                    '朝鲜': [152.959158,45.376706],
                    '越南': [129.999158,11.376706],
                    '柬埔寨': [125.999158,12.376706],
                    '泰国': [120.999158,15.376706],
                    '老挝': [122.999158,21.376706],
                    '缅甸': [114.999158,23.376706],
                    '孟加拉国': [108.999158,26.376706],
                    '不丹': [108.999158,30.876706],
                    '尼泊尔': [100.999158,30.876706],
                    '印度': [93.999158,23.876706],
                    '巴基斯坦': [80.999158,31.876706],
                    '克什米尔-巴': [88.999158,39.876706],
                    '克什米尔-印': [91.999158,37.376706],
                    '塔吉克斯坦': [83.999158,43.376706],
                    '阿富汗': [79.199158,39.676706],
                    '土库曼斯坦': [71.199158,44.676706],
                    '乌兹别克斯坦': [74.199158,48.276706],
                    '吉尔吉斯斯坦': [88.899158,46.776706],
                    '哈萨克斯坦': [84.899158,54.776706],
                    '伊朗': [64.899158,34.776706],
                    '阿塞拜疆': [56.899158,45.776706],
                    '亚美尼亚': [54.899158,45.776706],
                    '格鲁吉亚': [52.199158,47.776706],
                    '土耳其': [46.199158,43.776706],
                    '叙利亚': [46.199158,38.776706],
                    '伊拉克': [54.199158,35.776706],
                    '黎巴嫩': [42.199158,36.776706],
                    '巴勒斯坦': [42.199158,36.176706],
                    '约旦': [43.129158,35.276706],
                    '以色列': [42.199158,35.776706],
                    '沙特阿拉伯': [53.199158,27.776706],
                    '也门': [56.199158,16.276706],
                    '阿曼': [68.199158,22.276706],
                    '埃及': [37.199158,29.276706],
                    '苏丹': [37.199158,18.276706],
                    '厄立特里亚': [45.199158,16.276706],
                    '突尼斯': [12.199158,39.276706],
                    '利比亚': [22.199158,29.276706],
                    '阿尔及利亚': [4.199158,27.276706],
                    '摩洛哥': [-6.199158,37.276706],
                    '西撒哈拉': [-16.199158,27.276706],
                    '毛里塔尼亚': [-12.199158,21.276706],
                    '马里': [-3.199158,20.276706],
                    '尼日尔': [11.199158,19.276706],
                    '乍得': [23.199158,16.276706],
                    '苏丹': [36.199158,16.276706],
                    '埃塞俄比亚': [48.199158,9.276706],
                    '索马里': [56.199158,2.276706],
                    '肯尼亚': [45.199158,-3.276706],
                    '乌干达': [39.199158,-1.276706],
                    '南苏丹': [36.199158,5.276706],
                    '中非': [26.199158,5.276706],
                    '喀麦隆': [15.199158,3.276706],
                    '尼日利亚': [8.199158,7.276706],
                    '赤道几内亚': [13.199158,-1.276706],
                    '加蓬': [13.199158,-3.276706],
                    '刚果': [19.199158,-3.276706],
                    '刚果民主共和国': [27.199158,-5.276706],
                    '卢旺达': [36.199158,-5.276706],
                    '布隆迪': [36.199158,-7.276706],
                    '坦桑尼亚': [41.199158,-9.276706],
                    '莫桑比克': [46.199158,-19.276706],
                    '马拉维': [41.199158,-19.276706],
                    '赞比亚': [32.199158,-20.876706],
                    '安哥拉': [21.199158,-17.276706],
                    '纳米比亚': [19.199158,-27.276706],
                    '博茨瓦纳': [30.199158,-29.276706],
                    '津巴布韦': [36.199158,-25.276706],
                    '马达加斯加': [58.199158,-25.276706],
                    '南非': [28.199158,-38.276706],
                    '莱索托': [33.199158,-38.276706],
                    '斯威士兰': [38.199158,-35.276706],
                    '布基纳法索': [-0.999158,12.276706],
                    '贝宁': [3.199158,9.276706],
                    '多哥': [0.999158,8.276706],
                    '加纳': [-1.199158,7.276706],
                    '科特迪瓦': [-6.199158,7.276706],
                    '利比里亚': [-11.199158,4.276706],
                    '塞拉利昂': [-14.199158,7.276706],
                    '几内亚': [-13.199158,10.276706],
                    '几内亚比绍': [-17.199158,11.276706],
                    '塞内加尔': [-17.199158,14.276706],
                    '巴西': [-58.895168, -20.2312],
                    '苏里南': [-66.895168, 3.2312],
                    '圭亚那': [-70.675168, 4.2312],
                    '委内瑞拉': [-77.895168, 8.2312],
                    '哥伦比亚': [-88.895168, 2.2312],
                    '厄瓜多尔': [-93.895168, -3.7312],
                    '秘鲁': [-90.895168, -10.2312],
                    '玻利维亚': [-77.895168, -24.2312],
                    '阿根廷': [-77.895168, -48.2312],
                    '智利': [-84.895168, -40.2312],
                    '巴拉圭': [-69.895168, -30.2312],
                    '乌拉圭': [-65.895168, -43.2312],
                    '美国': [-120.895168, 50.2312],
                    '巴拿马': [-94.895168, 7.2312],
                    '哥斯达黎加': [-99.895168, 9.2312],
                    '尼加拉瓜': [-100.995168, 12.6312],
                    '萨尔瓦多': [-105.895168, 13.7312],
                    '洪都拉斯': [-102.895168, 15.2312],
                    '危地马拉': [-107.895168, 16.2312],
                    '伯利兹': [-105.895168, 17.6312],
                    '墨西哥': [-124.895168, 28.2312],
                    '古巴': [-95.895168, 23.2312],
                    '巴哈马': [-93.895168, 27.2312],
                    '牙买加': [-93.195168, 19.2312],
                    '海地': [-86.895168, 21.2312],
                    '多米尼加共和国': [-83.895168, 19.2312],
                    '波多黎各': [-80.195168, 18.6312],
                    '加拿大': [-130.895168, 70.2312],
                    '格陵兰': [-50.895168, 80.2312],
                    '冰岛': [-20.895168, 74.9312],
                    '挪威': [10.895168, 71.2312],
                    '法国': [4.895168, 52.370216],
                    '瑞典': [21.895168, 74.2312],
                    '芬兰': [32.895168, 76.2312],
                    '爱沙尼亚': [30.895168, 68.2312],
                    '拉脱维亚': [30.895168, 65.8312],
                    '立陶宛': [28.895168, 63.8312],
                    '白俄罗斯': [32.895168, 61.2312],
                    '乌克兰': [36.895168, 56.2312],
                    '摩尔多瓦': [33.895168, 53.8312],
                    '罗马尼亚': [30.895168, 52.2312],
                    '保加利亚': [30.595168, 48.8312],
                    '希腊': [27.895168, 45.2312],
                    '马其顿': [25.895168, 46.8312],
                    '阿尔巴尼亚': [24.395168, 46.6312],
                    '塞尔维亚': [25.695168, 49.8312],
                    '黑山': [23.895168, 48.2312],
                    '波黑': [21.895168, 49.7312],
                    '波兰': [22.895168, 60.2312],
                    '德国': [11.895168, 60.8312],
                    '捷克': [17.895168, 57.2312],
                    '斯洛伐克': [22.895168, 56.2312],
                    '匈牙利': [23.895168, 54.2312],
                    '克罗地亚': [19.895168, 52.2312],
                    '斯洛文尼亚': [18.895168, 52.8312],
                    '奥地利': [17.895168, 54.2312],
                    '瑞士': [11.895168, 53.2312],
                    '意大利': [14.895168, 48.2312],
                    '荷兰': [6.895168, 60.2312],
                    '比利时': [5.295168, 58.2312],
                    '英国': [-2.895168, 64.2312],
                    '爱尔兰': [-8.895168, 60.2312],
                    '西班牙': [-6.895168, 48.2312],
                    '葡萄牙': [-8.895168, 46.2312],
                    '俄罗斯': [110.0823, 66.2568],
                    '蒙古': [118.0823, 54.2568],
                },
                data: [{ //动态只需要这个
                    id: 1,
                    name: '挪威'
                }, {
                    id: 2,
                    name: '美国'
                }, {
                    id: 3,
                    name: '加拿大'
                }, {
                    id: 4,
                    name: '巴西'
                }, {
                    id: 5,
                    name: '俄罗斯'
                }, {
                    id: 6,
                    name: '巴布亚新几内亚'
                }
                ]
            }
        },
        methods: {
            //  全球地图生成方法
            map() {
                /**
                 * 显示点的坐标
                 */
                let geoCoordMap = this.geoCoordMap
                /**
                 * 所在点对应数据
                 * 上面数据添加修改后务必这里添加修改，value可不用
                 */
                let data = this.data

                //  生成出线方法
                function formtGCData(geoData, data, srcNam, dest) {
                    let tGeoDt = []
                    if (dest) {
                        for (let i = 0; i < data.length; i++) {
                            if (srcNam !== data[i].name) {
                                tGeoDt.push({
                                    coords: [geoData[srcNam], geoData[data[i].name]]
                                })
                            }
                        }
                    } else {
                        for (let j = 0; j < data.length; j++) {
                            if (srcNam !== data[j].name) {
                                tGeoDt.push({
                                    coords: [geoData[data[j].name], geoData[srcNam]]
                                })
                            }
                        }
                    }
                    return tGeoDt
                }

                //  生成进线方法
                function formtVData(geoData, data, srcNam) {
                    let tGeoDt = []
                    for (let i = 0; i < data.length; i++) {
                        let tNam = data[i].name
                        if (srcNam !== tNam) {
                            tGeoDt.push({
                                name: tNam,
                                value: geoData[tNam],
                                symbolSize: 3//外国涟漪大小
                            })
                        }
                    }
                    tGeoDt.push({
                        name: srcNam,
                        value: geoData[srcNam],
                        symbolSize: 3,//中国涟漪大小
                        itemStyle: {
                            normal: {
                                color: 'red',
                                borderColor: '#000'
                            }
                        }
                    })
                    return tGeoDt
                }

                let planePath = 'arrow'
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('demoMap'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '成都市青羊区走出去企业全球投资分布',
                        left: '50%',
                        top: '30px',
                        textStyle: {
                            color: '#fff',
                            opacity: 0.7
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(100,149,237,1)',
                                borderWidth: 0.5,
                                areaStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    dataRange: {
                        show: false,  //  调色板显示与否
                        min: 0,
                        max: 1000000,
                        text: ['High', 'Low'],
                        realtime: true,
                        calculable: true,//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
                        color: ['orangered', 'yellow', 'lightskyblue']            //  生成地图颜色以及发散点颜色

                    },
                    tooltip: {// 鼠标移到图里面的浮动提示框
                        trigger: 'item'//出发方式
                        /*show:true, //鼠标移入是否触发数据
                        formatter:'{b}-销售数量：{c}'*/
                    },
                    geo: {
                        map: 'world',// 表示世界地图
                        label: {
                            emphasis: {
                                show: false
                            },
                            /*normal: {
                                show: true, // 是否显示对应地名
                                textStyle: {
                                    color: 'rgba(0,0,0,0.4)'
                             }*/
                        },
                        roam: false,
                        silent: true,
                        itemStyle: {
                            normal: {
                                areaColor: 'transparent',//底层色  目前透明
                                borderColor: 'transparent'//底层色边框  目前透明
                            },
                            emphasis: {
                                areaColor: 'transparent',
                                /*shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'*/
                            }
                        }
                    },
                    series: [{
                        /*type: 'scatter',
                        coordinateSystem: 'geo' // 对应上方配置
                        },
                        {*/
                        /*name:'地图',*/
                        type: 'map',//地图种类
                        mapType: 'world',
                        /*geoIndex: 0,*/
                        /*label: {  //图形上的文本标签，可用于说明图形的一些数据信息
                            show:true,
                        },*/
                        zoom: 1.2,//放大比例
                        name:'地名和企业数量',// 浮动框的标题
                        mapLocation: {
                            y: 100
                        },
                        itemStyle: {//地图区域的多边形 图形样式。
                            /*emphasis:{ //高亮状态下的样试
                                label:{
                                    show:true,
                                }
                            },*/
                            emphasis: {label: {show: true}}
                        },
                        // 对应生成地图颜色板块数据
                        data: [//热力数据
                            {name: '阿富汗', value: 28397.812},
                            {name: '安哥拉', value: 19549.124},
                            {name: '阿尔巴尼亚', value: 3150.143},
                            {name: '阿联酋', value: 8441.537},
                            {name: '阿根廷', value: 40374.224},
                            {name: '亚美尼亚', value: 2963.496},
                            {name: '法属南部领地', value: 268.065},
                            {name: '澳大利亚', value: 22404.488},
                            {name: '奥地利', value: 8401.924},
                            {name: '阿塞拜疆', value: 9094.718},
                            {name: '布隆迪', value: 9232.753},
                            {name: '比利时', value: 10941.288},
                            {name: '贝宁', value: 9509.798},
                            {name: '布基纳法索', value: 15540.284},
                            {name: '孟加拉国', value: 151125.475},
                            {name: '保加利亚', value: 7389.175},
                            {name: '巴哈马', value: 66402.316},
                            {name: '委内瑞拉', value: 6402.316},
                            {name: '波黑', value: 3845.929},
                            {name: '白俄罗斯', value: 9491.07},
                            {name: '伯利兹城', value: 308.595},
                            {name: '百慕大群岛', value: 64.951},
                            {name: '玻利维亚', value: 716.939},
                            {name: '巴西', value: 195210.154},
                            {name: '萨摩亚', value: 195210.154},
                            {name: '文莱', value: 27.223},
                            {name: '不丹', value: 716.939},
                            {name: '博茨瓦纳', value: 1969.341},
                            {name: '中非', value: 4349.921},
                            {name: '加拿大', value: 34126.24},
                            {name: '瑞士', value: 7830.534},
                            {name: '智利', value: 17150.76},
                            {name: '中国', value: 1359821.465},
                            {name: '象牙海岸', value: 60508.978},
                            {name: '喀麦隆', value: 20624.343},
                            {name: '刚果民主共和国', value: 62191.161},
                            {name: '刚果', value: 3573.024},
                            {name: '哥伦比亚', value: 46444.798},
                            {name: '哥斯达黎加', value: 4669.685},
                            {name: '古巴', value: 11281.768},
                            {name: '北塞浦路斯', value: 1.468},
                            {name: '塞浦路斯', value: 1103.685},
                            {name: '捷克', value: 10553.701},
                            {name: '德国', value: 83017.404},
                            {name: '吉布提', value: 834.036},
                            {name: '丹麦', value: 5550.959},
                            {name: '多米尼加共和国', value: 5716.797},
                            {name: '多米尼加岛', value: 916.797},
                            {name: '阿尔及利亚', value: 37062.82},
                            {name: '厄瓜多尔', value: 15001.072},
                            {name: '埃及', value: 78075.705},
                            {name: '厄立特里亚', value: 5741.159},
                            {name: '西班牙', value: 46182.038},
                            {name: '爱沙尼亚', value: 1298.533},
                            {name: '埃塞俄比亚', value: 87095.281},
                            {name: '芬兰', value: 5367.693},
                            {name: '斐济', value: 860.559},
                            {name: '福克兰群岛', value: 49.581},
                            {name: '法国', value: 63230.866},
                            {name: '加蓬', value: 1556.222},
                            {name: '英国', value: 62066.35},
                            {name: '格鲁吉亚', value: 4388.674},
                            {name: '加纳', value: 24262.901},
                            {name: '几内亚', value: 10876.033},
                            {name: '冈比亚', value: 1680.64},
                            {name: '奥兰群岛', value: 180.64},
                            {name: '安道尔', value: 190.64},
                            {name: '几内亚比绍', value: 10876.033},
                            {name: '赤道几内亚', value: 696.167},
                            {name: '希腊', value: 11109.999},
                            {name: '格陵兰', value: 56.546},
                            {name: '关岛', value: 956.546},
                            {name: '格林纳达', value: 1156.546},
                            {name: '危地马拉', value: 14341.576},
                            {name: '法属圭亚那', value: 231.169},
                            {name: '圭亚那', value: 786.126},
                            {name: '洪都拉斯', value: 7621.204},
                            {name: '克罗地亚', value: 4338.027},
                            {name: '海地', value: 9896.4},
                            {name: '匈牙利', value: 10014.633},
                            {name: '印度尼西亚', value: 240676.485},
                            {name: '印度', value: 12054.648},
                            {name: '爱尔兰', value: 4467.561},
                            {name: '伊朗', value: 240676.485},
                            {name: '伊拉克', value: 30962.38},
                            {name: '冰岛', value: 318.042},
                            {name: '以色列', value: 7420.368},
                            {name: '意大利', value: 60508.978},
                            {name: '牙买加', value: 2741.485},
                            {name: '约旦', value: 6454.554},
                            {name: '日本', value: 127352.833},
                            {name: '哈萨克斯坦', value: 15921.127},
                            {name: '泽西岛', value: 15921.127},
                            {name: '克什米尔-巴', value: 15921.127},
                            {name: '克什米尔-印', value: 15921.127},
                            {name: '肯尼亚', value: 40909.194},
                            {name: '吉尔吉斯斯坦', value: 5334.223},
                            {name: '柬埔寨', value: 14364.931},
                            {name: '韩国', value: 51452.352},
                            {name: '科索沃', value: 97.743},
                            {name: '科威特', value: 2991.58},
                            {name: '基里巴斯', value: 2991.58},
                            {name: '老挝', value: 6395.713},
                            {name: '黎巴嫩', value: 4341.092},
                            {name: '利比里亚', value: 3957.99},
                            {name: '利比亚', value: 6040.612},
                            {name: '列支敦士登', value: 5040.612},
                            {name: '斯里兰卡', value: 20758.779},
                            {name: '圣卢西亚', value: 20758.779},
                            {name: '莱索托', value: 2008.921},
                            {name: '立陶宛', value: 3068.457},
                            {name: '卢森堡', value: 507.885},
                            {name: '拉脱维亚', value: 2090.519},
                            {name: '摩洛哥', value: 31642.36},
                            {name: '摩尔多瓦', value: 103.619},
                            {name: '马达加斯加', value: 21079.532},
                            {name: '墨西哥', value: 117886.404},
                            {name: '马其顿', value: 507.885},
                            {name: '伯利兹', value: 507.885},
                            {name: '马里', value: 13985.961},
                            {name: '缅甸', value: 51931.231},
                            {name: '黑山', value: 620.078},
                            {name: '蒙古', value: 2712.738},
                            {name: '马耳他', value: 2712.738},
                            {name: '莫桑比克', value: 23967.265},
                            {name: '北马里亚纳群岛', value: 23967.265},
                            {name: '毛里塔尼亚', value: 3609.42},
                            {name: '蒙特塞拉特', value: 3609.42},
                            {name: '毛里求斯', value: 3609.42},
                            {name: '马拉维', value: 15013.694},
                            {name: '马来西亚', value: 28275.835},
                            {name: '纳米比亚', value: 2178.967},
                            {name: '新喀里多尼亚', value: 246.379},
                            {name: '尼日尔', value: 15893.746},
                            {name: '尼日利亚', value: 159707.78},
                            {name: '尼加拉瓜', value: 5822.209},
                            {name: '荷兰', value: 16615.243},
                            {name: '挪威', value: 4891.251},
                            {name: '尼泊尔', value: 26846.016},
                            {name: '新西兰', value: 4368.136},
                            {name: '阿曼', value: 2802.768},
                            {name: '巴基斯坦', value: 173149.306},
                            {name: '巴拿马', value: 3678.128},
                            {name: '秘鲁', value: 29262.83},
                            {name: '纽埃', value: 29262.83},
                            {name: '菲律宾', value: 93444.322},
                            {name: '巴布亚新几内亚', value: 6858.945},
                            {name: '波兰', value: 38198.754},
                            {name: '帕劳', value: 38198.754},
                            {name: '波多黎各', value: 3709.671},
                            {name: '朝鲜', value: 1.468},
                            {name: '葡萄牙', value: 10589.792},
                            {name: '巴拉圭', value: 6459.721},
                            {name: '卡塔尔', value: 1749.713},
                            {name: '罗马尼亚', value: 21861.476},
                            {name: '俄罗斯', value: 21861.476},
                            {name: '卢旺达', value: 10836.732},
                            {name: '西撒哈拉', value: 514.648},
                            {name: '沙特阿拉伯', value: 27258.387},
                            {name: '苏丹', value: 35652.002},
                            {name: '南苏丹', value: 9940.929},
                            {name: '塞内加尔', value: 12950.564},
                            {name: '所罗门群岛', value: 526.447},
                            {name: '塞拉利昂', value: 5751.976},
                            {name: '萨尔瓦多', value: 6218.195},
                            {name: '索马里兰', value: 9636.173},
                            {name: '索马里', value: 9636.173},
                            {name: '塞尔维亚', value: 3573.024},
                            {name: '苏里南', value: 524.96},
                            {name: '斯洛伐克', value: 5433.437},
                            {name: '圣赫勒拿', value: 5433.437},
                            {name: '斯洛文尼亚', value: 2054.232},
                            {name: '圣多美和普林西比', value: 2054.232},
                            {name: '圣皮埃尔和密克隆群岛', value: 2054.232},
                            {name: '南乔治亚岛和南桑威奇群岛', value: 2054.232},
                            {name: '瑞典', value: 9382.297},
                            {name: '斯威士兰', value: 1193.148},
                            {name: '叙利亚', value: 7830.534},
                            {name: '乍得', value: 11720.781},
                            {name: '多哥', value: 6306.014},
                            {name: '泰国', value: 66402.316},
                            {name: '塔吉克斯坦', value: 7627.326},
                            {name: '土库曼斯坦', value: 5041.995},
                            {name: '东帝汶', value: 10016.797},
                            {name: '特里尼达和多巴哥', value: 1328.095},
                            {name: '塞舌尔', value: 1328.095},
                            {name: '突尼斯', value: 10631.83},
                            {name: '土耳其', value: 72137.546},
                            {name: '坦桑尼亚', value: 44973.33},
                            {name: '乌干达', value: 33987.213},
                            {name: '乌克兰', value: 46050.22},
                            {name: '乌拉圭', value: 3371.982},
                            {name: '美国', value: 312247.116},
                            {name: '乌兹别克斯坦', value: 27769.27},
                            {name: '委内瑞拉', value: 236.299},
                            {name: '越南', value: 89047.397},
                            {name: '瓦努阿图', value: 236.299},
                            {name: '西岸', value: 13.565},
                            {name: '也门', value: 22763.008},
                            {name: '南非', value: 51452.352},
                            {name: '赞比亚', value: 13216.985},
                            {name: '南冰洋陆地', value: 16.985},
                            {name: '科摩罗', value: 416.985},
                            {name: '巴林岛', value: 76.985},
                            {name: '巴勒斯坦', value: 76.985},
                            {name: '巴巴多斯', value: 776.985},
                            {name: '科特迪瓦', value: 576.985},
                            {name: '佛得角', value: 376.985},
                            {name: '库拉索岛', value: 276.985},
                            {name: '‪赫德岛和麦克唐纳群岛', value: 876.985},
                            {name: '开曼群岛', value: 176.985},
                            {name: '法罗群岛', value: 96.985},
                            {name: '英国属地曼岛', value: 998.985},
                            {name: '法属波利尼西亚', value: 998.985},
                            {name: '圣文森特和格林纳丁斯', value: 996.985},
                            {name: '汤加', value: 976.985},
                            {name: '密克罗尼西亚', value: 96.985},
                            {name: '玻利维亚', value: 956.985},
                            {name: '安提瓜岛和巴布', value: 11.985},
                            {name: '特克斯和凯科斯群岛', value: 111.985},
                            {name: '美属萨摩亚', value: 216.985},
                            {name: '津巴布韦', value: 13076.978},
                            {name: '美属维尔京群岛', value: 13076.978}
                        ], nameMap: {//对应的中文名
                            'Isle of Man': '英国属地曼岛',
                            'Kashmir': '克什米尔-巴',
                            'Kashmirb': '克什米尔-印',
                            'Bahrain': '巴林岛',
                            'Fr. S. Antarctic Lands': '南冰洋陆地',
                            'Antigua and Barb.': '安提瓜岛和巴布',
                            'American Samoa': '美属萨摩亚',
                            'Cape Verde': '佛得角',
                            'Andorra': '安道尔',
                            'Barbados': '巴巴多斯',
                            'Cayman Is.': '开曼群岛',
                            'Comoros': '科摩罗',
                            'Curaçao': '库拉索岛',
                            'Dominica': '多米尼加岛',
                            'Dominican Rep.': '多米尼加共和国',
                            'Heard I. and McDonald Is.': '‪赫德岛和麦克唐纳群岛',
                            'Falkland Is.': '福克兰群岛',
                            'Faeroe Is.': '法罗群岛',
                            'Micronesia': '密克罗尼西亚',
                            'Fr. Polynesia': '法属波利尼西亚',
                            'Singapore':'新加坡',
                            'Palestine':'巴勒斯坦',
                            'Bahamas':'巴哈马',
                            'Timor-Leste':'东帝汶',
                            'Afghanistan':'阿富汗',
                            'Guinea-Bissau':'几内亚比绍',
                            "Côte d'Ivoire":'科特迪瓦',
                            'Siachen Glacier':'锡亚琴冰川',
                            "Br. Indian Ocean Ter.":'英属印度洋领土',
                            'Angola':'安哥拉',
                            'Albania':'阿尔巴尼亚',
                            'United Arab Emirates':'阿联酋',
                            'Argentina':'阿根廷',
                            'Armenia':'亚美尼亚',
                            'French Southern and Antarctic Lands':'法属南部领地',
                            'Australia':'澳大利亚',
                            'Austria':'奥地利',
                            'Azerbaijan':'阿塞拜疆',
                            'Burundi':'布隆迪',
                            'Belgium':'比利时',
                            'Benin':'贝宁',
                            'Burkina Faso':'布基纳法索',
                            'Bangladesh':'孟加拉国',
                            'Bulgaria':'保加利亚',
                            'Bosnia and Herz.':'波黑',
                            'Belarus':'白俄罗斯',
                            'Belize':'伯利兹',
                            'Bermuda':'百慕大',
                            'Bolivia':'玻利维亚',
                            'Brazil':'巴西',
                            'Brunei':'文莱',
                            'Bhutan':'不丹',
                            'Botswana':'博茨瓦纳',
                            'Central African Rep.':'中非',
                            'Canada':'加拿大',
                            'Switzerland':'瑞士',
                            'Chile':'智利',
                            'China':'中国',
                            'Ivory Coast':'象牙海岸',
                            'Cameroon':'喀麦隆',
                            'Dem. Rep. Congo':'刚果民主共和国',
                            'Congo':'刚果',
                            'Colombia':'哥伦比亚',
                            'Costa Rica':'哥斯达黎加',
                            'Cuba':'古巴',
                            'N. Cyprus':'北塞浦路斯',
                            'Cyprus':'塞浦路斯',
                            'Czech Rep.':'捷克',
                            'Germany':'德国',
                            'Djibouti':'吉布提',
                            'Denmark':'丹麦',
                            'Algeria':'阿尔及利亚',
                            'Ecuador':'厄瓜多尔',
                            'Egypt':'埃及',
                            'Eritrea':'厄立特里亚',
                            'Spain':'西班牙',
                            'Estonia':'爱沙尼亚',
                            'Ethiopia':'埃塞俄比亚',
                            'Finland':'芬兰',
                            'Fiji':'斐济',
                            'France':'法国',
                            'Gabon':'加蓬',
                            'United Kingdom':'英国',
                            'Georgia':'格鲁吉亚',
                            'Ghana':'加纳',
                            'Guinea':'几内亚',
                            'Gambia':'冈比亚',
                            'Guinea-Bissau':'几内亚比绍',
                            'Eq. Guinea':'赤道几内亚',
                            'Greece':'希腊',
                            'Greenland':'格陵兰',
                            'Guatemala':'危地马拉',
                            'French Guiana':'法属圭亚那',
                            'Guyana':'圭亚那',
                            'Honduras':'洪都拉斯',
                            'Croatia':'克罗地亚',
                            'Haiti':'海地',
                            'Hungary':'匈牙利',
                            'Indonesia':'印度尼西亚',
                            'India':'印度',
                            'Ireland':'爱尔兰',
                            'Iran':'伊朗',
                            'Iraq':'伊拉克',
                            'Iceland':'冰岛',
                            'Israel':'以色列',
                            'Italy':'意大利',
                            'Jamaica':'牙买加',
                            'Jordan':'约旦',
                            'Japan':'日本',
                            'Jersey':'泽西岛',
                            'Kazakhstan':'哈萨克斯坦',
                            'Kenya':'肯尼亚',
                            'Kyrgyzstan':'吉尔吉斯斯坦',
                            'Cambodia':'柬埔寨',
                            'Korea':'韩国',
                            'Kosovo':'科索沃',
                            'Kuwait':'科威特',
                            'Kiribati':'基里巴斯',
                            'Lao PDR':'老挝',
                            'Lebanon':'黎巴嫩',
                            'Liberia':'利比里亚',
                            'Libya':'利比亚',
                            'Sri Lanka':'斯里兰卡',
                            'Saint Lucia':'圣卢西亚',
                            'Lesotho':'莱索托',
                            'Lithuania':'立陶宛',
                            'Luxembourg':'卢森堡',
                            'Latvia':'拉脱维亚',
                            'Morocco':'摩洛哥',
                            'Moldova':'摩尔多瓦',
                            'Madagascar':'马达加斯加',
                            'Mexico':'墨西哥',
                            'Macedonia':'马其顿',
                            'Mali':'马里',
                            'Myanmar':'缅甸',
                            'Montenegro':'黑山',
                            'Mongolia':'蒙古',
                            'Malta':'马耳他',
                            'Mozambique':'莫桑比克',
                            'N. Mariana Is.':'北马里亚纳群岛',
                            'Mauritania':'毛里塔尼亚',
                            'Montserrat':'蒙特塞拉特',
                            'Mauritius':'毛里求斯',
                            'Malawi':'马拉维',
                            'Malaysia':'马来西亚',
                            'Namibia':'纳米比亚',
                            'New Caledonia':'新喀里多尼亚',
                            'Niger':'尼日尔',
                            'Nigeria':'尼日利亚',
                            'Nicaragua':'尼加拉瓜',
                            'Netherlands':'荷兰',
                            'Norway':'挪威',
                            'Nepal':'尼泊尔',
                            'New Zealand':'新西兰',
                            'Oman':'阿曼',
                            'Pakistan':'巴基斯坦',
                            'Panama':'巴拿马',
                            'Peru':'秘鲁',
                            'Niue':'纽埃',
                            'Philippines':'菲律宾',
                            'Papua New Guinea':'巴布亚新几内亚',
                            'Poland':'波兰',
                            'Palau':'帕劳',
                            'Puerto Rico':'波多黎各',
                            'Dem. Rep. Korea':'朝鲜',
                            'Portugal':'葡萄牙',
                            'Paraguay':'巴拉圭',
                            'Qatar':'卡塔尔',
                            'Romania':'罗马尼亚',
                            'Russia':'俄罗斯',
                            'Rwanda':'卢旺达',
                            'W. Sahara':'西撒哈拉',
                            'Saudi Arabia':'沙特阿拉伯',
                            'Sudan':'苏丹',
                            'S. Sudan':'南苏丹',
                            'Senegal':'塞内加尔',
                            'Solomon Is.':'所罗门群岛',
                            'Sierra Leone':'塞拉利昂',
                            'El Salvador':'萨尔瓦多',
                            'Somaliland':'索马里兰',
                            'Somalia':'索马里',
                            'Serbia':'塞尔维亚',
                            'Suriname':'苏里南',
                            'Saint Helena':'圣赫勒拿',
                            'Slovakia':'斯洛伐克',
                            'Slovenia':'斯洛文尼亚',
                            'Sweden':'瑞典',
                            'Swaziland':'斯威士兰',
                            'Seychelles':'塞舌尔',
                            'Syria':'叙利亚',
                            'Chad':'乍得',
                            'Togo':'多哥',
                            'Thailand':'泰国',
                            'Tajikistan':'塔吉克斯坦',
                            'Turks and Caicos Is.':'特克斯和凯科斯群岛',
                            'Turkmenistan':'土库曼斯坦',
                            'Tonga':'汤加',
                            'East Timor':'东帝汶',
                            'Trinidad and Tobago':'特里尼达和多巴哥',
                            'Tunisia':'突尼斯',
                            'Turkey':'土耳其',
                            'Tanzania':'坦桑尼亚',
                            'Uganda':'乌干达',
                            'Ukraine':'乌克兰',
                            'Uruguay':'乌拉圭',
                            'United States':'美国',
                            'Uzbekistan':'乌兹别克斯坦',
                            'Venezuela':'委内瑞拉',
                            "São Tomé and Principe":'圣多美和普林西比',
                            "St. Pierre and Miquelon":'圣皮埃尔和密克隆群岛',
                            "S. Geo. and S. Sandw. Is.":'南乔治亚岛和南桑威奇群岛',
                            'St. Vin. and Gren.':'圣文森特和格林纳丁斯',
                            'Vietnam':'越南',
                            'Vanuatu':'瓦努阿图',
                            'West Bank':'西岸',
                            'Yemen':'也门',
                            'South Africa':'南非',
                            'Samoa':'萨摩亚',
                            'U.S. Virgin Is.':'美属维尔京群岛',
                            'Zambia':'赞比亚',
                            'Zimbabwe':'津巴布韦',
                            'Liechtenstein': "列支敦士登",
                            'Grenada': "格林纳达",
                            'Guam': "关岛",
                            'Aland': "奥兰群岛",
                        },
                    }, {
                        /*showEffectOn: 'render',//配置什么时候显示特效
                        coordinateSystem:'geo',//该系列使用的坐标系
                        symbolSize:10,//标记的大小*/
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0.1,
                            color: '#db9982',
                            symbol: planePath,//箭头样式
                            symbolSize: 5//箭头大小
                        },
                        lineStyle: {
                            normal: {
                                color: '#fff',
                                width: 1,
                                opacity: 0.4,
                                curveness: 0.1
                            }
                        },
                        itemStyle: {//地图区域的多边形 图形样式。
                            normal: {
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: 'rgb(249, 249, 249)'
                                    }
                                }
                            }
                        },
                        data: formtGCData(geoCoordMap, data, '中国', true)
                    }, {
                        type: 'lines',
                        color: '#000',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0.1,
                            color: '#000',
                            //symbol: planePath,
                            symbolSize: 8
                        },
                        lineStyle: {
                            normal: {
                                color: '#fff',
                                width: 1,
                                opacity: 0.4,
                                curveness: 0.2
                            }
                        },
                        //data: formtGCData(geoCoordMap, data, '中国', false)返回路线
                    },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,//层级
                            rippleEffect: {
                                period: 4,
                                scale: 10,
                                brushType: 'stroke'
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    formatter: '{b}',
                                    color: '#fff',
                                    fontSize: 15
                                }
                            },
                            symbolSize: 10,
                            itemStyle: {
                                normal: {
                                    color: '#0D6695',
                                    borderColor: 'gold'
                                }
                            },
                            data: formtVData(geoCoordMap, data, '中国')
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            rippleEffect: {
                                period: 4,
                                scale: 10,
                                brushType: 'stroke'
                            },
                            symbolSize: 10,
                            itemStyle: {
                                normal: {
                                    color: '#0D6695',
                                    borderColor: 'gold'
                                }
                            },
                        }
                    ]
                })

                /*// 中国双击事件
                myChart.on('dblclick', (param) => {
                  if (param.data.name.toLowerCase() === '中国') {
                    this.$router.push('/map')
                  }
                })*/
            }
        },
        mounted() {
            this.$refs.demoMap.style.height = window.innerHeight + 'px'
            this.map()
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 15px;
        background: url('./images/11.jpg') no-repeat;
        background-size: 100% 100%;
    }

    td {
        text-align: center
    }

    p {
        color: #fff;
    }

    #demo {
        display: flex;
        width: 100%;
        background: rgba(245, 96, 255, 0.5);/*地图背景色*/
    }

    #demoMap {
        width: 100%;
    }

    .rContainer {
        width: 100%;
        height: 100%;
    }
</style>
