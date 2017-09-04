import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {switchPopup} from '../../../actions/actions';

class Popup extends React.Component<any>{
    render() {
        return (
            <section className="popup-overlay">
                <div className="popup">
                    <div className="popup__close"></div>
                    <h2 className="popup__title">Сообщение</h2>
                    <p className="popup__text"></p>
                </div>
            </section>
        )
    }
}

export function mapStateToProps(store:any) {
    return {
        popupState: store.popupReducer.isOpen
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({switchPopup}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
