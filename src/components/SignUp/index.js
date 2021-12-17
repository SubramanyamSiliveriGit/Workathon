import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsFillEyeFill} from 'react-icons/bs'

import {
  CustomBgContainer,
  CustomContainer,
  Heading,
  Description,
  FormContainer,
  FormHeading,
  CustomPara,
  Span,
  Form,
  InputContainer,
  Input,
  Label,
  Logo,
  PasswordContainer,
  InputContainer2,
  Input2,
  CheckBoxContainer,
  CheckBoxAndForgetPasswordContainer,
  LinkPara,
  SignInButton,
  IconButton,
  ErrorMessage,
} from './styledComponents'

import './index.css'

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
    name: '',
    number: '',
    emptyName: false,
    emptyMail: false,
    emptyPassword: false,
    emptyContact: false,
  }

  onUserNameEntered = event => {
    this.setState({username: event.target.value})
  }

  onPasswordEntered = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = msg => {
    this.setState({showError: true, errorMsg: msg})
  }

  onNumberEntered = event => {
    this.setState({number: event.target.value})
  }

  onNameEntered = event => {
    this.setState({name: event.target.value})
  }

  onNameBlur = event => {
    const name = event.target.value
    if (name === '') {
      this.setState({emptyName: true})
    } else {
      this.setState({emptyName: false})
    }
  }

  onEmailBlur = event => {
    const name = event.target.value
    if (name === '') {
      this.setState({emptyMail: true})
    } else {
      this.setState({emptyMail: false})
    }
  }

  onPasswordBlur = event => {
    const name = event.target.value
    if (name === '') {
      this.setState({emptyPassword: true})
    } else {
      this.setState({emptyPassword: false})
    }
  }

  onContactBlur = event => {
    const name = event.target.value
    if (name === '') {
      this.setState({emptyContact: true})
    } else {
      this.setState({emptyContact: false})
    }
  }

  onSignIn = async event => {
    event.preventDefault()
    const {username, password, name, number} = this.state
    const userDetails = {
      user_firstname: name,
      user_email: username,
      user_phone: number,
      user_password: password,
      user_lastname: 'ni',
      user_city: 'Hyderabad',
      user_zipcode: '500072',
    }
    const url = 'https://snapkaro.com/eazyrooms_staging/api/user_registeration'
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (data.status) {
      this.onSuccess()
    } else {
      this.onFailure(data.msg)
    }
  }

  renderForm = () => {
    const {
      username,
      password,
      showPassword,
      showError,
      errorMsg,
      name,
      number,
      emptyContact,
      emptyMail,
      emptyName,
      emptyPassword,
    } = this.state
    const passwordState = showPassword ? 'text' : 'password'

    return (
      <FormContainer>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Eo_circle_blue_letter-w.svg/1024px-Eo_circle_blue_letter-w.svg.png"
          alt="logo"
        />
        <FormHeading>Sign up</FormHeading>
        <CustomPara>
          Already have an account?{' '}
          <Link to="/login" className="link">
            <Span>Sign in</Span>
          </Link>
        </CustomPara>
        <Form onSubmit={this.onSignIn}>
          <InputContainer>
            <Label htmlFor="name">Full name*</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter Full name"
              onChange={this.onNameEntered}
              value={name}
              onBlur={this.onNameBlur}
              empty={emptyName}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email address*</Label>
            <Input
              type="text"
              id="email"
              placeholder="Enter Email"
              onChange={this.onUserNameEntered}
              value={username}
              onBlur={this.onEmailBlur}
              empty={emptyMail}
            />
          </InputContainer>
          <InputContainer2>
            <Label htmlFor="password">Password*</Label>
            <PasswordContainer empty={emptyPassword}>
              <Input2
                type={passwordState}
                id="password"
                placeholder="Enter Password"
                onChange={this.onPasswordEntered}
                value={password}
                onBlur={this.onPasswordBlur}
              />
              <IconButton type="button" onClick={this.onShowPassword}>
                <BsFillEyeFill color="#45474a" />
              </IconButton>
            </PasswordContainer>
          </InputContainer2>
          <InputContainer>
            <Label htmlFor="number">Contact number*</Label>
            <Input
              type="text"
              id="number"
              placeholder="Enter Contact number"
              onChange={this.onNumberEntered}
              value={number}
              onBlur={this.onContactBlur}
              empty={emptyContact}
            />
          </InputContainer>
          <CheckBoxAndForgetPasswordContainer>
            <CheckBoxContainer>
              <Input type="checkbox" id="checkBox" />
              <Label htmlFor="checkBox">
                I agree to the Terms of Service and Privacy Policy
              </Label>
            </CheckBoxContainer>
          </CheckBoxAndForgetPasswordContainer>
          <SignInButton type="submit">Creat your free account</SignInButton>
          {showError ? <ErrorMessage>{errorMsg}</ErrorMessage> : null}
        </Form>
      </FormContainer>
    )
  }

  render() {
    return (
      <CustomBgContainer>
        <CustomContainer>
          <Heading>Welcome to our Community</Heading>
          <Description>
            Fuse helps developers to build organized and well coded dashboards
            full of beautiful and rich modules. Join us and start building your
            application today.
          </Description>
        </CustomContainer>
        {this.renderForm()}
      </CustomBgContainer>
    )
  }
}

export default SignUp
