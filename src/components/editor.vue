<template>
  <div>
    <div id="prfl">
      <v-card class="profilpiktschor">
        <div class="bild">
          <!--          <h2 style="font-weight: lighter;">-->
          <!--            Dein Profilbild-->
          <!--          </h2>-->
          <img
            :src="imageUrl"
            height="300"
            width="200"
            v-if="imageUrl"
            class="profilbild"
          />
        </div>
      </v-card>
      <v-card class="profilsettings">
        <v-card-title>Profil</v-card-title>
        <div class="bildinput">
          <v-text-field
            label="Bildwahl"
            @click="pickFile"
            v-model="imageName"
            prepend-inner-icon="mdi-paperclip"
            class="bildinputs"
          ></v-text-field>
          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          />
        </div>
        <div class="set">
          <div class="Profileinstellungen">
            <v-text-field
              name="vorname"
              :rules="[rules.required]"
              label="Vorname"
              v-model="user.vorname"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              name="nachname"
              :rules="[rules.required]"
              label="Nachname"
              v-model="user.nachname"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              name="email"
              :rules="[rules.required]"
              label="E-Mail"
              v-model="user.email"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              name="nutzername"
              :rules="[rules.required]"
              v-model="user.nutzername"
              prepend-inner-icon="mdi-account"
              label="Username"
            ></v-text-field>
          </div>
        </div>
        <v-card-actions>
          <v-btn @click="upload">Upload</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-card class="profilsettings" id="liefa">
      <v-card-title>Lieferadresse</v-card-title>
      <div class="set">
        <div class="Profileinstellungen">
          <v-text-field
            name="anschrift"
            :rules="[rules.required]"
            v-model="user.anschrift"
            prepend-inner-icon="mdi-account"
            label="Anschrift"
          ></v-text-field>
          <v-text-field
            name="stadt"
            :rules="[rules.required]"
            v-model="user.stadt"
            prepend-inner-icon="mdi-city"
            label="Stadt"
          ></v-text-field>
          <v-text-field
            name="bundesland"
            :rules="[rules.required]"
            v-model="user.bundesland"
            prepend-inner-icon="mdi-account"
            label="Bundesland"
          ></v-text-field>
          <v-text-field
            name="Plz"
            :rules="[rules.required]"
            v-model="user.plz"
            prepend-inner-icon="mdi-account"
            label="Postleitzahl"
          ></v-text-field>
          <v-select
            label="Country"
            :items="countries"
            v-model="user.land"
            required
            clearable
            :rules="selectionRules"
          ></v-select>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";
export default {
  name: "editor",
  data() {
    return {
      photo: null,
      photo_url: null,
      dialog: false,
      imageName: "",
      imageUrl: "",
      imageFile: "",
      imgUrls: [],
      countries: [],
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min. 8 characters"
      },
      selectionRules: [value => !!value || "Field is required"],
      user: {
        username: "",
        vorname: "",
        nachname: "",
        email: "",
        lieferadresse: {
          vorname: "",
          nachname: "",
          land: "",
          plz: "",
          anschrift: "",
          stadt: "",
          bundesland: ""
        }
      }
    };
  },
  computed: {
    // user(){
    //   return this.$store.getters.user
    // }
  },
  methods: {
    getImages: function() {
      db.collection("images")
        .get()
        .then(snap => {
          const array = [];
          snap.forEach(doc => {
            array.push(doc.data());
          });
          this.imgUrls = array;
        });

      this.imageName = "";
      this.imageFile = "";
      this.imageUrl = "";
    },
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;

          this.imageFile = files[0];
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    upload: function() {
      let storageRef = firebase.storage().ref();
      let mountainsRef = storageRef.child(`Profilbild/${this.imageName}`);
      mountainsRef.put(this.imageFile).then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          this.imageUrl = downloadURL;
          const bucketName = "image-upload-62ed7.appspot.com";
          const filePath = this.imageName;
          db.collection("nutzer").add({
            downloadURL,
            downloadUrl:
              `gs://gis-deltaforce-bob.appspot.com${bucketName}/Profilbild` +
              "%2F" +
              `${encodeURIComponent(filePath)}?alt=media`,
            timestamp: Date.now()
          });
          this.getImages();
        });
      });
    }
  }
};
</script>

<style scoped>
.profilsettings {
  width: 40%;
  margin-left: 20%;
}
.profilbild {
  z-index: 2;
}
.set {
  display: flex;
}
.Profileinstellungen {
  float: right;
  justify-content: flex-end;
  align-content: flex-end;
  margin-left: 5%;
}
.profilpiktschor {
  width: 200px;
  height: 300px;
}
.bildinputs {
  width: 36%;
  margin-left: 5%;
}
#liefa {
  margin-top: 5%;
}
#prfl {
  display: flex;
}
.bild {
  z-index: 1;
}
</style>
