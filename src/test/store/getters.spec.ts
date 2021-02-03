import { ITransaction, IState } from "../../store/state";
import { getters } from "../../store/getters";

describe("transactions store getters", () => {
  const state = _initState();
  const transaction = {
    id: "id",
    title: "title",
    description: "description",
    status: "status",
    amount: 0,
    date: "date",
    from: "from",
    to: "to",
  };

  it("gets all Transactions", () => {
    const result = getters.allTransactions(state);

    expect(result).toEqual([
      transaction,
    ]);
  });

  it("get Transaction", () => {
    const result = getters.transaction(state);

    expect(result).toEqual(transaction);
  });

  it("get FilteredTransaction", () => {
    const result = getters.filteredTransactions(state);

    expect(result).toEqual([
      transaction,
    ]);
  });
});

function _initState() {
  const transaction: ITransaction = {
    id: "id",
    title: "title",
    description: "description",
    status: "status",
    amount: 0,
    date: "date",
    from: "from",
    to: "to",
  };
  const state: IState = {
    transactions: [transaction],
    loading: false,
    transaction: transaction,
    filteredTransactions: [transaction],
    transactionsStatus: ["created", "processing", "processed"],
    filter: {
      search: "",
      status: "status",
    },
  };
  return state;
}
