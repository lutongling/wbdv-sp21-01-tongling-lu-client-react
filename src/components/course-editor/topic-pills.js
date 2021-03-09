import React from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";

const TopicPills = (
    {
        topics=[],
        createTopic,
        deleteTopic,
    }) =>
    <div>
        <h2>Topics</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        {/*{topic.title}*/}
                                        <EditableItem
                                            deleteItem={deleteTopic}
                                            item={topic}/>
                                    </a>
                                </li>)
            }

            <li className="list-group-item borderless">
                <a onClick={createTopic} className="fas fa-plus fa-2x"></a>
            </li>

        </ul>
    </div>

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtmp = (dispatch) => {
    return {
        createTopic: () => dispatch({type: "CREATE_TOPIC"}),
        deleteTopic: (item) => dispatch({
             type: "DELETE_TOPIC",
             topicToDelete: item})
    }
}

export default connect(stpm, dtmp)(TopicPills)