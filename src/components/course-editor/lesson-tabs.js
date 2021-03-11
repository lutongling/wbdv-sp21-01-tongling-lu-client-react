import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

// lesson tabs component
const LessonTabs = (
    {
        lessons=[],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule
    }) => {
    // retrieve the params from the rendered route
    const {layout, courseId, moduleId, lessonId} = useParams();

    // call this to render all the lessons for this course except for those with undefined module id
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return (
    <div>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li className="nav-item">
                                        <EditableItem
                                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                            updateItem={updateLesson}
                                            deleteItem={deleteLesson}
                                            active={lesson._id === lessonId}
                                            item={lesson}/>
                                </li>)
            }

            <li className="list-group-item borderless">
                <a onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"></a>
            </li>

        </ul>
    </div>
    )}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtmp = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(lesson => dispatch({
                         type: "CREATE_LESSON",
                         lesson
                }))
        },
        deleteLesson: (lessonToDelete) => {
            lessonService.deleteLesson(lessonToDelete._id)
                .then(status => dispatch({
                         type: "DELETE_LESSON",
                         lessonToDelete: lessonToDelete
                }))
        },
        updateLesson: (newLesson) => {
            lessonService.updateLesson(newLesson._id, newLesson)
                .then(status => dispatch({
                         type: "UPDATE_LESSON",
                         updateLesson: newLesson
                }))
        },
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => {
                    dispatch({
                                 type: "FIND_LESSONS_FOR_MODULE",
                                 lessons
                             })
                    dispatch({
                                 type: "FIND_TOPICS_FOR_LESSON",
                                 topics: []
                             })
                })
        }
    }
}

export default connect(stpm, dtmp)(LessonTabs)