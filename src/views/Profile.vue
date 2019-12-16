<template>
  <div>
    <section class="erstesection">
      <about />
    </section>
    <section class="zweitesection">
        <article class="navi">
          <nav class="navigation">
            <ol class="navliste">
                <li style="margin-top: 0%"><a  @click="switchTo('profil')">Profil</a></li>
                <li><a  @click="switchTo('editor')">Profileinstellungen</a></li>
                <li><a  @click="switchTo('favouriten')">Favouriten</a></li>
                <li><a  @click="switchTo('bestellverlauf')">Bestellverlauf</a></li>
                <li><a  @click="switchTo('zahlmoeglichkeiten')">Zahlmöglichkeiten</a></li>
            </ol>
          </nav>
        </article>
        <article class="inhalt">
            <keep-alive>
                <component v-bind:is="currentPage">
                </component>
            </keep-alive>
        </article>
    </section>
  </div>
</template>

<script>
import about from "../components/about";
import profil from "../components/profil";
import editor from "../components/editor";
import favouriten from "../components/favouriten";
import bestellverlauf from "../components/bestellverlauf";
import zahlmoeglichkeiten from "../components/zahlmoeglichkeiten";
export default {
  name: "Profile",
  components: {
    about,
      profil,
      editor,
      favouriten,
      bestellverlauf,
      zahlmoeglichkeiten
      },
    data: () => ({
        currentPage: 'profil',
    }),
    methods: {
        switchTo: function(page) {
            this.currentPage = page;
        }
    },
};
</script>

<style scoped>
    .navliste li{list-style-type: none;margin-top: 50%;margin-left: -9%}
    .navliste a{color: white}
    .navi{width: 10%;background: #424242;height: 500px;border: #424242 solid 1px}
    .zweitesection{display: flex}
    .inhalt{margin-left: 5%}
    .navliste a:hover{font-weight: bold}
</style>
