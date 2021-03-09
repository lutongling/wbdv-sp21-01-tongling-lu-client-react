import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
// import {findModulesForCourse, createModule} from "../../services/module-service";
import moduleService from "../../services/module-service";

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <li className="list-group-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            item={module}/>
                        {/*{module.title}*/}
                    </li>
                )
            }

            <li className="list-group-item">
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>
    )}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Title"})
                .then(module => dispatch({
                                 type: "CREATE_MODULE",
                                 module: module})
        )},
        deleteModule: (moduleToDelete) => {
            moduleService.deleteModule(moduleToDelete._id)
                .then(status => dispatch({
                                 type: "DELETE_MODULE",
                                 moduleToDelete: moduleToDelete})
        )},
        updateModule: (newItem) => {
            moduleService.updateModule(newItem._id, newItem)
                .then(status => dispatch({
                                 type: "UPDATE_MODULE",
                                 updateModule: newItem})
        )},
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modules
            }))
        }
    }
}

export default connect(stpm, dtpm)(ModuleList)