<template>
  <div>
    <month-view :month="selectedDate.month() + 1" :year="selectedDate.year()" />
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
  computed: {
    ...mapGetters("appointment", { appointments: "list" }),
    ...mapGetters("appointment", { selectedDate: "getSelectedDate" }),
  },
  created() {
    if ( this.appointments.length <= 0 ) {
      this.loadAppointments();
    }

    this.setSelectedDate(this.$route.params.seldate ? moment(this.$route.params.seldate, 'DD-MM-YYYY') : moment());
  },
  methods: {
    ...mapActions("appointment", { loadAppointments: "load" }),
    ...mapActions("appointment", { setSelectedDate: "setSelectedDate" })
  },
  watch: {
    $route(to, from) {
      if ( to !== from ) {
        this.setSelectedDate(to.params.seldate ? moment(to.params.seldate, 'DD-MM-YYYY') : moment());
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
