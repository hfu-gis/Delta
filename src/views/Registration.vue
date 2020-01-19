<template>
    <v-container class="register">
        <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignup">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="username"
                                                label="Username"
                                                id="username"
                                                v-model="username"
                                                type="username"
                                        >
                                            required
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="email"
                                                label="Mail"
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="password"
                                                label="Password"
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="confirmPassword"
                                                label="Confirm Password"
                                                id="confirmPassword"
                                                v-model="confirmPassword"
                                                type="password"
                                                :rules="[comparePasswords]"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit" >Sign up</v-btn>
                                        <p>
                                            By creating an account you agree to our
                                            <router-link to="">Terms & Conditions</router-link>
                                            .
                                        </p>
                                        <p>
                                            Already have an account?
                                            <router-link to="Login">Sign in</router-link>
                                            .
                                        </p>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                rules: {
                    required: value => !!value || "Required.",
                    min: v => v.length >= 6 || "Min. 6 characters"
                }
            };
        },
        computed: {
            comparePasswords() {
                return this.password !== this.confirmPassword
                    ? "Passwords do not match"
                    : "";
            },
            user() {
                return this.$store.getters.user;
            },
            error() {
                return this.$store.getters.error;
            }
        },
        watch: {
            user(value) {
                if (value !== null && value !== undefined) {
                   
                }
            }
        },
        methods: {
            onSignup() {
                this.$store.dispatch("signUserUp", {
                    email: this.email,
                    password: this.password
                });
                 this.$router.push({name:'Login'});
            },
            onDismissed() {
                this.$store.dispatch("clearError");
            }
        }
    };
</script>

<style scoped>
    .register {
        margin-top: 3%;
    }

    p {
        margin-top: 3%;
    }
</style>
