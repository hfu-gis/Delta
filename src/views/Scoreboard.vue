<template>
    <div class="scoreboard_Seiteninhalt">
        <main>
            <section class="überschrift">
                <header>
                    <h1>Scoreboard</h1>
                </header>
            </section>
            <section class="scorebard" fluid>
                <v-data-table
                        :headers="player"
                        :items="infos"
                        :sort-by="['score', 'level']"
                        :sort-desc="[false, true]"
                ></v-data-table>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",
        data() {
            return {
                player: [
                    {
                        text: "Player",
                        align: "left",
                        sortable: "false",
                        value: "name"
                    },
                    {text: "Score", value: "score"},
                    {text: "Reached level", value: "level"}
                ],
                infos: [
                    {
                        name: "lorem",
                        score: 6,
                        level: 2
                    },

                ]
            };
        }
    };
</script>

<style scoped>
    .scorebard {
        margin-top: 2%;
        width: 60%;
        margin-left: 5%;
    }

    .überschrift {
        margin-left: 5%;
        margin-top: 2%;
    }
</style>
