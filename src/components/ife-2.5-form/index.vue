<template>
<div class="ife-form">
    <input v-model="msg" >
    <br/>
    <input type="checkbox" v-model="dataList" id="ck" value="carol"/>
    <label for="ck">Carol</label>
    <input type="checkbox" v-model="dataList" id="bl" value="Jack"/>
    <label for="ck">Jack</label>
    <input type="checkbox" v-model="dataList" id="ye" value="Tom"/>
    <label for="ck">Tom</label>
    <button @click="submitForm">Submit</button>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    props: {
    }
})
export default class App extends Vue {
    msg: string = 'ts';
    dataList: Array<string|null> = [];
    getMsg(){

    }
    submitForm(){
        console.log("msg",this.msg);
        console.log("dataList",this.dataList);
    }
}

</script>

<style>

</style>
