import React, { Component } from 'React';
import { connect } from 'react-redux';
import { login } from '../../reducer/login/actions';

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

    this.setState({ email: '', password: '' });
  }

  render() {
    console.log(this.props);

    const { isLoginPending, isLoginSuccess, loginError } = this.props;

    console.log(isLoginPending);

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

const mapStateToProps = ({ login }) => {
  return {
    isLoginPending: login.isLoginPending,
    isLoginSuccess: login.isLoginSuccess,
    loginError: login.loginError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
