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
    // 试验不用--------------------------------------------------
        // function world1(){
        //   var ppd = new promise(function(resolve,reject){
        //       axios.get('./geoJson/world.json').then((res) =>{
        //         let worldJson =res.data
        //       })
        //   return ppd;
        //   })
        // }
        // function world2(){
        //   var ppd = new promise(function(resolve,rejcet){
        //     axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/national/sales/amount').then((res)=>{
        //       let data =res.data.data
        //       console.log(110,data)
        //   })
        // },
     


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
            }
          })
        }
        console.log("数据赋值",worldData);
        echarts.registerMap('worldData', worldJson);
        this.myEchart = echarts.init(document.getElementById("world"));
        let option = {
            series: {
              type: 'map',
              data:worldData,
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
                  z:5,
                  show:true,
                  color:'white',
                  fontWeight:500,
                  fontSzie:18,
                  // backgroundColor:{
                  //   image:'../assets/images/左上@2x.png'
                  // },
                  // width:197,
                  // height:200,
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
                symbol:'circle',
                symbolSize:[100,170],
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
  /* padding-top:100px; */
  /* background:url(../assets/images/world.png) no-repeat;
  background-size:100% 100%; */
  /* border:1px solid green; */
}


</style>