<template>
  <div>
    <div>Year: {{ year }}</div>
    <div>Month: {{ month }}</div>
  </div>
</template>

<script>
export default {
  name: "MonthView",
  props: {
    month: Number,
    year: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
