<template>
  <div>
    <h1>Liste des fournisseurs</h1>
    <Supplier />
  </div>
</template>

<script>
import Supplier from './Supplier';

export default {
  data() {
    let machin = [
      {
        id: 1,
        name: 'Fournisseur 1 ?',
        status: true,
        checkedAt: new Date(),
      },
      {
        id: 2,
        name: 'Fournisseur 2',
        status: false,
        checkedAt: new Date(),
      },
    ];
    return { coucou: machin };
  },
  components: {
    Supplier,
  },
};
</script>

<style></style>
