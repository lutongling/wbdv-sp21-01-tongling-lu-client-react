import React, {useState, useEffect} from 'react'
import widgetService from "../../services/widgets-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic

    }) => {
    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                            <>
                                <i onClick={() => {
                                    updateWidget(widget.id, editingWidget)
                                    setEditingWidget({})
                                }} className="fas fa-2x fa-check float-right"></i>

                                <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>

                                <select
                                    onChange={(e) => {
                                        setEditingWidget(widget => ({...widget, type: e.target.value}))
                                        widget.type = e.target.value}}
                                    value={editingWidget.type}
                                    className="form-control">
                                    <option value={"PARAGRAPH"}>Paragraph</option>
                                    <option value={"HEADING"}>Heading</option>
                                    <option value={"LIST"}>List</option>
                                    <option value={"IMAGE"}>Image</option>
                                </select>

                            </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                setWidget={setEditingWidget}
                                editingWidget={editingWidget}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                setWidget={setEditingWidget}
                                editingWidget={editingWidget}
                                widget={widget}
                            />
                        }
                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                editing={editingWidget.id === widget.id}
                                setWidget={setEditingWidget}
                                editingWidget={editingWidget}
                                widget={widget}
                            />
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                editing={editingWidget.id === widget.id}
                                setWidget={setEditingWidget}
                                editingWidget={editingWidget}
                                widget={widget}
                            />
                        }
                    </li>
                    )
                }

            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtmp = (dispatch) => {
    return {
        createWidget: (topicId) => {
            widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
                .then(widget => dispatch({
                                             type: "CREATE_WIDGET",
                                             widget
                                         }))
        },
        deleteWidget: (widgetId) => {
            widgetService.deleteWidget(widgetId)
                .then(status => dispatch({
                                             type: "DELETE_WIDGET",
                                             widgetId: widgetId
                                         }))
        },
        updateWidget: (widgetId, widget) => {
            widgetService.updateWidget(widgetId, widget)
                .then(status => dispatch({
                                             type: "UPDATE_WIDGET",
                                             updateWidget: widget,
                                             widgetId: widgetId
                                         }))
        },
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(widgets => {
                    dispatch({
                                 type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                                 widgets
                             })
                })
        }
    }
}
export default connect(stpm, dtmp)(WidgetList)