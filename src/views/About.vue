<template>
    <div>
        <header><h1>About the Game</h1></header>
        <main>

            <p></p>

            "Bots" is a rogue-like RPG browser game made with
            javascript. It is set in a futuristic dystopian world with cyberpunk/retro influences.

            Fight your way through the city with never ending, procedurally
            generated levels and turn-based gameplay.

            This game is a non-profit student project and free for everyone! So
            <router-link to="/Registration">join now</router-link>!

            <p></p>

            You can choose between three fundamentally different characters, each comes with its own individual attacks.
            If you decide to play as melee your attacks will be short ranged and focused on melee combat.
            The armed fighter mainly uses guns like handguns, shotguns, rifles and sniper rifles.
            You can also choose to play as a hacker who tries to defeat enemies by hacking them.

            <p></p>

            The game takes place in a futuristic and overpopulated megacity almost entirely run by corporations.
            Society as we know it today does not exist anymore. Everyone just looks out for themselves trying to survive.
            If you want to thrive you will have to make a name for yourself.
            Fight against evil bots in order to push your street credibility to the max.
            Do you have what it takes to withstand in this place?
        </main>
    </div>
</template>

<script>
    export default {
        name: "About"
    };
</script>

<style scoped>
    h1 {
        margin-top: 2%;
        text-align: center;
    }

    main {
        margin-left: 26%;
        margin-right: 26%;
    }

</style>