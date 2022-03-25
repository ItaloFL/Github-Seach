import styled from "styled-components";

export const ProfileWrapper = styled.div`

  color: #B3B3B3;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  
  .image_user {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
  
  .name-user {
    font-size: 2.25rem;
    font-weight: 700;
    color: #8752CC;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`


export const InfoWrapper = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  li {
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    list-style: none;
    align-items: center;
    text-align: center;
  }
  

  img{
    display: inline;
    margin-right: 5px;
    text-align: center;
    align-items: center;
    width: 15px;  
  }
`


export const RepositoryWrapper = styled.div`
  width: 240px;
  height: 100px;
  background-color: #201F1F;
  padding: 10px 15px;

  .repository {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    p {
      font-size: 1.5rem;
      font-weight: bold;
      margin-left: 10px;
    }
  }

  .titulo-repo {
    font-size: 20px;
    margin-left: 25px;
  }
`