import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

export const Routes = (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
</Router>
);
