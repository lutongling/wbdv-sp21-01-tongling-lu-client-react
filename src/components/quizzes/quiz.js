import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import questionService from "../../services/questions-service"
import Question from "./questions/question";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if(quizId !== "undefined" && typeof quizId !== "undefined") {
            questionService.findQuestionsForQuiz(quizId)
                .then(ques => setQuestions(ques))
        }
    },[quizId])

    return(
        <div>
            <h2>
                Quiz {quizId}
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
        </div>
    )
}

export default Quiz