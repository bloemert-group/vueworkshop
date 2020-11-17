<template>
  <div>
    <span>Overview over all known Appointments...</span>
    <br/>
    <div>
      <ul class="appointments">
        <li :key="item.id" v-for="item in appointments" class="appointment" :class="{important: item.important}">
          <span>{{( "0" + item.date.getDate()).slice(-2)}}-{{("0" + (item.date.getMonth()+1)).slice(-2)}}-{{item.date.getFullYear()}} </span>
          <span>{{( "0" + item.date.getHours()).slice(-2)}}:{{("0" + item.date.getMinutes()).slice(-2)}} - </span>
          <input type="text" :value="item.description" @keyup.stop="updateAppointmentDescription($event, item)" />
          <input type="checkbox" :checked="item.important" @change.stop="updateAppointmentImportant($event, item)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import { mapActions, mapGetters} from "vuex";

export default {
  name: "AppointmentsOverview",
  props: {
    date: moment,
  },
  computed: {
   ...mapGetters("appointment", { appointments: "list" })
  },
  methods: {
    ...mapActions("appointment", { setAppointment: "set" }),

    updateAppointmentDescription: _.debounce(function($event, item) {
      var updatedItem = Object.assign({}, item, {description: $event.target.value});    
      this.setAppointment(updatedItem);
    }, 500),

    updateAppointmentImportant: _.debounce(function($event, item) {
      var updatedItem = Object.assign({}, item, {important: $event.target.checked});    
      this.setAppointment(updatedItem);
    }, 500)

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul.appointments {
  width:75%;
  line-height:200%;
}
.appointment {
  text-align: left;
}
.appointment.important {
  font-weight: bold;
  background-color: rgba(255, 0, 0, 0.5);
}

.appointment > input[type='text'] {
  font-weight: bold;
  width: 77%;
}
</style>
