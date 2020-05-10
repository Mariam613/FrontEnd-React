import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../component/input";
import { Add } from "../services/users";
class Register extends Component {
  state = {
    user: {
      email: "",
      password: "",
      reEnterPassword: ""
    }
  };
  handleChange = e => {
    let user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
    console.log(this.state.user);
  };

  handleSubmit = async e => {
    e.preventDefault(e);
    const { email, password, reEnterPassword } = this.state.user;
    if (password === reEnterPassword) {
      const user = { email, password };
      await Add(user);
      this.props.history.push("/login");
      console.log("register");
    } else {
      console.log("dont match");
    }
  };
  render() {
    return (
      <div className="container">
        <form className="login" onSubmit={e => this.handleSubmit(e)}>
          <h4 className="login__header">Register An Account</h4>
          <div className="form-group">
            {/* <label for="">E-mail Address</label> */}
            <Input
              label="E-mail Address"
              name="email"
              value={this.state.user.email}
              onChange={this.handleChange}
              // error={this.state.errors.email}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              {/* <label for="">Password</label> */}
              <Input
                label="Password"
                name="password"
                value={this.state.user.password}
                onChange={e => this.handleChange(e)}
                // error={this.state.errors.password}
              />
            </div>
            <div className="form-group">
              {/* <label for="">Re-enter Password</label> */}
              <Input
                label="Re-enter Password"
                name="reEnterPassword"
                value={this.state.user.reEnterPassword}
                onChange={e => this.handleChange(e)}
                //   error={this.state.errors.}
              />
            </div>
          </div>

          <div className="login__remember-me">
            <div className="add-product__actions">
              <Link to="/login" className="btn btn--gray">
                Cancel
              </Link>
              <button
                href="#"
                className="btn btn--primary"
                onSubmit={e => this.handleSubmit(e)}
                type="submit"
              >
                {/* <Link to="/productlist"> */}
                Register
                {/* </Link> */}
              </button>
            </div>
          </div>
          <a href="#" className="login__register-now">
            You are alredy a member?
          </a>
        </form>
      </div>
    );
  }
}

export default Register;
