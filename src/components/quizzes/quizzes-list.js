import React, {useState, useEffect} from 'react'
import quizService from "../../services/quizzes-service"
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])

    return (
        <div>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link className="list-group-item"
                                  to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList