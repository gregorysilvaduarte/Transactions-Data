import { IState, ITransaction } from '../../store/state';
import { mutations } from "../../store/mutations";

describe("transaction store mutations", () => {
  const state = _emptyState();
  const transactions = [
    {
      id: "id",
      title: "title",
      description: "description",
      status: "status",
      amount: 0,
      date: "date",
      from: "from",
      to: "to",
    },
    {
      id: "id",
      title: "title",
      description: "description",
      status: "status",
      amount: 2,
      date: "date",
      from: "from",
      to: "to",
    }
  ];

  it("sets transactions", () => {
    mutations.SET_TRANSACTIONS(state, transactions);
    expect(state).toEqual({
      loading: false,
      transactions: transactions,
      transaction: {},
      filteredTransactions: [],
      transactionsStatus: ["created", "processing", "processed"],
      filter: {
        search: "",
        status: "status",
      },
    });
  });
  
  it("sets filtered data", () => {
    mutations.FILTERED_DATA(state, transactions);
    expect(state).toEqual({
      loading: false,
      transactions: transactions,
      transaction: {},
      filteredTransactions: transactions,
      transactionsStatus: ["created", "processing", "processed"],
      filter: {
        search: "",
        status: "status",
      },
    });
  });

  it("sets transaction", () => {
    mutations.SET_TRANSACTION(state, transactions[0]);
    expect(state).toEqual({
      loading: false,
      transactions: transactions,
      transaction: transactions[0],
      filteredTransactions: transactions,
      transactionsStatus: ["created", "processing", "processed"],
      filter: {
        search: "",
        status: "status",
      },
    });
  });
});

function _emptyState() {
  const state: IState= {
    loading: false,
    transactions: [] as ITransaction[],
    transaction: {} as ITransaction,
    filteredTransactions: [] as ITransaction[],
    transactionsStatus: ["created", "processing", "processed"],
    filter: {
      search: "",
      status: "status",
    },
  };
  return state;
}
