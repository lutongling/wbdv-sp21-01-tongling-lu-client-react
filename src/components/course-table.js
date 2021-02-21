import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <h2>Course Table</h2>
                <table className="table">
                    {/*add thead in Assignment as the pictures illustrated*/}
                    <tbody>
                    {/*<CourseRow title="CS2345" owner="bob" lastModified={"2/23/24"}/>*/}
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}