// import { save, load } from "redux-localstorage-simple"

const CREATE_USER = "CREATE_USER"
const DELETE_USER = "DELETE_USER"
const EDIT_USER = "EDIT_USER"

let initialState = {
    users: [
        // {
        //     name: 'Alexey',
        //     id: '234546576',
        //     status: 'admin',
        //     phone: '85432543544',
        //     email: 'mail233@mail.ru',
        //     password: 'ffferr4',
        //     creationDate: "12.31.443",
        //     lastModifideDate: '234.243.523'
        // },
        // {
        //     name: 'Alexey',
        //     id: '234546576',
        //     status: 'admin',
        //     phone: '85432543544',
        //     email: 'mail233@mail.ru',
        //     password: 'ffferr4',
        //     creationDate: "12.31.443",
        //     lastModifideDate: '234.243.523'
        // },
        // {
        //     name: 'Alexey',
        //     id: '234546576',
        //     status: 'admin',
        //     phone: '85432543544',
        //     email: 'mail233@mail.ru',
        //     password: 'ffferr4',
        //     creationDate: "12.31.443",
        //     lastModifideDate: '234.243.523'
        // }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [action.newUser, ...state.users]
            }
        case DELETE_USER:
            return{
                ...state,
                users : state.users.filter(user=> user.id !== action.userId)
            }
        default:
            return state
    }
}

export const createUser = (newUser) => ({ type: CREATE_USER, newUser })
export const editUser = (user) => ({ type: EDIT_USER, user })
export const deleteUser = (userId) => ({ type: DELETE_USER, userId })

//Thunk

export const createUserThunk = (user) => {
    return async (dispatch) => {
        dispatch(createUser(user))

    }
}

export default usersReducer