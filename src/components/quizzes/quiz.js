import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import questionService from "../../services/questions-service"
import quizService from "../../services/quizzes-service"
import Question from "./questions/question";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState({});

    useEffect(() => {
        if(quizId !== "undefined" && typeof quizId !== "undefined") {
            questionService.findQuestionsForQuiz(quizId)
                .then(ques => setQuestions(ques))

            questionService.findQuizById(quizId)
                .then(quiz => setQuiz(quiz))
        }
    },[quizId])

    return(
        <div>
            <h2>
                {quiz.title}
            </h2>

            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>

            <br/>
            <br/>
            <br/>
            <br/>

            <button onClick={() => {
                quizService.submitQuiz(quizId, questions)
                alert("Already Submitted. Please check backend: /api/quizzes/:qid/attempts")
            }}
                    className="btn btn-danger">
                Submit
            </button>


        </div>
    )
}

export default Quiz