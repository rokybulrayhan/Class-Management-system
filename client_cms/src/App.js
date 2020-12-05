import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudent from './components/CreateStudent';
import ListStudentComponent from './components/ListStudentComponent';
import ListIteamComponent from './components/ListIteamComponent';
import ViewitemComponent from './components/ViewItemComponent';
import CreateItem from './components/CreateItem';
import Registration from './components/Registration';
import Login from './components/Login';
import HomePage from './components/HomePage';
import CreateService from './components/CreateService';
import ListServiceComponent from './components/ListServiceComponent';



import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/NotFound";
//import Navbar from "./components/layout/Navbar";

function App() {

 
  return (
    
    <div className="App">
         <Router>
         <HeaderComponent /> 
         <div className="container">
               <Switch> 
                   <Route path = "/" exact component = {ListStudentComponent}></Route>
                   <Route path = "/student" exact component = {ListStudentComponent}></Route>
                  <Route path = "/add-student/:id" component = {CreateStudent}></Route>
                  <Route path = "/item-list" component = {ListIteamComponent}></Route>
                  <Route path = "/student-/item-list/:id" component = {ListIteamComponent}></Route>
                  <Route path = "/view-item/:id" component = {ViewitemComponent}></Route>
                  <Route path = "/add-item/:id" component = {CreateItem}></Route>
                  <Route path = "/update-item/:id" component = {CreateItem}></Route>
                  <Route path = "/registration" component = {Registration}></Route>
                  <Route path = "/login" component = {Login}></Route>
                  <Route path = "/admin" component = {HomePage}></Route>
                  <Route path = "/add-service/:id" component = {CreateService}></Route>
                  <Route path = "/service" component = {ListServiceComponent}></Route>
                  <Route component = {NotFound}></Route>
                  
                  {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
              </Switch>
          </div>
          <FooterComponent />
      </Router>
         
     
    </div>
    
  );
}

export default App;
