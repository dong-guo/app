<template>
  <div id="helloWorld">
    <ul>
      <li> name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<input type="text" name="FirstName" value=""> </li>
      <li> passworld:&nbsp; <input type="password" name=LastName value=""></li>
      <li><router-link to="/Home">
                <button>log&nbsp;&nbsp;on</button>
             </router-link>
      </li>
    </ul>  
    <div id="echartContainer" style="width:400px; height:400px"></div>
  </div>
</template>

<script>

var echarts = require('echarts')

export default {
  name: 'HelloWorld',
  data(){
    return{

    }
  },
  mounted() {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echartContainer'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 销售数据' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
  background-color:darkseagreen;
  height:100%;
}
ul{
  height:200px;
  width:300px;
  background-color:chartreuse;
  border:2px solid black;
  margin:30vh 10vh;
  border-radius:10px;
  float:left;
}
li{
  list-style-type:none;
  margin:30px auto;
}
button{
  background-color:darkorchid;
  width:80px;
  height:30px;
  border-radius:8px;
  font-weight:700;
  outline:none;
  /* letter-spacing: 15px; */
  text-align:center;
}
#echartContainer{
  float:left;
  margin-top:18vh;
}
#helloWorld{
  height:00px;
  background-color:darkturquoise;
}
</style>
