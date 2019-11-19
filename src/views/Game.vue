<template>
    <div id="vue-app">
      <!--MonsterPNG-->
      <div id="Monster">
        <img src="/img/Monster1.png">
      </div>
      <!--Monster health-->
      <div id="Monster-health">
        <div v-bind:style="{width: health + '%'}"></div>
      </div>
      <!--game controls-->
      <div id ="controls">
        <!-- Um die zwei Türen zu zeigen sollten wir auch v-show="ended" nehmen dann erscheinen sie erst wenn der gengener besiegt wurde-->
        <button v-on:click="punch" v-show="!ended">Punch</button>
        <button v-on:click="tackle" v-show="!ended">Tackle</button>
        <button v-on:click="restart">Restart</button>
      </div>
    </div>
</template>

<script>
  data:{
    health: 100,
            ended=false
  }
  methods:{
    punch= function() {
      this.health -= 10;
      if (this.health<=0){
        this.ended=true;
      }
    },
    restart=function() {
      this.health =100;
      this.ended=false;
    },
    tackle=function() {
      this.health -= 25;
      if (this.health<=0){
        this.ended=true;
      }
    }
  }
</script>
<style scoped>
  #Monster{
    width: 200px;
    height: 500px;
    margin:0 auto;
    background: url() center no-repeat;
    background-size: 80%;
  }
  #Monster-health {
    width: 200px;
    border: 2px solid #000000;
    margin: 0 auto 20px auto;
  }
  #Monster-health div{
    height: 20px;
    background:crimson;
  }
  #controls{
    width: 120px;
    margin: 0 auto;
  }
</style>