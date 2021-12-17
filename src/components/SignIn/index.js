import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsFillEyeFill} from 'react-icons/bs'
import {FiFacebook, FiTwitter, FiGithub} from 'react-icons/fi'

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
  CustomContainer2,
  Para2,
  IconsContainer,
  ButtonIcon,
} from './styledComponents'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
    emailEmpty: false,
    passwordEmpty: false,
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

  emailBlur = event => {
    const gmail = event.target.value
    if (gmail === '') {
      this.setState({emailEmpty: true})
    } else {
      this.setState({emailEmpty: false})
    }
  }

  onPasswordBlur = event => {
    const password = event.target.value
    if (password === '') {
      this.setState({passwordEmpty: true})
    } else {
      this.setState({passwordEmpty: false})
    }
  }

  onSignIn = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      user_email: username,
      user_password: password,
    }
    const url = 'https://snapkaro.com/eazyrooms_staging/api/userlogin'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (data.status) {
      this.onSuccess()
    } else {
      this.onFailure(data.msg)
    }
  }

  renderOtherLogin = () => (
    <CustomContainer2>
      <Para2>Or continue with</Para2>
      <IconsContainer>
        <ButtonIcon>
          <FiFacebook size={18} color="#606363" />
        </ButtonIcon>
        <ButtonIcon>
          <FiTwitter size={18} color="#606363" />
        </ButtonIcon>
        <ButtonIcon>
          <FiGithub size={18} color="#606363" />
        </ButtonIcon>
      </IconsContainer>
    </CustomContainer2>
  )

  renderForm = () => {
    const {
      username,
      password,
      showPassword,
      showError,
      errorMsg,
      emailEmpty,
      passwordEmpty,
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
          Don't? have an account?{' '}
          <Link to="/signup" className="link">
            <Span>Sign up</Span>
          </Link>
        </CustomPara>
        <Form onSubmit={this.onSignIn}>
          <InputContainer>
            <Label htmlFor="email">Email address*</Label>
            <Input
              type="text"
              id="email"
              placeholder="Enter Email"
              onChange={this.onUserNameEntered}
              value={username}
              onBlur={this.emailBlur}
              emailEmpty={emailEmpty}
            />
          </InputContainer>
          <InputContainer2>
            <Label htmlFor="password">Password*</Label>
            <PasswordContainer passwordEmpty={passwordEmpty}>
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
          <CheckBoxAndForgetPasswordContainer>
            <CheckBoxContainer>
              <Input type="checkbox" id="checkBox" />
              <Label htmlFor="checkBox">Remember me</Label>
            </CheckBoxContainer>
            <LinkPara>Forgot password?</LinkPara>
          </CheckBoxAndForgetPasswordContainer>
          <SignInButton type="submit">Sign In</SignInButton>
          {showError ? <ErrorMessage>{errorMsg}</ErrorMessage> : null}
        </Form>
        {this.renderOtherLogin()}
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

export default Login
