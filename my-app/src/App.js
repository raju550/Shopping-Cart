//feature-1fgfgghello worldhellojjjjdff
import React from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";

import store from "./store";
import { Provider } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React shopping cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter></Filter>
                <Products></Products>
              </div>
              <div className="sidebar">
                <Cart></Cart>
              </div>
            </div>
          </main>
          <footer>all product reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
