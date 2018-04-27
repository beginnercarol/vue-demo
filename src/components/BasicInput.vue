<template>
    <div>
        <input 
        class="basic-input" 
        v-bind:value="value"
        v-on="listener">
           
    </div>
</template>

<script lang="ts">
export default {
  props: {
      value: {
          type: String,
          default: ''
      }
  },
  computed: {
      listener(){
        return {
            // Pass all component listeners directly to input
            ...this.$listeners,
            // Override input listener to work with v-model
            input: event => this.$emit('input', event.target.value)
        }
      }
  }
}
</script>

<style scoped>
div{
    padding:5px;
}
input{
    border-radius:4px;
    
}
</style>
