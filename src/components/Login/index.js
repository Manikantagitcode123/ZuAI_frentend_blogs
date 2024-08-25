import {Component} from 'react'
//import {Redirect } from "react-router-dom"
//import { Redirect } from 'react-router-dom';

import Cookies from 'js-cookie'
class Login extends Component {
  state = {username: '', password: '', p: ''}
  routesignup = () => {
    const {history} = this.props
    history.replace('/signup')
  }
  changeusername = event => {
    this.setState({username: event.target.value})
  }
  changepassword = event => {
    this.setState({password: event.target.value})
  }
  submitdata = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const data = {username, password}
    const url = 'https://ecomersebackend-7.onrender.com/login/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(url, options)
    //console.log(response)
    if (response.ok === true) {
      const ondata = await response.json()
      console.log(ondata)
      const jwttoken = ondata.jwtToken
      Cookies.set('jwt_token', jwttoken, {expires: 10})
      const {history} = this.props
      history.replace('/')
    } else {
      const ondata = await response.json()
      console.log(ondata)
      this.setState({p: response.massage})
    }
  }

  render() {
    const jwttoken = Cookies.get('jwt_token')
    const {p} = this.state

    return (
      <div>
        <form onSubmit={this.submitdata}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            placeholder="please enter username"
            onChange={this.changeusername}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="please enter password"
            onChange={this.changepassword}
          />
          <button type="submit">Login</button>
          <p>{p}</p>
        </form>
        <button onClick={this.routesignup}>signup</button>
      </div>
    )
  }
}

export default Login
