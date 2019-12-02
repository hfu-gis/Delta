<template>
    <v-app id="inspire">

        <v-navigation-drawer v-model="drawer" app right clipped></v-navigation-drawer>

        <v-app-bar app clipped-right></v-app-bar>

        <v-content>
            <router-view/>
        </v-content>

        <v-footer app></v-footer>
    </v-app>
</template>

<script>

    export default {
        props: {
            source: String,
        },


        data: () => ({
                drawer: false,

            }
        ),


        created() {
            this.$vuetify.theme.dark = true
            // this.$router.push({path: '/home'})
        },
    }
</script>