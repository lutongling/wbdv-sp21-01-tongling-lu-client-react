import React from 'react'

const CourseEditor = ({history}) =>

    <div>
        <div className="wbdv-sticky-top wbdv-padding-5px">
            <div className="row">
                <div className="col-1 wbdv-padding-5px wbdv-margin-left-10px color-white">
                    <i onClick={() => history.goBack()}
                       className="fas fa-2x fa-arrow-left"></i>
                </div>
                <div
                    className="col-3 wbdv-padding-5px wbdv-margin-top-5px wbdv-hide-sm-screen color-white">
                    <h4>CS5610 - WebDev</h4>
                </div>

                <div className="col-6">
                    <ul className="nav nav-tabs wbdv-nav-noborder wbdv-margin-top-5px font-bold">
                        <li className="nav-item col-2">
                            <a className="nav-link color-lgray" aria-current="page" href="#">
                                Build
                            </a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link active" href="#">
                                Pages
                            </a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link color-lgray" href="#">
                                Theme
                            </a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link color-lgray" href="#">
                                Store
                            </a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link color-lgray" href="#">
                                Apps
                            </a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link color-white font-size-20" href="#">
                                <i className="fa fa-plus fa-1x"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>

        <div className="row">
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