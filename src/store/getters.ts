import { GetterTree } from 'vuex'
import { IState, ITransaction } from './state'

export type Getters = {
  filteredTransactions(state: IState): ITransaction[];
  allTransactions(state: IState): ITransaction[];
  transaction(state: IState): ITransaction;
}

export const getters: GetterTree<IState, IState> & Getters = {
  filteredTransactions(state) {
    return state.filteredTransactions;
  },
  allTransactions(state) {
    return state.transactions;
  },
  transaction(state) {
    return state.transaction;
  }
}
