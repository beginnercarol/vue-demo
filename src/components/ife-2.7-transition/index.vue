<template>
<div class="trans-ani">
    <button id="toggle-trans" @click="show = !show">Click to show Trans</button>
    <transition name="fade">
        <p v-if="show">hello</p>
    </transition>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({

})
export default class TransAni extends Vue{
    show:Boolean = true;
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
