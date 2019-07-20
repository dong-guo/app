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
            console.log(111)
            this.$axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/brand/sales/proportion')
            .then(res => {
                console.log(222)
                let data = res.data.data
                console.log('请求的数据', data)
                var myChart = echarts.init(document.getElementById('LeftUnder'))
                let option = this.createOption()
                console.log(123, option)
                myChart.setOption(option)
			})
			.catch(error => {
				console.log(error);
			})
        },
        createOption(){
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
                    itemWidth:10,
                    itemHeight:10,
                    itemGap:15,
                    textStyle:{
                        color:'rgba(187,197,220,1)',
                        fontSize:14,
                    },
                    data: ['0769','3D','歌蒂娅']
                    // data:this.moons.name,
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
                            formatter:'{b} {d}%'
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
                                length:20,
                                length2:20,
                                fontWeight:8,
                        },
                        // data:this.data
                        data:[
                            {
                                value:300, name:'0769',
                                itemStyle:{color:'rgba(169,89,255,1)'},
                            },
                            {
                                value:1, name:'3D      ',
                                itemStyle:{color:'rgba(103,89,255,1)'},
                            
                            },
                            {
                                value:1, name:'歌蒂娅',
                                itemStyle:{color:'rgba(89,164,255,1)'},
                            }
                                
                        ],
                        // data:this.moons
                    }
                ],
                grid:[{
                    left:'10%',
                    bottom:'20%',
                    top:'12%',
                    right:'10%'
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