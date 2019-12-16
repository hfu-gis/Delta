<template>
  <div>
    <section class="imgupload">
      <v-app id="app" class="mt-0">
        <v-container grid-list-xl>
          <image-input v-model="avatar">
            <div slot="activator">
              <v-avatar size="200px" v-ripple v-if="!avatar" class="z">
                <span style="color: white">Füge Profilbild hinzu</span>
              </v-avatar>
              <v-avatar size="200px" v-ripple v-else class="mb-3">
                <img :src="avatar.imageURL" alt="avatar">
              </v-avatar>
            </div>
          </image-input>
          <v-slide-x-transition>
            <div v-if="avatar && saved == false">
              <v-btn class="u" @click="uploadImage" :loading="saving" style="color: white">Speichere Profilbild</v-btn>
            </div>
          </v-slide-x-transition>
        </v-container>
      </v-app>
    </section>
    <section>

    </section>
  </div>
</template>

<script>
import imageinput from "./imageinput";
export default {
  name: "profil",
  data () {
    return {
      avatar: null,
      saving: false,
      saved: false
    }
    },
  components: {
    ImageInput: imageinput
  },
  watch:{
    avatar: {
      handler: function() {
        this.saved = false
      },
      deep: true
    }
    },
  methods: {
    uploadImage() {
      this.saving = true
      setTimeout(() => this.savedAvatar(), 1000)    },
    savedAvatar() {
      this.saving = false
      this.saved = true
    }
  }
};
</script>

<style scoped>
  .z{background: #424242}
  .u{background: #424242}
</style>
