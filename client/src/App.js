import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from "./components/Pages/Start";
import QuestPage from "./components/Pages/Quest";

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
