import { MutationTree } from 'vuex'
import { IState, ITransaction } from './state'
import { filterTransactions } from './../helpers'

export enum MutationType {
  SetLoading = 'SET_LOADING',
  SetTransactions = 'SET_TRANSACTIONS',
  SetTransaction = 'SET_TRANSACTION',
  SetFilterSearch = 'SET_FILTER_SEARCH',
  SetFilterStatus = 'SET_FILTER_STATUS',
  FilteredData = 'FILTERED_DATA'
}
export type Mutations = {
  [MutationType.SetLoading](state: IState, value: boolean): void
  [MutationType.SetTransactions](state: IState, transactions: ITransaction[]): void
  [MutationType.SetTransaction](state: IState, transactions: ITransaction): void
  [MutationType.FilteredData](state: IState, transactions?: ITransaction[]): void
  [MutationType.SetFilterSearch](state: IState, search: string): void
  [MutationType.SetFilterStatus](state: IState, status: string): void
}

export const mutations: MutationTree<IState> & Mutations = {
  [MutationType.SetLoading](state, value) {
    state.loading = value;
  },
  [MutationType.SetTransactions](state, transactions) {
    state.transactions = transactions;
  },
  [MutationType.SetTransaction](state, transactions) {
    state.transaction = transactions;
  },
  [MutationType.SetFilterSearch](state, search) {
    state.filter.search = search;
  },
  [MutationType.SetFilterStatus](state, status) {
    state.filter.status = status;
  },
  [MutationType.FilteredData](state) {
    const transactions = [...state.transactions];
    state.filteredTransactions = transactions;
    state.filteredTransactions = filterTransactions(state.filter, transactions);
  },
}
