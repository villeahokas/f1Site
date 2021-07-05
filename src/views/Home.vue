<template>
  <div>
    <h1 class="text-h5 grey">Drivers</h1>
    <v-sheet class="mx-auto" max-width="1500">
      <v-slide-group multiple show-arrows class="pa-4">
        <v-slide-item v-for="item in drivers" :key="item.name">
          <SingleDriver :driver="item" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <h1 class="text-h5 grey lighten-2">Teams</h1>

    <v-sheet class="mb-15" max-width="1500">
      <v-slide-group multiple show-arrows class="pa-4">
        <v-slide-item v-for="item in teams" :key="item.name">
          <SingleTeam :team="item" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <AddDriver />
    <AddTeam />
  </div>
</template>

<script>
import SingleDriver from "../components/SingleDriver.vue";
import SingleTeam from "../components/SingleTeam.vue";
import AddDriver from "../components/AddDriver.vue";
import AddTeam from "../components/AddTeam.vue";

export default {
  data: () => ({
    model: null,
  }),
  components: { SingleDriver, SingleTeam, AddDriver, AddTeam },
  computed: {
    drivers() {
      return this.$store.state.drivers;
    },
    teams() {
      return this.$store.state.teams;
    },
  },
};
</script>

<style>
</style>
