import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummuryCard } from "./styles";


export function Summary(){
  return (
    <SummaryContainer>
      <SummuryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp  size={24} color="#00875F"/>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummuryCard>
      <SummuryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown  size={24} color="#F75A68"/>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummuryCard>
      <SummuryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar  size={24} color="#FFF"/>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummuryCard>
    </SummaryContainer>
  )
}