<template>
      <div id="world">
        <!-- world -->
         
  </div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import leftTopIcon from '../base64/leftTop'
import rightBotIcon from '../base64/rightBot'

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
      // axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/national/sales/amount').then((res)=>{
        // console.log('请求地图数据',worldJson)
        // let data =res.data.data
        // console.log('数据得到',data)
        // //下面是创建value数组
        // let place=[];
        // let add =[
        //  121.77,8.67,17.87,43.35,10.45,101.97,171.12,105.31,104.99,133.77,106.65,-0.26,138.25,53.84,78.96,114.17,116.39,-106.34,-95.71
        // ];
        // let pdd =[
        //   12.88,9.08,-11.20,42.31,51.16,4.21,-43.66,61.52,12.56,-25.27,10.78,51.46,36.20,23.42,20.59,22.28,39.90,56.13,37.09
        // ] ; 
        // for(var i=0;i<add.length;i++){
        //   place.push([add[i],pdd[i]])
        // }
        //   //下面是创建data.name对象
        // let worldData = [];
        // for(var i =0; i < data.length; i++){
        //     let amount = data[i].amount;
        //     let state = data[i].state;
        //     let pl = place[i]
        //     worldData.push({
        //       "name":state+" : "+amount,
        //       "value":pl,
        //     symbol: `image://${leftTopIcon}`,
        //     symbolSize: [173, 80],
        //     label: {
        //             show: true,
        //             position: [30, 10],
        //             color: '#fff',
        //             formatter: `{b}`
        //           }
        //     });
        // }
        // console.log("经纬度",place)
        // console.log("地图数组",worldData);
        echarts.registerMap('world', worldJson,);
        this.myEchart = echarts.init(document.getElementById("world"));
        console.log(123123, leftTopIcon)
        // let option = {
        //   geo: {
        //     type: 'map',
        //     map: 'world',
        //     zoom: 1,
        //     // roam: true,
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     itemStyle:{
        //       areaColor:'rgba(32,63,158,1)',
        //       borderWidth:0,
        //     }
        //   },
        //   series: [
        //     {
        //       coordinateSystem: 'geo',
        //       type: "scatter",
        //       symbol: `image://${leftTopIcon}`,
        //       symbolSize: [173, 80],
        //       data:[
        //         {
        //           name: '中国:187526',
        //           value: [80.5, 50.48],
        //           label: {
        //             show: true,
        //             position: [30, 10],
        //             color: '#fff',
        //             formatter: `{b}`
        //           }
        //         },
        //         {
        //           name: '印度:1864',
        //           value: [46.13, 30.3],
        //           label: {
        //             show: true,
        //             position: [30, 10],
        //             color: '#fff',
        //             formatter: `{b}`
        //           }
        //         },
        //         {
        //           name: '美国:187526',
        //           value: [-110.5, 50.48],
        //           label: {
        //             show: true,
        //             position: [30, 10],
        //             color: '#fff',
        //             formatter: `{b}`
        //           }
        //         },
        //         {
        //           name: '澳大利亚:1864',
        //           value: [103.13, -20.3],
        //           label: {
        //             show: true,
        //             position: [30, 10],
        //             color: '#fff',
        //             formatter: `{b}`
        //           }
        //         }
        //       ],   
        //     }
        //   ]
        // };


        var obj = ['中国','印度','美国','德国']
        var jinweidu = [[80.5, 50.48, 39.64], [46.13, 30.3], [-110.5, 50.48], [-23.13, 63.3]]
        var count = [239583, 129436, 226345, 193745]
        var option = this.setData(obj[0],obj[1], jinweidu[0], jinweidu[1], count[0], count[1])
        this.myEchart.setOption(option)
        var len = obj.length
        var i = 0
         this.timer = setInterval(() => {
           i += 2
            if( i >= len) {
              i = 0
            }
            option = this.setData(obj[i], obj[i+1], jinweidu[i], jinweidu[i + 1], count[i], count[i + 1])
            this.myEchart.clear()
            this.myEchart.setOption(option)
        },3000)


         // var  myChart = echarts.init(document.getElementById('main'));
        // this.myEchart.setOption(option); 
      // })    
    });
  },
  methods:{
    setData(name1,name2, jw1, jw2, count1, count2) {
      return  {
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
            },
            emphasis:{
              itemStyle:{
                areaColor:'green',
              },
              label:{
                fontSize:16,
                color:'white',
              }
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
                  name: name1,
                  value: jw1,
                  label: {
                    show: true,
                    position: [26, 9],
                    color: '#fff',
                    formatter: `{b}: ${count1}`
                  }
                }
              ],   
            },
            {
              coordinateSystem: 'geo',
              type: "scatter",
              symbol: `image://${leftTopIcon}`,
              symbolSize: [173, 80],
              data:[
                {
                  name: name2,
                  value: jw2,
                  label: {
                    show: true,
                    position: [30, 9],
                    color: '#fff',
                    formatter: `{b}: ${count2}`
                  }
                }
              ],   
            }
          ]
        };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#world{
  width: 920px;
  height: 600px;
  margin-left:64px;
  margin-top:85px;
}
</style>