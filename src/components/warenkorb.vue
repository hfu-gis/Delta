<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      class="warlist"
    >
      <v-carousel-item
        v-for="(item, i) in user.warenkorb"
        :key="i"
        :src="item.src"
        v-text="item.titel"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import db from "../db";

export default {
  name: "warenkorb",
  data() {
    return {
      user: {
        warenkorb: []
      },
      model: 0
    };
  },
  mounted() {
    db.collection("Nutzer")
      .doc("Nickhaec")
      .get()
      .then(res => {
        this.user.warenkorb = res.data().warenkorb;
      });
  },
  methods: {}
};
</script>

<style scoped>
.warlist {
  align-content: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  margin-left: 17%;
}
</style>
