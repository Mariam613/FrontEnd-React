import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LogIn } from "../services/users";
import Input from "../component/input";
import Axios from "axios";
class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };
  handleChange = e => {
    let user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
    console.log(this.state.user);
  };
  handleLogin = async e => {
    const { email, password } = this.state.user;
    const user = { email, password };
    const data = await LogIn(user);

    if (data) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log(data.user);
    } else {
      alert("wrong user name or password");
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log("register");
  };
  render() {
    return (
      <div className="container">
        <form className="login" onSubmit={e => this.handleSubmit(e)}>
          <h4 className="login__header">I'M A RETURNING CUSTOMER</h4>
          <div className="form-group">
            {/* <label htmlFor="">Username or E-mail Address</label> */}
            {/* <input className="form-control" type="text" name="" id="" /> */}
            <Input
              label="Username or E-mail Address"
              name="email"
              value={this.state.user.email}
              onChange={e => this.handleChange(e)}
              //   error={this.state.errors.email}
            />
          </div>
          <div className="form-group login__Password">
            <a href="#" className="login__forget-password">
              (Forget Password?)
            </a>
            {/* <label htmlFor="">Password</label> */}
            <Input
              label="Password"
              name="password"
              value={this.state.user.password}
              onChange={e => this.handleChange(e)}
              //   error={this.state.errors.email}
            />
          </div>
          <div className="login__remember-me">
            <div className="form-group__checkbox">
              <input type="checkbox" name="" id="" />
              <span>Remember Me</span>
            </div>
            <div className="add-product__actions">
              <button href="#" className="btn btn--gray">
                Cancel
              </button>
              <button href="#" className="btn btn--primary">
                <Link onClick={this.handleLogin} to="/productlist">
                  Login
                </Link>
              </button>
            </div>
          </div>
          <button href="#" className="btn btn--primary">
            <Link to="/register" className="login__register-now">
              Register Now
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
