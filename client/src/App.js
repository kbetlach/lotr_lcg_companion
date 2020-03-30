import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from "./components/pages/Start";
import QuestPage from "./components/pages/Quest";

function App() {
  return (
    <Router>
    <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/quest" component={QuestPage} />
    </div>
    </Router>
  );
}

export default App;
