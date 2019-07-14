<template>
         <div id="LeftUnder"></div>      
</template>



<script>

var echarts = require('echarts')

export default{
  name:'LeftUnder',
  data(){
    return{
        page31:("床垫销售额"),
        page32:("床品销售额"),
        page33:("床架销售额")
    }   
  },
  mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('LeftUnder'));
        myChart.setOption ({
            tooltip: { 
               trigger: 'none',
               formatter: "{a} <br/>{b}:{c}({d}%)"
            },
            legend: {
                orient: 'horizontal',
                align:'left',
                y: 'bottom',
                icon: "circle",
                itemWidth:4,
                itemHeight:4,
                textStyle:{
                    color:'white'
                },
                data:['0769','3D      ','歌蒂娅','凯奇','助眠','V6','0760','PAULY','HOME','国际','兰博基尼']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    minShowLabelAngle:60,
                    // hoverOffset:2,
                    hoverAnimation:false,
                    radius: ['23%', '35%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position:'outer',
                            borderWidth:2,
                            borderRadiu:2,
                            padding:[2,2],
                            lineStyle:{
                                color:'#333'
                            },
                            formatter:'{b} {d}%'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show:true,
                            length:5,
                            fontWeight:8,
                        }
                    },
                    data:[
                        {value:90, name:'0769'},
                        {value:90, name:'3D      '},
                        {value:100, name:'歌蒂娅'},
                        {value:100, name:'凯奇'},
                        {value:100, name:'助眠'},
                        {value:100, name:'V6'},
                        {value:100, name:'0760'},
                        {value:100, name:'PAULY'},
                        {value:100, name:'HOME'},
                        {value:100, name:'国际'},
                        {value:100, name:'兰博基尼'},
                    ]
                }
            ],
            grid:[{
                left:'20%',
                bottom:'20%',
                top:'12%',
                right:'20%'
            }]

        })
   } 
}
</script>



<style scoped>
#LeftUnder{
    /* border:1px solid black; */
    /* background:url(../../assets/images/left1.png) no-repeat;
    background-size:100% 100%; */
    height:225px;
    width:290px;
    /* margin-left:10px; */

}
</style>