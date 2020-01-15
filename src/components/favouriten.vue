<template>
  <div>
    <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            class="favlist"
    >
      <v-carousel-item
              v-for="(item,i) in user.favoriten"
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
  name: "favourite",
  data() {
    return {
      user: {
        favoriten: []
      },
      model: 0
    };
  },
  mounted() {
    db.collection("Nutzer").doc('Nickhaec').get()
    .then(res => {
      // alert(res.data().favoriten)
        this.user.favoriten = res.data().favoriten;
    })
  },
  methods:{

  }
};
</script>

<style scoped>
.favlist {
  align-content: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  margin-left: 17%;
}
</style>
