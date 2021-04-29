import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
// import Details from "./Details";
// import SearchParams from "./SearchParams";


const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {

  return (

    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Suspense fallback={<h1>Loading route...</h1>}>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>

      </Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));