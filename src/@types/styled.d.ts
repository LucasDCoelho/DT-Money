import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type TypeTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TypeTheme {}
}
