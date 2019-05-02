import React from 'react';
import './scss/App.css';

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
            <div>
                <Navbar />
            </div>
        )
    }
}

export default App;