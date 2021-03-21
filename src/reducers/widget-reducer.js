const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            const newState1 = {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.widgetId) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(w => {
                    if(w.id === action.widgetId) {
                        return action.updateWidget
                    } else {
                        return w
                    }
                })
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer