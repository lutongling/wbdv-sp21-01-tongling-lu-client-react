import React from 'react'
import {useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";


// super/overall reducer
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer

})

//const store = createStore(moduleReducer)
//const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    return (
    <Provider store={store}>
        <div>
            <div className="wbdv-sticky-top wbdv-padding-5px">
                <div className="row">
                    <div className="col-1 wbdv-padding-5px wbdv-margin-left-10px color-white">
                        <i onClick={() => history.goBack()}
                           className="fas fa-2x fa-arrow-left"></i>
                    </div>

                    C E {layout} {courseId}
                    <div
                        className="col-3 wbdv-padding-5px wbdv-margin-top-5px wbdv-hide-sm-screen color-white">
                        <h4>CS5610 - WebDev</h4>
                    </div>

                    <div className="col-6">
                        <ul className="nav nav-tabs wbdv-nav-noborder wbdv-margin-top-5px font-bold">
                            <li className="nav-item col-2">
                                <a className="nav-link color-lgray" aria-current="page" href="#">
                                    Build
                                </a>
                            </li>
                            <li className="nav-item col-2">
                                <a className="nav-link active" href="#">
                                    Pages
                                </a>
                            </li>
                            <li className="nav-item col-2">
                                <a className="nav-link color-lgray" href="#">
                                    Theme
                                </a>
                            </li>
                            <li className="nav-item col-2">
                                <a className="nav-link color-lgray" href="#">
                                    Store
                                </a>
                            </li>
                            <li className="nav-item col-2">
                                <a className="nav-link color-lgray" href="#">
                                    Apps
                                </a>
                            </li>
                            <li className="nav-item col-2">
                                <a className="nav-link color-white font-size-20" href="#">
                                    <i className="fa fa-plus fa-1x"></i>
                                </a>
                            </li>
                        </ul>
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