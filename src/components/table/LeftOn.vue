<template>
         <div id="LeftOn"></div>      
</template>



<script>

var echarts = require('echarts')

export default{
  name:'LeftOn',
  data(){
    return{
        page31:("床垫销售额"),
        page32:("床品销售额"),
        page33:("床架销售额")
    }   
  },
  mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('LeftOn'));
        myChart.setOption ({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [320, 398, 370, 440, 580],
                type: 'line',
                areaStyle: {}
            }],
            grid:[{
                left:'15%',
                bottom:'15%',
                top:'20%',
                right:'10%'
            }],
            color:{
                //线性渐变
                type:'linear',
                x:0,
                y:0,
                x2:1,
                y2:1,
                colorStop:[{
                    offset:0,color:'red'
                },{
                    offset:1,color:'blue'
                }],
                globalCoord:false
            }

        })
   } 
}
</script>



<style scoped>
#LeftOn{
    border:1px solid black;
    /* background:url(../../assets/images/left1.png) no-repeat;
    background-size:100% 100%; */
    height:240px;
    width:280px;
    margin-left:10px;

}
</style>