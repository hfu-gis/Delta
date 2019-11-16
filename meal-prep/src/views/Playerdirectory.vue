<template>
    <div>
        <main>
            <section class="ueberschrift">
                <header>
                    <h1>Player directory</h1>
                </header>
            </section>
            <section class="tabelle">
                <v-container fluid>
                    <v-data-iterator :items="items" item-key="name" :items-per-page="4" :single-expand="expand" hide-default-footer>
                        <template v-slot:default="{items, isExpanded, expand}"></template>
                    </v-data-iterator>
                </v-container>
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
Scrapper
Thief
Robot
Magician
Profile picture
Username
Playtime