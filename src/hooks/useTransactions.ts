import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransactions() {
  const transactionContext = useContext(TransactionsContext)

  return transactionContext
}
