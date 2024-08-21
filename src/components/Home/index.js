import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  HomeBox,
  Header,
  Logo,
  Button,
  Heading,
  Card,
  Content,
} from './styledcomponents'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const onLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <HomeBox>
      <Header>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <Button type="button" onClick={onLogOut}>
          Logout
        </Button>
      </Header>
      <Content>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <Card
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </Content>
    </HomeBox>
  )
}

export default Home
