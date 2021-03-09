import React from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        deleteLesson,
        updateLesson,
    }) =>
    <div>
        <h2>Lessons</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <EditableItem
                                            updateItem={updateLesson}
                                            deleteItem={deleteLesson}
                                            item={lesson}/>
                                    </a>
                                </li>)
            }

            <li className="list-group-item">
                <a onClick={createLesson} className="fas fa-plus fa-2x"></a>
            </li>

        </ul>
    </div>

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtmp = (dispatch) => {
    return {
        createLesson: () => dispatch({type: "CREATE_LESSON"}),
        deleteLesson: (item) => dispatch({
             type: "DELETE_LESSON",
             lessonToDelete: item}),
        updateLesson: (lesson) => dispatch({
             type: "UPDATE_LESSON",
             lesson})
    }
}

export default connect(stpm, dtmp)(LessonTabs)