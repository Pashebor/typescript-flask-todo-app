import * as React from 'react';

class EditNote extends React.Component<any> {
    id: string;
    refs: {
        title: HTMLInputElement,
        message: HTMLTextAreaElement
    };

    constructor(props) {
        super(props);
        this.id = props.id;

    }

    onClearFieldsHandler() {
        for (let field in this.refs) {
            this.refs[field].value = ''
        }
    }

    getNoteId(): string{
        return this.id;
    }

    render() {
        console.log(this.getNoteId());
        return(
            <section className="note">
                <h2 className="note__title">Редактировать заметку</h2>
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

export default EditNote;