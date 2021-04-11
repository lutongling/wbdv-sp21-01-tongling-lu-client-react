import React, {useState} from 'react'
import {Link} from "react-router-dom";

// use useState to maintain state for function
const CourseRow = (
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
            <tr>
                <td>
                    <i className="fas fa-file text-primary wbdv-margin-right-10px"></i>
                    {
                        !editing &&
                        <Link to={`/courses/table/edit/${course._id}`}>
                            <span className="color-black">
                                {title}
                            </span>
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event => setNewTitle(event.target.value))}
                            value={newTitle}
                            className="form-control d-inline"/> }
                </td>
                <td className="d-none d-sm-table-cell">{owner}</td>
                <td className="d-none d-lg-table-cell">{lastModified}</td>
                <td className="d-none d-lg-table-cell">
                    <Link to={`/courses/${course._id}/quizzes`}>
                        Quizzes
                    </Link>
                </td>
                <td>
                    { editing && <i onClick={() => deleteCourse(course)}
                                    className="fas fa-2x fa-times text-danger float-right"></i>}
                    { !editing && <i onClick={() => setEditing(true)}
                                     className="fas fa-2x fa-edit text-primary float-right"></i>}
                    { editing && <i onClick={() => saveTitle()}
                                    className="fas fa-2x fa-check text-success wbdv-margin-right-10px float-right"></i> }
                </td>
            </tr>
    )}

export default CourseRow