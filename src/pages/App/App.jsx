import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import { Link } from "react-router-dom";
import ThingsList from "../../components/ThingsList/ThingsList";
import BradyList from "../../components/BradyList/BradyList";

class App extends Component {
  state = {
    user: authService.getUser(),
    erikaThings :[
      {
        name: "Mint chocolate chip ice cream",
        image: 'https://simplysohealthy.com/wp-content/uploads/2017/03/cmic-1.jpg',
        attributes: ["minty fresh", 'chocolate goodness', 'feeds the soul']
      },  {
        name: "Nasa Blanket",
        image: 'https://images.fun.com/products/48499/1-1/nasa-icon-microfiber-fleece-throw.jpg',
        attributes: ["I need my Space", 'science is fun']
      }, {
        name: "Fluffy Pillow",
        image: 'https://m.media-amazon.com/images/I/71v0wAY7N-L._AC_UY218_.jpg',
        attributes: ["endless sleep", 'softness of the gods']
      },
    ],
    sebastianThings: [
      {
        name: "travel",
        image: "https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg",
        attributes: ["planes", "company", "food"]
      },
      {
        name: "videogames",
        image: "https://cdn1.dotesports.com/wp-content/uploads/2019/10/15202826/b8fbf5b3ce1fca11a1a741ddc49016d7.jpg",
        attributes: ["fun", "PC", "rich story"]
      },
      {
        name: "cooking",
        image: "https://pics.me.me/mean-plastic-i-think-cooking-is-my-calling-the-college-15681275.png",
        attributes: ["fun", "interesting", "tasty"]
      }
    ],
    bradyThings: [
      {
        name: 'cow',
        image: 'https://picsum.photos/200/300',
        attributes: ['a', 'c', 'd', 'e']
      },
      {
        name: 'blue cow',
        image: 'https://picsum.photos/200/300',
        attributes: ['x', 'x', 'x', 'x']
      },
      {
        name: 'red cow',
        image: 'https://picsum.photos/200/300',
        attributes: ['y', 'y', 'y', 'y']
      },
      {
        name: 'yellow cow',
        image: 'https://picsum.photos/200/300',
        attributes: ["z", "z", "z", "z"]
      }
    ],
  }


  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };


  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
        <Route
          exact path="/thingslist"
          render={() =>
            <ThingsList
              erikaThings={this.state.erikaThings}
            />
          }
        />
        <Link
          to={{
            pathname: "/thingslist"
          }}
          >
            <p>Erika's things :D</p>
        </Link>
      <Route
          exact path="/bradylist"
          render={() =>
            <ThingsList
              bradyThings={this.state.bradyThings}
            />
          }
        />
        <Link
          to={{
            pathname: "/bradylist"
          }}
          >
            <p>Brady's things :)</p>
        </Link>
      </>
    );
  }
};


export default App;
