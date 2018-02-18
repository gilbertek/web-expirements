import AppBar from 'material-ui/AppBar'

const Header = ({ title = 'Next.js Blogging Application' }) =>
  <AppBar title={title} showMenuIconButton={false} />

export default Header
