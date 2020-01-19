<template>
  <div>
    <div id="prfl">
      <v-card class="profilpiktschor">
        <div class="bild">
          <img
            :src="imageUrl"
            height="300"
            width="200"
            v-if="imageUrl"
            class="profilbild"
          />
        </div>
        <v-card-actions class="upload">
          <v-btn @click="upload" style="background: red;border:black solid 1px"
            >Update</v-btn
          >
        </v-card-actions>
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
              v-model="user.username"
              prepend-inner-icon="mdi-account"
              label="Username"
            ></v-text-field>
          </div>
        </div>
      </v-card>
    </div>
    <v-card id="liefa">
      <v-card-title>Lieferadresse</v-card-title>
      <div class="set">
        <div class="Profileinstellungen">
          <v-text-field
            name="anschrift"
            :rules="[rules.required]"
            v-model="user.lieferadresse.anschrift"
            prepend-inner-icon="mdi-account"
            label="Anschrift"
          ></v-text-field>
          <v-text-field
            name="stadt"
            :rules="[rules.required]"
            v-model="user.lieferadresse.stadt"
            prepend-inner-icon="mdi-city"
            label="Stadt"
          ></v-text-field>
          <v-text-field
            name="bundesland"
            :rules="[rules.required]"
            v-model="user.lieferadresse.bundesland"
            prepend-inner-icon="mdi-account"
            label="Bundesland"
          ></v-text-field>
          <v-text-field
            name="Plz"
            :rules="[rules.required]"
            v-model="user.lieferadresse.plz"
            prepend-inner-icon="mdi-account"
            label="Postleitzahl"
          ></v-text-field>
          <v-select
            label="Land"
            :items="countries"
            v-model="user.lieferadresse.land"
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
      success: false,
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
  computed: {},
  created() {
    // gettet Länder aus DB
    let docRef = db.collection("Länder");
    docRef.get().then(docs => {
      docs.forEach(doc => this.countries.push(doc.data().name));
    });
  },

  methods: {
    // lässt Bild temporär anzeigen
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
    // pickt Bild
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
      this.update();
    },
    // pusht Daten von Data in Datenbank
    update: function() {
      let docRef = db.collection("Nutzer").doc(this.user.username);
      docRef
        .set(this.user)
        .then(() => (this.success = true))
        // eslint-disable-next-line
              .catch(error => console.log('tut net', error))
      docRef.update();
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
  width: 40%;
  margin-left: 33.3%;
}
#prfl {
  display: flex;
}
.bild {
  z-index: 1;
}
.upload {
  position: absolute;
  top: 100%;
}
</style>
