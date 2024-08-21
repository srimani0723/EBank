import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainBox,
  LoginBox,
  LoginImg,
  LoginForm,
  LoginH1,
  Label,
  Input,
  Button,
  ErrorMsg,
} from './styledcomponents'

class Login extends Component {
  state = {
    errorMsg: '',
    userId: '',
    pin: '',
  }

  onChangeUserId = event => {
    this.setState({
      userId: event.target.value,
    })
  }

  onChangePin = event => {
    this.setState({
      pin: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const body = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({
        errorMsg: data.error_msg,
      })
    }
  }

  render() {
    const {errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainBox>
        <LoginBox>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginForm>
            <LoginH1>Welcome Back</LoginH1>
            <Label htmlFor="userid">User ID</Label>
            <Input
              type="text"
              placeholder="Enter User ID"
              id="userid"
              onChange={this.onChangeUserId}
            />

            <Label htmlFor="pin">PIN</Label>
            <Input
              type="password"
              placeholder="Enter PIN"
              id="pin"
              onChange={this.onChangePin}
            />

            <Button type="submit" onClick={this.onSubmit}>
              Login
            </Button>

            {errorMsg === '' ? null : <ErrorMsg>{errorMsg}</ErrorMsg>}
          </LoginForm>
        </LoginBox>
      </MainBox>
    )
  }
}

export default Login
