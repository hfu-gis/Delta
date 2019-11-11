<template>
    <div>
        <main>
            <article>
                In diesem Wiki findest du alle Informationen über die verschiedenen Items und Charaktere in BOB DER SCRUMVENTURE
            </article>
            <article>
                <div for="suche">
                    <label class="suche">Suchbegriff eingeben</label>
                    <input type="search" id="suche" placeholder="Suche¦">
                </div>
            </article>
            <header><h4>Items</h4></header>
            <!--Nach Alphabet bitte einsortieren! Charaktere bekommen eine eigene Liste-->
            <ul>
                <li> <a href="Bob_Bleirohr.html">Bleirohr</a> </li>
                <li><a href="Handgranate.html">Handgranate</a></li>
                <li><a href="Laptop_Item.html">Laptop</a></li>
            </ul>
            <header><h4>Charaktere</h4></header>
            <ul>

            </ul>
            <header><h4>Orte</h4></header>
            <ul>
                <li><a href="Die_Slums_Ort.html">Die Slums</a></li>
            </ul>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Bo.t.S._Wiki"
    }
</script>

<style scoped>

</style>