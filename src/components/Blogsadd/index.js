import {Component} from 'react'
import {v4} from 'uuid'
class Blogsadd extends Component {
  state = {
    blogname: '',
    blogdescription: '',
    error: '',
  }
  submitdata = async event => {
    event.preventDefault()
    const {blogname, blogdescription} = this.state
    const blogtid = v4()
    //console.log(productid)
    const pdata = {
      blogtid,
      blogname,
      blogdescription,
    }
    const url = 'https://zuai-backend-blog-111.onrender.com/createblog/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pdata),
    }
    const response = await fetch(url, options)
    if (response.ok) {
      console.log(response)
      this.setState({
        blogdescription: '',
        blogname: '',
      })
    } else {
      this.setState({error: 'product not created'})
    }

    //console.log(ddata)
  }
  changename = event => {
    this.setState({blogname: event.target.value})
  }

  changeproductdes = event => {
    this.setState({blogdescription: event.target.value})
  }

  render() {
    const {blogname, blogdescription, error} = this.state
    return (
      <div>
        <h1>blogs</h1>
        <form onSubmit={this.submitdata}>
          <label>blogname</label>
          <input
            placeholder="blogname"
            onChange={this.changename}
            value={blogname}
          />

          <label>blogdescription</label>
          <input
            placeholder="blog description"
            onChange={this.changeproductdes}
            value={blogdescription}
          />

          <button type="submit"> submit</button>
        </form>
      </div>
    )
  }
}
export default Blogsadd
