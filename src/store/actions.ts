import axios from "axios";
import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { IState, ITransaction } from "./state";

export enum ActionTypes {
  FetchTransactions = "FETCH_TRANSACTIONS",
  FetchTransaction = "FETCH_TRANSACTION",
  SetFilterSearch = "SET_FILTER_SEARCH",
  SetFilterStatus = "SET_FILTER_STATUS"
}

type ActionAugments = Omit<ActionContext<IState, IState>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.FetchTransactions](context: ActionAugments): void;
  [ActionTypes.FetchTransaction](context: ActionAugments, id: string): void;
  [ActionTypes.SetFilterSearch](context: ActionAugments, search: string): void;
  [ActionTypes.SetFilterStatus](context: ActionAugments, status: string): void;
};

export const actions: ActionTree<IState, IState> & Actions = {
  async [ActionTypes.FetchTransactions]({ commit }) {
    try {
      commit(MutationType.SetLoading, true);
      const { data } = await axios.get<ITransaction[]>(
        "https://warren-transactions-api.herokuapp.com/api/transactions"
      );
      commit(MutationType.SetTransactions, data);
      commit(MutationType.FilteredData);
    } catch (error) {
      commit(MutationType.SetTransactions, []);
    }
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.FetchTransaction]({ commit }, id: string) {
    try {
      const { data } = await axios.get<ITransaction>(
        `https://warren-transactions-api.herokuapp.com/api/transactions/${id}`
      );
      commit(MutationType.SetTransaction, data);
    } catch (error) {
      commit(MutationType.SetTransaction, {} as ITransaction);
    }
  },
  [ActionTypes.SetFilterSearch]({ commit }, search) {
    commit(MutationType.SetFilterSearch, search);
    commit(MutationType.FilteredData);
  },
  [ActionTypes.SetFilterStatus]({ commit }, status) {
    commit(MutationType.SetFilterStatus, status);
    commit(MutationType.FilteredData);
  }
};
