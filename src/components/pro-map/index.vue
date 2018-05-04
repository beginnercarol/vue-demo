<template>
    <div class="container">
        <div id="geo-map"></div>
        <div class="panel">
            <el-button @click="bindEvent">绑定事件</el-button>  
            <el-button @click="removeEvent">移除事件</el-button>  
        </div>
    </div>
</template>


<script>
import Vue from 'vue';
// import AMap from 'Amap';
import Component from 'vue-class-component';


@Component({
    props: {
    }
})
export default class GeoMap extends Vue {

    //data
    map = null;
    latitude = null;
    longitude = null;
    clickListener = null;

    // lifecycles
    async created(){
        
    }

    async mounted(){
        const ctx = this;
        await window.navigator.geolocation.getCurrentPosition(getPosition,onError);
        function getPosition(position){
            return new Promise((resolve,reject)=>{
                ctx.latitude = position.coords.latitude.toFixed(5);
                ctx.longitude = position.coords.longitude.toFixed(5);
                ctx.checkAMap();
                resolve();
            })
        }
        function onError(err){
            console.log("error=>",err.code);
        }
    }
    
    async checkAMap(){
        if(window.AMap){
            this.initMap();
        }else{
            await this.loadMap();
            this.initMap(this.longitude,this.latitude);
        }
    }

    // methods
    loadMap(){
        return new Promise(function(resolve,reject){
            const script = document.createElement('script');
            const mapUI = document.createElement('script');
            const body = document.getElementsByTagName('body')[0];
            script.async = true;
            script.setAttribute('type','text/javascript');
            script.setAttribute('src','http://webapi.amap.com/maps?v=1.4.6&key=f819d770948605900eaaf2f9216012df');
            mapUI.async = true;
            mapUI.setAttribute('src','http://webapi.amap.com/ui/1.0/main-async.js');
            body.appendChild(script);
            body.appendChild(mapUI);
            script.onload = function(){
                console.log("load successfully",AMap);
                resolve();
            }
            mapUI.onload = function(){
               initAMapUI();
            }
            script.onerror = function(){reject()};
        })
        
    }

    initMap(longitude,latitude){
        const ctx = this;
        this.map = new AMap.Map('geo-map', {
                resizeEnable: true,
                zoom:11,
                center: [longitude, latitude]   
        })

        // 各类插件
        AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],()=>{
                this.map.addControl(new AMap.ToolBar());
                this.map.addControl(new AMap.Scale());
                this.map.addControl(new AMap.OverView({isOpen:true}));
            }
        );
    }

    bindEvent(){
        const ctx = this;
        let _onClick = function(e){
            console.log("event=>",e);
            new AMap.Marker({
                position : e.lnglat,
                map : ctx.map
            })
        }
        ctx.clickListener = AMap.event.addListener(ctx.map, "click", _onClick); //绑定事件，返回监听对象
    }

    removeEvent(){
        const ctx = this;
        AMap.event.removeListener(ctx.clickListener); //移除事件，以绑定时返回的对象作为参数
    }
}

</script>

<style>
#geo-map{
    height:500px;
}
.panel{
    position: absolute;
    bottom:200px;
    right:10px;
}
</style>

