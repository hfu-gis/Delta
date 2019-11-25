<template>
    <div>
        <main>
            <section class="tabelle">
                <v-card>
                    <v-card-title>Player Directory
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search"
                                      hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="desserts"></v-data-table>
                </v-card>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Playerdirectory",
        data() {
            return {
                search: '',
                headers: [
                    {
                        text: 'Username',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    {text: 'Lore Ipsum', value: 'level'},
                    {text: 'Tries', value: 'count'},
                    {text: 'Playtime', value: 'time'},
                    {text: 'Lore Ipsum', value: 'score'},
                    {text: 'Choosen Class', value: 'class'},
                ],
                desserts: [
                    {
                        name: 'Lore ipsum',
                        level: 11,
                        count: 11,
                        time: 11,
                        score: 11,
                        class: 'Lore ipsum',
                    },
                ],
            }
        },

    }
</script>

<style scoped>
    .tabelle {
        width: 60%;
        margin-left: 5%;
        margin-top: 5%;
    }
</style>

