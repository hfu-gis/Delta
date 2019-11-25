<template>
    <div>
        <main>
            <section class="überschrift">
                <header>
                    <h1>BotSWiki</h1>
                </header>
            </section>
            <section class="überschrift">
                In diesem Wiki findest du alle Informationen über die verschiedenen
                Items und Charaktere in BotS
            </section>
            <section class="table">
                <v-data-table
                        :headers="Item"
                        :items="input"
                        :sort-by="input"
                        :sort-desc="[false,true]">

                </v-data-table>

            </section>
        </main>
    </div>
</template>

<script>

    export default {
        name: "Wiki",
        data() {
            return {
                Item: [
                    {
                        text: "Item",
                        alligne: "left",
                        sortable: "false",
                        value: "item",
                    },
                    {text: "Character", value: "character"},
                    {text: "Locations", value: "location"},
                ],
                input: [
                    {
                        item: "Ledpipe",
                        character: "Scrapper",
                        location: "The Slums",
                    },
                    {
                        item: "Fraggrenade",
                        character: "Magician",

                    },
                    {
                        item: "Laptop",
                        character: "Thief",
                    },
                ]
            }
        }
    };
</script>

<style scoped>
    .überschrift {
        margin-left: 5%;

    }

    .table {
        margin-top: 2%;
        width: 90%;
        margin-left: 5%;
    }

</style>
