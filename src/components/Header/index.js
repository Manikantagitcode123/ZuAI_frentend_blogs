import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/"></Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          ></button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/"></Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/blogs" className="nav-link">
                blogs
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/blogadd" className="nav-link">
                blogadd
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/blogdelete" className="nav-link">
                blogdelete
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link"></Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/blogs" className="nav-link"></Link>
          </li>
          <li className="nav-menu-item-mobile"></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
