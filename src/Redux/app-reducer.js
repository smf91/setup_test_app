const TOGGLE_SHOW_MODAL_WINDOW = "TOGGLE_SHOW_MODAL_WINDOW"
const SET_FILTER_VALUE = "SET_FILTER_VALUE"


let initialState = {
    showModalWindow: false,
    filters: {
        emailFilter: '',
        phoneFilter: '',
        statusFilter: ''
    }
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_MODAL_WINDOW:
            return {
                ...state,
                showModalWindow: !state.showModalWindow
            }
        case SET_FILTER_VALUE:
            return {
                ...state,
                filters: { ...state.filters, [action.nameFilter]: action.valueFilter }
            }
        default:
            return state
    }
}

export const toggleShowModalWindow = () => ({ type: TOGGLE_SHOW_MODAL_WINDOW })
export const setFilterValue = (nameFilter, valueFilter) => ({ type: SET_FILTER_VALUE, nameFilter, valueFilter })


export default appReducer