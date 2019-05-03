import { createStore, combineReducers } from 'redux';

const defaultState = {
    allProducts: [],
    userName: "",
    selectedProduct: null,
}

function allProducts(state = defaultState.allProducts, action){
    if (action.type === "ADD_ALL_PRODUCTS"){
        //const newState = Object.assign({}, {allProducts: action.data})
        const newState = [...action.data];
        console.log("new state", newState);
        return newState;
    }else{
        return state;
    }
}

function userName(state = defaultState.userName, action){
    if (action.type === "SET_USER_NAME"){
        const newState = Object.assign({}, state, {userName: action.data})
        return newState;
    }else{
        return state;
    }
}

function selectedProduct(state = defaultState.selectedProduct, action){
    if (action.type === "SELECT_PRODUCT"){
        const newState = Object.assign({}, state, {selectedProduct: action.data})
        return newState;
    }else{
        return state;
    }
}

const rootReducer = combineReducers({allProducts, userName, selectedProduct});

const store = createStore(rootReducer, defaultState);

export default store;