export type ITransaction = {
  id: string
  title: string
  description: string
  status: string
  amount: number
  date: string
  from: string
  to: string
}

export type ITransactionsStatus = ['created', 'processing', 'processed'];

export type IState = {
  loading: boolean
  transaction: ITransaction
  transactions: ITransaction[]
  filteredTransactions: ITransaction[]
  transactionsStatus: ITransactionsStatus
  filter: IFilter
}

export type IFilter = {
    search: string,
    status: string
}

export const state: IState = {
  loading: false,
  transactions: [] as ITransaction[],
  transaction: {} as ITransaction,
  filteredTransactions: [] as ITransaction[],
  transactionsStatus: ['created', 'processing', 'processed'],
  filter: {
    search: '',
    status: 'status'
  }
}
