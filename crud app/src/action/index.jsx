import { useEffect, useState } from "react";
import { GetApiDetails, DeleteApiDetails, PostApiDetails, EditApiDetails, NewApiDetails } from "../crud/API";

// For getting Api's data
export const GetAPIAction = () => {
    return function (dispatch) {
        return GetApiDetails().then((res) => {
            dispatch({
                type: "GET_DETATILS",
                payload: res.data
            })
        })
    }
}

// For Deleting Api's data
export const DeleteAPIAction = (id) => {
    return function (dispatch) {
        return DeleteApiDetails(id).then((res) => {
            dispatch({
                type: "DELETE_DETATILS",
                payload: true,
            })
        })
    }
}

// For Adding new data Api's data
export const PostAPIAction = (adddata) => {
    return function (dispatch) {
        return PostApiDetails(adddata).then((res) => {
            dispatch({
                type: "POST_DETATILS",
                payload: '',
            })
        })
    }
}

// For Editing Api's data
export default (Editdata) => {
    const [detailbyid, setdetailbyid] = useState({});
    const GetDetailsId = (requestId) => {
        return EditApiDetails(requestId).then(res => setdetailbyid(res))
    }
    useEffect(() => {
        GetDetailsId(Editdata);
    }, [])
    return [detailbyid]
}

// edit data
// For Adding new data Api's data
export const NewAPIAction = (data, id) => {
    console.log(data)
    return function (dispatch) {
        dispatch({
            type: "UPDATE_DETATILS",
            payload: false,
        })
        return NewApiDetails(data, id).then((res) => {
            console.log(res);
            dispatch({
                type: "UPDATE_DETATILS",
                payload: true,
            })
        })
    }
}