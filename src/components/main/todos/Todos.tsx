import * as React from 'react';
import {Link} from "react-router-dom";


class Todos extends React.Component<any> {

    render() {
        return(
            <section className="todo-screen">
                <div className="search-block">
                    <input type="text" name="search" placeholder="Найти..." className="form__input"/>
                </div>
                <div className="todo-list">
                    <h2 className="todo-list__title">Список заметок</h2>
                    <Link to="create-note" className="submit-btn submit-btn--add" >Добавить</Link>
                    <article className="todo-list__item">
                        <p className="todo-list__note">hi</p>
                        <Link to='edit-note/5' className="edit-button"></Link>
                        <button className="delete-button"></button>
                    </article>
                    <article className="todo-list__item">
                        <p className="todo-list__note">hi</p>
                        <Link to={'edit-note/hi'} className="edit-button"></Link>
                        <button className="delete-button"></button>
                    </article>
                    <article className="todo-list__item">
                        <p className="todo-list__note">hi</p>
                        <Link to={'edit-note/hi'} className="edit-button"></Link>
                        <button className="delete-button"></button>
                    </article>
                </div>
            </section>
        )
    }
}

export default Todos;