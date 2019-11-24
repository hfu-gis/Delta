<template>
  <div>
    <main>
      <article>
        <section class="überschrift">
            <h1>Ledpipe</h1>
         </section>
           <section class="beschreibung">
              Ein gewöhnliches Bleirohr wie man es in den Slums an fast Jeder
              Ecke finden dürfte, da die Slums nur sehr selten gewartet werden
              und sich Niemand um die Slumbewohner kümmert. Es scheint keinen
              allzu stabilen Eindruck zu machen und sollte dich eher schlecht
              als recht beim kämpfen unterstützen. Es ist nunmal ein
              gewöhnliches Bleirohr was hast du erwartet?
           </section>
           <section class="location">
              Standardwaffe des <b>Nahkämpfers</b>. Dies ist die Waffe mit der,
              der <b>Nahkämpfer</b> erwacht.
           </section>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: "BleirohrItem"
};
</script>

<style scoped>
.überschrift{
  margin-left: 5%;
}
  .beschreibung{
    margin-top: 2%;
    margin-left: 5%;

  }
  .location{
    margin-top: 2%;
    margin-left: 5%;
  }
</style>
