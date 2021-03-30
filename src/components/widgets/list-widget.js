import React from 'react'

const ListWidget = ({widget, editingWidget, setWidget, editing}) => {
    return (
        <div>
            {
                !editing &&
                    <>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map(item => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map(item => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>

            }
            {
                editing &&
                <div>
                    <input onChange={(e) => {
                        if (e.target.checked === true){
                            setWidget(widget = ({...widget, ordered: true}))
                        } else {
                            setWidget(widget = ({...widget, ordered: false}))
                        }
                    }}
                           checked={editingWidget.ordered}
                           type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))}
                              rows={10}
                              value={editingWidget.text}
                              className="form-control">
                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget