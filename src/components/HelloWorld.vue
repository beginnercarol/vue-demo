<template>
  <div class="hello">
    <geo-map />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IfeEvent from './ife-2.4-event/index.vue';
import IfeForm from './ife-2.5-form/index.vue';
import VueJSX from './vue-jsx';
import IfeSlot from './ife-2.6-slot/index.vue';
import SlotJsx from './ife-slot-jsx';
import TransAni from './ife-2.7-transition/index';
import ExpandPanel from './ife-2.8-expansion-panel/index';
import MobApp from './MobApp';
import GeoMap from './pro-map/index.vue';
export default Vue.extend({
  name: 'HelloWorld',
  components: {
    IfeEvent,
    IfeForm,
    VueJSX,
    IfeSlot,
    SlotJsx,
    TransAni,
    ExpandPanel,
    MobApp,
    GeoMap
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
