<template>
    <div class="body">
            <section class="Profil">
                <header>
                    <h1>Profile</h1>
                </header>
            </section>
        <div class="profile">
            <section class="Profilinhalt">
                <article class="profilbild">
                    <img src="../assets/122043.jpg" height="50" width="70"/>
                </article>
                <article class="profilname">
                    <h2>name</h2>
                </article>
            </section>
            <section class="Statistiken">
                
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Playerprofile",
        data: () => ({

        })
    }

</script>

<style scoped>
    .Profilinhalt{
        display: flex;
        width: 60%;
        margin-left: 10%;
        margin-top: 1%;
    }
    .Profil{
        margin-left: 1%;
    }
    .profilbild{
    }
    .profilname{
        margin-left: 2%;
        margin-top: 1%;
    }
    .profile{
        border: solid white;
        margin-top: 2%;
        width: 60%;
        margin-left: 5%;
        box-shadow:  1px 1px 1px white;
    }
</style>