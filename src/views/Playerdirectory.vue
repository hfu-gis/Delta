<template>
  <div>
    <main>
      <section class="ueberschrift">
        <header>
          <h1>Player directory</h1>
        </header>
      </section>
      <section class="tabelle">
        <v-container fluid>
          <v-data-iterator
            :items="items"
            item-key="name"
            :items-per-page="4"
            :single-expand="expand"
            hide-default-footer
          >
            <template v-slot:default="{ items, isExpanded, expand }">
              <v-row>
                <v-col
                  v-for="item in items"
                  :key="item.name"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card>
                    <v-card-title>
                      <h4>{{ item.name }}</h4>
                    </v-card-title>
                    <v-switch
                      :input-value="isExpanded(item)"
                      :label="isExpanded(item) ? 'Expandded' : 'Closed'"
                      @change="v => expand(item, v)"
                    ></v-switch>
                    <v-divider></v-divider>
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      :sort-by="['Username', 'Score', 'Playtime']"
                      :sort-desc="[false, true]"
                    ></v-data-table>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Playerdirectory"
};
</script>

<style scoped>
.ueberschrift {
  text-align: center;
}
</style>
Scrapper Thief Robot Magician Profile picture Username Score Playtime
