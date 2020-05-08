import React from "react";
import { Link, Switch, Route } from "react-router-dom";
// import AboutUsers from "./about-users";
// import AboutProducts from "./about-products";

const About = props => {
  return (
    <div>
      <h1>About Products</h1>
      {/* <div className="row">
        <div className="col-3">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/about/aboutusers">Users</Link>
            </li>
            <li className="list-group-item">
              <Link to="/about/aboutproducts">Products</Link>
            </li>
          </ul>
        </div>
        <div className="col-9">
          <Switch>
            <Route path="/about/aboutusers" component={AboutUsers} />
            <Route path="/about/aboutproducts" component={AboutProducts} />
          </Switch>
        </div>
      </div> */}
    </div>
  );
};

export default About;
