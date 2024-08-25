import {Component} from 'react'
import {Link} from 'react-router-dom'
class Blogdelete extends Component {
  state = {livedata: []}

  componentDidMount() {
    this.getdata()
  }
  getdata = async () => {
    const url = 'https://zuai-backend-blog-111.onrender.com/blogs/'
    const response = await fetch(url)
    //console.log(response)
    const data = await response.json()
    console.log(data)
    const odata = data.data.map(each => ({
      id: each.blogtid,
      name: each.blogname,
      descrption: each.blogdescription,
    }))

    //console.log(odata)
    this.setState({livedata: odata})
  }

  render() {
    const {livedata} = this.state
    console.log(livedata)

    return (
      <div>
        <h1>ProductList</h1>
        {livedata.map(each => (
          <div>
            <h2>{each.name}</h2>
            <Link to={`/ProductsEdit/${each.id}`}>
              <button>Delate</button>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}
export default Blogdelete
