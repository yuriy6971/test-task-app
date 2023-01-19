import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Test_Info from "./components/Test_Info/Test_Info";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper_App">
        <Header />

        <div className="app_wrapper_content ">
          <Route path="/" exact component={Test_Info} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </div>
  );
}
export default App;
