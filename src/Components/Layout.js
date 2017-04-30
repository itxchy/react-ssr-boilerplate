import React from 'react'
import { withRouter } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import FlashMessageContainer from './Common/FlashMessageContainer'
const { element, object } = React.PropTypes

const Layout = ({ children, location }) => (
  <div>
    <NavBar location={location} />
    <FlashMessageContainer />
    {children}
  </div>
)

Layout.propTypes = {
  children: element,
  location: object
}

export default withRouter(Layout)
