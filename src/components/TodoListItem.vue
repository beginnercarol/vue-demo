<template>
<div>
    <li :item="item">
    {{item.text}}
    <span 
        v-on:click="$emit('removeTodo',item.id)">
        X
    </span>
    </li>
    
</div>
</template>

<script>
export default {

  data(){
      return {

      }
  },
  props:{
      item: {
          type: Object,
          required: true
      }
  },

  computed:{

  }
}
</script>

<style scoped>
li{

    width:60%;
    margin:0 auto;
    padding:3px;
    border:1px dotted green;
    margin:10px auto;
}
span{
    display: inline-block;
    border-radius:3px;
    border:1px solid #999;
    width:10%;
}
</style>

