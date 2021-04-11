import React, {useState} from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {
    const [isGraded, setIsGraded] = useState(false)

    return (
        <div>
            <br/>
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question={question} isGraded={isGraded}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                    <MultipleChoiceQuestion question={question} isGraded={isGraded}/>
            }
            <button onClick={() => setIsGraded(true)} className="btn btn-success">
                Grade
            </button>
        </div>
    )
}

export default Question