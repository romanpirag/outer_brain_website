import React from "react"
import "./App.css"
import MainPage from "./MainPage";
import TwitchAuth from './Components/TwitchAuths.js';
import { BrowserRouter as Router, Route, useLocation, Switch} from 'react-router-dom';


function TwitchAuthOrNoMatch() {
  const location = useLocation();
  const isTwitchAuth = location.hash.includes('access_token=') || location.search.includes('error=');

  return isTwitchAuth ? <TwitchAuth /> : <NoMatch />;
}


function NoMatch() {
  let location = useLocation();
  return (
    <section>
    <div>
      <h1>
        404 Page Not Found <code>{location.pathname}</code>
      </h1>
    </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} /> 
          <Route path="/twitchauth" component={TwitchAuthOrNoMatch} />
          <Route path="*">
            <NoMatch />
          </Route> 
        </Switch>
      </div>
    </Router>
  )
}

export default App
