<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <router-link :to="{ name: 'home'}">
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
        <router-link :to="{ name: 'AdminDistricts'}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fa-building</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Districts and Buildings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
        <router-link :to="{ name: 'AdminMeters'}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fa-tachometer-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Meters</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
        <router-link :to="{ name: 'AdminUsers'}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fa-user-cog</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
<v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>eTracker 2.1</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex d-flex>
<<<<<<< HEAD:client/src/components/AddBills.vue
=======
            <districts-search-panel />
            <districts-panel class="mt-2" />
>>>>>>> 051d71bd5f12e29b673334cf48c95befb1e81bcd:client/src/components/DistrictandBuildings.vue
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm7>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card tile flat>
              <v-card-text><h1>{{ pageTitle.slice(0, 70) }}</h1></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&nbsp; The Brewer-Garrett Company &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import districtsPanel from './districtPanel'
import districtsSearchPanel from './districtSearchPanel'
import districtService from '@/services/districtService'
import {mapState} from 'vuex'
export default {
<<<<<<< HEAD:client/src/components/AddBills.vue
  data: () => ({
    drawer: null,
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    pageTitle: `Admin - Bills`
  }),
=======
  components: {
    districtsPanel,
    districtsSearchPanel
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
>>>>>>> 051d71bd5f12e29b673334cf48c95befb1e81bcd:client/src/components/DistrictandBuildings.vue
  props: {
    source: String
    },
  data () {
    return {
      drawer: null,
      districts: null,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      pageTitle: `School District Name`
    }
  },
  async mounted () {
    this.districts = (await districtService.index()).data
  }
}
</script>