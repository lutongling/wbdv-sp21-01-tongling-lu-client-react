import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";

function App() {
    return (
        // set the path of urls
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true} component={Home}/>
                <Route path={["/courses", "/courses/table", "/courses/grid"]}
                       exact={true} component={CourseManager}/>
                <Route path={["/courses/:layout/edit/:courseId",
                              "/courses/:layout/edit/:courseId/modules/:moduleId",
                              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId"
                            ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
