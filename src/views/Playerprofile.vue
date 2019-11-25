<template>
    <v-container class="body" xs12 sm6>
        <section class="Profil">
            <article class="header">
                <header>
                    <h1>Profile</h1>
                </header>
            </article>
            <article class="settings">
                <router-link to="Profileditor">
                    <v-icon> mdi-account-settings</v-icon>
                </router-link>
            </article>
        </section>
        <section class="Profilinhalt">
            <article class="profilbild">
                <img src="../assets/122043.jpg" height="70" width="40"/>
            </article>
            <article class="profilname">
                <h2>Lorem ipsum dolor </h2>
            </article>
        </section>
        <v-container class="stats">
            <section class="Statistiken">
                <article class="statsmenü">
                    <v-container class="routes">
                        <router-link to="Profile" class="rout">Personal</router-link>
                        <router-link to="Stats" class="rout" style="margin-left: 1%">Stats</router-link>
                        <router-link to="" class="rout" style="margin-left: 1%">Lorem ipsum dolor</router-link>
                        <router-link to="" class="rout" style="margin-left: 1%">Lorem ipsum dolor</router-link>
                    </v-container>
                </article>
                <article class="profilstats">
                    <header class="übprst">
                        <h2>Personal Dates</h2>
                    </header>
                    <v-container class="statstab">
                        <v-simple-table class="simptabl1">
                            <template v-slot:default>
                                <tbody>
                                <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{item.info}}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <v-simple-table class="simptabl2">
                            <template v-slot:default>
                                <tbody>
                                <tr v-for="item in dess" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{item.info}}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <v-simple-table class="simptabl3">
                            <template v-slot:default>
                                <tbody>
                                <tr v-for="item in desser" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{item.info}}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-container>
                </article>
            </section>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "Playerprofile",
        data() {
            return {
                desserts: [
                    {
                        name: 'Email',
                        info: 'Lorem',
                    },
                    {
                        name: 'Country',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                ],
                dess: [
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                ],
                desser: [
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                    {
                        name: 'Lorem',
                        info: 'Lorem',
                    },
                ],
            }
        },
    }

</script>

<style scoped>
    .Profilinhalt {
        display: flex;
        width: 60%;
        margin-left: 5%;
        margin-top: 2%;
        border: solid white;
        box-shadow: 1px 1px 1px black;
        background-color: #3D3D3D;
    }

    .Profil {
        margin-left: 5%;
        margin-top: 0%;
    }

    .profilbild {
        margin-left: 5%;
        margin-top: 1%;
    }

    .profilname {
        margin-left: 2%;
        margin-top: 3%;
    }

    .statsmenü {
        display: flex;
        font-size: 150%;
        margin-left: -1%;
    }

    .routes {
        margin-left: 3%;
    }

    .rout {
        box-sizing: border-box;
        padding: 1%;
        text-decoration: none;
    }

    .stats {
        border: solid white;
        box-shadow: 1px 1px 1px black;
        width: 60%;
        margin-left: 5%;
        margin-top: 2%;
        background-color: #3D3D3D;
    }

    .simptabl1 {
        width: 30%;
        margin-top: 2%;
    }

    .simptabl2 {
        width: 30%;
        margin-top: 2%;
        margin-left: 3%;
    }

    .simptabl3 {
        width: 30%;
        margin-top: 2%;
        margin-left: 3%;
    }

    .übprst {
        margin-top: 1%;
        margin-left: 6%;
    }

    .statstab {
        display: flex;
        margin-left: 2%;
    }

    .body {
        margin-left: -2%;
    }

    .settings {
        margin-left: 70%;
    }

    .header {
        font-size: 200%;
    }

</style>