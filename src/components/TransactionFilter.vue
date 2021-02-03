<template>
  <div class="filter-container">
    <div class="input-container">
      <a class="input-icon">
        <img src="@/assets/images/search.svg" alt="search-icon" />
      </a>
      <input
        placeholder="Search for title"
        name="search"
        type="search"
        :value="search()"
        @input="handleFilter"
      />
    </div>
    <select @change.prevent="handleFilter">
      <option
        name="status"
        v-for="(status, index) in transactionsStatus"
        :key="index"
        :value="status"
        :selected="status">
        <span>{{ toCapitalize(status) }}</span>
      </option>
      <option name="status" value="status" selected="selected">
        <span>Status</span>
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { toCapitalize } from "@/helpers";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";

export default defineComponent({
  setup() {
    const store = useStore();
    const transactionsStatus = computed(() => store.state.transactionsStatus);
    const search = () => store.state.filter.search;
    const handleFilter = (e: any) => {
      const Mutation =
        e.target.name === "search"
          ? ActionTypes.SetFilterSearch
          : ActionTypes.SetFilterStatus;
      store.dispatch(Mutation, e.target.value);
    };
    return { transactionsStatus, handleFilter, search };
  },
  methods: {
    toCapitalize,
  },
});
</script>

<style>
.filter-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.5vh;
  width: 100%;
}
.input-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 55px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  line-height: 0;
}
input {
  padding-left: 55px;
  height: 40px;
  min-width: 280px;
  width: 20vw;
  margin-right: 2vw;
}
input,
select {
  background-color: var(--white);
  vertical-align: middle;
  display: inline-block;
  color: var(--black);
  border: 1px solid var(--gray);
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
  box-shadow: 0 5px 25px rgb(0 0 0 / 6%);
}
select {
  height: 40px;
  min-width: 150px;
  width: 10vw;
  padding: 0 10px;
}
select span {
  text-transform: capitalize;
}
input:focus,
select:focus {
  outline: none;
  border-color: var(--blue);
}
.input-container {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
</style>
