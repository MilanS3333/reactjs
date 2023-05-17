// get data
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove items
export const DELET = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
}

// remove individual items
export const REMOVE = (iteam) => {
    return {
        type: "REMOVE_CART_ONE",
        payload: iteam
    }
}