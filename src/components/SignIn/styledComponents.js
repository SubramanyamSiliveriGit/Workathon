import styled from 'styled-components'

export const CustomBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CustomContainer = styled.div`
  background-image: url('https://image.freepik.com/free-photo/abstract-futuristic-background-with-3d-design_1361-3532.jpg');

  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 60vw;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  text-align: center;
`
export const Description = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
  width: 75%;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 35%;
    padding: 42px;
  }
`
export const Logo = styled.img`
  width: 50px;
`

export const FormHeading = styled.h1`
  color: #000000;
  font-size: 32px;
  font-family: 'Roboto';
  margin-bottom: 0;
`
export const CustomPara = styled.p`
  color: #000000;
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 5px;
`
export const Span = styled.span`
  color: blue;
  font-size: 14px;
  font-family: 'Roboto';
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const PasswordContainer = styled.div`
  display: flex;
  border: 1px solid;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  padding: 10px;
  border-color: ${props => (props.passwordEmpty ? 'red' : '#606363')};
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  outline: none;
  border-color: ${props => (props.emailEmpty ? 'red' : '#606363')};
`
export const Input2 = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
`

export const Label = styled.label`
  font-size: 14px;
  color: #45474a;
  font-family: 'Roboto';
  margin-bottom: 5px;
  font-weight: 500;
`
export const CheckBoxAndForgetPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
`

export const LinkPara = styled.p`
  color: blue;
  font-size: 14px;
  font-family: 'Roboto';
`
export const SignInButton = styled.button`
  background-color: #286feb;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px;
`
export const IconButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`
export const ErrorMessage = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 12px;
`
