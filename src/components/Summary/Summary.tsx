import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer, SummuryCard } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummuryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={24} color="#00875F" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummuryCard>
      <SummuryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={24} color="#F75A68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummuryCard>
      <SummuryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={24} color="#FFF" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummuryCard>
    </SummaryContainer>
  )
}
