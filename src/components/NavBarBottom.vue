<template>
  <v-bottom-navigation absolute color="white" grow>
    <v-btn @click="goHome()">
      <span>List</span>

      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn @click="openAddSelect()">
      <span>Add</span>

      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>

    <v-dialog v-model="showNav" persistent max-width="800">
      <v-card>
        <v-container>
          <v-card-title class="text-h5 grey lighten-2">
            Select which one to add:
          </v-card-title>

          <v-card-actions>
            <v-btn @click="openAddDriverForm">
              <span>Add Driver</span>

              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="openAddTeamForm">
              <span>Add Team</span>

              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn color="primary" @click="openAddSelect()"
              >Close</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-bottom-navigation>
</template>

<script>
export default {
  computed: {
    showNav() {
      return this.$store.state.showAddSelect;
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    openAddSelect() {
      this.$store.commit("toggleAddSelect");
    },
    openAddDriverForm() {
      this.$store.commit("toggleAddDriverForm");
    },
    openAddTeamForm() {
      this.$store.commit("toggleAddTeamForm");
    },
  },
};
</script>

<style>
</style>