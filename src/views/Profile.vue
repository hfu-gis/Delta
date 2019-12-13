<template>
    <div>
        <section class="erstesection">
            <about/>
        </section>
        <section class="zweitesection">
            <nav>
                <v-list dense>
                    <v-list-item
                            v-for="item in items"
                            v-bind:key="item.title"
                            v-bind:class="['tab-button', { active: currentcomponent.title === item.component }]"
                            @click="currentcomponent = item"
                            >
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </nav>
        </section>
        <section>
            <component :is="currentcomponent" class="sele"></component>
        </section>
    </div>
</template>

<script>
    import about from "../components/about";
    import profil from "../components/profil";
    import editor from "../components/editor";
    import favouriten from "../components/favouriten";
    import bestellverlauf from "../components/bestellverlauf";
    import zahlmoeglichkeiten from "../components/zahlmoeglichkeiten";
    export default {
        name: "Profile",
        components: {
            about
        },
        data() {
            return {
                items: [
                    {title: 'Profil', component: {profil}},
                    {title: 'Einstellungen', component: {editor}},
                    {title: 'Favouriten', component: {favouriten}},
                    {title: 'Bestellverlauf', component: {bestellverlauf}},
                    {title: 'Zahlungsmöglichkeiten', component: {zahlmoeglichkeiten}},
                ],
            };
        }
    };
</script>

<style scoped>

</style>