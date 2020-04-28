<template>
  <div class="fournisseurs">
    <h3>{{name}}</h3>
    <h4 class="text-lg" v-if="status">A du stock ? Ok</h4>
    <h4 class="text-lg text-red-700" v-else>A du stock ? Ko</h4>
    <p class="text-sm text-gray-600">Dernière relève de stocks : {{checkedAt.toLocaleString()}}</p>
  </div>
</template>


<script>
export default {
  props: ['name', 'status', 'checkedAt'],
};
</script>

<style lang=""></style>