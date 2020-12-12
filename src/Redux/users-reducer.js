import { userCreater, userEditor } from '../Utils/userConstructor'

const CREATE_USER = "CREATE_USER"
const DELETE_USER = "DELETE_USER"
const EDIT_USER = "EDIT_USER"
const SELECT_MUTABLE_USER = "SELECT_MUTABLE_USER"
const DELETE_MUTABLE_USER = "DELETE_MUTABLE_USER"

let initialState = {
    users: [],
    mutableUser: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [action.newUser, ...state.users]
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            }
        case EDIT_USER:
            const index = state.users.findIndex(user => user.id === action.user.id)
            const newArr = [...state.users]
            newArr[index] = action.user
            return {
                ...state,
                users: newArr
            }
        case SELECT_MUTABLE_USER:
            return {
                ...state,
                mutableUser: state.users.filter(user => user.id === action.userId)[0]
            }
        case DELETE_MUTABLE_USER:
            return {
                ...state,
                mutableUser: null
            }
        default:
            return state
    }
}

export const createUser = (newUser) => ({ type: CREATE_USER, newUser })
export const editUser = (user) => ({ type: EDIT_USER, user })
export const deleteUser = (userId) => ({ type: DELETE_USER, userId })
export const selectMutableUser = (userId) => ({ type: SELECT_MUTABLE_USER, userId })
export const deleteMutableUser = () => ({ type: DELETE_MUTABLE_USER })

//Thunk

export const createUserThunk = (userData) => {
    return (dispatch) => {
        let data = userCreater(userData)
        dispatch(createUser(data))
    }
}

export const editUserThunk = (newUserData, mutableUser) => {
    return (dispatch) => {
        let data = userEditor(newUserData, mutableUser)
        dispatch(editUser(data))
        dispatch(deleteMutableUser())
    }
}

export const deleteMutableUserThunk = () => {
    return (dispatch) => {
        dispatch(deleteMutableUser())
    }
}

export default usersReducer

