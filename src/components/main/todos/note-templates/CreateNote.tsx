import * as React from 'react';

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

    render() {
        return(
            <section className="note">
                <h2 className="note__title">Добавить заметку</h2>
                <form method="post" encType="multipart/form-data" className="form">
                    <div className="form__item">
                        <label htmlFor="title" >Заголовок</label>
                        <input className="form__input" type="text" id="title" ref="title" placeholder="Введите заголовог заметки..."/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="message">Текст</label>
                        <textarea className="form__input form__input--message" id="message" ref="message" placeholder="Введите текст заметки"></textarea>
                    </div>
                    <div className="button-block">
                        <input type="submit" className="submit-btn" value={'Сохранить'}/>
                        <input type="button" className="submit-btn submit-btn--clear" value={'Очистить'} onClick={this.onClearFieldsHandler.bind(this)}/>
                    </div>
                </form>
            </section>
        )
    }
}

export default CreateNote;