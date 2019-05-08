import React from 'react';
import './scss/App.css';

//components
import SideBar from './SideBar';

// const Navbar = () => {
//     return(
//         <div className="navBar">
//             <div className="navBarHeader">
//                 E-Commerce
//             </div>
//         </div>
//     )
// }

class App extends React.Component{

    render(){
        return(
            <div className="mainAppDiv">
                {/* <Navbar /> */}
                <SideBar />
            </div>
        )
    }
}

export default App;