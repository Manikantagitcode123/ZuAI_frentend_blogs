import React, {Component} from 'react'

class BlogEdit extends Component {
  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = 'https://zuai-backend-blog-111.onrender.com/deleteblog/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id}), // Wrapping the name in an object before stringifying
    }
    const response = await fetch(url, options)
    console.log(response)
    const ondata = await response.json()

    console.log(ondata)
  }

  render() {
    return (
      <div>
        <h1>blog delated sucesufully</h1>
      </div>
    )
  }
}

export default BlogEdit
