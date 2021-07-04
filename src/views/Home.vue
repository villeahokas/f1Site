<template>
  <div>
    <v-footer padless class="footer" >
      <v-img src="..\assets\f1logoT.png"> </v-img>
    </v-footer>

    <h1 class="text-h5 grey">Drivers</h1>

    <v-virtual-scroll :items="drivers" :item-height="300" height="400">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-content>
            <SingleDriver :driver="item" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>

    <h1 class="text-h5 grey lighten-2">Teams</h1>

    <v-virtual-scroll :items="teams" :item-height="300" height="400">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-content>
            <SingleTeam :team="item" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import SingleDriver from "../components/SingleDriver.vue";
import SingleTeam from "../components/SingleTeam.vue";

export default {
  components: { SingleDriver, SingleTeam },
  computed: {
    drivers() {
      return this.$store.state.drivers;
    },
    teams() {
      return this.$store.state.teams;
    },
  }
};
</script>

<style scoped>
  .footer {
    animation: footerColorFlasher 0.1s infinite;
  }

  @keyframes footerColorFlasher {
    0% {background-color: red;}
    25%{background-color:yellow;}
    50%{background-color:green;}
    66%{background-color: black ;}
    75%{background-color:brown;}
    100% {background-color: red;}
  }
</style>
