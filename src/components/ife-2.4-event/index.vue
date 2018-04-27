<template>
<div>
    <child-input :msg="msg" @sendMsg="handleMsg"/>
    <div class="parent">
        <p>我是最高层组件,等待子组件输入...</p><p>{{msg}}</p>
    </div>
</div>
</template>

<script>
import ChildInput from './child';
export default {
    components: {
        ChildInput,
    },
    data: function(){
        return {
            msg : 'waiting'
        }
    },
    methods: {
        handleMsg:function(data){
            // this.$set(this.msg,'msg',data);
            this.msg = data;
            console.log("parent=>",data,this.msg);
        }
    }

}
</script>

