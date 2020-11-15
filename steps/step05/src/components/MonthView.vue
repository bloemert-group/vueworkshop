<template>
  <div>
    <span>{{monthName}} {{year}}</span>
    <div class="month">
      <button :key="item.date.format('YYYYMD')" v-for="item in daysInMonth" class="day" 
            :class="{ valid: item.isInReqMonth, 
                      today: item.date.isSame(new Date(), 'day'), 
                      selected: selectedDate === item.date,
                      'badge-top-right': countImportantAppointments(item.date) }" 
            @click="selectDate(item.date)"
            :data-count="countImportantAppointments(item.date)">
          {{item.date.date()}}
      </button>
    </div>
  </div>
</template>

<script>
import { getFullMonthName, getItemsPerMonth } from "../helpers";
import moment from 'moment';

export default {
  name: "MonthView",
  data: function() {
    return {
      selectedDate: moment()
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
    },
    countImportantAppointments: function(m) {
      return this.$store.getters["appointment/countImportantAppointmentsByMoment"](
        m
      );
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
    color: white;
    position: relative;
  }

  .day.valid {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .day.today {
    background-color: rgba(0, 255, 0, 0.4);
  }

  .day.selected {
    background-color: #bc9550;
  }

  .day.badge-top-right:before {
    content: attr(data-count);
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    display: block;
    border-radius: 50%;
    background: rgb(255, 50, 50);
    border: 1px solid #FFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    color: #FFF;
    position: absolute;
    top: -7px;
    left: -7px;
    left: auto;
    right: 0px;
  }
</style>
