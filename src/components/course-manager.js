import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: [],
        inputCourse: "New Course Title"
    }

    setInput = (event) =>
        this.setState({
            inputCourse: event.target.value
        })


    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))


    addCourse = () => {
        const newCourse = {
            title: this.state.inputCourse,
            owner: "me",
            lastModified: "1/1/2021"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                        ...prevState,
                        courses: [
                            ...prevState.courses,
                            course
                        ]
                })))

    };


    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course._id !== courseToDelete._id)
                }))
            })
    };


    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status =>
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.map(c =>
                       c._id === course._id ? course : c)

                })))
    }


    render() {
        return(
            <div>
                <div className="wbdv-sticky-top wbdv-padding-5px text-align: center">
                    <div className="row">
                        <div className="col-1 wbdv-margin-top-5px wbdv-margin-left-10px">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-2 wbdv-margin-top-5px wbdv-margin-right-45px wbdv-hide-sm-screen">
                            <h3>Course Manager</h3>
                        </div>
                        <div className="col-7">
                            <input className="form-control font-size-20"
                                   type="text"
                                   onChange={(event => this.setInput(event))}
                                   value={this.state.inputCourse}/>
                        </div>
                        <div className="col-1 wbdv-margin-top-5px">
                            <i onClick = {() => {
                                this.addCourse()
                                this.setState({inputCourse: ""})
                            }}
                               className="fa fa-2x fa-plus-circle text-danger wbdv-force-right"></i>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <Route path= {["/courses/table", "/courses"]} exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid">
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <div className="wbdv-icon-fixed">
                    <i onClick = {() => {
                        this.addCourse()
                        this.setState({inputCourse: ""})
                        }}
                       className="fa fa-plus-circle text-danger fa-5x"></i>
                </div>

            </div>

        )
    }
}

export default CourseManager

