
<template>
  <v-card>
    <h1>{{ header }}</h1>
  <form 
		class="add-item-form"
  	@submit.prevent="saveItem"       
	>
    <input 
    	v-model.trim="newItem"
 			type="text" 
      placeholder="Add an item"
    >
    <button 
      class="btn btn-primary"
    >
      Save Item
    </button>
   </form>
   <p>{{ characterCount }}/100</p>
    <ul>
      <li v-for="({id, label}, index) in reversedItems" :key="id">
        {{index}} - {{label}}
      </li>
    </ul>
  </v-card>
  
</template>

<script setup>
import { ref, computed } from 'vue'

const header = ref('Shopping List App')
const items = ref([
  {id: 1, label: "10 party hats"},
  {id: 2, label:"2 board games"},
  {id: 3, label: "20 cups"}
])
const newItem = ref("")
const saveItem = ()=>{
	items.value.push({id: items.value.length + 1,label: newItem.value})
  newItem.value = ""
}
const characterCount = computed(()=>{
  return newItem.value.length
})
const reversedItems = computed(()=>{
  return [...items.value].reverse()
})
</script>

<style>
.add-item-form,
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-item-form input {
  width: 70%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f8;
  color: #606f7b;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.5rem 0;
}

.btn {
  border: none;
  border-radius: 3px;
  margin: auto 0;
  padding: 0.5rem 0.75rem;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in;
}

.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}

.btn-primary {
  background: #6cb2eb;
  color: #fff;
}

.btn-primary:hover {
  background: #3490dc;
}
</style>
