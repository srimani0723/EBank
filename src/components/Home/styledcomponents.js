import styled from 'styled-components'

export const HomeBox = styled.div`
  background-color: #152850;
  height: 100vh;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 10%;
  height: 15vh;
`

export const Logo = styled.img`
  width: 15%;
  max-width: 150px;
`
export const Button = styled.button`
  background-color: transparent;
  font-size: medium;
  font-weight: bold;
  font-family: 'Roboto';
  border: 1px solid #ffff;
  padding: 5px 10px;
  color: #ffff;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
export const Content = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Card = styled.img`
  width: 70%;
  max-width: 700px;
`
