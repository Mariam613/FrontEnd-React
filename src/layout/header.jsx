import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import NavBar from "./navigation";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        {/* <!-- upper header --> */}
        <div className="header__upper">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- contact info --> */}
            <ul className="list list--hr list--hr-separator">
              <li className="list__item">
                <span className="info">
                  {/* <!-- icon --> */}
                  <i className="info__icon far fa-dot-circle"></i>
                  {/* <!-- info --> */}
                  <span className="info__data">
                    1234 Street Name, City Name
                  </span>
                </span>
              </li>
              <li className="list__item">
                <a href="#" className="info">
                  {/* <!-- icon --> */}
                  <i className="info__icon fab fa-whatsapp"></i>
                  {/* <!-- info --> */}
                  <span className="info__data">123-456-7890</span>
                </a>
              </li>
              <li className="list__item">
                <a href="#" className="info">
                  {/* <!-- icon --> */}
                  <i className="info__icon far fa-envelope"></i>
                  {/* <!-- info --> */}
                  <span className="info__data">mail@domain.com</span>
                </a>
              </li>
            </ul>
            {/* <!-- side menu --> */}
            <ul className="list list--hr">
              <li className="list__item">
                <a href="#" className="link">
                  {/* <!-- icon --> */}
                  <i className="link__icon fas fa-angle-right"></i>
                  {/* <!-- info --> */}
                  About Us
                </a>
              </li>
              <li className="list__item">
                <a href="#" className="link">
                  {/* <!-- icon --> */}
                  <i className="link__icon fas fa-angle-right"></i>
                  {/* <!-- info --> */}
                  Contact Us
                </a>
              </li>
              {/* <!-- languges --> */}
              <li className="list__item">
                {/* <!-- drop down --> */}
                {/* <!-- to oppen dropdown dropdown--opened --> */}
                <div className="dropdown ">
                  {/* <!-- header --> */}
                  <div className="dropdown__header">
                    <a href="#" className="link">
                      <img className="flag flag-us" src="" alt="" />
                      English
                    </a>
                    <i className="fas fa-angle-down"></i>
                  </div>

                  {/* <!-- items --> */}
                  <div className="dropdown__body">
                    <ul className="dropdown__items list">
                      <li className="dropdown__item list__item">
                        <a href="#" className="link">
                          <img className="flag flag-us" src="" alt="" />
                          English
                        </a>
                      </li>
                      <li className="dropdown__item list__item">
                        <a href="#" className="link">
                          <img className="flag flag-es" src="" alt="" />
                          Español
                        </a>
                      </li>
                      <li className="dropdown__item list__item">
                        <a href="#" className="link">
                          <img className="flag flag-fr" src="" alt="" />
                          Française
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- middle header --> */}
        <div className="header__middle container">
          {/* <!-- logo --> */}
          <a href="#" className="header__logo-box">
            <img className="header__logo" src="img/logo.png" alt="" />
          </a>
          {/* <!-- user options --> */}
          <div className="header__user-options">
            {/* <!-- login control --> */}
            <Link to="/login" className="link">
              Login
            </Link>
            <div className="dropdown">
              <div className="dropdown__header">
                <div
                  className="image image--small image--circle"
                  style={{
                    backgroundImage: "url('img/PersonalImage.png')"
                  }}
                ></div>
              </div>
              <div className="dropdown__body"></div>
            </div>
            {/* <!-- shopping card dropdown --> */}
            {/* <!-- dropdown--opened to open --> */}
            <div className="dropdown dropdown--left  ">
              {/* <!-- header --> */}
              <div className="dropdown__header">
                <div
                  className="image image--small"
                  style={{
                    backgroundImage: "url('img/icons/icon-cart-big.svg')"
                  }}
                >
                  <div className="notification notification--danger">1</div>
                </div>
              </div>
              {/* <!-- body --> */}
              <div className="dropdown__body">
                {/* <!-- items --> */}
                <ul className="dropdown__items list list--vr-separator">
                  <li className="dropdown__item list__item">
                    {/* <!-- item small 2 --> */}
                    <div className="item-small-1">
                      {/* <!-- item data --> */}
                      <div className="item-small-1__data">
                        {/* <!-- title --> */}
                        <a href="" className="item-small-1__title">
                          Camera X1000
                        </a>
                        {/* <!-- price --> */}
                        <span className="item-small-1__description">
                          1 X $890
                        </span>
                      </div>
                      {/* <!-- item image --> */}
                      <div className="item-small-1__image-box">
                        <a
                          href="#"
                          className="item-small-1__image image"
                          style={{
                            backgroundImage: "url('img/products/product-1.jpg')"
                          }}
                        ></a>
                        <a href="#" className="item-small-1__action">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown__item list__item">
                    <div className="item-small-1">
                      {/* <!-- item data --> */}
                      <div className="item-small-1__data">
                        {/* <!-- title --> */}
                        <a href="" className="item-small-1__title">
                          Camera X2000
                        </a>
                        {/* <!-- price --> */}
                        <span className="item-small-1__description">
                          2 X $990
                        </span>
                      </div>
                      {/* <!-- item image --> */}
                      <div className="item-small-1__image-box">
                        <a
                          href="#"
                          className="item-small-1__image image"
                          style={{
                            backgroundImage: "url('img/products/product-1.jpg')"
                          }}
                        ></a>
                        <a href="" className="item-small-1__action">
                          <i className="fas fa-times"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <!-- totals --> */}
                <div className="separator"></div>
                <div className="block">
                  <span className="lable">Total:</span>
                  <span className="lable">$2870</span>
                </div>
                {/* <!-- actions --> */}
                <div className="block list list--hr">
                  <a className="list-item btn btn--gray" href="">
                    View Cart
                  </a>
                  <a className="list-item btn btn--primary" href="">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- lower header --> */}
        <NavBar />
      </div>
    );
  }
}

export default Header;
