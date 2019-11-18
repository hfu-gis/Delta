<template>
    <div class="body">
        <h1>Profil</h1>
        <section class="Profilinhalt">
            <article class="profil">
                <div class="profilbild">
                    <img class="proilbildbild" src="../assets/122043.jpg">
                </div>
                <div class="profilname">
                    <h2>Uno Due</h2>
                </div>
            </article>
            <article></article>
            <article></article>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Playerprofile"
    }
</script>

<style scoped>

    .proilbildbild{
        width: 50px;
        height: 80px;
    }
    .profil{
        display: flex;
        margin-top: 30px;
    }
    .proilbildbild{
        margin-left: 50px;
    }
    .profilname{
        margin-top: 20px;
        margin-left: 30px;
    }
    .body{
        background-color: beige;
    }
</style>