<template>
  <div id="p-body">
     <div id="skip-header">
         <h1></h1>
     </div>
     <div id="skip-mid" class="rank">
         <div id="center">
                <p>{{page1}}</p>
         </div>
     </div>
     <div id="left" class="rank">
         <div class="left-on" id="echartContainer" style="width:250px; height:250px"></div>
         <div id="left-under">
             {{page22}}
         </div>
     </div>
     <div id="right" class="rank">
          <p>{{page3}}</p>
     </div>
    
     <div id="skip-footer">
          <h1>footer</h1>
    </div>

  </div> 
</template>



<script>

var echarts = require('echarts')

export default{
  name:'skip',
  data(){
    return{
        page1:("中间好像很吃亏"),
        page21:("在左上边"),
        page22:("在左下边"),
        page3:("在右边")
    }
  },
  mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echartContainer'));
        myChart.setOption = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        }
    }
  
}
</script>



<style scoped>
*{
    margin:0px;
    padding:0px;
}
 #skip-header h1{
    width:100%;
    height:10vh;
    text-align:center;
    line-height:10vh;
    background:url(../assets/images/title.png) no-repeat;
    background-size:100% 100%;
}
#skip-footer{
    width:100%;
    height:10vh;
    background-color:violet;
    text-align:center;
    line-height:10vh;
}
#skip-mid{
 width:100%;
 height:80%;
}
.rank{
    float:left;
}
#center{
    margin-right:300px;
    margin-left:300px;
    text-align:center;
    box-sizing:border-box;
    background-color:wheat;
    height:100%;
}
#left{
    width:300px;
    /* background-color:darkkhaki; */
    margin-left:-100%;
    height:80%;
}
.left-on{
    border:1px solid black;
}
#right{
    width:300px;
    background-color:thistle;
    margin-left:-300px;
    height:80%;
}
#skip-footer{
    clear:both;
}
#p-body{
    min-width:400px;
    height:100vh;
    width:100%;
    background:rgb(15, 15, 70);
}
body{
    margin:0;
}
html{
    padding:0;
}
</style>