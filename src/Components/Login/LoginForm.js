import React, { Component } from 'react'
import Input from '../Common/Input'

class LoginForm extends Component {
  constructor () {
    super()
    this.state = {
      identifier: '',
      password: '',
      validationErrors: {
        identifier: '',
        password: ''
      }
    }
  }

  onChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render () {
    return (
      <form className='login-form'>
        <Input
          label='Username or Email'
          type='text'
          name='identifier'
          onChange={this.onChangeHandler}
          value={this.state.identifier}
          validationError={this.state.validationErrors.identifier} />
        <Input
          label='Password'
          type='password'
          name='password'
          onChange={this.onChangeHandler}
          value={this.state.password}
          validationError={this.state.validationErrors.password} />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

export default LoginForm