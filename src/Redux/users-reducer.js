
const CREATE_USER = "CREATE_USER"

let initialState  = {
    users: [
        {
            name: 'Alexey',
            id: '234546576',
            status: 'admin',
            phone: '85432543544',
            email: 'mail233@mail.ru',
            password: 'ffferr4',
            creationDate: "12.31.443",
            lastModifideDate: '234.243.523'
        },
        {
            name: 'Alexey',
            id: '234546576',
            status: 'admin',
            phone: '85432543544',
            email: 'mail233@mail.ru',
            password: 'ffferr4',
            creationDate: "12.31.443",
            lastModifideDate: '234.243.523'
        },
        {
            name: 'Alexey',
            id: '234546576',
            status: 'admin',
            phone: '85432543544',
            email: 'mail233@mail.ru',
            password: 'ffferr4',
            creationDate: "12.31.443",
            lastModifideDate: '234.243.523'
        }
    ]
}

const usersReducer = (state = initialState, action) => { 
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [action.newUser, ...state.users]
            }
        default:
            return state
    }
}

export const CreateUser = (newUser) => ({ type: CREATE_USER, newUser })


export default usersReducer