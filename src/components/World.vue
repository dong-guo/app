<template>
      <div id="world">
        <!-- world -->
         
  </div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
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
        console.log('请求地图数据',worldJson)
        let data =res.data.data
        console.log('数据得到',data)
        let worldData = [];
        for(var i =0; i < data.length; i++){
            let amount = data[i].amount;
            let state = data[i].state;
            worldData.push({
              "name":state,
              "value":amount,
              "label":{
                show:true,
              },
              symbolSize:[300,120],
              label:{
                color:'white',
                show:true,
                position:'insideleft',
                offset:[30,15],
                fontSize:18,
              },
            })
        }
        console.log("地图数组",worldData);
        echarts.registerMap('world', worldJson,);
        this.myEchart = echarts.init(document.getElementById("world"));
        let option = {
            series: {
              type: 'map',
              data:[],
              nameMap:{
                  'china':'中国',
                  'canada':'加拿大'
                },     
              top: 50,
              left:90,
              zoom: 1.2,
              map: 'world',
              itemStyle:{
                areaColor:'rgba(32,63,158,1)',
                borderWidth:0,
              },
              emphasis:{
                label:{
                  show:true,
                  color:'white',
                  fontWeight:500,
                  fontSzie:18,
                  rich:{},
                },
                itemStyle:{
                  areaColor:'rgba(89,164,255,1)',
                }
              },
              label:{
                fontSize:20,
                //  backgroundColor:{
                //      image:'../assets/images/左上@2x.png'
                //  },
                //  width:197,
                //  height:100,
                //  rich:{
                // //     // backgroundColor:{
                // //     //   //  image:'../assets/images/左上@2x.png'
                // //     // },
                //  }
              },
              markPoint:{
                // symbol:'image://../assets/images/左上@2x.png',
                
                // symbolOffset:[0,0],
                // showAllSymbol:true,
                // symbolSize:[100,170],
                emphasis:{
                    label:{
                      formatter:'{b}:{c}',
                      // show:true,
                    }
                },
                data:[]
                         
                      
              },
              
            },
            grid:{
              left:'0%',
              top:'0%'
            }
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