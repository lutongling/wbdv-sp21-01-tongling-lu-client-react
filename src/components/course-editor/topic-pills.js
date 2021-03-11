import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

// topic pills component
const TopicPills = (
    {
        topics=[],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson
    }) => {
    // retrieve the params from the rendered route
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    // call this to render all the topics for this course except for those with undefined lesson id
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return (
    <div>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                                <li className="nav-item">
                                        <EditableItem
                                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                            updateItem={updateTopic}
                                            deleteItem={deleteTopic}
                                            active={topic._id === topicId}
                                            item={topic}/>
                                </li>)
            }

            <li className="list-group-item borderless">
                <a onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></a>
            </li>

        </ul>
    </div>)
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtmp = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(topic => dispatch({
                        type: "CREATE_TOPIC",
                        topic
                }))
        },
        deleteTopic: (topicToDelete) => {
            topicService.deleteTopic(topicToDelete._id)
                .then(status => dispatch({
                         type: "DELETE_TOPIC",
                         topicToDelete: topicToDelete
                }))
        },
        updateTopic: (newTopic) => {
            topicService.updateTopic(newTopic._id, newTopic)
                .then(status => dispatch({
                         type: "UPDATE_TOPIC",
                         updateTopic: newTopic
                }))
        },
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics
                 }))
        }
    }
}

export default connect(stpm, dtmp)(TopicPills)