import {Box, Image, Heading, Para} from './styledcomponents'

const NotFound = () => (
  <Box>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found</Para>
  </Box>
)
export default NotFound
