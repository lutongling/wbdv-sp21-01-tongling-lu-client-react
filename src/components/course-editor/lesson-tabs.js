import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
        //findLessonsForModule(moduleId)
    }, [moduleId])
    return (
    <div>
        <h2>Lessons</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li className="nav-item">
                                    {/*<a className="nav-link" href="#">*/}
                                        <EditableItem
                                            // to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                            updateItem={updateLesson}
                                            deleteItem={deleteLesson}
                                            active={lesson._id === lessonId}
                                            item={lesson}/>
                                    {/*</a>*/}
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