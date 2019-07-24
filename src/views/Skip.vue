<template>
  <div id="p-body">
     <div id="skip-header">
         <h1></h1>
     </div>
     <div id="skip-mid" class="rank">
         <div id="center">
             <h1>累计销售业绩</h1>
             <ul>
                 <li class="oneBox">2</li>
                 <li class="minBox">3</li>
                 <li class="minBox">3</li>
                 <li class="space">,</li>
                 <li class="minBox">4</li>
                 <li class="minBox">5</li>
                 <li class="minBox">6</li>
                 <li class="space">,</li>
                 <li class="minBox">7</li>
                 <li class="minBox">8</li>
                 <li class="minBox">9</li>
             </ul>
             <World />
             <!-- <div class="picLeft">
                <p class="picLeft-page">
                   澳大利亚:<span>&yen;</span>456,452,120.00
                </p> 
             </div>
             <div class="picRight">
                 <p class="picRight-page">
                    中国&nbsp;:&nbsp;<span>&yen;</span>&nbsp;456,452,120.00
                 </p>
             </div> -->
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
                  <li class="right-on-page1">
                      床垫销售额
                      <p class="right-on-num1">
                        166279<span>万</span>
                      </p>
                  
                  </li>
                  <li class="right-on-page2">
                      床品销售额
                      <p class="right-on-num2">
                          21247<span>万</span>
                      </p>
                  
                  </li>
                  <li class="right-on-page2">
                      床架销售额
                      <p class="right-on-num3">
                          7385<span>万</span>
                      </p>
                  </li>
              </ul>
          </div>
          <div id="right-under">
              <RightUnder></RightUnder>
          </div>
     </div>
    
     <div id="skip-footer">
    </div>

  </div> 
</template>



<script>

import LeftOn from '../components/table/LeftOn'
import LeftUnder from '../components/table/LeftUnder'
import World from '../components/World'

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
      "World": World,
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
 #skip-header{
    width:1920;
    height:107px;
    text-align:center;
    line-height:107px;
    background:url(../assets/images/title.png) no-repeat;
    background-size:100% 100%;
}
#skip-footer{
    width:100%;
    height:0vh;
    background-color:violet;
    text-align:center;
    /* line-height:1vh; */
}
#skip-mid{
 width:100%;
 height:973px;
}
.rank{
    float:left;
}
#center{
    margin-right:440px;
    margin-left:440px;
    text-align:center;
    box-sizing:border-box;
    height:100%;
    background:url(../assets/images/world.png) no-repeat;
    background-size:100% 100%;
}
#center h1{
    margin-top:14px;
    color:rgba(137,191,255,1);
    font-size:33px;
    font-weight:400;
    line-height:64px;
    font-family:'MicrosoftYaHei';
}
#center ul{
    margin-top:33px;
    margin-left:183px;
    /* width:674px; */
    position:relative;
    height:77px;
    /* border:1px solid yellow; */
    
}
.oneBox{
    border:2px solid rgba(90,156,255,1);
    width:46px;
    height:73px;
    opacity:0.67;
    float:left;
    color:rgba(95,187,240,1);
    font-size:46px;
    line-height:73px;
    margin-right:14.5px;
}
.minBox{
    border:2px solid rgba(90,156,255,1);
    width:46px;
    height:73px;
    opacity:0.67;
    margin:0 11.5px;
    color:rgba(95,187,240,1);
    font-size:46px;
    line-height:73px;
    float:left;
}
.space{
    width:15px;
    height:10px;
    float:left;
    font-size:50px;
    color:rgba(95,187,240,1);
    position:relative;
    bottom:-15px; 
}
#center::after{
    clear:both;
    display:block;
    content:"";
    height:0;
    overflow:hidden;
}

/* 左边报表 ---------------------------------------------------*/

#left{
    width:440px;
    /* background-color:darkkhaki; */
    margin-left:-100%;
    height:973px;
}
#left-on{
    /* border:1px solid black; */
    background:url(../assets/images/left1.png) no-repeat;
    background-size:100% 100%;
    height:452px;
    width:420px;
    margin-left:20px;
    margin-top:54px;
}
#left-under{
    background:url(../assets/images/left2.png) no-repeat;
    background-size:100% 100%;
    height:372px;
    width:420px;
    margin-left:20px;
    margin-top:30px;
}

/* 右边报表-------------------------------------------------------- */

#right{
    width:440px;
    /* background-color:thistle; */
    margin-left:-440px;
    height:973px;
}
#right-on{
    width:420px;
    height:230px;
    /* border:1px solid white; */
    background:url(../assets/images/rightBg.png) no-repeat;
    background-size:100% 100%;
    font-weight:700;
    overflow:hidden;
    font-size:18px;
    color:rgba(255,255,255,1);

}
.right-on-page1{
    margin-top:40px; 
    /* border:1px solid black; */
}
.right-on-page2{
    margin-top:48px;
    /* border:1px solid black;  */
}
#right-on p{
    /* display:block; */
    float:right;
    font-size:38px;
    margin-right:20px;
}
#right-on span{
    font-size:16px;
}
.right-on-num1{
    color:rgba(168,89,255,1)
}
.right-on-num2{
    color:rgba(52,171,255,1)
}
.right-on-num3{
    color:rgba(80,224,212,1)
}
#right-under{
    background:url(../assets/images/right2.png) no-repeat;
    background-size:100% 100%;
    height:556px;
    width:420px;
    margin-top:38px;
}
#right-on li{
    height:40px;
    margin:30px 0;
    margin-left:20px;
    line-height:40px;
}
#skip-footer{
    clear:both;
}

/* 世界地图文字标签 -------------------------------------------------*/

.picLeft{
  /* border:1px solid black; */
  width:492px;
  height:200px;
  background:url(../assets/images/左上@2x.png) no-repeat;
  background-size:80% 90%;
  position:absolute;
  top:335px;
  left:680px;
}
.picLeft .picLeft-page{
    height:24px;
    margin-top:21px;
    margin-left:39px;
    /* border:1px solid black; */
    float:left;
    font-size:15px;
    color:rgba(255,255,255,1);
    font-family:'DIN-Medium';
    font-weight:500;
    text-indent:6px;
    /* background-color:chartreuse; */
}
#center span{
    color:rgba(255,255,255,1);
    font-size:18px;
}
.picRight .picRight-page{
    height:24px;
    margin-top:122px;
    margin-left:80px;
    /* border:1px solid black; */
    float:left;
    font-size:15px;
    color:rgba(255,255,255,1);
    font-family:'DIN-Medium';
    font-weight:500;
    text-indent:6px;
    /* background-color:chartreuse; */
}
.picRight{
  /* border:1px solid black; */
  width:410px;
  height:176px;
  background:url(../assets/images/右下@2x.png) no-repeat;
  background-size:75% 95%;
  margin-top:-270px;
  margin-left:500px;
  position:absolute;
}
#p-body{
    min-width:950px;
    height:1080px;
    width:1920px;
    background:rgba(3, 6, 27,1);
    margin:0px;
    padding:0px;
}
body{
    margin:0;
    /* border:1px solid white; */
    padding:0;
}
html{
    padding:0 0;
    margin:0 0;
}
</style>