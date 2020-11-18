<template>
    <div class="box" :style="{width: width+'vw',height: height+'vh'}">
        <div>
            <div class="header" style="font-size: 0.8vw;padding-left:0.7vw;width: 10vw;line-height: 1.5vw;height: 1.5vw;">
                {{title}}
            </div>
            <svg class="svgline" width="2vw" height="1vw" style="margin-top: 0.5vw;" >
                <line x1="0%" y1="100%" x2="100%" y2="0%" stroke="#0ca0ff" stroke-width="1"/>
            </svg>
            <div class="rightline" :style="{width: (width-16)+'vw'}" style="height: 0.9vh;float: left;margin-top: 0.5vw;">
            </div>
            <div class="clickDetails" v-if="clickDetails" @click="clickXqFn">{{details}}</div>
<!--            <i class="el-icon-more clickicon" v-if="clickiconFlag" @click="clickGdFn"/>-->
        </div>
        <div class="content" :style="{width:(width-3)+'vw',height:(height-3.9)+'vh'}" :id="chartId">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "divbox",
        data(){
            return {
            }
        },
        methods: {
          clickGdFn() {
            if (!this.clickGd) {
              return;
            }
            this.clickGd();
          },
          clickXqFn() {
            if (!this.clickXq) {
              return;
            }
            this.clickXq();
          },
        },
        props:{
            width:{
                type: String,
                default: "25"
            },
            height:{
                type: String,
                default: "40"
            },
            title:{
                type: String,
                default: ""
            },
            details:{
                type: String,
                default: ""
            },
            chartId:{
                type: String,
                default: ""
            },
            clickiconFlag:{
                type: Boolean,
                default: false
            },
            clickDetails:{
                type: Boolean,
                default: false
            },
            clickGd: {},
            clickXq: {},
        },
    }
</script>

<style scoped>
    .box{
        background:linear-gradient(to bottom,#00397c,rgba(2,36,100,0));
        border: 1px solid #0ca0ff;
        border-radius: 3px;
    }
    .header{
        border-bottom: 1px solid #0ca0ff;
        float: left;
        background:linear-gradient(to right,rgba(142,239,240,0.5),rgba(81,142,158,0));
        color: white;
    }
    .svgline{
        float: left;
    }
    .rightline{
        border-top: 1px solid #0ca0ff;
    }
    .clickicon{
        text-align: center;line-height:1vw;font-size: 0.5vw;background: #0ca0ff;border-radius: 1vw;width: 1vw;height:1vw;float: right;margin: 0.3vw  0.5vw 0 0 ;
    }
    .content{
        padding: 0vw 1.5vw;
        clear: both;
    }
    .clickDetails{
        float: right;
        display: inline-block;
        font-size: 0.66vw;
        border: 1px solid #0ca0ff;
        width: 2vw;
        padding: 0.2vw;
        background: transparent;
        margin-top: 0.5vh;
        margin-right: 0.70vw;
        text-align: center;
        color: #FFFFFF;
        border-radius: 3px;
        cursor: pointer;
    }
</style>
