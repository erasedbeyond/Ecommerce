import { combineReducers } from "redux";
import {
    ADD_PRODUCTS,
    ADD_FILTER,
    REMOVE_FILTER,
    PRICE_FILTER,
    SEARCH_FILTER
} from '../actions/index'


export function products(state=[],action){
    switch(action.type){
        case ADD_PRODUCTS:
            return [...state,...action.products]
        default:
            return state;
    }
}

let initialFilterState={
    categories:[],
    colors:[],
    brands:[],
    price:{
        minPrice:0,
        maxPrice:9999
    },
    search:''
}
export function filter(state=initialFilterState,action){
    switch(action.type){
        case ADD_FILTER:
            return {
                ...state,
               [action.filter] : [...state[action.filter],action.value]
            };
        case REMOVE_FILTER:
            return {
                ...state,
                [action.filter] : state[action.filter].filter(item=>item!==action.value)
            };
        case PRICE_FILTER:
            return{
                ...state,
                price:{
                    ...state.price,
                    [action.property]:action.value
                }
            }
        case SEARCH_FILTER:
            return{
                ...state,
                search:action.value
            }
        default:
            return state
            
    }
}

export default combineReducers({
    products,
    filter
})