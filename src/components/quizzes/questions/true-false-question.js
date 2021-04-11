import React, {useState} from 'react'

const TrueFalseQuestion = ({question, isGraded}) => {
    const [answer, setAnswer] = useState("")

    return(
        <div>
            <h4>
                {question.question} &nbsp;
                {
                    isGraded && question.correct === answer &&
                    <i className="fas fa-check text-success"></i>
                }
                {
                    isGraded && question.correct !== answer &&
                    <i className="fas fa-times text-danger"></i>
                }

            </h4>
            <ul className="list-group">
                <li className={`list-group-item ${isGraded && question.correct === "true"
                                                  ? 'list-group-item-success'
                                                  : isGraded && question.correct === "false" && answer !== "false" 
                                                  ? 'list-group-item-danger':""}`}>
                    <label>
                        <input type="radio" name={question._id}
                               onClick={() => setAnswer("true")}/>True
                    </label>
                    {
                        isGraded && question.correct === "true" &&
                        <i className="fas fa-check text-success float-right"></i>
                    }
                    {
                        isGraded && question.correct === "false" && answer !== question.correct &&
                        <i className="fas fa-times text-danger float-right"></i>
                    }
                </li>
                <li className={`list-group-item ${isGraded 
                                                  && question.correct === "true" 
                                                  && answer !== "true" 
                                                  ? 'list-group-item-danger' 
                                                  : isGraded && question.correct === "false" && answer === "false"
                                                  ? 'list-group-item-success' 
                                                  : isGraded && question.correct === "false" && answer !== "false"
                                                  ? 'list-group-item-success' :''}`}>
                    <label>
                        <input type="radio" name={question._id}
                               onClick={() => setAnswer("false")}/>False
                    </label>
                    {
                        isGraded && question.correct === "false" &&
                        <i className="fas fa-check text-success float-right"></i>
                    }
                    {
                        isGraded && question.correct === "true" && answer !== question.correct &&
                        <i className="fas fa-times text-danger float-right"></i>
                    }
                </li>
            </ul>
            <br/>
            <p>
                Your answer: {answer}
            </p>

        </div>
    )
}

export default TrueFalseQuestion