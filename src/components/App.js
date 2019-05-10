import React from 'react';
import './scss/App.css';

//components
import PageController from './PageController';
import store from './store';

class App extends React.Component{
    abortController = new AbortController();
    componentDidMount(){
            fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/products', { signal: this.abortController.signal })
            .then(response => response.json())
            .then(data => 
                store.dispatch({type: "ADD_ALL_PRODUCTS", data: data})
            )
            .catch(err => {
                if (err.name === "AbortError") return
                throw err;
            })

            store.subscribe(() => this.forceUpdate())
    }
    
    render(){
        return(
            <div className="mainAppDiv">
                <PageController />
            </div>
        )
    }
}

export default App;