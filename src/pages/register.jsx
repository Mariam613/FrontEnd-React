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
  handleSave = async e => {
    console.log(this.state.user);
    const { email, password, reEnterPassword } = this.state.user;
    if (password === reEnterPassword) {
      const user = { email, password };
      await Add(user);
      // console.log(data[0]);
      this.props.history.push("/productlist");
    } else {
      e.preventDefault(e);
      console.log("dont match");
    }
    //clone
    // const users = [...this.props.users];
    // users.push(data);
    // this.setState({ products });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("register");
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
              //   error={this.state.errors.email}
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
                //   error={this.state.errors.email}
              />
            </div>
            <div className="form-group">
              {/* <label for="">Re-enter Password</label> */}
              <Input
                label="Re-enter Password"
                name="reEnterPassword"
                value={this.state.user.reEnterPassword}
                onChange={e => this.handleChange(e)}
                //   error={this.state.errors.email}
              />
            </div>
          </div>

          <div className="login__remember-me">
            <div className="add-product__actions">
              <button href="#" className="btn btn--gray">
                Cancel
              </button>
              <button href="#" className="btn btn--primary">
                <Link onClick={this.handleSave} to="/productlist">
                  Register
                </Link>
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
