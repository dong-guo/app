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
            //标题
            legend: {
                orient: 'horizontal',
                align:'left',
                y: 'bottom',
                icon: "circle",
                itemWidth:5,
                itemHeight:5,
                textStyle:{
                    color:'white'
                },
                data:['0769','3D      ','歌蒂娅','凯奇','助眠','V6','0760','PAULY','HOME','国际','兰博基尼']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    minShowLabelAngle:8,
                    // hoverOffset:2,
                    hoverAnimation:false,
                    radius: ['23%', '35%'],
                    avoidLabelOverlap: false,
                    
                    //文本标签
                    label: {
                        normal: {
                            show: true,
                            // show:function(){
                            //     if(data.percent>10){
                            //         return ture
                            //     }
                            // },
                            position:'outer',
                            borderWidth:2,
                            borderRadiu:2,
                            padding:[2,2],
                            lineStyle:{
                                color:'#333'
                            },
                            formatter:function(data){
                                console.log(data)
                                return data.name +" "+ data.percent.toFixed(0)+"%"
                            }

                            // formatter:'{b} {d}%'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    //文本标签引导线
                    labelLine: {
                        normal: {
                            show:true,
                            length:5,
                            fontWeight:8,
                        }
                    },
                    data:[
                        {value:60, name:'0769'},
                        {value:90, name:'3D      '},
                        {value:100, name:'歌蒂娅'},
                        {value:150, name:'凯奇'},
                        {value:120, name:'助眠'},
                        {value:200, name:'V6'},
                        {value:300, name:'0760'},
                        {value:200, name:'PAULY'},
                        {value:100, name:'HOME'},
                        {value:10, name:'国际'},
                        {value:10, name:'兰博基尼'},
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