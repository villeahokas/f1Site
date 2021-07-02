<template>
  <v-app>
      <router-view/>
      <NavBarBottom />
  </v-app>
</template>

<script>
import NavBarBottom from "./components/NavBarBottom.vue";

export default {
  components: { NavBarBottom},
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
