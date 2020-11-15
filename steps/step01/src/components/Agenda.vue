<template>
  <month-view :month="11" :year="2020"/>
</template>

<script>
import MonthView from './MonthView.vue';

export default {
  name: "Agenda",
  components: {
    MonthView
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
