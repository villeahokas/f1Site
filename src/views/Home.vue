<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="..\assets\f1logoT.png"
      height="200"
      color="#C0C0C0"
    >
      <v-toolbar-title></v-toolbar-title>

      <v-btn icon href="https://www.youtube.com/watch?v=gf-D6zEKgpg&t=19s">
        Häkkinen
      </v-btn>
    </v-toolbar>

    <h1>Drivers</h1>

    <v-virtual-scroll :items="drivers" :item-height="300" height="1000">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-content>
            <SingleDriver :driver="item" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>

    <h1>Teams</h1>

    <v-virtual-scroll :items="teams" :item-height="300" height="1000">
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
    }
  },
};
</script>
