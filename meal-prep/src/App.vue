<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="BOB Logo"
          class="shrink mr-2"
          contain
          src=""
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="BOB Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=""
          width="100"
        />
      </div>
    </v-app-bar>
    <v-content>
     <router-view/>

    </v-content>
  </v-app>
</template>

<script>


export default {


  data: () => ({
    //
  })
};
</script>
