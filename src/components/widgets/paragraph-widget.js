import React from 'react'

const ParagraphWidget = ({widget, editingWidget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <>
                    <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))} value={editingWidget.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
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