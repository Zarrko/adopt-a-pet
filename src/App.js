import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./Navbar";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading Split Out Code....</h1>;
  }
});

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1>Loading Split Out Code....</h1>;
  }
});

const LoadableSearchParams = Loadable({
  loader: () => import("./SearchParams"),
  loading() {
    return <h1>Loading Split Out Code....</h1>;
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ReduxProvider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearchParams path="/search-params" />
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

// Render App into the dom
render(React.createElement(App), document.getElementById("root"));
