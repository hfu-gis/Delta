<template>
  <div class="zwischenelement">
    <input id="checkbox" type="checkbox" />
    <section class="boxinhalt">
      <v-container>
        Hier Text
      </v-container>
    </section>
    <v-container class="labelbox">
      <label for="checkbox" class="textbutton"
        ><h1 class="haheins">Was ist der Delta Shop?</h1></label
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped>
.boxinhalt {
  display: none;
  height: 0;
  -webkit-animation-name: example;
  -webkit-animation-duration: 2s;
  animation-name: example;
  animation-duration: 2s;
}
@-webkit-keyframes example {
  from {
    height: 0;
  }
  to {
    height: 200px;
  }
}
#checkbox {
  display: none;
}
.labelbox {
  text-align: center;
}
#checkbox:checked ~ .boxinhalt {
  display: block;
  height: 200px;
}
.textbutton h1 {
  font-size: 20px;
  font-weight: lighter;
}
.textbutton h1:hover {
  font-weight: bold;
}
</style>
