<template>
  <div class="zwischenelement">
    <input id="checkbox" type="checkbox" />
    <section class="boxinhalt">
      <v-container class="cvont">
        <div class="Info">
          Bei uns bekommt man die neusten und aktuellsten Filme, Serien und
          Spiele
        </div>
        <div class="Kurzübersicht">
          <div @click="$router.push({ name: 'Home' })" class="infor">
            <h3 class="üb">
              Startseite
            </h3>
            <v-icon style="font-size: 35px">mdi-view-list</v-icon>
          </div>
          <div @click="$router.push({ name: 'Verzeichnis' })" class="infor" id="i">
            <h3 class="üb">
              Verzeichnis
            </h3>
            <v-icon style="font-size: 35px">mdi-shape</v-icon>
          </div>
          <div @click="$router.push({ name: 'Releases' })" class="infor">
            <h3 class="üb">
              Aktuelleste News und Release Informationen
            </h3>
            <v-icon style="font-size: 35px">mdi-newspaper</v-icon>
          </div>
        </div>
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
.cvont {

}
.Info {
  font-weight: lighter;
  text-align: center;
  font-size: 40px;
}
.Kurzübersicht {
  display: flex;
  margin-top: 2%;
}
.Kurzübersicht h3 {
  font-weight: lighter;
  font-size: 20px;
}
.infor {
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-left: 19%;
}
.üb {
  text-align: center;
}
.infor:hover {
  cursor: pointer;
  color: #9e9e9e;
}
</style>
