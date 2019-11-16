<template>
    <div>
        <main>
            <section class="ueberschrift">
                <header>
                    <h1>Player directory</h1>
                </header>
            </section>
            <section class="tabelle">
                <article class="tabellenreiter">
                    <h2>CHARACTER CLASSES</h2>
                    <router-link :to="Scrapper">Scrapper</router-link>
                    <router-link :to="Thief">Thief</router-link>
                    <a>Robot</a>
                    <a>Magician</a>
                </article>
                <article>
                    <table border="1" >
                        <tr>
                            <th>Profile picture</th>
                            <th>Username</th>
                            <th>Score</th>
                            <th>Playtime</th>
                        </tr>
                        <tr>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                            <td>?</td>
                        </tr>
                    </table>
                </article>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Playerdirectory"
    }
</script>

<style scoped>
    .ueberschrift{
        text-align: center;
    }

</style>