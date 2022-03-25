import styled from "styled-components";




export const RepositoryWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 80px;
  justify-content: center;
  list-style: none;
  gap: 40px;
  flex-wrap: wrap;


  .repo-wrapper {
    width: 350px;
    height: 200px;
    background-color: #201F1F;
    color: #B3B3B3;
  }

  .repo-titulo {
    font-size: 1.35rem;
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
    font-family: 'Roboto';
  }

  .repo-desc {
    font-size: 1.125rem;
    font-family: 'Roboto';
    width: 280px;
    height: 50px;
    margin: 20px 0 0 40px;
  }

  .repo-infos {
    ul {
      display: flex;
      gap: 40px;
      justify-content: center;
      list-style: none;
      margin-top: 50px;
    }

    li {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
`