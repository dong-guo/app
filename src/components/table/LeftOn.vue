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
                //X轴
                axisLine:{
                    show:false
                },
                //X轴刻度
                axisTick:{
                    show:false
                },
                //X刻度标签
                axisLabel:{
                    color:'white',
                    fontSize:12,
                    
                },
                //X分隔线
                splitLine:{
                    show:false
                },
                data: ['1月', '2月', '3月', '4月', '5月']
            },
            yAxis: {
                type: 'value',
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'rgba(47,95,233,1)',
                        opacity:0.4,
                        width:1
                    },
                    type:'dotted'
                },
                axisTick:{
                        show:false,
                        // color:'green',
                        lineStyle:{
                            color:'blue'
                        }
                },
                axisLine:{
                        show:false,
                        lineStyle:{
                            color:'white',
                            width:1,
                            fontSize:18,
                            type:'dotted'
                        }
                }       
            },

            series: [{
                data: [320, 398, 370, 440, 580],
                symbolSize:10,
                type: 'line',
                //图形文本标签
                label:{
                    show:true,
                    position:'right',
                    color:'white',
                    position:'top',
                    fontSize:'9'
                },
                //区域填充
               areaStyle:{
                  color:{
                        type:'linear',
                        x:0,
                        y:0,
                        x2:0,
                        y2:1,colorStops:[{
                            offset:0,color:'rgba(0,122,255,1)'
                        },{offset:1,color:'rgba(0,122,255,0)'
                        }],
                        global:false
                    },
                    opacity:0.5,
               },
               //拐点标志
               itemStyle:{
                    color:'rgba(95,187,240,1)',
                    
                },
            }],
            grid:[{
                left:'10%',
                bottom:'10%',
                top:'18%',
                right:'4%'
            }],
            

        })
   } 
}
</script>



<style scoped>
#LeftOn{
    /* border:1px solid black; */
    /* background:url(../../assets/images/left1.png) no-repeat;
    background-size:100% 100%; */
    height:452px;
    width:402px;
    /* padding-left:19px;
    padding-top:100px;
    padding-bottom:53px; */
    /* margin-left:10px; */

}
</style>