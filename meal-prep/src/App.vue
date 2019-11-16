<template>
     <div>
         <v-app>
            <v-app-bar app color="#181818" height="90pm">
              <div class="d-flex align-center">
                <v-img alt="BOB Logo" class="shrink mr-2" contain src="./assets/bots-logo.png" height="90" width="180"  align="center" style="align-items: center; justify-content: center; display: flex"/>
                <v-img alt="BOB Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="" width="100"/>
              </div>
            </v-app-bar>
                 <v-content style="background-color: #333333">
                     <div>
                         <v-sheet height="110px" style="background-color: blue">
                             <v-container>
                                 <v-row style="float: right">
                                     <img src="./assets/menue.png" height="90" width="90" @click.stop="drawer = !drawer"/>
                                 </v-row>
                             </v-container>
                             <v-navigation-drawer v-model="drawer" absolute right :value="drawer" style="background-color: limegreen">
                                 <v-btn color="grey" dark @click="drawer = !drawer" style="margin-top: 50px">
                                     <v-icon dark left>mdi-arrow-left</v-icon>
                                 </v-btn>
                                 <v-list dense style="margin-top: 50px">
                                     <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
                                         <v-list-item-content>
                                             <v-list-item-title>{{ item.title }}</v-list-item-title>
                                         </v-list-item-content>
                                     </v-list-item>
                                 </v-list>
                             </v-navigation-drawer>
                         </v-sheet>
                     </div>
                     <router-view/>
                 </v-content>
             <v-footer color="grey" padless>
                 <v-row justify="center" no-gutters>
                     <v-btn v-for="link in links" :key="link.link" :to="link.to" color="green" text rounded class="footer">{{link.link}}</v-btn>
                     <v-col cols="12">{{new Date().getFullYear()}} - <strong>Bo.t.S.</strong></v-col>
                 </v-row>
             </v-footer>
          </v-app>
     </div>
</template>

<script>

  export default {
      data() {
          return {
              drawer: null,
              items: [
                  {title: 'Game', to: '/Game'},
                  {title: 'LoginBotS', to: '/LoginBotS'},
                  {title: 'Playerdirectory', to: '/Playerdirectory'},
                  {title: 'Registration', to: '/Registration'},
                  {title: 'Scoreboard', to: '/Scoreboard'},
                  {title: 'Wiki', to: '/Wiki'}
              ],
              links:[
                  {link: 'Faq', to: '/Faq'},
                  {link: 'Privacy', to: '/Privacy'},
                  {link: 'Impressum', to:'/Impressum'}
              ]
          }
      },
  }
</script>
