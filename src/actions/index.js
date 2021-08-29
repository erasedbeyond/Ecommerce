export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const PRICE_FILTER = 'PRICE_FILTER';
export const SEARCH_FILTER = 'SEARCH_FILTER';





export function addProducts(products){
    return{
        type:ADD_PRODUCTS,
        products
    }
}

export function addFilter(filter,value){
    return{
        type:ADD_FILTER,
        filter,
        value
    }
}

export function updatePriceRange(property,value){
    return{
        type:PRICE_FILTER,
        property,
        value
    }
}

export function updateSearch(value){
    return{
        type:SEARCH_FILTER,
        value
    }
}

export function removeFilter(filter,value){
    return{
        type:REMOVE_FILTER,
        filter,
        value
    }
}