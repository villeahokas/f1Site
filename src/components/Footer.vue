<template>
  
    <v-footer padless class="footer" >
      <v-img src="..\assets\f1logoT.png"> </v-img>
    </v-footer>

</template>

<script>
export default {

}
</script>

<style>
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