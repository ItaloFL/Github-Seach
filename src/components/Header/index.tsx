import logoImg from '../../assets/mobile-github-logo.svg'
import { HeaderContainer, Seta } from './style'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logoImg} alt="" />
        <Seta />
      </HeaderContainer>
    </>
  )
}
