<template>
<div>
    <grand-child :msg="msg" @sendMsg="handleMsg"/>
    <div class="child">
        <p>我是中层组件,等待孙子组件输入...</p><p>{{msg}}</p>
    </div>
</div>
</template>

<script>
import GrandChild from './grand-child';
export default {
    components: {
        GrandChild
    },
    data:function(){
        return {
            data: this.msg
        }
    },
    props:{
        msg : {
            type : null
        }
    },
    methods: {
        handleMsg: function(val){
            console.log("middle=>",val);
            this.$emit('sendMsg',val)
        }
    },
    computed: {
        childMsg : function(){
            return ''
        }
    }
}
</script>

