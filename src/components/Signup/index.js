import React, {Component} from 'react'

class Signup extends Component {
  state = {username: '', password: '', errorMessage: ''}
  routelogin = () => {
    const {history} = this.props
    history.replace('/login')
  }

  changepassword = event => {
    this.setState({password: event.target.value})
  }

  changeusername = event => {
    this.setState({username: event.target.value})
  }

  submitdata = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const data = {username, password}
    const url = 'https://zuai-backend-blog-111.onrender.com/users/'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // User created successfully
        console.log('User created successfully')
        //const{history}=this.props
        //history.replace("/login")
        this.setState({username: '', password: ''})
      } else {
        // Failed to create user
        const errorMessage = await response.text()
        throw new Error(errorMessage || 'Failed to create user')
      }
    } catch (error) {
      console.error('Error:', error)
      this.setState({errorMessage: error.message})
    }
  }

  render() {
    const {username, password, errorMessage} = this.state

    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.submitdata}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.changeusername}
            placeholder="Enter username"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={this.changepassword}
            placeholder="Enter password"
            required
          />
          <button type="submit">Signup</button>
        </form>
        <button onClick={this.routelogin}> login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    )
  }
}

export default Signup
