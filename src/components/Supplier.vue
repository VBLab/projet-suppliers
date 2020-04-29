<template>
  <div class="fournisseurs">
    <h3>{{ name }}</h3>
    <h4 v-if="status" style="color:#196862">En stock</h4>
    <h4 class="stocknul" v-else>Plus de stock</h4>
    <p class="maj">Stocks mis à jour le : {{ checkedAt.toLocaleString() }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'status', 'checkedAt'],
};
</script>

<style>
.stocknul {
  color: brown;
}
</style>
