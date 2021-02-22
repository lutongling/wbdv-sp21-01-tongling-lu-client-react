import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
    <div>
        <h2>
            {/*<Link to="/courses/table">*/}
            {/*    <i className="fas fa-arrow-left"></i>*/}
            {/*</Link>*/}
            <i onClick={() => history.goBack()}
               className="fas fa-arrow-left text-info"> </i>
            Go Back
        </h2>

        <div className="row">
        {/*    the content of what we got in the <body> tag in Assignment one Course Editor Page  */}
        <div className="col-4 font-bold font-size-20">

            <ul className="list-group">
                <li className="list-group-item">
                    Module 1 - jQuery
                    <i className="pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item active">
                    Module 2 - React
                    <i className="pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item">
                    Module 3 - Redux
                    <i className="pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item">
                    Module 4 - Native
                    <i className="pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item">
                    Module 5 - Angular
                    <i className="pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item">
                    Module 6 - Node
                    <i className="pull-right fa fa-trash"></i>
                </li>
                <li className="list-group-item">
                    Module 7 - Mongo
                    <i className="pull-right fa fa-trash"></i>
                </li>
            </ul>
        </div>

        <div className="col-7 wbdv-margin-left-20px background-color-white wbdv-padding-5px">
            <ul className="nav nav-pills">
                <li className="nav-item background-color-dgray">
                    <a className="nav-link font-size-20 color-white font-bold" aria-current="page"
                       href="#">
                        Topic 1
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active wbdv-margin-left-20px font-bold font-size-20"
                       href="#">
                        Topic 2
                    </a>
                </li>
                <li className="nav-item wbdv-margin-left-20px background-color-dgray">
                    <a className="nav-link font-size-20 color-white font-bold" href="#">
                        Topic 3
                    </a>
                </li>
                <li className="nav-item wbdv-margin-left-20px background-color-dgray">
                    <a className="nav-link font-size-20 color-white font-bold" href="#">
                        Topic 4
                    </a>
                </li>
                <li className="nav-item wbdv-margin-left-20px background-color-dgray">
                    <a className="nav-link color-white" href="#">
                        <i className="fa fa-plus fa-2x"></i>
                    </a>
                </li>
            </ul>

        </div>
        </div>

    </div>

export default CourseEditor