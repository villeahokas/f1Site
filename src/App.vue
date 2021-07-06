<template>
  <v-app>
    <TheFooter />
    <router-view />
    <TheNavBarBottom />
  </v-app>
</template>

<script>
import TheNavBarBottom from "./components/TheNavBarBottom.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {  TheFooter, TheNavBarBottom },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
