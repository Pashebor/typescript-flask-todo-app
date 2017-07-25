import * as React from 'react';
import  {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middleWare from 'redux-thunk';
import reducers from './reducers';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Login from "./components/main/login/Login";
import Registration from "./components/main/registration/Registration";


export interface Logo {
    name: string
}

export interface MainProps extends RouteComponentProps<any>{}

const store: any = createStore(reducers, {}, applyMiddleware(middleWare));

const TodoApp = () => {
    return(
        <div>

            <BrowserRouter>
                <div className="todo-app">
                    <Route path='/' component={Header}/>
                    <Route exact path='/' component={Main}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Registration}/>
               </div>
            </BrowserRouter>
            <Footer name="Pashebor's laba"/>
        </div>
    )

};

render(<Provider store={store}><TodoApp/></Provider>, document.getElementById('todo-app') as HTMLElement);