import { IFilter, ITransaction } from '@/store/state';

export const toCapitalize = (state: string) => state.replace(/(^|\s)\S/g, l => l.toUpperCase());

export const currencyFormat = (value: number) => '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

export const filterTransactions = (filter: IFilter, transactions: ITransaction[]) => {
    let filteredList = [...transactions];
  
    if (filter.status !== 'status') {
        filteredList = filteredList.filter(transaction => transaction.status === filter.status);
    }
  
    if (filter.search !== '') {
      const searchTerm = filter.search.toLowerCase();
      filteredList = filteredList.filter((transaction) => transaction.title.toLowerCase().includes(searchTerm));
    }
  
    return filteredList;
  }
