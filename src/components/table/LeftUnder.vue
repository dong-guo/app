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
        // var data = [];
        // arr.push({value:260, name:'0769',labelLine:{show:true}});
        // arr.push({value:90, name:'3D      ',labelLine:{show:true}});
        // arr.push({value:100, name:'歌蒂娅',labelLine:{show:true}});
        // arr.push({value:150, name:'凯奇',labelLine:{show:true}});
        // arr.push({value:120, name:'助眠',labelLine:{show:true}});
        // arr.push({value:200, name:'V6', labelLine:{show:true}});
        // arr.push({value:300, name:'0760',labelLine:{show:true}});
        // arr.push({value:200, name:'PAULY',labelLine:{show:true}});
        // arr.push({value:100, name:'HOME',labelLine:{show:true}});
        // arr.push({value:10, name:'国际',labelLine:{show:true}});
        // arr.push({value:10, name:'兰博基尼',labelLine:{show:true}});
        // arr.sort(function(a,b){
        //     if(a.value<b.value){
        //         return -1
        //     }else if(a.value>b.value){
        //         return 1;
        //     }
        //     return 0;
        // });
        // for(var i=0;i<arr.length;i++){
        //     console.log(data[i])
        // }
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
                itemWidth:10,
                itemHeight:10,
                itemGap:15,
                textStyle:{
                    color:'rgba(187,197,220,1)',
                    fontSize:14,
                },
                data:['0769','3D      ','歌蒂娅','凯奇','助眠','V6','0760','PAULY','HOME','国际','兰博基尼']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    // minShowLabelAngle:300,
                    // hoverOffset:2,
                    clockwise:false,
                    starAngle:90,
                    hoverAnimation:false,
                    radius: ['35%', '50%'],
                    avoidLabelOverlap: true,
                    
                    //文本标签
                    label: {
                        
                        show: true,
                        position:'outside',
                        borderWidth:2,
                        borderRadiu:2,
                        padding:[2,2],
                        lineStyle:{
                            color:'#333'
                        },
                        // formatter:'{b} {d}%'
                        formatter:function(data){
                            // console.log(data)
                            if(data.percent>10){
                                return data.name +" "+ data.percent.toFixed(0)+"%"
                            }else{
                                return data.name=""
                                // return data.labelLine:{show:""}
                            }
                        }
                    },   
                    //高亮扇区 
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'bold'
                        }
                    },
                
                    //文本标签引导线
                    labelLine: {
                            show:true,
                            length:20,
                            length2:20,
                            fontWeight:8,
                    },
                    // data:this.data
                    data:[
                        {value:300, name:'0769',
                            itemStyle:{color:'rgba(169,89,255,1)'},
                            labelLine:{show:true}
                        },
                        {value:1, name:'3D      ',
                            itemStyle:{color:'rgba(103,89,255,1)'},
                            labelLine:{show:false}
                        
                        },
                        {value:1, name:'歌蒂娅',
                            itemStyle:{color:'rgba(89,164,255,1)'},
                            labelLine:{show:false}
                        
                        },
                        {value:160, name:'凯奇',
                            itemStyle:{color:'rgba(89,241,255,1)'},
                            labelLine:{show:true}
                        
                        },
                        {value:1, name:'助眠',
                            itemStyle:{color:'rgba(169,89,208,1)'},
                            labelLine:{show:false}
                        
                        }, 
                        {value:1, name:'V6',
                            itemStyle:{color:'rgba(89,255,120,1)'},
                            labelLine:{show:false}
                        
                        },
                        {value:300, name:'0760',
                            itemStyle:{color:'rgba(103,89,255,1)'},
                            labelLine:{show:true}
                        
                        },
                        {value:1, name:'PAULY',
                            itemStyle:{color:'rgba(203,255,89,1)'},
                            labelLine:{show:false}
                        
                        },
                        {value:100, name:'HOME',
                            itemStyle:{color:'rgba(203,255,89,1)'},
                            labelLine:{show:true}
                        
                        },
                        {value:1, name:'国际',
                            itemStyle:{color:'rgba(255,200,89,1)'},
                            labelLine:{show:false}
                        
                        },
                        {value:120, name:'兰博基尼',
                            itemStyle:{color:'rgba(255,100,89,1)'},
                            labelLine:{show:true}
                        },  
                            
                    ],
                    
                }
            ],
            grid:[{
                left:'10%',
                bottom:'20%',
                top:'12%',
                right:'10%'
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
    height:372px;
    width:420px;
    /* margin-left:10px; */

}
</style>