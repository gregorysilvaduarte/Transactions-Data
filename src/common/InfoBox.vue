<template>
  <div class="info-box">
    <div>
      <h2>{{title}}</h2>
      <hr />
    </div>
    <ul>
      <li>{{ info }}</li>
      <li>{{ currencyFormat(amount) }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { currencyFormat } from "@/helpers";

export default {
  props: ["title", "info", "amount"],
  methods: {
    currencyFormat
  }
};
</script>

<style scoped>
.info-box {
  display: flex;
  flex-direction: column;
  padding: 25px 80px;
}
.info-box ul {
  display: flex;
  list-style: none;
  justify-content: space-between;
}
.info-box ul li {
  font-weight: 600;
}
h2 {
  text-align: left;
}
h2,
hr {
  text-align: left;
  margin-bottom: 1vh;
}
</style>
