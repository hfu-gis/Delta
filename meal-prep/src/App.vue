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
                    <v-sheet height="250px" style="background-color: #333333">
                        <v-container>
                            <v-row style="float: right">
                                <img src="./assets/menue.png" height="90" width="90" @click.stop="drawer = !drawer"/>
                            </v-row>
                        </v-container>
                        <v-navigation-drawer v-model="drawer" absolute right :value="drawer" style="background-color: limegreen">
                            <v-btn color="grey" dark @click="drawer = !drawer">
                                <v-icon dark left>mdi-arrow-left</v-icon>
                            </v-btn>
                            <v-list dense style="margin-top: 50%">
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
             <v-footer color=""
          </v-app>
     </div>
</template>

<script>

  export default {
      data() {
          return {
              drawer: null,
              items: [
                  {title: 'Faq', to: '/Faq'},
                  {title: 'Game', to: '/Game'},
                  {title: 'LoginBotS', to: '/LoginBotS'},
                  {title: 'Playerdirectory', to: '/Playerdirectory'},
                  {title: 'Privacy', to: '/Privacy'},
                  {title: 'Registration', to: '/Registration'},
                  {title: 'Scoreboard', to: '/Scoreboard'},
                  {title: 'Wiki', to: '/Wiki'}
              ],
          }
      },
  }
</script>
