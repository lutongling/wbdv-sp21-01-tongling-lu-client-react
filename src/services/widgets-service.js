// Professor mentioned in piazza post @1040 that we would not be able to deploy to Heroku for A6
// So the url is just for local
const TOPIC_URL = "http://localhost:8080/api/topics"
const WIDGET_URL = "http://localhost:8080/api/widgets"

// instead of using env and configuration - maybe for following assignments
// const TOPIC_URL = process.env.REACT_APP_TOPIC_URL
// const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const createWidget = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export default {
    findWidgetsForTopic,
    createWidget,
    deleteWidget,
    updateWidget
}