<template>
  <div class="modal">
    <div class="container">
      <a class="close" @click="$emit('close'); clearTransaction()">x</a>
        <Loading v-if="Object.values(transaction).length === 0"></Loading>
      <div class="main-container" v-else>
        <h1>{{transaction.title}}</h1>
        <ProgressSteps :status="transaction.status"/>
        <InfoBox title="Transferred from" :info="transaction.from" :amount="transaction.amount"/>
        <InfoBox title="to" :info="transaction.to" :amount="transaction.amount"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
import { ITransaction } from "@/store/state";
import InfoBox from '@/common/InfoBox.vue';
import Loading from '@/common/Loading.vue';
import ProgressSteps from '@/common/ProgressSteps.vue';

export default defineComponent({
  components: { Loading, InfoBox, ProgressSteps },
  props: ["modalBody"],
  setup() {
    const store = useStore();
    const transaction = computed(() => store.state.transaction);
    const clearTransaction = () => { store.commit(MutationType.SetTransaction, {} as ITransaction) };
    return { transaction, clearTransaction };
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 5;
}
.modal:target {
  opacity: 1;
  pointer-events: auto;
}
.modal > .container {
  display: flex;
  flex-direction: column;
  max-width: 780px;
  min-height: 65vh;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  background: var(--white);
}
.close {
  position: absolute;
  width: 30px;
  right: 15px;
  top: 10px;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  background: var(--red);
  border-radius: 50%;
  font-size: 16px;
  color: var(--white);
}
h1 {
  text-align: center;
}
a{
  cursor: pointer;
  font-weight: 700;
}
.main-container {
  display: flex;
  flex-direction: column;
  min-width: 420px;
  margin-top: 20px;
}
</style>
