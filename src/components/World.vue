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
      echarts.registerMap('world', res.data)
      this.myEchart = echarts.init(document.getElementById("world"))
      let option = {
        series: {
          type: 'map',
          top: 0,
          left: 0,
          zoom: 0.9,
          map: 'world'
        }
      };
      // var myChart = echarts.init(document.getElementById('main'));
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
  width: 100%;
  height: 100%;
  /* background: red; */
}
</style>