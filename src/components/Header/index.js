// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="app-con">
    <ul className="list">
      <Link to="/" className="list">
        Home
      </Link>
      <Link to="/about" className="list">
        About
      </Link>
    </ul>
  </div>
)

export default withRouter(Header)
