<template>
         <div id="LeftOn"></div>      
</template>


<script>

import axios from 'axios' 
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
    methods:{
       getData(){
           this.$axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/monthly/sales')
           .then(res=>{
               let data =res.data.data
            //    console.log(123,data);
               let xAxisData=[];
               let seriesData=[];
               for(var i=0;i<data.length;i++){
                   xAxisData.push(data[i].months+'月');
                   seriesData.push((data[i].amount).toFixed(0));
               }
               var myChart = echarts.init(document.getElementById('LeftOn'));
               let option = this.createOption(xAxisData,seriesData)
               myChart.setOption(option)
                // console.log("月份",xAxisData);
                // console.log("数字",seriesData);
           })
           .catch(error=>{
               console.log(error);
           })
       },
       createOption (xAxisData,seriesData){
        return{
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
                // data: ["3月", "4月", "5月", "6月", "7月"]
                data:xAxisData
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
                // data: [480553195, 316402889, 292713798, 344003941, 67962453],
                data:seriesData,
                symbolSize:10,
                type: 'line',
                //图形文本标签
                label:{
                    show:true,
                    position:'right', 
                    color:'white',
                    position:'top',
                    fontSize:'14',
                    offset:[0,-8]
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
                left:'20%',
                bottom:'10%',
                top:'18%',
                right:'4%'
            }],
        }
    },
    },
  mounted() {
      this.getData();
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