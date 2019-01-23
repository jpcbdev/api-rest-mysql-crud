<template>
  <main id="app">
    <!-- Nav -->
    <div class="nav-wrapper">
      <nav class="purple">
        <div class="container">
          <ul>
            <li>
              <router-link :to="{name:'home'}">Inicio</router-link>
            </li>
            <li>
              <router-link :to="{name:'employees'}">Empleados</router-link>
            </li>
            <li>
              <router-link :to="{name:'companies'}">Compañias</router-link>
            </li>
            <li>
              <router-link :to="{name: 'credits'}">Recargas</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- Router view -->
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "app"
};
</script>


<style scoped>
main {
  height: 100%;
  width: 100%;
}

.footer {
  position: fixed;
  bottom: 0%;
  width: 100%;
}
</style>
