import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner

    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <br/>
                <br/>
                <div className="card wbdv-card-height wbdv-margin-bottom-30px">
                    <div className="card-body">
                        <img className="card-img-top"
                             src="https://www.qapla.it/wp-content/uploads/2020/07/logocert-webdev.png"
                             alt="Card image"/>

                        { !editing && <h5 className="card-title">{course.title}</h5> }
                        {
                            editing &&
                            <input
                                onChange={(event => setNewTitle(event.target.value))}
                                value={newTitle}
                                className="form-control"/> }

                        <p className="card-text">Some description</p>

                        <Link to="/courses/editor" className="btn btn-primary">
                            {course.title}
                        </Link>
                        { editing &&
                          <i onClick={() => saveTitle()}
                             className="fas fa-2x fa-check text-success wbdv-top-right"></i> }

                        { editing &&
                          <i onClick={() => deleteCourse(course)}
                             className="fas fa-2x fa-times text-danger wbdv-top-right-border"></i> }

                        { !editing &&
                          <i onClick={() => setEditing(true)}
                             className="fas fa-2x fa-edit text-primary wbdv-bottom-right"></i> }

                    </div>
                </div>
            </div>
    )}


export default CourseCard