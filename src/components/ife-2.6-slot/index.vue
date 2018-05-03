<template>
    <div class="editable-slot">
        <h2>Tasks</h2>
        <div class="inner-list">
            <template v-for="(item,index) in dataList">
                <inner-slot :key="index" :obj="item">
                    <p slot='title' slot-scope="props">{{props.title}}</p>
                    <p slot='main' slot-scope="props">{{props.main}}</p>
                    <p slot='footer' slot-scope="props">{{props.footer}}</p>
                </inner-slot>
            </template>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import InnerSlot from './editable-slot.vue';
import { CreateElement } from 'vue/types/vue';

@Component({
    components: {
        InnerSlot,
    }
})
export default class IfeSlot extends Vue {
    dataList = [{
        title:'this is title',
        main: 'this is main part',
        footer: 'this is footer',
    },{
        title:'Holiday',
        main: 'Holiday',
        footer: '2018-04-29',
    }];
    
}
</script>

<style>

</style>
