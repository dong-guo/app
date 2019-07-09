<template>
  <div>
    <div id="skip-header"><h1>这是一个头</h1></div>
    <div id="skip-mid">
       <div id="center" class="rank">
           <div class="mid">
             <p>{{page1}}</p>
           </div>
       </div>
       <div id="left" class="rank">
           <p>{{page2}}</p>
       </div>
       <div id="right" class="rank">
           <p>{{page3}}</p>
       </div>
    </div>
    <div id="skip-footer"><h1>这是一个脚</h1></div>
  </div> 
</template>



<script>

export default{
  name:'skip',
  data(){
    return{
        page1:("有一个国家，叫做“姜”，兴于一柄魔剑，也亡于这柄魔剑。从天而降的魔剑，为龙姓夺得了国主之位，为姜国开创了中兴盛世。但，随着岁月的磨蚀，魔剑却逐渐丧失了魔力……姜国末代太子龙阳，为了恢复魔剑的魔力，不惜从杨国策反了铸剑大师穆玄石，冶铁铸剑，企图恢复魔剑的魔力。杨国则厉兵秣马，准备与姜国一战……姜国与杨国明争暗斗，吞并与反吞并的序幕徐徐拉开。两国无法相容，只能争个你死我活"),
        page2:("将进酒，是唐代以前乐府歌曲的一个题目，内容大多咏唱饮酒放歌之事。在这首里李白“借题发挥”借酒浇愁，抒发自己的愤激情绪。这首诗非常形象的表现了李白桀骜不驯的性格：一方面对自己充满自信，孤高自傲；一方面在政治前途出现波折后，又流露出纵情享乐之情。全诗气势豪迈，感情奔放，语言流畅，具有很强的感染力将进酒，是唐代以前乐府歌曲的一个题目，内容大多咏唱饮酒放歌之事。在这首里李白“借题发挥”借酒浇愁，抒发自己的愤激情绪。这首诗非常形象的表现了李白桀骜不驯的性格：一方面对自己充满自信，孤高自傲；一方面在政治前途出现波折后，又流露出纵情享乐之情。全诗气势豪迈，感情奔放，语言流畅，具有很强的感染力"),
        page3:("古代汉语是与现代汉语相对而言的，它指的是“五四“运动以前历代汉民族所使用的语言。古代汉语是与现代汉语相对而言的，它指的是“五四“运动以前历代汉民族所使用的语言。古代汉语是与现代汉语相对而言的，它指的是“五四“运动以前历代汉民族所使用的语言。古代汉语是与现代汉语相对而言的，它指的是“五四“运动以前历代汉民族所使用的语言。古代汉语是与现代汉语相对而言的，它指的是“五四“运动以前历代汉民族所使用的语言。古代汉语是与现代汉语相对而言的，它指的是“五四“运动以前历代汉民族所使用的语言")
    }
  }
  
}
</script>



<style scoped>
*{
    margin:0 0;
    padding:0 0;
}
 #skip-header{
     border:1px solid black;
     width:100%;
     height:60px;
     background-color:aqua;
 }
 #skip-mid{
     border:1px solid black;
     width:100%;
     height:100%;
     /* background-color:darkgoldenrod; */
 }
 
#skip-header h1{
     text-align:center;
     line-height:60px;
 }
.center{
    width:100%;
    background-color:chartreuse;
}
.rank{
    float:left;
}
.mid{
    padding-left:210px;
    padding-right:160px;
    background-color:azure;
}
#left{
    width:200px;
    background-color:coral;
    margin-left:-100%;
    border:1px solid black;
}
#right{
    width:150px;
    background-color:darkgreen;
    margin-left:-152px;
    border:1px solid black;
}
#skip-footer{
     border:1px solid black;
     width:100%;
     height:80px;
     background:cadetblue;
     clear:both;
 }
 #skip-footer h1{
     text-align:center;
     line-height:80px;
 }
</style>