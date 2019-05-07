import React from 'react';
import './scss/App.css';

//components
import ProductList from './ProductList';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ProductPage from './routes/ProductPage';

const Navbar = () => {
    return(
        <div className="navBar">
            <div className="navBarHeader">
                E-Commerce
            </div>
        </div>
    )
}

class App extends React.Component{

    render(){
        return(
            <div className="mainAppDiv">
                {/* <Navbar /> */}
                {/* <ProductList /> */}
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/product/:productId" component={ProductPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default App;