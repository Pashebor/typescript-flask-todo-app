import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getUserNotes, switchPopup} from '../../../actions/actions';
import {Link} from "react-router-dom";


class Todos extends React.Component<any> {
    constructor(props){
        super(props);
        const {loginData} = this.props;
        const {todoData} = this.props;
        if (loginData.name) {
            const userName = new FormData();
            const {getUserNotes} = this.props;
            userName.append('name', loginData.name);
            !todoData[0].id ? getUserNotes(userName) : null;
        }
        console.log(todoData);
    }
    
    showNotes() {
        const {todoData} = this.props;
        if (todoData[0]) {
            return todoData.map(note => {
                return (
                <article className="todo-list__item" key={note.id}>
                        <p className="todo-list__note">{note.title}</p>
                        <Link to={`edit-note/${note.id}`} className="edit-button"></Link>
                        <button className="delete-button"></button>
                </article>
            )
            });
        } else {
            return (
                <h2 className="todo-list__title">У вас пока нет заметок</h2>
            )
        }
    }

    render() {
        return(
            <section className="todo-screen">
                <div className="search-block">
                    <input type="text" name="search" placeholder="Найти..." className="form__input"/>
                </div>
                <div className="todo-list">
                    <h2 className="todo-list__title">Список заметок</h2>
                    <Link to="create-note" className="submit-btn submit-btn--add" >Добавить</Link>
                    {this.showNotes()}
                </div>
            </section>
        )
    }
}

export function mapStateToProps(store:any) {
    return {
        loginData: store.loginReducer.formData,
        registerData: store.regFormStore.regData,
        todoData: store.todoStore.notes
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({getUserNotes, switchPopup}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(Todos);