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
    // axios.get('./geoJson/world.json')
    axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/national/sales/amount')
    .then((res) => {
      echarts.registerMap('world', res.data);
      let data =res.data.data;
      console.log(222,data);
      this.myEchart = echarts.init(document.getElementById("world"));
      let option = {
        series: {
          type: 'map',
          top: 50,
          left:90,
          zoom: 1.2,
          map: 'world',
          itemStyle:{
            areaColor:'rgba(32,63,158,1)',
            borderWidth:0,
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