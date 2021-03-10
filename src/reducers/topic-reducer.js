const initialState = {
    topics: [
        // {_id: 0, title: "Topic 123"},
        // {_id: 1, title: "Topic 234"},
        // {_id: 2, title: "Topic 345"}
    ]
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
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
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(t => {
                    if(t._id === action.updateTopic._id) {
                        return action.updateTopic
                    } else {
                        return t
                    }
                })
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer