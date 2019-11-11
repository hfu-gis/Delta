<template>
    <div>
    <main>
       <h1>Registration</h1>
        <p></p>
        <strong>Please fill in this form to create an account</strong>
        <hr>
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
            <hr>
            <input type="submit" class="registerbtn" value="Register"
                   onclick="window.location='Login_Bob_der_Scrumventure.html';"/>

            <p>By creating an account you agree to our <a href="../Privacy.html">Terms & Privacy</a>.</p>
            <p>Already have an account? <a href=../Login_Bob_der_Scrumventure.html>Sign in</a>.</p>
    </main>
    </div>
</template>

<script>
    export default {
        name: "Registration"
    }
</script>

<style scoped>

</style>