import React, {useEffect, useState} from 'react'
import {useParams, Link} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service";


// super/overall reducer
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer

})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    const [courseTitle, setCourseTitle] = useState('');
    useEffect( () => {
        courseService.findCourseById(courseId)
            .then(course => setCourseTitle(course.title))
        }
    )
    return (
    <Provider store={store}>
        <div>
            <div className="wbdv-sticky-top wbdv-padding-5px">
                <div className="row">
                    <div className="col-1 wbdv-padding-5px wbdv-margin-left-10px color-white">
                        <Link className="fas fa-2x fa-arrow-left"
                                to={`/courses/${layout}`}></Link>
                    </div>

                    <div
                        className="col-3 wbdv-margin-top-5px wbdv-hide-sm-screen color-white">
                        <h3>Web Dev - {courseTitle}</h3>
                    </div>

                    <div className="col-6">

                    </div>

                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <TopicPills/>
                </div>
            </div>

        </div>

    </Provider>)}
export default CourseEditor