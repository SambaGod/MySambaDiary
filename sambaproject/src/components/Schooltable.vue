<template>
  <div>
    <v-card>
    <v-data-table
    :headers="headers"
    :items="schools"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td><country-flag :country="props.item.country"/></td>
       <td>{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td>
        Nothing yet!
      </td>
    </template>
  </v-data-table>
    </v-card>
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
              {text: "Country", value: "country"},
              {text: "Name", value: "name", sortable: true},
              {text: "Email", value: "email", sortable: true},
              {text: "Actions", value: "actions", sortable: false}
            ],
            schools: []
        }
    },
    methods: {
        getSchools: function() {
            let self = this    
            axios.get("/api/schools")  
              .then((response) => {
                console.log(response.data.schools)
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