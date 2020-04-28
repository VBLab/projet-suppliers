<template>
  <div>
    <h1>Liste des fournisseurs</h1>
    <Supplier
      v-for="supFournisseurs in mesSuppliers"
      :name="supFournisseurs.name"
      :status="supFournisseurs.status"
      :checkedAt="supFournisseurs.checkedAt"
      v-bind:key="supFournisseurs.id"
    />
  </div>
</template>

<script>
import Supplier from './Supplier';

export default {
  data() {
    let date = new Date();
    let result = date.toLocaleString();
    let monTableau = [
      {
        id: 1,
        name: 'Fournisseur 1 ?',
        status: true,
        checkedAt: result,
      },
      {
        id: 2,
        name: 'Fournisseur 2',
        status: false,
        checkedAt: result,
      },
    ];
    return { mesSuppliers: monTableau };
  },
  components: {
    Supplier,
  },
};
</script>

<style></style>
