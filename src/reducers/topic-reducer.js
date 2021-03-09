const initialState = {
    topics: [
        {_id: 0, title: "Topic 123"},
        {_id: 1, title: "Topic 234"},
        {_id: 2, title: "Topic 345"}
    ]
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            const newState = {
                topics: [
                    ...state.topics,
                    {
                        title: "New Topic",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "DELETE_TOPIC":
            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1

        default:
            return state
    }
}

export default topicReducer