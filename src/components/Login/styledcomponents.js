import styled from 'styled-components'

export const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 8%;
  background-color: #152850;

  @media screen and (min-width: 996px) {
    padding: 5%;
  }
`
export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 78%;
  border-radius: 30px;
  background-color: #e0eefe;
  @media screen and (min-width: 996px) {
    height: 100%;
  }
`
export const LoginImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: 65%;

  @media screen and (min-width: 996px) {
    max-width: 600px;
    height: 80%;
    margin-left: 5%;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 30px;
  background-color: #ffffff;

  @media screen and (min-width: 996px) {
    width: 50%;
  }
`
export const LoginH1 = styled.h1`
  color: #183b56;
  font-size: xx-large;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Label = styled.label`
  color: #5a7184;
  font-size: small;
  font-weight: bold;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const Input = styled.input`
  padding: 15px 10px;
  color: black;
  font-size: small;
  font-weight: bold;
  font-family: 'Roboto';
  border: 1px solid #c3cad9;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  outline: none;
  cursor: pointer;
`
export const Button = styled.button`
  background-color: #1565d8;
  font-size: medium;
  font-weight: bold;
  font-family: 'Roboto';
  width: 100%;
  border: 0px;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  margin: 0px;
  font-size: small;
  font-weight: bold;
  font-family: 'Roboto';
  align-self: center;
`
