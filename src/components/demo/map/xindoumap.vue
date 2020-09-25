<template>
    <div class="mapDiv">
        <div class="echart" :id="dtdivid"></div>
        <div class="echart1" :id="dtdivid+'1'"></div>
        <div class="echart2" :id="dtdivid+'2'"></div>
        <div class="echart3" :id="dtdivid+'3'"></div>
        <div v-show="this.show" @dblclick="closediv" class="echart4" :id="dtdivid+'4'"></div>
        <div v-show="this.show1" @dblclick="closediv1" class="companyDetails" id="companyDetails" >
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
    </div>
</template>

<script src="../../../assets/js/map/xdmap.js"></script>

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
        height: 110vh;
        width: 102vw;
        left: -4%;
        top: -10%;
        background: rgba(0,0,0,0.6)!important;
    }

    /*表格外层div*/
    .companyDetails{
        margin-top: 52vh;
        margin-left: 21vw;
        z-index: 180;
        position: absolute;
        border:1px solid rgba(255,255,255,0.4);
    }

    /*表格*/
    .companytable{
        width: 20vw;
        height: 30vh;
        margin-left: 5%;
        color: #FFF;
    }
</style>
