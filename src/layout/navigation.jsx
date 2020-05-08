import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="header__lower container">
        {/* <!-- navigation --> */}
        <nav className="nav">
          <ul className="nav__items list list--hr">
            {/* <!-- items --> */}
            <li className="nav__item">
              <NavLink className="nav__link" to="/productlist">
                Home
              </NavLink>
            </li>
            <li className="nav__item dropdown ">
              {/* <!-- title --> */}
              <a className="nav__link dropdown__header" href="#">
                Products
              </a>
              {/* <!-- items --> */}
              <div className="dropdown__body">
                <ul className=" list">
                  <li className="list__item">
                    <NavLink className="nav__inner-link" to="/productlist">
                      Product Listing
                    </NavLink>
                  </li>
                  <li className="list__item">
                    <NavLink className="nav__inner-link" to="/addproduct">
                      Add Product
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/contactus">
                Contact Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/about">
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
