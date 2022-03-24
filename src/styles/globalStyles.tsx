import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #232324;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input {
    width: 300px;
    height: 40px;
    background: transparent;
    border: 0;
    border-bottom: 3px solid #8752CC;
    color: #FFFFFF;
    :focus {
      outline: none;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 4rem;
  }

  button {
    display: block;
    height: 45px;
    width: 300px;
    border-radius: 5px;
    background-color: #8752CC;
    color: #FFFFFF;
    cursor: pointer;
  }

  
`