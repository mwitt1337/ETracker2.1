<template>
  <panel title="Districts">
    <v-btn
      slot="action"
      :to="{
        name: 'districts-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div 
      v-for="district in distircts"
      class="district"
      :key="district.id">

      <v-layout>
        <v-flex xs6>
          <div class="district-name">
            {{district.name}}
          </div>
          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'district', 
              params: {
                districtId: district.id
              }
            }">
            View
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import districtService from '@/services/districtService'
export default {
  data () {
    return {
      districts: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.districts = (await districtService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.district {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.district-name {
  font-size: 30px;
}
</style>