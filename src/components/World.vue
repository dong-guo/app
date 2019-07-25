<template>
      <div id="world">
        <!-- world -->
         
  </div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import leftTopIcon from '../base64/leftTop'
export default {
  name: 'world',
  props:{
    // title:{
    //   type:String
    // }
  },
  data(){
    return{
      myEchart: null
    }
  },
  mounted() {

    axios.get('./geoJson/world.json').then((res) => {
      let  worldJson = res.data
      axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/national/sales/amount').then((res)=>{
        // console.log('请求地图数据',worldJson)
        // let data =res.data.data
        // console.log('数据得到',data)
        // let worldData = [];
        // for(var i =0; i < data.length; i++){
        //     let amount = data[i].amount;
        //     let state = data[i].state;
        //     worldData.push({
        //       "name":state,
        //       "value":amount,
        //       "label":{
        //         show:true,
        //       },
        //       symbolSize:[300,120],
        //       label:{
        //         color:'white',
        //         show:true,
        //         position:'insideleft',
        //         offset:[30,15],
        //         fontSize:18,
        //       },
        //     })
        // }
        // console.log("地图数组",worldData);
        echarts.registerMap('world', worldJson,);
        this.myEchart = echarts.init(document.getElementById("world"));
        console.log(123123, leftTopIcon)
        let option = {
          geo: {
            type: 'map',
            map: 'world',
            zoom: 1,
            // roam: true,
            top: 0,
            left: 0,
            right: 0,
            itemStyle:{
              areaColor:'rgba(32,63,158,1)',
              borderWidth:0,
            }
          },
          series: [
            {
              coordinateSystem: 'geo',
              type: "scatter",
              symbol: `image://${leftTopIcon}`,
              symbolSize: [173, 80],
              data:[
                {
                  name: '中国:187526',
                  value: [113.5, 63.48],
                  label: {
                    show: true,
                    position: [30, 10],
                    color: '#fff',
                    formatter: `{b}`
                  }
                },
                {
                  name: '澳大利亚:1864',
                  value: [135.13, -18.3],
                  label: {
                    show: true,
                    position: [30, 10],
                    color: '#fff',
                    formatter: `{b}`
                  }
                }
              ],   
            }
          ]
        };
         // var  myChart = echarts.init(document.getElementById('main'));
         this.myEchart.setOption(option); 
      })    
    });
  },
  methods:{
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#world{
  width: 875px;
  height: 471px;
  margin-left:64px;
  margin-top:85px;
}


</style>