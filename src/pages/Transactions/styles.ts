import styled from "styled-components";

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  /* margin-top: 2.5rem; */

  td{
    padding: 1.25rem;
    background: ${props => props.theme['gray-700']};

    &:first-child{
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child{
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: "income" | "outcome"
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === "income" ? props.theme['green-300']: props.theme['red-300']};
`