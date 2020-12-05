import React, { Component } from 'react'
import { NavLink }  from "react-router-dom";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            style : {
                color : 'red',
                frontWeight: 'bold'
       
               }     
        }
       
    }
    

    render() {
        return (
            <div>

                {/*

                <Route path = "/" exact component = {ListCategoryComponent}></Route>
                   <Route path = "/category" component = {ListCategoryComponent}></Route>
                  <Route path = "/add-category/:id" component = {CreateCategory}></Route>
                  <Route path = "/item-list" component = {ListIteamComponent}></Route>
                  <Route path = "/category-/item-list/:id" component = {ListIteamComponent}></Route>
                  <Route path = "/view-item/:id" component = {ViewitemComponent}></Route>
                  <Route path = "/add-item/:id" component = {CreateItem}></Route>
                  <Route path = "/update-item/:id" component = {CreateItem}></Route>
                  <Route path = "/registration" component = {Registration}></Route>
                  <Route path = "/login" component = {Login}></Route>
                  <Route path = "/admin" component = {HomePage}></Route>
                  <Route component = {NotFound}></Route>
                */}
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                   <a href="https://www.watchflix.com/" className="navbar-brand">Watchflix</a></div>
                     {/* <NavLink activeStyle={this.state.style} to = '/admin'>Home</NavLink>
                    <NavLink activeStyle={this.state.style} to = '/login'>Login</NavLink>
                    <NavLink activeStyle={this.state.style} to = '/registration'>Sign Up</NavLink>
                       */}
                  
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
