<template>
    <v-container class="body" xs12 sm6>
        <v-container>
            <section class="Profil">
                <article class="header">
                    <header>
                        <h1>Profile</h1>
                    </header>
                </article>
            </section>
        </v-container>
        <v-container>
            <v-flex>
                <v-container class="sidesettings">
                    <aside class="settings">
                        <v-list v-for="item in items" :key="item.title" :to="item.to" link>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </aside>
                </v-container>
                <v-container class="prf">
                    <v-container class="Profilinhalt" >
                        <section style="display: flex">
                            <article class="profilbild">
                                <img src="../assets/122043.jpg" height="70" width="40"/>
                            </article>
                            <article class="profilname">
                                <h2>Lorem ipsum dolor </h2>
                            </article>
                        </section>
                    </v-container>
                    <v-container class="stats">
                        <section class="Statistiken">
                            <article class="statsmenü">
                                <v-container class="routes">
                                    <router-link to="Profil" class="rout">Personal</router-link>
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
                                    <v-simple-table class="simptabl4">
                                        <template v-slot:default>
                                            <tbody>
                                            <tr v-for="item in desserer" :key="item.name">
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
            </v-flex>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "Stats",
        data() {
            return {
                desserts: [
                    {
                        name: 'Lorem ipsum dolor ',
                        info: 'Lorem ipsum dolor ',
                    },
                ],
                dess: [
                    {
                        name: 'Lorem ipsum dolor ',
                        info: 'Lorem ipsum dolor ',
                    },
                ],
                desser: [
                    {
                        name: 'Lorem ipsum dolor ',
                        info: 'Lorem ipsum dolor ',
                    },
                ],
                desserer: [
                    {
                        name: 'Lorem ipsum dolor ',
                        info: 'Lorem ipsum dolor ',
                    }
                ],
                items: [
                    {title: "General", to: "General"},
                    {title: "Security and Login", to: "Security"},
                    {title: "Privacy", to: "Privacy"},
                    {title: "Language und Region", to: "Language"},
                ],
            }
        },
    }
</script>

<style scoped>
    .Profilinhalt {
        width: 48%;
        margin-left: 26%;
        margin-right: 26%;
        margin-top: 2%;
        box-shadow: 1px 1px 1px black;
        background-color: #3D3D3D;
    }

    .Profil {
        margin-left: 26%;
        margin-right: 26%;
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
        width: 48%;
        box-shadow: 1px 1px 1px black;
        margin-left: 26%;
        margin-right: 26%;
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
    .simptabl4{
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
    .header {
        font-size: 200%;
        text-align: center;
    }
    .sidesettings{
        float: left;
        width: 15%;
        margin-left: -2%;
        margin-top: 10.5%;
    }
    .settings{
        box-shadow: 1px 1px 1px black;
        background-color: #3D3D3D;
    }
    .prf{
        margin-top: -2%;
    }

</style>