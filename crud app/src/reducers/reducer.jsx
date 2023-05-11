const InitialData = {
    details: [],
    isDataDeleted: false,
    isDataAdded: false,
    isDataEdited: false,
}

const reducer = (state = InitialData, action) => {
    switch (action.type) {
        case "GET_DETATILS":
            return {
                details: action.payload
            }
        case "DELETE_DETATILS":
            return {
                isDataDeleted: action.payload
            }
        case "POST_DETATILS":
            return {
                isDataAdded: action.payload
            }
        case "UPDATE_DETATILS":
            return {
                isDataEdited: action.payload
            }
        default: return state;
    }
}

export default reducer;