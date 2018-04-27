<template>
  <table>
    <thead>
        <template v-for="head in sortColumns" >
            <td :key="head">{{head}}</td>
        </template>
    </thead>
    <tbody>
        <tr v-for="obj in dataSource" :key="obj.dataIndex">
            <template v-for="(item,index) in sortColumns">
                <TableCell :key="index"
                    :obj="obj[item]"
                    :editable="editable"
                />
            </template>
            <td>
                <span @click="handleEditable(obj.dataIndex)">Editable</span>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import TableCell from './table-cell';

export default {
  components: {
      TableCell
  },
  data(){
      return {
          editable:false
      }
  },
  mounted(){
    console.log("computed=>",this.sortColumns);
  },
  props: {
      columns: {
          type: Array,
          required: true
      },
      dataSource: {
          type:Array,
      },
  },
  computed: {
        sortColumns:function(){
            console.log("h");
            const columns = this.columns.slice(0,this.columns.length-1);
            return columns.map((item)=>item.dataIndex)
        }
    },
    methods: {
        handleEditable(){
            console.log("editable");
            this.editable=!this.editable;
            console.log("editable",this.editable);
        }
    }
}
</script>

<style>

</style>
