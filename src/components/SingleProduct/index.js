import React, {Component} from 'react'

class SingleProduct extends Component {
  state = {
    productname: 'cfrdf',
    productprice: '',
    productimg: '',
    productid: '',
    productdescription: '',
    productbrand: '',
  }
  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = 'https://ecomersebackend-7.onrender.com/singleproduct/'
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
        this.setState({productname: each.productname})
        this.setState({productbrand: each.productbrand})
        this.setState({productdescription: each.productdescription})
        this.setState({productprice: each.productprice})
        this.setState({productid: each.productid})
        this.setState({productimg: each.productimg})
      })
    }
    //console.log(response)

    console.log(ondata)
  }

  render() {
    const {productname} = this.state
    console.log(productname)
    return (
      <div>
        <h1>single product</h1>
        <h2>{productname}</h2>
      </div>
    )
  }
}

export default SingleProduct
