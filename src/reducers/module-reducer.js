const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "DELETE_MODULE":
            const newState1 = {
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if(m._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return m
                    }
                })
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        default:
            return state
    }
}

export default moduleReducer