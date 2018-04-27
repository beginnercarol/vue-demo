<template>
  <tr>
      <template v-for="idx in sortedColumns">
          <td v-bind:key="idx">{{getItem(idx)}}</td>
      </template>
  </tr>
</template>

<script>
export default {
  props:{
    item:{
        type:Object
    },
    dataSource:{
        type:Array
    },
    sortedColumns:{
        type:Array
    },
    obj:{
        type:Object
    }
  },
  methods:{
      getItem(dataIndex){
          return this.obj[dataIndex]
      }
  }
}
</script>
