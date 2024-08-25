import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Blogs</h1>

        <Link to="/products">
          <button type="button" className="shop-now-button">
            Explore
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
