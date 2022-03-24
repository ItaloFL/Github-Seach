import logoImg from '../../assets/mobile-github-logo.svg';
import setaImg from '../../assets/icons/seta.svg';
import { HeaderContainer } from './style';
import App from '../../App';

export function Header(){
  return (
    <>
      <HeaderContainer >
          <img src={logoImg} alt="" />
          <img className='toHome' src={setaImg} alt="" onClick={() => {
           
          }}/>
      </HeaderContainer>
    </>
  
  )
}