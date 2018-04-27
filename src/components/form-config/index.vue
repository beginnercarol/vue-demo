<template>
    <div>
    <form>
        <label for="cube-code">
            cube-code:
            <input 
                id="cube-code" 
                name="cubeCode" 
                v-model="cubeCode"
                placeholder="cube code">
        </label>
        <label for="cube-code">
            cube-type:
            <select name="cubeType" v-model="cubeType">
                <option default value="">请选择</option>
                <option value="1">Bai</option>
                <option value="2">Gui</option>
                <option value="3">Xun</option>
            </select>
        </label>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>

        <button type="submit"
            @click.prevent="handleSubmit">Submit</button>
        <div>{{formValue}}</div>
    </form>
    <Table 
        v-bind:columns="columns"
        v-bind:dataSource="dataSource"
        v-bind:sortedColumns="sortedColumns"/>
    <EditableTable
        v-bind:columns="columns"
        v-bind:dataSource="dataSource"/>
    </div>
</template>

<script>
import Table from '../table-vis/index';
import EditableTable from '../editable-table/index';

export default {
    components:{
        Table,EditableTable
    },
    beforeMount(){
        console.log("========beforeMount========");
        // console.log("data=>",this.data());
        this.columns = [{
                title: '指标编码',
                dataIndex: 'measureCode',
                width:50,
            },{
                title: '指标名称',
                dataIndex: 'measureName',
                width:100,
            },{
                title: '指标分类',
                dataIndex: 'measureCategory',
                width:100,
            },{
                title: '指标类型',
                dataIndex: 'measureType',
                width:100,
            },{
                title: '操作',
                dataIndex: 'operation',
                width:100, 
            }];
        this.dataSource=[{
                id:1,
                measureCode:'measureCode',
                measureName:'measureName',
                measureCategory:'measureCategory',
                measureType:'measureType',
            },{
                id:2,
                measureCode:'外婆家',
                measureName:'绿茶',
                measureCategory:'新白鹿',
                measureType:'第二乐章'
            },{
                id:3,
                measureCode:'菠萝海鲜饭',
                measureName:'冬荫功汤',
                measureCategory:'马来西亚柑橘蜜',
                measureType:'猪颈肉'
            }]
        console.log("*********beforeMount*******");
    },
    data(){
        return {
            cubeCode:'',
            cubeType:'',
            formValue:'',
            checkedNames:[],
            columns:[],
            dataSource:[],
            Na:'lala'
        }
    },
    props:{

    },
    methods:{
        handleSubmit(){
            this.formValue={
                cubeCode:this.cubeCode,
                cubeType:this.cubeType
            }
        }
    },
    computed:{
        sortedColumns:function(){
            return this.columns.map((val)=>{
                return val.dataIndex
            })
        }
    }
}
</script>
