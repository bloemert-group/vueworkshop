<template>
  <div>
    <span>{{monthName}} {{year}}</span>
    <div class="month">
      <span :key="item.date.format('YYYYMD')" v-for="item in daysInMonth" class="day" 
            :class="{ valid: item.isInReqMonth, today: item.date.isSame(new Date(), 'day'), selected: selectedDate === item.date }" 
            @click="selectDate(item.date)">
          {{item.date.date()}}
      </span>
    </div>
  </div>
</template>

<script>
import { getFullMonthName, getItemsPerMonth } from "../helpers";

export default {
  name: "MonthView",
  data: function() {
    return {
      selectedDate: null
    };
  },
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
  },
  methods: {
    selectDate: function(selected) {
      this.selectedDate = selected;
      this.$emit("selecteddatechanged", selected); 
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

  .day.today {
    background-color: rgba(0, 255, 0, 0.5);
  }

  .day.selected {
    background-color: #bc9550;
  }
</style>
