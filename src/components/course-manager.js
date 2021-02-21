import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager extends React.Component {

    state = {
        courses: [
            {title: "CS4321", owner: "frank", lastModified: "2/3/45"},
            {title: "CS5432", owner: "greg", lastModified: "3/4/56"},
            {title: "CS6543", owner: "herbert", lastModified: "4/7/23"},
            {title: "CS7654", owner: "ian", lastModified: "5/6/28"},
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        const newCourses = this.state.courses.filter(course => course !== courseToDelete)
        this.setState({
            courses: newCourses
        })

    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseEditor/>
            </div>
        )
    }
}

export default CourseManager

// Function Component cannot have state
// const CourseManager = () =>
//     <div>
//         <h1>Course Manager</h1>
//         <CourseTable/>
//         <CourseGrid/>
//         <CourseEditor/>
//     </div>

