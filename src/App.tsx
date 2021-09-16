import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewXml from "./pages/NewXml";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <NewXml />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
