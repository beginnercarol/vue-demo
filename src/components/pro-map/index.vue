<template>
  <div id="geo-map"></div>
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
    map = null;
    // lifecycles
    async created(){
        
    }
    async mounted(){
        // this.initMap();
        
        if(window.AMap){
            this.initMap();
        }else{
            await this.loadMap();
            this.initMap();
        }
    }

    // methods
    loadMap(){
        return new Promise(function(resolve,reject){
            const script = document.createElement('script');
            const body = document.getElementsByTagName('body')[0];
            script.async = true;
            script.setAttribute('type','text/javascript');
            script.setAttribute('src','http://webapi.amap.com/maps?v=1.4.6&key=f819d770948605900eaaf2f9216012df');
            body.appendChild(script);
            console.log("script=>",script);
            script.onload = function(){
                console.log("load successfully",AMap);
                resolve();
            }
            script.onerror = function(){reject()};
        })
        
    }
    initMap(){
        this.map = new AMap.Map('geo-map', {
            resizeEnable: true,
            zoom:11,
            center: [116.397428, 39.90923]        
        });
        console.log(this.map);
    }

    // render(){
    //     return (
    //         <div id="geo-map"></div>
    //     )
    // }
    

}

</script>

<style>
#geo-map{
    height:500px;
}
</style>

