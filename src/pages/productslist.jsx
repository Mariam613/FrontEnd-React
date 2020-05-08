import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "../component/card";
import Pagination from "./pagination";
import Filter from "./filter";
import Search from "./search";
import Sort from "./sort";
class Home extends Component {
  render() {
    // console.log(this.props.filter);
    return (
      <div className="container">
        {/* <!-- filters --> */}
        <section className="filters">
          {/* <!-- search box --> */}
          <Search onSearch={this.props.onSearch} />
          {/* <div className="search-box">
            <input
              className="search-box__input"
              placeholder="Search..."
              type="text"
              name="txt_search"
              id=""
            />
            <button type="submit" className="search-box__btn">
              <i className="fas fa-search"></i>
            </button>
          </div> */}
          {/* <!-- filter list --> */}
          <div>
            {/* <!-- filter header --> */}
            <h5>Categories</h5>
            {/* <!-- filter list --> */}
            <Filter
              filter={this.props.filter}
              currentType={this.props.currentType}
              onFilter={this.props.onFilter}
            />
            {/* <ul className="list list--vr-separator">
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Arts & Crafts
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Automotive
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Baby
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Books
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Eletronics
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Women's Fashion
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Men's Fashion
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Health &
                Household
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Home & Kitchen
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Military
                Accessories
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Movies &
                Television
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Sports &
                Outdoors
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Tools & Home
                Improvement
              </li>
              <li className="link list__item">
                <i className="link__icon fas fa-angle-right"></i>Toys & Games
              </li>
            </ul> */}
          </div>
          {/* <!-- filter tags --> */}
          <div>
            {/* <!-- filter header --> */}
            {/* <h5>Tags</h5> */}
            {/* <!-- filter tags --> */}
            {/* <div className="tags">
              <span className="tag">Nike</span>
              <span className="tag">Travel</span>
              <span className="tag">Sport</span>
              <span className="tag">Tv</span>
              <span className="tag">Books</span>
              <span className="tag">Tech</span>
              <span className="tag">Addidas</span>
              <span className="tag">Promo</span>
              <span className="tag">Reading</span>
              <span className="tag">Social</span>
              <span className="tag">New</span>
              <span className="tag">Special</span>
              <span className="tag">Food</span>
              <span className="tag">Used</span>
            </div> */}
          </div>
          {/* <!-- related items --> */}
          {/* <div>
            {/* <!-- title --> */}
          {/* <h5></h5> */}
          {/* <!-- small item --> */}
          {/* <div></div>
            <div></div>
            <div></div> */}
          {/* </div> */}
        </section>
        {/* <!-- Items --> */}
        <section className="item-listing">
          {/* <!-- tools (sorting , change view , exporting) --> */}

          <div className="item-listing__tools">
            <Sort onSort={this.props.onSort} />
            {this.props.token != "" && (
              <Link className="action-btn" to="/addproduct">
                <i className="fas fa-plus"></i>
              </Link>
            )}
          </div>
          {/* <!-- items --> */}
          <div className="item-listing__items item-listing--3items">
            {/* <!-- medium item --> */}
            {this.props.products.map(product => (
              <Card
                key={product._id}
                onDelete={this.props.onDelete}
                product={product}
              />
            ))}
            {/* <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div className="flex-row">
                  <div>
                    <del>$325</del>
                    <span className="lable">$299</span>
                  </div>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="item-medium-1"> */}
            {/* <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{
                  backgroundImage: " url('img/products/product-grey-1.jpg')"
                }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div> */}
          </div>
          {/* <!-- paging --> */}
          {/* <div className="paging"> */}
          {this.props.noofpages > 1 && (
            <Pagination
              // count={this.props.count}
              // pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onChange={this.props.onChange}
              noofpages={this.props.noofpages}
            />
          )}
          {/* <!-- left arrow --> */}
          {/* <div className="paging__arrow">
              <i className="fas fa-angle-left"></i>
            </div> */}
          {/* <!-- page number --> */}
          {/* <div className="paging__number active">1</div>
            <div className="paging__number">2</div>
            <div className="paging__number">3</div> */}
          {/* <!-- right arrow --> */}
          {/* <div className="paging__arrow">
              <i className="fas fa-angle-right"></i>
            </div> */}
          {/* </div> */}
        </section>
      </div>
    );
  }
}

export default Home;
