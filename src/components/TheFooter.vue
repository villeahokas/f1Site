<template>
  
    <v-footer padless class="appFooter" >
      <v-img src="..\assets\f1logoT.png"> </v-img>
    </v-footer>

</template>

<script>
export default {

}
</script>

<style scoped>
    .appFooter {
    animation: footerColorFlasher 3s infinite;
  }

  @keyframes footerColorFlasher {
    0% {background-color: white;}
    25%{background-color:silver;}
    50%{background-color:grey;}
    75%{background-color:silver;}
    100% {background-color: white;}
  }
</style>