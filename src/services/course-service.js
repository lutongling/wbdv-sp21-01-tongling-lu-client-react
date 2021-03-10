const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001054187/courses"

// retrieves all course instances as an array of courses
export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

// retrieves a course instance that matches the id parameter
export const findCourseById = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(response => response.json())

// creates a new course instance and adds it to the collection of courses
export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

// deletes course instance whose id matches the id parameter
export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

/*
updates the course instance whose id matches the id parameter.
updates the instance with values in course parameter.
 */
export const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

// export as an object
export default {
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse,
    findCourseById
}