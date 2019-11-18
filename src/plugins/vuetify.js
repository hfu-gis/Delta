import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";


const vuetify = new Vuetify({
    theme: {
        dark:true,
        themes: {
            dark: {
                primary: colors.grey,
                secondary: colors.cyan,
                accent: colors.purple,
                error: colors.red,
            },
        },
    },
})
Vue.use(Vuetify);

export default vuetify
