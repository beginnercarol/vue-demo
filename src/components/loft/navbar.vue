<template>
  <div class="navbar">
    <div>This is child</div>
    
    <slot name="header">
        If no content
    </slot>
    <slot name="message"></slot>
    <slot></slot>
    
    <footer>
        <template v-for="item in navList" >
          <span v-bind:key="item.value">
              <img v-bind:src="getImgSrc(item.icon)"/>
              <span>{{item.label}}</span>
          </span>
        </template>
    </footer>
    
  </div>
</template>

<script>

export default {
    components:{

    },
    props:['pathname'],
    data(){
        return {
            navList:[{
                label:'首页',
                value:'homepage',
                icon:'homepage',
            },{
                label:'发现',
                value:'discover',
                icon:'discover'
            },{
                label:'',
                value:'add',
                icon:'add'
            },{
                label:'消息',
                value:'message',
                icon:'message'
            },{
                label:'我的',
                value:'mine',
                icon:'mine'
            }],
        }
    },
    methods:{
        getImgSrc:function(value){
            return '../../assets/imgs'+value+'.png';
        }
    },
    computed:{
        
    }
}
</script>

<style>

</style>
