import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question, isGraded}) => {
    const [answer, setAnswer] = useState("")
    const correctOption = question.choices.find((c) => c === question.correct)
    console.log(correctOption);
    return(
        <div>
            <h4>{question.question} &nbsp;

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
                {
                    question.choices.map(choice =>
                         <li className={`list-group-item 
                                      ${answer === question.correct && answer === choice && isGraded
                                      ? 'list-group-item-success'
                                      : answer !== question.correct && answer === choice && isGraded 
                                      ? 'list-group-item-danger' 
                                      : answer !== question.correct && choice === correctOption && isGraded
                                      ? 'list-group-item-success'
                                      : ''}`}>
                            <label>
                                <input onClick={() => {
                                    setAnswer(choice)
                                }}
                                       type="radio" name={question._id}/>
                                {choice}
                            </label>
                             {
                                 answer === question.correct && answer === choice && isGraded &&
                                 <i className="fas fa-check text-success float-right"></i>
                             }
                             {
                                 answer !== question.correct && answer === choice && isGraded &&
                                 <i className="fas fa-times text-danger float-right"></i>
                             }
                             {
                                 answer !== question.correct && choice === correctOption && isGraded &&
                                 <i className="fas fa-check text-success float-right"></i>
                             }
                         </li>
                    )
                }
            </ul>
            <br/>
            <p>
                Your answer: {answer}
            </p>

        </div>
    )
}

export default MultipleChoiceQuestion