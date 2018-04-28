<template>
  <div class="hello">
    <!-- <ife-event/> -->
    <ife-form />
    <vue-j-s-x />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IfeEvent from './ife-2.4-event/index.vue';
import IfeForm from './ife-2.5-form/index.vue';
import VueJSX from './vue-jsx/index.vue';
export default Vue.extend({
  name: 'HelloWorld',
  components: {
    IfeEvent,
    IfeForm,
    VueJSX
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
