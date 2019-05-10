import React from 'react';
import './scss/TopBarInfo.css';

//components
import store from "./store";
import { Icon } from 'semantic-ui-react';

class TopBarInfo extends React.Component{

    render(){
        return(
            <div className="mainTopBarInfo">
                <div className="greetingText">Hi, Devin!</div>
                <Icon.Group size="large">
                    <Icon name="shopping cart" circular inverted/>
                    <Icon className="cartCount" circular inverted color="grey" corner>
                        {store.getState().cart.length}
                    </Icon>
                </Icon.Group>
            </div> 
        )
    }
}

export default TopBarInfo;