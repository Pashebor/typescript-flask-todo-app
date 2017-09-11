import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {switchPopup} from '../../../actions/actions';
import { Link } from 'react-router-dom';

class Popup extends React.Component<any>{

    closePopupHandler(): void {
        const {switchPopup} = this.props;
        switchPopup(false, '');
    }

    showMessage():string{
        let {popupMessageText} = this.props;
        return popupMessageText;
    }

    render() {
        console.log(this);
        return (
            <section className="popup-overlay">
                <div className="popup">
                    <div className="popup__close" onClick={this.closePopupHandler.bind(this)}>&times;</div>
                    <h2 className="popup__title">Сообщение</h2>
                    <p className="popup__text">{this.showMessage()}</p>
                    <Link to="/" className="submit-btn" onClick={this.closePopupHandler.bind(this)}>OK</Link>
                </div>
            </section>
        )
    }
}

export function mapStateToProps(store:any) {
    return {
        popupState: store.popupReducer.isOpen,
        popupMessageText: store.popupReducer.messageText
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({switchPopup}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
