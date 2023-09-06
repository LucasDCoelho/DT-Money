import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummuryCard } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";


export function Summary(){
  const { transactions } = useContext(TransactionsContext)


  const summary = transactions.reduce(
  (acc, transaction)=> {
    
    if(transaction.type === "income"){
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }


    return acc
  }, 
  {
    income: 0,
    outcome: 0,
    total: 0
  })

  return (
    <SummaryContainer>
      <SummuryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp  size={24} color="#00875F"/>
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummuryCard>
      <SummuryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown  size={24} color="#F75A68"/>
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummuryCard>
      <SummuryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar  size={24} color="#FFF"/>
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummuryCard>
    </SummaryContainer>
  )
}