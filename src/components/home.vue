<template>
    <v-app>
        <v-parallax dark src="../assets/maxresdefault.jpg" class="paralax" height="500">
            <v-row rows="20" align="center">
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-thin mb-4">Bob the Scrumventure</h1>
                </v-col>
            </v-row>
        </v-parallax>
    </v-app>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
.paralax{
    margin-top: 5%;
}
    h1{
        border: solid 1px white;
    }
</style>