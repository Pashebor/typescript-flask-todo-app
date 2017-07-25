import * as React from 'react';
import StartScreen from "./start-screen/StartScreen";
import Login from "./login/Login";
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import {MainProps} from "../../TodoApp";
import Registration from "./registration/Registration";

export interface Props {formData: any;}
export interface StartScreenProps extends RouteComponentProps<any>{}
export interface LoginProps extends RouteComponentProps<any>{}
export interface RegisterProps extends RouteComponentProps<any> {}

class Main extends React.Component<MainProps> {
    render() {

        return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={StartScreen} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Registration} />
                    </Switch>
                </BrowserRouter>
        )
    }
}
export default Main;