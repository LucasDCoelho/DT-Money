import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "./Components/SearchForm/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions(){
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>05/09/2023</td>
            </tr>
            <tr>
              <td width="50%">Sanduiche</td>
              <td>
                <PriceHighlight variant="outcome">
                - R$ 59,00
                </PriceHighlight>  
              </td>
              <td>Alimentação</td>
              <td>01/09/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}