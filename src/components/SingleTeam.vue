<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400" class="ma-4" >
        <v-img
          height="200px"

          :src="require('../assets/' + team.src + '')"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >

            <v-toolbar-title class="text-h6 white--text pl-0">
              
            </v-toolbar-title>

            <v-spacer></v-spacer>

          </v-app-bar>

          
        </v-img>

        <v-card-subtitle class="pb-0">
            {{ team.teamName }}
        </v-card-subtitle>


        <v-card-text class="text--primary">
         
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
    props: ["team"],

}
</script>

<style>

</style>