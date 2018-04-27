<template>
    <div clss="personal-info">
        <div class="info-form">
            <input v-model="personName" placeholder="name">
            <input v-model="age" placeholder="age">
            <textarea v-model="info" placeholder="info"></textarea>
        </div>
        <div class="show-info clearfix">
            <button @click="clearInfo">Clear</button>
            <p>Name:{{personName}}</p>
            <p>Age:{{age}}</p>
            <p>Info:{{info}}</p>
        </div>
    </div>
    
</template>

<script>
export default {
  data:function(){
      return {
          personName:null,
          age:null,
          info:null
      }
  },
  methods:{
      clearInfo:function(){
          this.personName = null;
          this.age = null;
          this.info = null;
      }
  }
}
</script>

<style>
.clearfix:after{
    content:"";
    display:block;
    height:0;
    clear: both;
}
.personal-info{
    width:80%;
    margin:0 auto;
}
input {
    border:1px solid #999;
    border-radius:5px;
    margin:5px;
    width:40%;
}
textarea{
    width:80%;
    border:1px solid #999;
    border-radius:5px;
    margin:5px;
    
}
.show-info{
    text-align: left;
    padding-left:20px;
}
button{
    float:right;
}
</style>
