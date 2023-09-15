import logoDtMoney from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal/NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTrasactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDtMoney} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTrasactionButton>Nova Transação</NewTrasactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
