<template>
  <v-network-graph
    class="graph"
    :nodes="nodes"
    :edges="edges"
  />
</template>

<script setup lang="ts">
  const nodes = {
    node1: { name: "Patryk" },
    node2: { name: "Lisa" },
    node3: { name: "Baby" },
    node4: { name: "English" },
    node5: { name: "career" },
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
</script>



<style>
.graph {
  width: 1000px;
  height: 1000px;
  border: 1px solid #000;
}
</style>
