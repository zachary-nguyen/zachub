import React from 'react';
import Navigation from "./components/Navigation/navigation";
import './App.css';
import Routes from "./components/Routes/routes";
import AllRepositories from "./views/AllRepositories/allRepositories";
import Home from './views/Home/home';

const App = () => {
    return (
      <React.Fragment>
          <Routes/>
      </React.Fragment>
    );
};

export default App;
