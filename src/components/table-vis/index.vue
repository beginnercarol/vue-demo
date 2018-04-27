<template>
  <table>
    <thead>
        <template v-if="columns.length">
            <template v-for="item in sortedColumns" >
                <td v-bind:key="item">{{item}}</td>
            </template>
        </template>
        <template v-else>
            Nothing
        </template>
    </thead>
    
    <TableRow 
        v-for="obj in dataSource"
        v-bind:key="obj.id"
        v-bind:obj="obj"
        v-bind:sortedColumns="sortedColumns" />
  </table>
</template>

<script>
import TableRow from './table-row';

export default {
  components:{
      TableRow
  },
  props:{
      columns:{
          type: Array,
          required: true
      },
      dataSource:{
          type:Array,
      },
      sortedColumns:{
          type:Array
      }
  },
  computed:{
      getDataItem(dataIndex){
          return this.columns.filter((val)=>val.dataIndex==dataIndex)
      }
  }
}
</script>

<style>
table{
    margin:10px auto;
    border:1px solid #999;
    border-collapse: collapse
}
td{
    border:1px solid #999;
    padding:5px;
}
thead{
    background-color: #ccc;
}
</style>
