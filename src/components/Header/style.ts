import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";


export const HeaderContainer = styled.header`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .toHome:hover {
    transform: left 40px;
  }
`

export const Seta = styled(AiOutlineArrowLeft)`
  color: #B2B2B2;
  font-size: 2.25rem;
  cursor: pointer;
  transition: .4s;
  :hover {
    transform: translateX(-1rem);
    transition: .4s;
  }
`