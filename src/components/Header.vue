<template>
  <header v-on:click="changeTitle">
      <h1>{{title1}}{{title}}</h1>
      
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
    title:{
      type:String
    }
  },
  data(){
    return{
        title1:"vue.js Demo"
    }
  },
  methods:{
    changeTitle:function(){
      this.title1="changed";
      // this.$emil("ttleChange","子传父")
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:lightgreen;
    padding:10px;
}
h1{
    color:#222;
    text-align:center;
}
header{
  height:10vh;
}
</style>