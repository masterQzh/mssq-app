<template>
  <div class="home">
    <!--首页顶部部分-->
    <div class="viewTop">
      <div class="viewTopLeft">
        <img src="../assets/images/icon_xiaoxi.png" alt="">
        <span>精准社区服务平台最新服务发布啦！！！</span>
      </div>
      <div class="viewTopRight">
        <span class="time">2017-11-11</span>|
        <span class="all">全部</span>
      </div>
    </div>
    <!--首页主体部分-->
    <div class="homeMain">
      <!--App动态-->
      <div class="AppChange">
        <!--title-->
        <div class="changeTitle">
          <h3>App动态</h3>
        </div>
        <!--次数卡片-->
        <div class="countCard">
          <div class="nth1" >
            <span style="padding-top: 102px;display: inline-block">今日下载次数</span>
            <p>10</p>
          </div>
          <div class="nth2" >
            <span style="padding-top: 102px;display: inline-block">今日下载次数</span>
            <p>10</p>
          </div>
          <div class="lastDiv">
            <span style="padding-top: 102px;display: inline-block">今日下载次数</span>
            <p>10</p>
          </div>
        </div>
      </div>
      <!--用户动态-->
      <div class="userChange">
        <!--title-->
        <div class="changeTitle">
          <h3>用户动态</h3>
        </div>
        <div class="treeBarChart">
          <span class="activeCount" style="color:#333333 ">活跃人数</span>
          <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart">
          </div>
          <span class="time" style="color:#333333 ">时间</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    props: {
      className: {
        type: String,
        default: 'yourClassName'
      },
      id: {
        type: String,
        default: 'yourID'
      },
      width: {
        type: String,
        default: '900px'
      },
      height: {
        type: String,
        default: '400px'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart);
        // 把配置和数据放这里
        this.chart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '1%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category', data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00','16:00', '18:00', '20:00', '22:00', '24:00','',],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '活跃人数',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,120,321,235,60,180]
          }]
        })
      }
    }
  }
</script>


<style scoped>
  .home{
  width: 100%;
  height: 100%;
  background-color: yellow;
  }

  /*右边显示区顶部区域*/
  .routerView {
    flex: 1;
    width: 1000px;
    height: 1200px;
    background-color: rebeccapurple;
  }

  /*顶部消息*/
  .routerView .viewTop {
    width: 100%;
    height: 60px;
    background-color: hotpink;
  }

  /*左边*/
  .routerView .viewTop .viewTopLeft {
    float: left;
    line-height: 60px;
  }

  .routerView .viewTop .viewTopLeft img {
    vertical-align: middle;
    background-color: red;
    width: 30px;
    height: 30px;
    margin: 0 20px 0 24px;
  }

  .routerView .viewTop .viewTopLeft span {
    font-size: 14px;
    color: #666666;
  }

  /*右边*/
  .routerView .viewTop .viewTopRight {
    float: right;
    line-height: 60px;
    color: #666666;
  }

  .routerView .viewTop .viewTopRight .time {
    margin-right: 10px;
  }

  .routerView .viewTop .viewTopRight .all {
    color: #ff3f3f;
    margin: 0 18px 0 10px;
  }
/*首页主体内容部分*/
  .homeMain {
    width: 900px;
    background: darkslategray;
    margin: 0 auto;
  }
/*App动态*/
  .homeMain .changeTitle {
    background-color: #E1E1E1;
    margin: 20px 0;
    display: inline-block;
    width: 100%;
    height: 60px;
  }

  .changeTitle h3 {
    margin-left: 20px;
    color: #1d1d1d;
    font-size: 20px;
  }

  .countCard {
    height: 260px;
    width: 100%;
    border: 1px solid #BBBBBB;
    border-radius: 8px;
  }

  .countCard div{
    text-align: center;
    width: 33%;
    height:100%;
    border-right: solid 1px #BBBBBB;
    float: left;
  }
  .countCard .lastDiv{
    border-right:none;
  }
/*用户动态*/
  .treeBarChart{
    position: relative;
    width: 100%;
    height: 410px;
    background-color: rebeccapurple;
    border: 1px solid slategray;
    border-radius: 10px;
    /*margin-top:10px;*/
  }
  .treeBarChart .activeCount{
    position: absolute;
    left:10px;
    top:15px;
  }
  .treeBarChart .time{
    position: absolute;
    right:40px;
    bottom: 18px;
  }

</style>
