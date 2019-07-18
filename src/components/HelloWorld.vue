<template>
  <div id="helloWorld">
    <div v-for="movie in movies">
      <p>{{movie.model}}</p>
      <p>{{movie.qty}}</p>
      <!-- <img src="{{movie.img}}" alt=""> -->
    </div>
    <ul>
      <li> name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<input type="text" name="FirstName" value=""> </li>
      <li> passworld:&nbsp; <input type="password" name=LastName value=""></li>
      <li><router-link to="/Home">
                <button>log&nbsp;&nbsp;on</button>
             </router-link>
      </li>
    </ul>  
    <div id="echartContainer" style="width:500px; height:500px"></div>
  </div>
</template>

<script>

import axios from 'axios'

var echarts = require('echarts')


export default {
  name: 'HelloWorld',
  data(){
    return{
        msg:'Hello dong',
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
         var pull = [];
         for (var i=0; i<data.data.length;i++){
                var movies={
                    qty:data.data[i].qty,
                    model:data.data[i].model,
                    // qty:data.data[i].qty
                }
                pull.push(movies);
            }
         this.movies=pull;
        //  console.log(typeof(movies))
     }
  },
  mounted() {
  function fetchData(cb) {
    // 通过 setTimeout 模拟异步加载
    setTimeout(function () {
        cb({
            categories: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
            data: [5, 30, 36, 10, 10, 20]
        });
    }, 1000);
  }
  fetchData(function (data) {
      myChart.setOption({
          xAxis: {
              data: data.categories
          },
          series: [{
              // 根据名字对应到相应的系列
              name: '销量',
              data: data.data
          }]
      });
  })
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echartContainer'));
// 绘制图表
myChart.setOption({
    title: { text: 'ECharts 销售数据' },
    tooltip: {},
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: []
    }]
});

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
  background-color:darkseagreen;
  height:100%;
}
ul{
  height:200px;
  width:300px;
  background-color:chartreuse;
  border:2px solid black;
  margin:30vh 40vh;
  border-radius:10px;
  float:left;
}
li{
  list-style-type:none;
  margin:30px auto;
}
button{
  background-color:darkorchid;
  width:80px;
  height:30px;
  border-radius:8px;
  font-weight:700;
  outline:none;
  /* letter-spacing: 15px; */
  text-align:center;
}
#echartContainer{
  float:left;
  margin-top:18vh;
}
#helloWorld{
  height:00px;
  background-color:darkturquoise;
}
</style>
