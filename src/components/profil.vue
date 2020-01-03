<template>
  <div>
    <article class="settings">
      <section class="imgupload">
        <v-app>
          <div>
            <image-input v-model="avatar">
              <div slot="activator">
                <v-avatar size="200px" v-ripple v-if="!avatar" class="z">
                  <span style="color: white">Füge Profilbild hinzu</span>
                </v-avatar>
                <v-avatar size="200px" v-ripple v-else class="mb-3">
                  <img :src="avatar.imageURL" alt="avatar" />
                </v-avatar>
              </div>
            </image-input>
            <v-slide-x-transition>
              <div v-if="avatar && saved == false">
                <v-btn
                  class="u"
                  @click="uploadImage"
                  :loading="saving"
                  style="color: white"
                  >Speichere Profilbild</v-btn
                >
              </div>
            </v-slide-x-transition>
          </div>
        </v-app>
      </section>
      <section class="profilinfoeditor">
        <v-text-field label="Username" v-model="userData.username" required  maxlength="25"
                      :rules="nameRules"/>
        <v-text-field label="Password" v-model="changedpassword" required  maxlength="25"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      :rules="nameRules"
        />
        <v-text-field label="Vorname" v-model="firstname" required  maxlength="25"
                      :rules="nameRules"/>
        <v-text-field label="Nachname" v-model="surname" required  maxlength="25"
                      :rules="nameRules"/>
        <v-text-field label="Email" v-model="userData.email" required  maxlength="25"
                      :rules="nameRules"/>
        <v-btn text outlined shaped
               @click="update">Aktuallisieren
        </v-btn>
      </section>
    </article>
  </div>
</template>

<script>
  import db from "../db";
import imageinput from "./imageinput";
export default {
  name: "profil",
  data() {
    return {
      avatar: null,
      saving: false,
      saved: false,
      profilpicture: '',
      firstname: '',
      surname: '',
      changedpassword: '',
      userData:{
        username: 'Admin',
        password: '',
        email: '',
      },
      nameRules: [
        value => (!!value && value.trim().length > 0) || 'Field is required',
        value => (value && value.length <= 25) || 'Field must be less than 25 characters',
      ],
    };
  },
  components: {
    ImageInput: imageinput
  },
  watch: {
    avatar: {
      handler: function() {
        this.saved = false;
      },
      deep: true
    }
  },
  methods: {
    uploadImage() {
      this.saving = true;
      setTimeout(() => this.savedAvatar(), 1000);
    },
    savedAvatar() {
      this.saving = false;
      this.saved = true;
    },
    update() {
      let docRef = db.collection('nutzer').doc(userData.username);
      docRef.set(this.userData);
      docRef.update();
    },
  },
};
</script>

<style scoped>
.z {
  background: #424242;
}
.u {
  background: #424242;
}
  .profilinfoeditor{float: right;margin-left: 5%}
  .imgupload{float: left}
  .settings{display: flex;width: auto}
</style>
