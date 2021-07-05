<template>
  <v-row justify="center">
    <v-dialog
      v-model="showForm"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="red">
          <v-btn icon dark @click="closeForm">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Add driver</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="handleSubmit">Add and Save </v-btn>
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
                  :rules="teamNameRules"
                  label="Team name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <input type="file" @change="onFileSelected" />
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
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    teamName: "",
    teamNameRules: [(v) => !!v || "Team name is required"],
    selectedFile: null,
    srcAvatar: "generic.jpg",
    srcBackground: "genericAuto.jpg",
  }),
  computed: {
    showForm() {
      return this.$store.state.showAddDriverForm;
    },
  },
  methods: {
    closeForm() {
      this.$store.commit("toggleAddDriverForm");
    },
    handleSubmit() {
      const driver = {
        name: this.firstname,
        team: this.teamName,
        srcAvatar: this.srcAvatar,
        srcBackground: this.srcBackground,
      };
      this.$store.commit("addDriver", driver);
      this.$store.commit("toggleAddDriverForm");
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>

<style>
</style>