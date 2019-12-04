<template>
    <nav class="kategorienliste">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn class="kategorienbutton" style="background: red; color: white" v-on="on">Kategorien:</v-btn>
            </template>
            <v-list class="kategorieitems">
                <v-list-item v-for="(item, index) in items" :key="index" @click="v-btn" link>
                    <v-list-item-title class="liste">{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </nav>
</template>

<script>
    export default {
        name: "kategorien",
        data: () => ({
            items: [
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
                { title: 'Lorem' },
            ],
        }),
    }
</script>

<style scoped>
.kategorienbutton{margin-left: 2%; width: 10%}
</style>