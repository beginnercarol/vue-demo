<template>
    <input :value="data" @change="handleMsg">
</template>

<script>
export default {
    components: {
    },
    data: function(){
        return {
            data : this.msg
        }
    },
    props: {
        msg: {
            type: null,
        }
    },
    methods: {
        handleMsg: function(event){
            this.data = event.target.value;
            console.log(event);
            this.$emit('sendMsg',this.data)
        }
    }
}
</script>

