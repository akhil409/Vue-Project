<template>
  <v-app class="main">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script> 

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>

  .main{
      background-color:whitesmoke;
   }

</style>
