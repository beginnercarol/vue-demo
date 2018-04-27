<template>
<div class="loft">
    <div>This is parent</div>
    <Navbar>
        <h1 slot="header">Heading</h1>
        <p>Article</p>
        <p slot="message">{{msg}}</p>
        <div slot-scope="text"></div>
    </Navbar>
    <CompList :items="dataList">
        <li slot="item" slot-scope="props">{{props.text}}</li>
    </CompList>
</div>
</template>

<script>
import Navbar from './navbar';
import CompList from './comp-list';

export default {
    components:{
        Navbar,CompList
    },
    data(){
        return {
            msg:'from parent',
            dataList: [{
                text: 'Mon'
            },{
                text: "Tue"
            },{
                text: "Wed"
            },{
                text: "Thur"
            },{
                text: "Fri"
            },{
                text: "Sat"
            },{
                text: "Sun"
            }]
        }
    },
    props:{

    },
    computed:{

    }

}
</script>

<style>
ul{
    list-style: none;
    padding:0;
}
li{
    display: inline-block;
    width:30%;
}
</style>
