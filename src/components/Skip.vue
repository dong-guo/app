<template>
  <div id="p-body">
     <div id="skip-header">
         <h1>header</h1>
     </div>
     <div id="skip-mid" class="rank">
         <div id="center">
                <p>{{page1}}</p>
         </div>
     </div>
     <div id="left" class="rank">
          <p>{{page2}}</p>
     </div>
     <div id="right" class="rank">
          <p>{{page3}}</p>
     </div>
    
     <div id="skip-footer">
          <h1>footer</h1>
    </div>
  </div> 
</template>



<script>

export default{
  name:'skip',
  data(){
    return{
        page1:("中间好像很吃亏"),
        page2:("在左边"),
        page3:("在右边")
    }
  }
  
}
</script>



<style scoped>
*{
    margin:0px;
    padding:0px;
}
 h1{
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
    margin-right:150px;
    margin-left:200px;
    text-align:center;
    box-sizing:border-box;
    background-color:wheat;
    height:100%;
}
#left{
    width:200px;
    background-color:darkkhaki;
    margin-left:-100%;
    height:80%;

}
#right{
    width:150px;
    background-color:thistle;
    margin-left:-150px;
    height:80%;
}
#skip-footer{
    clear:both;
}
#p-body{
    min-width:400px;
    height:100vh;
    width:100%;
}
body{
    margin:0;
}
html{
    padding:0;
}
</style>