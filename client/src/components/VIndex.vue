<template>
  <section class="container">
    <div class="row">
      <h3 class="center teal-text">API Recargas</h3>
      <h4 class="center teal-text">( Vue js, Materialize CSS )( Node JS y MySQL )</h4>

      <div class="col s12">
        <img src="../assets/claro.png" alt="claro">
        <img src="../assets/kolbi.png" alt="kolbi">
        <img src="../assets/movistar.png" alt="kolbi">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.col {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 200px;
  max-height: 200px;
}
h3 {
  font-weight: bold;
}
</style>
