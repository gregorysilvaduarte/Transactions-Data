<template>
  <div class="page-container">
    <Navbar />
    <Loading v-if="loading"></Loading>
      <div class="content" v-else>
        <h2>Transactions Table</h2>
        <TransactionFilter />
        <TransactionTable />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'

import Navbar from '@/layout/Nav.vue';
import Loading from '@/common/Loading.vue';
import TransactionTable from '@/components/TransactionTable.vue';
import TransactionFilter from '@/components/TransactionFilter.vue';

import { useStore } from './store';
import { ActionTypes } from './store/actions';

export default defineComponent({
  components: { Navbar, Loading, TransactionTable, TransactionFilter },
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);

    onMounted(() => {
      store.dispatch(ActionTypes.FetchTransactions);
    })

    return { loading }
  },
})
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 0 10vw;
  min-height: 80vh;
}
.content > h2 {
  width: 100%;
  color: var(--white);
  font-weight: 300;
  margin-bottom: 2.5vh;
}
</style>
