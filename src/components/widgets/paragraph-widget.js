import React from 'react'

const ParagraphWidget = ({widget, editingWidget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <>
                    <br/>
                    <textarea
                        onChange={(e) => setWidget({...widget, text: e.target.value})}
                        value={editingWidget.text}
                        className="form-control"></textarea>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </div>
    )
}

export default ParagraphWidget