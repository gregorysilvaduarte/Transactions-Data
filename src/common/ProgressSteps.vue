<template>
  <div class="steps-container">
    <div class="step" v-bind:class="{ completed: status !== '' }">
      <div class="label">
        Created
      </div>
    </div>
    <div
      class="line"
      v-bind:class="{
        inProgress: status === 'created',
        completed: status !== 'created',
      }"
    ></div>
    <div class="step" v-bind:class="{ completed: status !== 'created' }">
      <div class="label">
        Processing
      </div>
    </div>
    <div
      class="line"
      v-bind:class="{
        inProgress: status !== 'processed',
        completed: status === 'processed',
      }"
    ></div>
    <div class="step" v-bind:class="{ completed: status === 'processed' }">
      <div class="label">
        Processed
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["status"],
};
</script>

<style scoped>
.steps-container {
  padding: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.steps-container .step {
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  flex-grow: 0;
  height: 15px;
  width: 15px;
  border: 4px solid var(--gray);
  border-radius: 50%;
}
.steps-container .step .label {
  position: absolute;
  top: 30px;
  filter: none;
  z-index: 2000;
  color: var(--deep-blue);
  transition: all 200ms ease;
  font-weight: 700;
}
.steps-container .line {
  height: 5px;
  flex-grow: 1;
}
.inProgress {
  background: var(--gray);
}
.completed {
  background: var(--green);
}
</style>
