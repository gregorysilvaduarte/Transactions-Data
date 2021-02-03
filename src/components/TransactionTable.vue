<template>
  <div class="table-container">
    <table class="table-fill" v-if="transactions.length > 0">
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Title</th>
          <th class="text-left">Description</th>
          <th class="text-left">Status</th>
          <th class="text-left">Amount</th>
        </tr>
      </thead>
      <tbody class="table-hover">
        <tr
          v-for="(transaction, index) of transactions"
          :key="index"
          @click="
            fetchTransaction(transaction.id);
            toogleModal()">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ transaction.title }}</td>
          <td class="text-left">{{ transaction.description }}</td>
          <td class="text-left">{{ toCapitalize(transaction.status) }}</td>
          <td class="text-left">{{ currencyFormat(transaction.amount) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="empty-data-container table-fill" v-else>
      <img src="@/assets/images/empty-data.png" width="200" alt="empty-data" />
      <h3>Sorry, No data found :(</h3>
    </div>
  </div>
  <Modal v-show="isModalVisible" @close="toogleModal()" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { toCapitalize, currencyFormat } from "@/helpers";
import { ActionTypes } from "@/store/actions";
import Modal from "@/common/Modal.vue";

export default defineComponent({
  components: { Modal },
  setup() {
    const store = useStore();
    const transactions = computed(() => store.getters.filteredTransactions);
    const fetchTransaction = (id: string) => {
      store.dispatch(ActionTypes.FetchTransaction, id);
    };
    return { transactions, fetchTransaction };
  },
  data() {
    return {
      isModalVisible: false,
      id: "",
    };
  },
  methods: {
    toCapitalize,
    currencyFormat,
    toogleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
});
</script>

<style scoped>
.table-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.5vh;
  width: 100%;
}
.table-fill {
  background: var(--white);
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
.empty-data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: var(--black);
}
h2 {
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", helvetica, arial, sans-serif;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
}
th {
  color: var(--white);
  background: var(--deep-blue);
  border-bottom: 4px solid var(--gray);
  border-right: 1px solid var(--deep-blue);
  font-size: 1.15rem;
  font-weight: 100;
  padding: 24px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
}
th:first-child {
  border-top-left-radius: 3px;
}
th:last-child {
  border-top-right-radius: 3px;
  border-right: none;
}
tr {
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  color: var(--black);
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
tr:hover td {
  background: var(--deep-gray);
  color: var(--white);
  border-top: 1px solid var(--deep-blue);
}
tr:first-child {
  border-top: none;
}
tr:last-child {
  border-bottom: none;
}
tr:nth-child(odd) td {
  background: var(--gray);
}
tr:nth-child(odd):hover td {
  background: var(--deep-gray);
}
tr:last-child td:first-child {
  border-bottom-left-radius: 3px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 3px;
}
td {
  background: var(--white);
  padding: 20px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 0.9rem;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid var(--gray);
}
td:last-child {
  border-right: 0px;
}
th.text-left {
  text-align: left;
}
th.text-center {
  text-align: center;
}
th.text-right {
  text-align: right;
}
td.text-left {
  text-align: left;
}
td.text-center {
  text-align: center;
}
td.text-right {
  text-align: right;
}
</style>
