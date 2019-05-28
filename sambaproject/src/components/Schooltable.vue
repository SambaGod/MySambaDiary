<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="schools"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td><country-flag :country="$store.getters.countries[props.item.country]"/></td>
       <td>{{ props.item.name }}</td>
      <td>{{ props.item.country }}</td>
      <td>{{ props.item.city }}</td>
      <td>{{ props.item.email }}</td>
      <td>
        Nothing yet!
      </td>
    </template>
  </v-data-table>
  </div>
</template>
<script>
import axios from "axios"
import CountryFlag from 'vue-country-flag'

export default {
    name: "Schooltable",
    data() {
        return {
            headers: [
              {text: "id", value: "id"}, 
              {text: "Flag", value: "flag"},
              {text: "Name", value: "name", sortable: true},
              {text: "Country", value: "country", sortable: true},
              {text: "City", value: "city", sortable: true},
              {text: "Email", value: "email", sortable: true},
              {text: "Actions", value: "actions"}
            ],
            schools: []
        }
    },
    methods: {
        getSchools: function() {
            let self = this    
            axios.get("/api/schools")  
              .then((response) => {
                self.$set(this, "schools", response.data.schools)
              })
              .catch((errors) => {
                console.log(errors) 
              })    
        }
    },
    components: {
        CountryFlag
    },
    mounted() {    
        this.getSchools()    
    }  
}
</script>