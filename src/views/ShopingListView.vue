<template>
  <div class="about">
    <h1>{{ header }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const header = ref("Shopping List")
const items = ref([{id:1, label:'socks'},{id:1, label:'chocolate'},{id:1, label:'cola'}])

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
