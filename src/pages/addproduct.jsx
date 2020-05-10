import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../component/input";
import { Add, GetAll } from "../services/products";
import { GetAllTypes } from "../services/category";
import { Link } from "react-router-dom";
class AddProduct extends Component {
  state = {
    products: [],
    product: {
      name: "",
      userId: "",
      price: "",
      discount: "",
      description: "",
      category: "",
      tags: [],
      imgUrl: "url('/img/products/product-grey-1.jpg')"
    },
    types: [],
    token: ""
  };
  async componentDidMount() {
    // const products = await GetAll();
    // this.setState({ products });
    const types = await GetAllTypes();
    this.setState({ types });
    let token = localStorage.getItem("token");
    this.setState({ token });
    // var currentUser = JSON.parse(localStorage.getItem("user"));
    // console.log(currentUser);
    // this.setState({ userId: currentUser.id });
  }
  handleChange = async e => {
    // console.log(e.target.value);
    let product = { ...this.state.product };
    product[e.target.name] = e.target.value;
    this.setState({ product });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, description, price, discount, category } = this.state.product;
    const product = { name, description, price, discount, category };
    const data = await Add(product, this.state.token);
    console.log("add", data);
    this.props.history.push("/productlist");
  };

  // handleSubmit = e => {
  // console.log(this.username.current.value);

  //validate
  // const errors = this.validate();
  // //error
  // if (errors) {
  //   return;
  // } else {
  // }
  //no error
  //call backend server

  // conszxxcole.log("register");
  // };

  // validate() {
  //   const res = Joi.validate(this.state.account, this.schema, {
  //     abortEarly: false
  //   });
  //   const errors = {};
  //   //no error
  //   if (res.error === null) return;
  //   //exrtract error information from joi result
  //   for (const item of res.error.details) {
  //     errors[item.path] = item.message;
  //   }
  //   this.setState({ errors });
  //   console.log(this.state.errors);
  //   return errors;
  // }
  // validateProperty(input) {
  //   //sub object
  //   const obj = { [input.name]: input.value };
  //   //sub schema
  //   const schema = { [input.name]: this.schema[input.name] };
  //   const res = Joi.validate(obj, schema, { abortEarly: false });
  //   const errors = { ...this.state.errors }; //clone
  //   if (res.error) {
  //     errors[input.name] = res.error.details[0].message;
  //   } else {
  //     delete errors[input.name];
  //   }
  //   this.setState({ errors });
  // }
  render() {
    // console.log(this.state.types);
    // console.log(this.props.products);
    return (
      <div className=" container">
        <form
          className="add-product"
          onSubmit={e => this.handleSubmit(e)}
          action=""
        >
          <div className="add-product__images slider">
            <div className="add-product__image-actions">
              <div className="add-product__image-action">
                <a href="">
                  <i className="fas fa-plus-square"></i>
                </a>
                <a href="#">
                  <i className="fas fa-edit"></i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </div>
            </div>
            <div className="slider__items">
              <div
                className="slider__item active"
                style={{
                  backgroundImage: "url('img/products/product-grey-7.jpg')"
                }}
              ></div>
              <div
                className="slider__item"
                style={{
                  backgroundImage: "url('img/products/product-grey-7.jpg')"
                }}
              ></div>
              <div
                className="slider__item"
                style={{
                  backgroundImage: "url('img/products/product-grey-7.jpg')"
                }}
              ></div>
            </div>
            <div className="slider__indicators">
              <span className="slider__indicator active"></span>
              <span className="slider__indicator"></span>
              <span className="slider__indicator"></span>
            </div>
          </div>
          ;
          <div className="add-product__data">
            <div className="form-controls">
              <section className="tabs">
                <div className="tabs__headers">
                  <div className="tabs__header active">English</div>
                  <div className="tabs__header">Arabic</div>
                </div>
                <div className="tabs__bodies">
                  <div className="tabs__body active">
                    <div className="form-group ">
                      <Input
                        //type="text"
                        label="Name"
                        name="name"
                        value={this.state.product.name}
                        onChange={e => this.handleChange(e)}
                        // error={this.state.errors.name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={this.state.product.description}
                        onChange={e => this.handleChange(e)}
                        // error={this.state.errors.description}
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="tabs__body ">
                    <div className="form-group invalid">
                      <label htmlFor="">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>

              <div className="form-group">
                {/* <label htmlFor="">Price</label> */}
                <Input
                  //type="text"
                  label="Price"
                  name="price"
                  value={this.state.product.price}
                  onChange={e => this.handleChange(e)}
                  // error={this.state.errors.price}
                />
              </div>
              <div className="add-product__discount">
                {/* <div className="form-group">
                  <label htmlFor="">Satus</label>
                  <div className="form-group__radios">
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>On Sale</span>
                    </div>
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>Not On Sale</span>
                    </div>
                  </div>
                </div> */}
                <div className="form-group">
                  {/* <label htmlFor="">Discount</label> */}
                  <Input
                    //type="text"
                    label="Discount"
                    name="discount"
                    value={this.state.product.discount}
                    onChange={e => this.handleChange(e)}
                    // error={this.state.ersrors.discount}
                  />
                </div>
              </div>
              {/* <div className="form-group">
                <label htmlFor="">Payment Types</label>
                <div className="form-group__checkboxs">
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Direct Bank Transfare</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Cheque Payment</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Paypal</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Visa</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Mastercard</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>On Dilivery</span>
                  </div>
                </div>
              </div> */}
              <div className="form-group">
                <label htmlFor="">Category</label>
                {/* <select className="form-control" name="" id="">
                  <option value="">Arts & Crafts</option>
                  <option value="">Automotive</option>
                  <option value="">Baby</option>
                  <option value="">Books</option>
                  <option value="">Eletronics</option>
                  <option value="">Women's Fashion</option>
                  <option value="">Men's Fashion</option>
                  <option value="">Health & Household</option>
                  <option value="">Home & Kitchen</option>
                  <option value="">Military Accessories</option>
                  <option value="">Movies & Television</option>
                  <option value="">Sports & Outdoors</option>
                  <option value="">Tools & Home Improvement</option>
                  <option value="">Toys & Games</option>
                </select> */}
                <select
                  className="form-control"
                  name="category"
                  onChange={this.handleChange}
                >
                  <option defaultValue>Select Category</option>
                  {this.state.types.map(item => (
                    <option key={item._id} value={item._id}>
                      {item.category_Name}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="taged-textbox form-group">  */}
              {/* <label className="taged-textbox__lable" htmlFor="">
                  Tags
                </label> */}
              {/* <div className="taged-textbox__data">
                  <div className="taged-textbox__tags"> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag1</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag2</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag3</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag4</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag5</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag6</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag7</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag8</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag9</span>
                      <a href="#" className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* <div className="taged-textbox__tag">
                      <span>tag10</span>
                      <a className="taged-textbox__remove">
                        <i className="fas fa-times"></i>
                      </a>
                    </div> */}
              {/* </div> */}
              {/* <div className="taged-textbox__clear">
                    <a href="#">
                      <i className="fas fa-times"></i>
                    </a>
                  </div> */}
              {/* </div>
                <Input
                  className="taged-textbox__textbox form-control"
                  // label="Username or E-mail Address"
                  name="text"
                  value={this.state.product.tags}
                  onChange={e => this.handleChange(e)}
                  //   error={this.state.errors.email}
                />
                
              </div> */}
              <div className="add-product__actions">
                {/* <button href="#" className="btn btn--gray">
                  Cancel
                </button> */}
                <Link
                  onClick={this.props.handleCancel}
                  to="/productlist"
                  className="btn btn--gray"
                >
                  Cancel
                </Link>
                <button
                  onSubmit={e => this.handleSubmit(e)}
                  type="submit"
                  className="btn btn--primary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;
