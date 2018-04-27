<template>
<div>

  <div>MyVue{{msg}}</div>
  <BasicInput
    v-model="nextTodoText"
    v-on:keydown.enter="addTodo"/>
    <ul v-if="todoList.length">
        <TodoListItem
            v-for="item in todoList"
            v-bind:item="item"
            v-bind:key="item.id"
            v-on:removeTodo="removeTodo"
        />
    </ul>
    <ul v-else>
        <li>There is nothing more to show</li>
    </ul>
</div>
</template>


<script>
import BasicInput from './BasicInput';
import TodoListItem from './TodoListItem';

let nextTodoId = 0;
export default {
  name: 'MyVue',
  components:{
      BasicInput,TodoListItem
  },
  data(){
      return {
          nextTodoText:'',
          todoList: [
				{
					id: nextTodoId++,
					text: 'Learn Vue'
				},
				{
					id: nextTodoId++,
					text: 'Learn about single-file components'
				},
				{
					id: nextTodoId++,
					text: 'Fall in love'
				}
			]
      }
  },
  props: {
    msg: String,
  },
  methods:{
      addTodo(){
          const nextTodoTrimmed = this.nextTodoText.trim();
          if(nextTodoTrimmed){
              this.todoList.push({
                  id:nextTodoId++,
                  text:nextTodoTrimmed
              })
          }
          this.nextTodoText = '';
      },
      removeTodo(itemId){
          this.todoList = this.todoList.filter((item)=>item.id!=itemId);
      }
  }
  
}
</script>

<style>
ul{
    list-style: none;
    padding-left:0;
    margin:0 auto
}
</style>