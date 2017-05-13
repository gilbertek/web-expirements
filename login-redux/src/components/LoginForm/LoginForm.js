import React, { Component } from 'React';
import { connect } from 'react-redux';
import login from '../../reducer/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    let { isLoginPending, isLoginSuccess, loginError } = this.props;

    return (
      <div className='login-form-wrapper'>
        <form
          name='loginForm' onSubmit={this.onSubmit}>
          <div className='form-group-collection'>
            <div className='forrm-group'>
              <label>Email:</label>
              <input
                type='email'
                name='email'
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>

            <div className='form-group'>
              <label>Password:</label>
              <input
                type='password'
                name='password'
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>

            <div className='form-group'>
              <input type='submit' value='Login' />
            </div>

            <div className='message'>
              { isLoginPending && <div>Please wait...</div> }
              { isLoginSuccess && <div>Success...</div> }
              { loginError && <div>{loginError.message}</div> }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
