<template>
    <div class="body">
        <h1>Profil</h1>
        <section class="Profilinhalt">
            <article class="profil">
                <div class="profilbild">
                    <img class="proilbildbild" src="../assets/122043.jpg">
                </div>
                <div class="profilname">
                    <h2>Uno Due</h2>
                </div>
            </article>
            <h2 class="zwisch">Dates</h2>
            <article class="choosenclasses">
                <div class="pers">
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>{{ item.data }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </div>
                <div class="rank">
                    <v-container fluid>
                        <v-data-iterator :items="items">
                            <template v-slot:default="props">
                                <v-row>
                                    <v-col v-for="item in items" :key="item.name" cols="12" sm="6" md="4">
                                        <v-card>
                                            <v-card-title><h4>{{ item.name }}</h4></v-card-title>
                                            <v-divider></v-divider>
                                            <v-list dense>
                                                <v-list-item>
                                                    <v-list-item-content>?:</v-list-item-content>
                                                    <v-list-item-content class="align-end">{{ item.p }}</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-content>?:</v-list-item-content>
                                                    <v-list-item-content class="align-end">{{ item.pp }}</v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-content>?:</v-list-item-content>
                                                    <v-list-item-content class="align-end">{{ item.ppp }}</v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-data-iterator>
                    </v-container>
                </div>
            </article>
            <article class=""></article>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Playerprofile",
        data: () => ({
            items: [
                {name: 'Magician', p: 1, pp: 2, ppp: 1},
                {name: 'Robot', p: 1, pp: 2, ppp: 1},
                {name: 'Scrapper', p: 1, pp: 2, ppp: 1},
                {name: 'Thief', p: 1, pp: 2, ppp: 1},
            ],
            desserts: [
                {
                    name: 'Name',
                    data: 159,
                },
                {
                    name: '?',
                    data: 237,
                },
                {
                    name: '?',
                    data: 262,
                },
                {
                    name: '?',
                    data: 305,
                },
                {
                    name: '?',
                    data: 356,
                },
                ],
        })
    }

</script>

<style scoped>

    .proilbildbild{
        width: 50px;
        height: 80px;
    }
    .profil{
        display: flex;
        margin-top: 30px;
    }
    .proilbildbild{
        margin-left: 50px;
    }
    .profilname{
        margin-top: 20px;
        margin-left: 30px;
    }
    .Profilinhalt{
        border-top: solid black;
        width: 50%;
    }
    .choosenclasses{
        display: flex;
    }
    .rank{
        margin-left: 10%;
        margin-top: -3%;
    }
    .pers{
        margin-left: 5%;
    }
    .zwisch{
        margin-left: 5%;
    }
</style>