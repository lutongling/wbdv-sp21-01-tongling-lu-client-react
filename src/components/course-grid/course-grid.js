import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (
    {
        courses,
        deleteCourse,
        updateCourse

    }) =>

    <div>

        <Link to="/courses/table">
            <i className="fas fa-2x fa-list color-black float-right"></i>
        </Link>
        <i className="fas fa-2x fa-folder wbdv-margin-right-10px float-right"> </i>
        <i className="fas fa-2x fa-sort-alpha-up-alt wbdv-margin-right-10px float-right"> </i>

        <div className="row">
            <div className="col-5 d-none d-md-block">
                <h3 className="font-weight-bolder">Recent Documents</h3>
            </div>

            <div className="col-5 d-none d-md-block">
                <span className="font-weight-bolder font-size-26">Own by me {" "}</span>
                <i className="fas fa-2x fa-sort-down"></i>
            </div>

            <div className="col-2"></div>
        </div>

        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        key={course._id}
                        course={course}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        title={course.title}
                    />
                )
            }
        </div>

    </div>

export default CourseGrid