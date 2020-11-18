<!--坐席状态-->
<template>
  <div>
    <divbox
      :width="width"
      :height="height"
      :title="title"
      :clickDetails="false"
      class="hjzxzxzt--table-parent"
      style="overflow: hidden"
    >
      <el-table :data="tableData" stripe height="31vh" style="width: 100vw" class="hjzxzxzt-class-table" >
        <el-table-column prop="zx" label="坐席" align="center" />
        <el-table-column prop="zt" label="状态" align="center" />
        <el-table-column prop="thsc" label="通话时长" align="center" />
        <el-table-column prop="pjsc" label="平均时长" align="center"/>
        <el-table-column prop="ths" label="通话数" align="center" />
      </el-table>
    </divbox>
  </div>
</template>

<script>
    import divbox from '../../../../components/divbox';

    export default {
        name: "hjzxzxzt",
        components:{
            divbox,
        },
        data() {
            return {
              width:"31",
              height:"34",
              title:"坐席状态",
              page: 1,
              excutNum: 0, //请求执行次数
              tableData: [{
                zx: 'A',
                zt: '通话中',
                thsc: '35分26秒',
                pjsc: '2分3秒',
                ths: '16'
              },
                {
                  zx: 'B',
                  zt: '通话中',
                  thsc: '35分26秒',
                  pjsc: '2分3秒',
                  ths: '16'
                },
                {
                  zx: 'C',
                  zt: '通话中',
                  thsc: '35分26秒',
                  pjsc: '2分3秒',
                  ths: '16'
                },
                {
                  zx: 'D',
                  zt: '通话中',
                  thsc: '35分26秒',
                  pjsc: '2分3秒',
                  ths: '16'
                },{
                  zx: 'D',
                  zt: '通话中',
                  thsc: '35分26秒',
                  pjsc: '2分3秒',
                  ths: '16'
                },
                {
                  zx: 'D',
                  zt: '通话中',
                  thsc: '35分26秒',
                  pjsc: '2分3秒',
                  ths: '16'
                }]
            }
        },
        methods:{
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
            //this.getList(); //初始页面执行一次
            //this.currentTime(); //执行定时任务
        },
        beforeDestroy() {
            //清除定时任务
            clearInterval(this._inter)
        },
    }
</script>
<style scoped>
  .el-table thead{
    color: white !important;
  }
  .el-table{
    color: #FFFFFF !important;
    font-size: 1.5vh;
  }
  .el-table::before{
    background-color: transparent!important;
  }

</style>
<style lang="scss" >
  .hjzxzxzt--table-parent > .content{
    padding: 0 0;
    width: 31vw !important;
    height: 34vh;
  }
  .hjzxzxzt-class-table, .el-table__expanded-cell {
    background-color: transparent!important;
  }

  .hjzxzxzt-class-table th, .hjzxzxzt-class-table tr {
    border: 0!important;
    background-color: transparent!important;
  }
  .hjzxzxzt-class-table .el-table__body tr.el-table__row--striped td{
    background-color: #0943b8;
  }
  .hjzxzxzt-class-table .el-table__header-wrapper .el-table__header thead tr th{
    color: #42B7DE;
    font-size: 1.5vh;
    // background-color: #2B6D9D !important;
  }
  .hjzxzxzt-class-table th.is-leaf, .hjzxzxzt-class-table td{
    border-bottom: 0 solid #EBEEF5;
  }
  .hjzxzxzt-class-table th, .hjzxzxzt-class-table td{
    padding: 2vh 0;
  }
  .hjzxzxzt-class-table .cell{
    height: 2vh;
      line-height: 2vh;
  }
  .hjzxzxzt-class-table .el-table__body tr:hover > td{
    background-color: #033db8;
  }
  // 滚动条的宽度
  .hjzxzxzt-class-table .el-table__body-wrapper::-webkit-scrollbar {
    display: none;
  }
  // 滚动条的滑块
  .hjzxzxzt-class-table .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: transparent!important;
    border-radius: 0;
  }
</style>
