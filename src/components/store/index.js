import { createStore, combineReducers } from 'redux';

const defaultState = {
    allProducts: [],
    userName: "",
    selectedProduct: null,
    cart: [],
}

function allProducts(state = defaultState.allProducts, action){
    if (action.type === "ADD_ALL_PRODUCTS"){
        const newState = [...action.data];
        return newState;
    }else{
        return state;
    }
}

function userName(state = defaultState.userName, action){
    if (action.type === "SET_USER_NAME"){
        const newState = `${action.data}`;
        return newState;
    }else{
        return state;
    }
}

function selectedProduct(state = defaultState.selectedProduct, action){
    if (action.type === "SELECT_PRODUCT"){
        const newState = action.data;
        console.log("New item selected", newState);
        return newState;
    }else{
        return state;
    }
}

function cart(state = defaultState.cart, action){
    const newState = action.data;
    if (action.type === "ADD_TO_CART"){
        
        return newState;
    }else if (action.type === "REMOVE_FROM_CART"){

        return newState;
    }else{
        return state;
    }
}

const rootReducer = combineReducers({allProducts, userName, selectedProduct, cart});

const store = createStore(rootReducer, defaultState);

export default store;