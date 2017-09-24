import * as React from 'react';
import {addTodo} from "../../../../actions/actions";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {Link} from "react-router-dom";

class CreateNote extends React.Component<any> {
    refs: {
        title: HTMLInputElement,
        message: HTMLTextAreaElement
    };


    onClearFieldsHandler() {
        for (let field in this.refs) {
            this.refs[field].value = ''
        }
    }

    createTodoHandler(event) {
        event.preventDefault();
        const {todoData} = this.props;
        const {addTodo} = this.props;
        const note: object = {};
        let maxId: any = [];

        todoData.map(item => {
            if (item.id) {
                maxId.push(item.id);
            }
        });

        for (let field in this.refs) {
            note[field] = this.refs[field].value
        }
        if (maxId[0]) {
            note['id'] = Math.max(...maxId) + 1;
        } else {
            note['id'] = 1;
        }
        console.log(note);
        addTodo(note);
    }

    render() {
        return(
            <section className="note">
                <h2 className="note__title">Добавить заметку</h2>
                <form method="post" encType="multipart/form-data" className="form" onSubmit={this.createTodoHandler.bind(this)}>
                    <div className="form__item">
                        <label htmlFor="title" >Заголовок</label>
                        <input className="form__input" type="text" id="title" ref="title" placeholder="Введите заголовог заметки..."/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="message">Текст</label>
                        <textarea className="form__input form__input--message" id="note" ref="note" placeholder="Введите текст заметки"></textarea>
                    </div>
                    <div className="button-block">
                        <input type="submit" className="submit-btn" value={'Сохранить'} />
                        <input type="button" className="submit-btn submit-btn--clear" value={'Очистить'} />
                    </div>
                </form>
                <Link to="/">назад</Link>
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
    return bindActionCreators({addTodo}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);