<template>
  <div>
    <v-carousel v-model="model" class="favlist" height="400" >
      <v-carousel-item
              v-for="(favourite, i) in favouriten"
              :key="favourite"
      >
        <v-sheet
                :img="favourite"
                height="100%"
                tile
        >
          <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
          >
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "favourite",
  data () {
    return {
      favouriten: [
        'white',
      ],
      model: 0,
    }
  },
};
</script>

<style scoped>

.favlist{align-content: center;justify-content: center;width: 50%;height: 50%; margin-left: 17%}
</style>
