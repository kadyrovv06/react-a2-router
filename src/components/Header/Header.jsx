
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
        <li>
      <Link to='/about'>About</Link>
        </li>
    </>
  )
}

export default Header
