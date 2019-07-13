<template>
  <div id="p-body">
     <div id="skip-header">
         <h1></h1>
     </div>
     <div id="skip-mid" class="rank">
         <div id="center">
                <p>{{page1}}</p>
         </div>
     </div>
     <div id="left" class="rank">
         <div id="left-on">
             <LeftOn></LeftOn>
        </div>
         
         <div id="left-under">
             <LeftUnder></LeftUnder>
         </div>
     </div>
     <div id="right" class="rank">
          <div id="right-on">
              <ul>
                  <li>{{page31}}</li>
                  <li>{{page32}}</li>
                  <li>{{page33}}</li>
              </ul>
          </div>
          <div id="right-under">
              <RightUnder></RightUnder>
          </div>
     </div>
    
     <div id="skip-footer">
          <h1>footer</h1>
    </div>

  </div> 
</template>



<script>

import LeftOn from '../components/table/LeftOn'
import LeftUnder from '../components/table/LeftUnder'
// var echarts = require('echarts')
import RightUnder from '../components/table/RightUnder'

export default{
  name:'skip',
  data(){
    return{
        page1:("中间好像很吃亏"),
        page21:("在左上边"),
        page22:("在左下边"),
        page31:("床垫销售额"),
        page32:("床品销售额"),
        page33:("床架销售额"),
        page34:("在右下边")
    }
  },
  components:{
      "LeftOn":LeftOn,
      "LeftUnder":LeftUnder,
      "RightUnder":RightUnder
  }
 
}
</script>



<style scoped>
*{
    margin:0px;
    padding:0px;
}
li{
    list-style-type:none;
}
 #skip-header h1{
    width:100%;
    height:10vh;
    text-align:center;
    line-height:10vh;
    background:url(../assets/images/title.png) no-repeat;
    background-size:100% 100%;
}
#skip-footer{
    width:100%;
    height:10vh;
    background-color:violet;
    text-align:center;
    line-height:10vh;
}
#skip-mid{
 width:100%;
 height:80%;
}
.rank{
    float:left;
}
#center{
    margin-right:300px;
    margin-left:300px;
    text-align:center;
    box-sizing:border-box;
    /* background-color:wheat; */
    height:100%;
}
#left{
    width:300px;
    /* background-color:darkkhaki; */
    margin-left:-100%;
    height:80%;
}
#left-on{
    /* border:1px solid black; */
    background:url(../assets/images/left1.png) no-repeat;
    background-size:100% 100%;
    height:260px;
    width:290px;
    margin-left:10px;
}
#left-under{
    background:url(../assets/images/left2.png) no-repeat;
    background-size:100% 100%;
    height:225px;
    width:290px;
    margin-left:10px;
    margin-top:20px;
}
#right{
    width:300px;
    background-color:thistle;
    margin-left:-300px;
    height:80%;
}
#right-on{
    width:290px;
    height:175px;
    /* border:1px solid white; */
    background:url(../assets/images/rightBg.png) no-repeat;
    background-size:100% 100%;
    color:white;
    font-weight:700;
    overflow:hidden;
    font-size:14px;
}
#right-under{
    background:url(../assets/images/right2.png) no-repeat;
    background-size:100% 100%;
    height:310px;
    width:290px;
    margin-top:20px;
}
#right-on li{
    height:30px;
    margin:30px 0;
    margin-left:20px;
}
#skip-footer{
    clear:both;
}
#p-body{
    min-width:400px;
    height:100vh;
    width:100%;
    background:rgb(15, 15, 70);
}
body{
    margin:0;
}
html{
    padding:0;
}
</style>