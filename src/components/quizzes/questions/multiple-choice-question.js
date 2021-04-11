import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    return(
        <div>
            <h4>{question.question}

                {
                    question.correct === answer &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== answer &&
                    <i className="fas fa-times"></i>
                }
            </h4>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${answer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                                <label>
                                    <input onClick={() => {
                                        setAnswer(choice)
                                    }}
                                           type="radio" name={question._id}/>
                                    {choice}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>

            <p>
                Your answer: {answer}
            </p>
            {

            }

        </div>
    )
}

export default MultipleChoiceQuestion