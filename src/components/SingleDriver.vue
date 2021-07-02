<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400" class="mt-10 ma-100" >
        <v-img
          height="200px"

          :src="require('../assets/' + driver.srcBackground + '')"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >

            <v-toolbar-title class="text-h6 white--text pl-0">
              
            </v-toolbar-title>

            <v-spacer></v-spacer>

          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="80">
              <img
                alt="user"
                :src="require('../assets/' + driver.srcAvatar + '')"
              >
            </v-avatar>
            <p class="ml-3">
              {{ driver.name }}
            </p>
          </v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
            {{ driver.team }}
        </v-card-subtitle>


        <v-card-text class="text--primary">
         
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
    props: ["driver"],

}
</script>

<style>

</style>