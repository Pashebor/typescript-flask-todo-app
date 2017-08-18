import * as React from 'react';

class Todos extends React.Component<any> {
    render() {
        return(
            <section className="todo-screen">
                <div className="search-block">
                    <input type="text" name="search" placeholder="Найти..." className="form__input"/>
                </div>
                <div className="todo-list">
                    <h2 className="todo-list__title">Список заметок</h2>
                    <article className="todo-list__item">
                        <p className="todo-list__note">hi</p>
                        <button className="edit-button"></button>
                        <button className="delete-button"></button>
                    </article>
                    <article className="todo-list__item">
                        <p className="todo-list__note">hi</p>
                        <button className="edit-button"></button>
                        <button className="delete-button"></button>
                    </article>
                    <article className="todo-list__item">
                        <p className="todo-list__note">hi</p>
                        <button className="edit-button"></button>
                        <button className="delete-button"></button>
                    </article>
                </div>
            </section>
        )
    }
}

export default Todos;