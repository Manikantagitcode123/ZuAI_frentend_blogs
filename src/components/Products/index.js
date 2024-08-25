import {Component} from 'react'
import {v4} from 'uuid'
class Products extends Component {
  state = {
    productname: '',
    productimg: '',
    productprice: 0,
    productdescription: '',
    productbrand: '',
    error: '',
  }
  submitdata = async event => {
    event.preventDefault()
    const {
      productname,
      productimg,
      productprice,
      productdescription,
      productbrand,
    } = this.state
    const productid = v4()
    console.log(productid)
    const pdata = {
      productid,
      productname,
      productimg,
      productprice,
      productdescription,
      productbrand,
    }
    const url = 'https://ecomersebackend-7.onrender.com/createproduct/'
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
        productbrand: '',
        productdescription: '',
        productimg: '',
        productname: '',
        productprice: 0,
      })
    } else {
      this.setState({error: 'product not created'})
    }

    //console.log(ddata)
  }
  changename = event => {
    this.setState({productname: event.target.value})
  }
  changeimg = event => {
    this.setState({productimg: event.target.value})
  }
  changeprige = event => {
    this.setState({productprice: event.target.value})
  }
  changeproductdes = event => {
    this.setState({productdescription: event.target.value})
  }
  changebrand = event => {
    this.setState({productbrand: event.target.value})
  }

  render() {
    const{ productname,
    productimg,
    productprice,
    productdescription,
    productbrand,
    error}=this.state
    return (
      <div>
        <h1>Products</h1>
        <form onSubmit={this.submitdata}>
          <label>PRODUCTNAME</label>
          <input placeholder="productname" onChange={this.changename} value={productname} />
          <label>PRODUCT IMG</label>
          <input placeholder="product img" onChange={this.changeimg} value={productimg} />
          <label>product price</label>
          <input placeholder="product price" onChange={this.changeprige} value={productprice}/>
          <label>productdescription</label>
          <input
            placeholder="product description"
            onChange={this.changeproductdes} value={productdescription}
          />
          <label>PRDUCT BRAND</label>
          <input placeholder="product brand" onChange={this.changebrand} value={productbrand} />
          <button type="submit"> submit</button>
        </form>
      </div>
    )
  }
}
export default Products
