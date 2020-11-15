<template>
  <div>
    <span>{{monthName}} {{year}}</span>
    <div class="month">
      <span :key="item.date" v-for="item in daysInMonth" class="day" :class="{ valid: item.isInReqMonth }">
          {{item.date.date()}}
      </span>
    </div>
  </div>
</template>

<script>
import { getFullMonthName, getItemsPerMonth } from "../helpers";

export default {
  name: "MonthView",
  props: {
    month: Number,
    year: Number
  },
  computed: {
    monthName: function() {
      return getFullMonthName(this.month);
    },
    daysInMonth: function() {
      return getItemsPerMonth(this.year, this.month);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .month {
    display: flex;
    flex-wrap: wrap;
  }

  .day {
    width: 14%;
    height: 2em;
    line-height: 2em;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid rgba(2, 21, 49, 0.95);
    background-color: rgba(255, 255, 255, 0.05);
  }

  .day.valid {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
</style>
