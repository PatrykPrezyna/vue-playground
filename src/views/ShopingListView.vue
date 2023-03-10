<template>
  <div class="about">
    <h1>{{ header }}</h1>
    <input v-model.trim="newItem" placeholder="Add new Item">
    <h1>{{ newItem }}</h1>
    <ul>
      <li v-for="({id, label}, index) in items" :key="id">{{index}} {{ label }}</li>
    </ul>
    <button class="btn" v-on:click="items.push({id: items.lenght +1, label: newItem})"> Add new Item</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const header = ref("Shopping List")
const items = ref([{id:1, label:'socks'},{id:2, label:'chocolate'},{id:3, label:'cola'},{id:4, label:'cola'}])
const newItem = ref('test')
const highPriority = ref(true)

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
