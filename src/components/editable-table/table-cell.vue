<template>
    <td v-if="!editable">{{obj}}</td>
    <td v-else>
        <select v-model="value">
            <option value="">请选择</option>
            <option v-for="(value,key) in selectList"
                :key="key"
                :value="value">{{value}}</option>
        </select>
    </td>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    beforeUpdate:function(){
        console.log("changed editble=>",this.editable);
    },
    props: {
        obj: {
            type: [String,Boolean]
        },
        editable: {
            type: Boolean
        },
        selectList: {
            type: Array
        },
        value: {
            type: [String,Boolean]
        }
    }
}
</script>

<style>

</style>
