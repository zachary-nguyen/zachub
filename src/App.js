import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import './App.css';
import Routes from "./components/Routes/routes";

const App = () => {
    return (
      <React.Fragment>
          <Navigation/>
          <Routes/>
      </React.Fragment>
    );
};

export default App;
