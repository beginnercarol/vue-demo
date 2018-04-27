<template>
  <div class="hello">
    <!-- <ife-event/> -->
    <ife-form />
  </div>
</template>

<script>
import Vue from 'vue';
import IfeEvent from './ife-2.4-event/index';
import IfeForm from './ife-2.5-form/index';
export default Vue.extend({
  name: 'HelloWorld',
  components: {
    IfeEvent,
    IfeForm
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
