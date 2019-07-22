<template>
         <div id="LeftUnder"></div>      
</template>



<script>

import axios from 'axios' 
var echarts = require('echarts')

export default{
  name:'LeftUnder',
  data(){
        return{
           moons:[],
        }   
    },
    created() {
		
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            //请求数据
            this.$axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/brand/sales/proportion')
            .then(res => {
                let data = res.data.data
                console.log(data)
                var seriesData=[];
                for (var i=0;i<data.length;i++){
                    let am = data[i].brand
                    let bm = data[i].amount
                    seriesData.push({
                    "name": am,
                    "value": bm,
                    "labelLine":{show:""}
                    })
                }
                seriesData.sort(function(a,b){
                    if(a.value>b.value){
                        return -1
                    }else if(a.value<b.value){
                        return 1;
                    }
                    return 0;
                }); 
                for(var i=0;i<5;i++){
                    seriesData[i].labelLine.show=true;
                }
                
                console.log( 999,seriesData);
                var myChart = echarts.init(document.getElementById('LeftUnder'))
                let option = this.createOption(name, seriesData)
                myChart.setOption(option)
            })
			.catch(error => {
				console.log(error);
            })   
        },
        createOption(name, seriesData){
            return {
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
                    itemWidth:8,
                    itemHeight:8,
                    itemGap:8,
                    textStyle:{
                        color:'rgba(187,197,220,1)',
                        fontSize:10,
                    },
                    // data: ['0769','3D','歌蒂娅']
                    data:name
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
                        radius: ['20%', '30%'],
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
                            formatter:
                            function(seriesData){
                                if(seriesData.percent>8){
                                    return seriesData.name+" "+seriesData.percent.toFixed(0)+"%"
                                }else{
                                    return seriesData.name=""
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
                                show:false,
                                length:12,
                                length2:5,
                                fontWeight:8,
                        },
                        // data:[
                        //     {
                        //         value:300, 
                        //         name:'0769',
                        //         itemStyle:{color:'rgba(169,89,255,1)'},
                        //     },
                        //     {
                        //         value:1, 
                        //         name:'3D      ',
                        //         itemStyle:{color:'rgba(103,89,255,1)'},
                            
                        //     },
                        //     {
                        //         value:1, 
                        //         name:'歌蒂娅',
                        //         itemStyle:{color:'rgba(89,164,255,1)'},
                        //     }
                                
                        // ],
                        data:seriesData
                    }
                ],
                grid:[{
                    left:'15%',
                    bottom:'20%',
                    top:'10%',
                    right:'25%'
                }]

            }
        },
        mounted() {},
    },
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