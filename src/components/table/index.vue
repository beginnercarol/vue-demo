<template>
  <div class="ife-table">
    <table>
        <thead>
            <th v-for="(col, index) in columns" :key="index" >{{col.title}}</th>
        </thead>
        <tbody>
            <tr v-for="(row, index) in dataSource" :key="index">
                <template v-for="(col) in columns">
                    <template v-if="row[col.dataIndex]">
                        <td :key="col.dataIndex">{{row[col.dataIndex]}}</td>
                    </template>
                    <template v-else>
                        <td :key="col.dataIndex">
                            <template v-if="row.status==1">
                                <button @click="handleAudit(row.id)">Audit</button>
                            </template>
                            <template v-else-if="row.status==2">
                                <button @click="handleDelete(row.id)">Delete</button>
                            </template>
                        </td>
                    </template>
                </template>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            
        }
    },
    model:{
        prop: 'dataSource',
        event: 'updateDataSource'
    },
    props: {
        dataSource: {
            type: Array
        },
        columns: {
            type: Array
        }
    },
    methods: {
        handleAudit: function(id){
            this.dataSource = this.dataSource.map(val=>{
                if(val.id==id){
                    val.status = 2;
                }
                return val;
            });
            this.$emit('updateDataSource',this.dataSource);
        },
        handleDelete: function(id){
            this.dataSource = this.dataSource.filter(val=>{
                return val.id!=id;
            });
            this.$emit('updateDataSource',this.dataSource);
        }
    }
}
</script>

<style>

</style>
