<template>
<div>
    <div class="default-style" :class="{'modified-style':squStyle}">
      <button @click="toggleStyle">Change Style</button>
    </div>
    <div class="default-style" :class="handleStyle">
        ??
      <button @click="changeSty">Change Style</button>
    </div>
</div>
  
</template>

<script>
export default {
    data:function(){
        return {
            squStyle : false,
            changeStyle : false,
        }
    },
    methods: {
        toggleStyle: function(){
            this.squStyle = !this.squStyle
        },
        changeSty: function(){
            this.changeStyle = !this.changeStyle
        }
    },
    computed: {
        handleStyle: function(){
            return {
                'ife-style': this.changeStyle
            }
        }
    }
}
</script>

<style>
.default-style{
    border:1px solid salmon;
    width:200px;
    height: 100px;
}
.modified-style{
    border: 1px dotted lightseagreen;
    width:200px;
    height: 100px;
}
.ife-style{
    color:blue;
}
</style>
