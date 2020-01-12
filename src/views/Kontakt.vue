<template>
    <main>
        <v-card class="Kontakt" shaped elevation="20" >
            <v-card-title class="überschrift">
                Kontaktformular
            </v-card-title>
            <br>
            <v-card-text class="text">
                <form>
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <br>
                        <input type="text" class="form-control" name="name" id="name" />
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="email">E-mail: </label>
                        <br>
                        <input type="email" class="form-control" name="email" id="email" />
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="message">Nachricht: </label>
                        <br>
                        <textarea type="Message" class="form-control" name="message" id="message" rows="5" cols="28" style="border:2px solid #ccc;"></textarea>
                    </div>
                    <br>
                    <button type="submit" class="submitbtn">Send message</button>
                </form>
            </v-card-text>

        </v-card>
    </main>
</template>

<script>
    export default {
        name: "Kontakt"
    }
</script>

<style scoped>
    .Kontakt
    {
        margin-left: 35%;
        margin-right: 40%;
        margin-top: 5%;
    }
    .überschrift
    {
        font-size: xx-large;
        margin-left: 20%;
    }
    .text
    {
        font-size:large;
        text-align: center;
    }
    .submitbtn
    {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 60%;
    }
    input[type=text], input[type=email]
    {
        width: 60%;
        border: 2px solid #ccc;

    }
</style>