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
            <v-btn dark text @click="handleSubmit"> Add and Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-divider></v-divider>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="teamName"
                  :rules="teamNameRules"
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
      teamName: '',
      teamNameRules: [
        v => !!v || 'Team name is required',
      ],
      srcAvatar: "f1-logo.jpg"
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
    handleSubmit() {
      const team = {
        teamName: this.teamName,
        src: this.srcAvatar,
      };
      this.$store.commit("addTeam", team);
      this.$store.commit("toggleAddTeamForm");
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>

<style>
</style>