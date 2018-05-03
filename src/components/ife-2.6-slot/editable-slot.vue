<template>
    <div class="inner-slot">
        <slot name="title" :title="obj.title"></slot>
        <slot name="main" :main="obj.main"></slot>
        <slot name="footer" :footer="obj.footer"></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// export default Vue.extend({
  
// })
@Component({
    props: {
        obj: Object
    }
})
export default class InnerSlot extends Vue {
    todoList: Array<Object>;
}
</script>

<style>

</style>
