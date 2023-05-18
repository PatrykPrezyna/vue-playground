<template>
  <v-network-graph
    class="graph"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
  />
  <pre class="layouts">{{ layoutsText }}</pre>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
  const nodes = {
    node1: { name: "Patryk" },
    node2: { name: "Lisa" },
    node3: { name: "Baby" },
    node4: { name: "English" },
    node5: { name: "https://medium.com/js-dojo/how-to-permanently-save-data-with-vuex-localstorage-in-your-vue-app-f1d5c140db69" },
    node6: { name: "Family & Friends" },
  }

  const edges = {
    edge1: { source: "node1", target: "node2" },
    edge2: { source: "node2", target: "node3" },
    edge3: { source: "node1", target: "node3" },
    edge4: { source: "node1", target: "node4" },
    edge5: { source: "node1", target: "node5" },
    edge6: { source: "node1", target: "node6" },
  }
  const layouts = ref({
  nodes: {
    node1: { x: 0, y: 0 },
    node2: { x: 50, y: 50 },
    node3: { x: 100, y: 0 },
    node4: { x: 150, y: 50 },
  },
})

const layoutsText = computed(() => {
  return JSON.stringify(layouts.value, null, 2)
})
</script>



<style>
.layouts {
  position: absolute;
  inset: auto 10px 10px auto;
  padding: 10px;
  background: #ffff0044;
  border-radius: 4px;
  font-size: 10px;
  line-height: 11px;
}
</style>
