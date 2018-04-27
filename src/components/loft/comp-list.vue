<template>
  <div class="comp-list">
      <ul>
        <slot name="item" v-for="item in items"
          :text="item.text"
        ></slot>
      </ul>
  </div>
</template>

<script>
export default {
  data:function(){
    return {

    }
  },
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style>

</style>
