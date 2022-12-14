import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Home */}
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />

        {/* header */}

        {/* Banner */}
        {/*  Search*/}

        {/* cards */}

        {/* footer */}

        {/* searchpage */}
      </Router>
    </div>
  );
}

export default App;
