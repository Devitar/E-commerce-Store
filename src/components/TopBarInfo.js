import React from 'react';
import './scss/TopBarInfo.css';

//components
import store from "./store";
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class TopBarInfo extends React.Component{

    render(){
        return(
            <div className="mainTopBarInfo">
                <div className="greetingText">Hi, Devin!</div>
                <Link to='/E-commerce-Store/cart'>
                    <Icon.Group size="large">
                        <Icon name="shopping cart" circular inverted/>
                        <Icon className="cartCount" circular inverted color="grey" corner>
                            {store.getState().cart.length}
                        </Icon>
                    </Icon.Group>
                </Link>
            </div> 
        )
    }
}

export default TopBarInfo;