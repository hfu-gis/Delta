<template>
    <div>
        <main>
           <h1>Registration</h1>
            <p></p>
            <strong>Please fill in this form to create an account:</strong>
            <p></p>
                <Strong>Username:</Strong>
                <p>
                </p>
                <input type="text" name="spind" value="">
                <p>
                </p>
                <Strong>Email:</Strong>
                <p>
                </p>
                <input type="text" name="spind" value="">
                <p>
                </p>
                <Strong>New Password:</Strong>
                <p>
                </p>
                <input type="password" name="spind" value="">
                <p></p>
                <Strong>Confirm Password:</Strong>
                <p>
                </p>
                <input type="password" name="spind" value="">
                <p></p>
                <input type="submit" class="registerbtn" value="Register"
                       onclick="window.location='LoginBotS';"/>

                <p>By creating an account you agree to our <a href="Privacy">Terms & Privacy</a>.</p>
                <p>Already have an account? <router-link to="/Login">Sign in</router-link>.</p>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Registration"
    }
</script>

<style scoped>

main {
    color:white;
    margin-left: 1%;
}

    input[type=text], input[type=password] {
        width: 20%;
        padding: 0.3%;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #D3D3D3;
        color:black;
    }

    .registerbtn {
        background-color: #4CAF50;
        color: white;
        padding: 0.8%;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 20%;
        opacity: 0.9;
    }

    .registerbtn:hover {
        opacity:1;
    }

</style>