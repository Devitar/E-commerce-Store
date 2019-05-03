import React from 'react';
import './scss/App.css';

//components
import ProductList from './ProductList';
//import { Button } from 'semantic-ui-react';

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
                <div className="container">
                    <ProductList />
                </div>
                
            </div>
        )
    }
}

export default App;