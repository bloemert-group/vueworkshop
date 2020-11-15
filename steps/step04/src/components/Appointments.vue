<template>
  <div>
    <span>{{date.format("dddd DD MMMM YYYY")}} Week: {{date.format("WW")}}</span>
    <br/>
    <div>
      <ul class="appointments">
        <li :key="item.id" v-for="item in appointments" class="appointment" :class="{important: item.important}">
          <span>{{( "0" + item.date.getHours()).slice(-2)}}:{{("0" + item.date.getMinutes()).slice(-2)}} - </span>
          <input type="text" v-model="item.description" />
          <input type="checkbox" v-model="item.important"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getAppointments } from '../helpers';

export default {
  name: "Appointments",
  data: function() {
    return {
      allAppointments: getAppointments()
    }
  },
  props: {
    date: moment
  },
  computed: {
    appointments: function() {
      var arr=this.allAppointments.filter(x => this.date.isSame(x.date, "day"));
      return arr;
    }
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
