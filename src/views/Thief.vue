<template>
    <div>
        <section class="ueberschrift">
            <header>
                <h1>Player directory</h1>
            </header>
        </section>
        <section class="tabelle">
            <article class="tabellenreiter">
                <h2>CHARACTERCLASSES</h2>
                <a style="background: white">Scrappers</a>
                <a style="background: lightgray">Thief</a>
                <a style="background: white">Robot</a>
                <a style="background: white">Magician</a>
            </article>
            <table border="1" style="border-color: darkorange">
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
        </section>
    </div>
</template>

<script>
    export default {
        name: "Thief"
    };
</script>

<style scoped>
    .ueberschrift {
        text-align: center;
    }
</style>
