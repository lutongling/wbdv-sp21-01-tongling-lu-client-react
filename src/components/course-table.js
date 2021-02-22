import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th wbdv-margin-right-10px float-right color-black"> </i>
                </Link>
                <i className="fas fa-2x fa-folder wbdv-margin-right-10px float-right"> </i>
                <i className="fas fa-2x fa-sort-alpha-up-alt wbdv-margin-right-10px float-right"> </i>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className="d-none d-sm-table-cell">Owned by</th>
                            <th className="d-none d-lg-table-cell">Last modified</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS2345" owner="bob" lastModified={"2/23/24"}/>*/}
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
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