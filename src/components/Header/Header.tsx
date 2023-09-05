import logoDtMoney from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTrasactionButton } from './styles'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDtMoney} alt="" />

        <NewTrasactionButton>
          Nova Transação
        </NewTrasactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}