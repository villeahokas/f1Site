<template>
  <v-row justify="center">
    <v-dialog
      v-model="showForm"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeForm">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Add team</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-divider></v-divider>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="teamName"
                  :rules="teamNameRulse"
                  label="Team name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      teamName: '',
      teamNameRules: [
        v => !!v || 'Team name is required',
      ],
    }),
  computed: {
    showForm() {
      return this.$store.state.showAddTeamForm;
    },
  },
  methods: {
    closeForm() {
      this.$store.commit("toggleAddTeamForm");
    },
  },
};
</script>

<style>
</style>