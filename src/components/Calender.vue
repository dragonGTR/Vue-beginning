<template style="text-align:center">
  <div style="text-align:center">
    <h1>VUE CALENDER</h1>

    <br />
    <strong>
      {{ currentMonthName }}
      {{ currentYear }}
    </strong>

    <br />
    <br />
    <section style="display:flex;">
      <h5 style="width:11.28%" v-for="Day in DAY" :key="Day">{{ Day }}</h5>
    </section>
    <section style="display:flex;flex-wrap: wrap;width:80%">
      <p
        style="padding-left:100px;padding-right:56px"
        v-for="Day in startDay()"
        :key="Day"
      ></p>
      <p
        style="padding-left:100px;padding-right:56px"
        v-for="Day in dayInMonth(currentYear, currentMonth)"
        :key="Day"
      >
        {{ Day }}
      </p>
    </section>
  </div>
  <div
    style=" display: flex;
  justify-content: space-between;"
  >
    <button class="btn btn-success" @click="Premonth()">Previous</button>
    <button class="btn btn-primary" @click="newMonth()">Next</button>
  </div>
  <br />
  <br />
  <br />
</template>

<script>
export default {
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      DAY: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    };
  },
  methods: {
    dayInMonth(year, mon) {
      return new Date(year, mon, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    newMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    Premonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
  },
};
</script>
<style></style>
