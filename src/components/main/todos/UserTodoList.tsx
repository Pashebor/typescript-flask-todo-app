import * as React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Todos from './Todos';
import SingleNote from './SingleNote';

const UserTodoList = () =>{
    return(
         <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Todos} />
                        <Route path="/:note/:id" component={SingleNote} />
                        <Route path="/:note" component={SingleNote} />
                    </Switch>
                </BrowserRouter>
    )
};

export default UserTodoList;