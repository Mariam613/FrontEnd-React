import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import _ from "lodash";
import DetailsProduct from "./component/detailsprodouct";
import Header from "./layout/header";
import Login from "./pages/login";
import AddProduct from "./pages/addproduct";
import EditProduct from "./pages/editproduct";
import Home from "./pages/productslist";
import ContactUs from "./component/contactUs";
import About from "./component/about";
import NotFound from "./component/not-found";
import { GetAllTypes } from "./services/category";
import { GetAll, Delete } from "./services/products";
import Register from "./pages/register";
class App extends Component {
  state = {
    products: [],
    // users: [],
    pageSize: 9,
    currentPage: 1,
    noofpages: Number,
    filter: [],
    currentType: 0,
    query: "",
    currentSort: "",
    token: ""
    // mainproducts: [],
    // contentPage: [2, 3]
  };
  async componentDidMount() {
    let {
      query,
      currentType,
      currentSort,
      currentPage,
      pageSize,
      noofpages,
      products
      // token
    } = this.state;
    const response = await GetAll(
      query,
      currentType,
      currentSort,
      currentPage,
      pageSize
    );
    products = response.products;
    noofpages = response.noofpages;
    const all = { _id: 0, category_Name: "All" };
    let filter = await GetAllTypes();
    const newFilter = [all, ...filter];
    let tokeen = localStorage.getItem("token");
    this.setState({
      products,
      // mainproducts: products,
      filter: newFilter,
      noofpages
      // token: tokeen
    });

    // console.log(this.state.token);
  }
  handleChangePage = async page => {
    console.log(page);
    let {
      products,
      query,
      currentType,
      currentSort,
      // currentPage,
      noofpages,
      pageSize
    } = this.state;
    const response = await GetAll(
      query,
      currentType,
      currentSort,
      // currentPage,
      page,
      pageSize
    );
    products = response.products;
    noofpages = response.noofpages;
    this.setState({ currentPage: page, noofpages, products });
  };
  handleFilter = async id => {
    console.log();
    let {
      query,
      currentSort,
      currentPage,
      pageSize,
      noofpages,
      products
    } = this.state;
    let data;
    let currentType;
    // let data = this.state.products;
    if (id === 0) {
      currentType = 0;
      data = await GetAll(
        query,
        currentType,
        currentSort,
        currentPage,
        pageSize
      );
    } else {
      // debugger;
      data = await GetAll(query, id, currentSort, currentPage, pageSize);
      console.log(data);
      currentType = id;
    }
    products = data.products;
    noofpages = data.noofpages;
    this.setState({ currentType, currentPage: 1, products, noofpages });

    console.log(this.state.currentType);
  };
  handleSearch = async e => {
    let {
      currentType,
      currentSort,
      currentPage,
      pageSize,
      noofpages,
      products
    } = this.state;
    let query = e.target.value;
    this.setState({ query });
    // let data;
    // const mainproducts = [...this.state.mainproducts];
    let result = [];
    if (query !== null || query != "") {
      result = await GetAll(
        query,
        currentType,
        currentSort,
        currentPage,
        pageSize
      );
      console.log(currentPage, pageSize);
    }
    // if (query === null || query === "") {
    //   // result = mainproducts;
    //   result = await GetAll(
    //     query,
    //     currentType,
    //     currentSort,
    //     currentPage,
    //     pageSize
    //   );
    //   console.log(currentPage, pageSize);
    // }
    products = result.products;
    noofpages = result.noofpages;
    this.setState({ products, noofpages });
  };
  handleSort = async e => {
    console.log("Sort");
    let {
      currentType,
      query,
      currentPage,
      pageSize,
      noofpages,
      products
    } = this.state;
    const { value } = e.target;
    let currentSort = value;
    // let products = [...this.state.products];
    let result = [];
    result = await GetAll(
      query,
      currentType,
      currentSort,
      currentPage,
      pageSize
    );
    products = result.products;
    noofpages = result.noofpages;
    this.setState({ currentSort, products, noofpages });
    // this.setState({ products: result });
  };
  handleDelete = async id => {
    let {
      currentType,
      query,
      currentPage,
      pageSize,
      noofpages,
      currentSort,
      products
    } = this.state;
    let token = localStorage.getItem("token");
    //back end
    await Delete(id, token);
    let result = [];
    result = await GetAll(
      query,
      currentType,
      currentSort,
      currentPage,
      pageSize
    );
    products = result.products;
    noofpages = result.noofpages;
    this.setState({ currentType, products, noofpages });
  };
  render() {
    let {
      products,
      pageSize,
      currentPage,
      contentPage,
      filter,
      currentType,
      noofpages,
      // token,
      users
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/about" render={props => <About {...props}></About>} />
          <Route path="/contactus" component={ContactUs} />
          <Route
            path="/addproduct"
            render={props => <AddProduct {...props} products={products} />}
          />
          <Route
            path="/editproduct/:id"
            render={props => <EditProduct types={filter} {...props} />}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/register"
            render={props => <Register {...props} users={users} />}
          />
          <Route
            path="/detailsproduct/:id?"
            render={props => <DetailsProduct {...props} />}
          />
          <Route
            path="/productlist"
            render={() => (
              <Home
                count={products.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onChange={this.handleChangePage}
                contentPage={contentPage}
                products={products}
                filter={filter}
                currentType={currentType}
                onFilter={this.handleFilter}
                onSearch={this.handleSearch}
                onSort={this.handleSort}
                onDelete={this.handleDelete}
                noofpages={noofpages}
                // token={token}
              />
            )}
          />
          <Route path="/notfound" component={NotFound}></Route>
          {/* <Route path="/home" exact component={Home} /> */}
          {/*exact or switch  */}
          <Redirect from="/home" to="/productlist"></Redirect>
          <Redirect from="/" to="/productlist"></Redirect>
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
