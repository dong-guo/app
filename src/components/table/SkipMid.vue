<template>
         <div id="skipMid">
             <ul>
                 <li class="oneBox">{{page1()}}</li>
                 <li class="minBox">{{page2()}}</li>
                 <li class="minBox">{{page3()}}</li>
                 <li class="space">,</li>
                 <li class="minBox">{{page4()}}</li>
                 <li class="minBox">{{page5()}}</li>
                 <li class="minBox">{{page6()}}</li>
                 <li class="space">,</li>
                 <li class="minBox">{{page7()}}</li>
                 <li class="minBox">{{page8()}}</li>
                 <li class="minBox">{{page9()}}</li>
                 <li class="minBox">{{page10()}}</li>
             </ul>
         </div>      
</template>


<script>

import axios from 'axios' 
var echarts = require('echarts')

export default{
  name:'SkipMid',
  data(){
     
  },
    methods:{
       getData(){
           this.$axios.get('https://mobiletest.derucci.net/consumer-admin/api/sales/v1/sales/performance')
           .then(res=>{
               let data =res.data.data;
            //    console.log(typeof(data));
               data = data.replace(/,/g, "");
               data = parseInt(data);
               console.log(110,data);
               let arr = data.toString();
              let prr = arr.replace(/\d(?=(?:\d{1})+\b)/g,'$&,');
               console.log(prr);
               let page1 =prr[0];
               let page2 =prr[2];
               let page3 =prr[4];
               let page4 =prr[6];
               let page5 =prr[8];
               let page6 =prr[10];
               let page7 =prr[12];
               let page8 =prr[14];
               let page9 =prr[16];
               let page10 =prr[18];
               console.log(page2);
               
           })
           .catch(error=>{
               console.log(error);
           })
       },
    },
  mounted() {
      this.getData();
   } 
}
</script>



<style scoped>
#LeftOn{
    /* border:1px solid black; */
    /* background:url(../../assets/images/left1.png) no-repeat;
    background-size:100% 100%; */
    height:452px;
    width:402px;
    /* padding-left:19px;
    padding-top:100px;
    padding-bottom:53px; */
    /* margin-left:10px; */

}
</style>