import React, {Component} from 'react'

class Singleblog extends Component {
  state = {
    blogname: 'cfrdf',
    blogtid: '',
    blogdescription: '',
  }
  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = 'https://zuai-backend-blog-111.onrender.com/singleblog/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id}), // Wrapping the name in an object before stringifying
    }
    const response = await fetch(url, options)
    const ondata = await response.json()
    if (response.ok === true) {
      ondata.map(each => {
        this.setState({blogname: each.blogname})

        this.setState({blogdescription: each.blogdescription})

        this.setState({blogtid: each.blogtid})
      })
    }
    //console.log(response)

    console.log(ondata)
  }

  render() {
    const {blogname, blogdescription} = this.state
    console.log(blogname)
    return (
      <div>
        <h1>single blog</h1>
        <h2>{blogname}</h2>
        <p>{blogdescription}</p>
      </div>
    )
  }
}

export default Singleblog
