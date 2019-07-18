<template>
         <div id="RightUnder"></div>  
          
</template>



<script>


import axios from 'axios'          
var echarts = require('echarts')


export default{
    name:'RightUnder',
    data(){
        return{
            movies:[]
            
        }   
    },
    created(){
        this.$axios.get("https://mobiletest.derucci.net/consumer-admin/api/sales/v1/product/list")
        .then(res=>{
            this.filterData(res.data);
            console.log(this.movies)    
        }) 
        .catch(error=>{
            console.log(error);
        })  
    },
    methods:{
     filterData(data){
         var pul = [];
         for (var i=0; i<data.data.length;i++){
                var moviesObj={
                    model:data.data[i].model,
                    qty:data.data[i].qty
                }
                pul.push(moviesObj);
            }
         this.movies=pul;
        //  console.log(typeof(movies))
     }
  },
    mounted() {
 //实验--------------------------------------------------
        
        fetchData(function (data) {
            myChart.setOption({
                yAxis: {
                    data: this.movies.model
                },
                series: [{
                    name: '(单位：万元)',
                    data: this.movies.qty
                }]
            });
        })
//实验--------------------------------------------------  
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('RightUnder')); 
        myChart.setOption({
            title: {
                text: '',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                label:{
                    show:false
                }
            },
            legend: {
                data: [ '(单位：万元)'],
                icon:'none',
                show:true,
                textStyle:{
                    color:'white',
                    fontSize:14
                },
                left:'110',
                top:'15'
            },
           
            xAxis: {
                type: 'value',
                show:true,
                boundaryGap: [0, 0.01],
            
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:'white'
                },
                //X分隔线
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'rgba(47,95,233,1)',
                        opacity:0.4,
                        width:1
                    },
                    type:'dotted'
                }
            },
            
            yAxis: {
                type: 'category',
                nameTextStyle:{
                    color:'blue',
                    fontSize:1,
                },
                axisTick:{
                    show:false,
                    color:'green',
                    lineStyle:{
                        color:'blue'
                    }
                },
                axisLabel:{
                    show:true,
                    fontWeight:'normal',
                    fontSize:14
                }, 
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:'white',
                        width:1,
                        fontSize:18,
                        type:'dotted'
                    }
                    
                },
                
                // data: ['BCQ2-060','BCQ2-004','BCQ2-003','BCQ2-002','BCQ2-012','BCQ2-010','BCQ2-060','BCQ2-004','BCQ2-003','BCQ2-002']
                data:this.movies.model
            },
            series: [
                
                {
                    name: '(单位：万元)',
                    type: 'bar',
                    label:{
                       show:true,
                       position:'right',
                       color:'white',
                    },
                    itemStyle:{
                       color:'blue',
                       barBorderRadius:10,
                    },
                    barWidth:10,
                    // data: [2800, 3000, 3200, 3500, 3800, 4000,4200,4300,4700,5000]
                    data:this.movies.qty
                }
            ],
            grid:[{
                left:'23%',
                bottom:'10%',
                top:'18%',
                right:'7%'
            }]
        })
   } 
}
</script>



<style scoped>
#RightUnder{
    /* border:1px solid black; */
    /* background:url(../../assets/images/left1.png) no-repeat;
    background-size:100% 100%; */
    height:556px;
    width:420px;
    /* margin-left:10px; */

}
</style>