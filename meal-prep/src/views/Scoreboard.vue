<template>
    <div class="scoreboard_Seiteninhalt">
        <main>
            <section class="überschrift">
                <h1>Scoreboard</h1>
            </section>
            <section class="scorebard">
                <v-data-table :Player="sections" :items="usernames" :items-per-page="2"></v-data-table>
            </section>
           <!-- <section class="ueberschrift">
                <h1>Scoreboard Bob</h1>
            </section>
            <section class="tabelle">
                <table border="1">
                    <tr>
                        <th>Username</th>
                        <th>Reached level</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                </table>
            </section>
            <section class="Seitenanzeige">
                <article>
                    <aside class="seitenanzeige1">
                        <h2 class="event">Next events</h2>
                        <h3>?</h3>
                        <ol>?</ol>
                        <h3>?</h3>
                        <ol>?</ol>
                    </aside>
                </article>
                <article>
                    <aside class="seitenanzeige2">
                        <h2 class="update">Changelog</h2>
                        <h3>?</h3>
                        <ol>?</ol>
                        <h3>?</h3>
                        <ol>?</ol>
                    </aside>
                </article>
            </section> -->
        </main>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",
        data(){
            return{
                sections: [
                    {
                    text: 'ingame',
                    align: 'left',
                    sortable: 'false',
                    value: 'names'},

                    {text: 'Reached level', value: 'level'},
                    {text: 'Score', value: 'score'}
                ],
                usernames: [
                    {
                    names: 'Jonathan',
                    level: '2',
                    score: '8',},
                ],
            }
        },
    }
</script>

<style scoped>


</style>