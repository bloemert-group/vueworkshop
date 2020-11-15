<template>
  <div>{{date.format("dddd DD MMMM YYYY")}} Week: {{date.format("WW")}}</div>
</template>

<script>
import moment from 'moment';
export default {
  name: "Appointments",
  props: {
    date: moment()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
