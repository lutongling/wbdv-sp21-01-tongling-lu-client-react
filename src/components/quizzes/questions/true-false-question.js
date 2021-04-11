import React, {useState} from 'react'

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")

    // need another state var whether you have actually "graded"

    return(
        <div>
            <h4>
                {question.question}
                {
                    question.correct === answer &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== answer &&
                    <i className="fas fa-times"></i>
                }

            </h4>
            <br/>
            {JSON.stringify(answer)}
            <br/>
            <label>
                <input type="radio" name={question._id}
                       onClick={() => setAnswer("true")}/>True
            </label>
            <br/>
            <label>
                <input type="radio" name={question._id}
                       onClick={() => setAnswer("false")}/>False
            </label>
        </div>
    )
}

export default TrueFalseQuestion