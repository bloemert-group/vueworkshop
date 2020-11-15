<template>
  <div>
    <month-view :month="11" :year="2020" @selecteddatechanged="selectedDate = $event"/>
    <hr/>
    <appointments :date="selectedDate" :allAppointments="appointments"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';
import MonthView from './MonthView.vue';
import Appointments from './Appointments.vue';

export default {
  name: "Agenda",
  components: {
    MonthView,
    Appointments
  },
  data: function(){
    return {
      selectedDate: moment()
    }
  },
  computed: {
    ...mapGetters("appointment", { appointments: "list" })
  },
  created() {
    this.loadAppointments();
  },
  methods: {
    ...mapActions("appointment", { loadAppointments: "load" })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
