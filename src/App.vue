<template>
  <div id="app">
    <router-view></router-view> 
    
    
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
     
  },
}
</script>
<style lang="scss"> 
 @import "./assets/all";
 body{
   font-family: Andale Mono, monospace;
   font-size: 16px;
 }
 a{
   cursor:pointer;
   
 }
</style>
