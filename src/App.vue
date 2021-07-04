<template>
  <v-app>
      <Footer />
      <router-view/>
      <NavBarBottom />
  </v-app>
</template>

<script>
import NavBarBottom from "./components/NavBarBottom.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBarBottom, Footer },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
