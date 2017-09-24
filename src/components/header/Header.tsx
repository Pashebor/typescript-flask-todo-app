import * as React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserPic from './UserPic';
import { RouteComponentProps} from "react-router-dom";


class Header extends React.Component<any> {
    props: {
        userData: any
    };

    ShowUserNameAndPic() {
        console.log(this.props);
        let name = this.props.userData.login.name || this.props.userData.register.name,
            picture = this.props.userData.login.image || this.props.userData.register.image;
        console.log(name);
        if (name) {
            return <UserPic name={name} picture={picture}/>;
        } else {
            return <Link to={'login'} className="user-block__register" title="Авторизоваться"></Link>
        }
    }
    render() {
        return (
            <header className="header">
                <div className="header__title">Записная книжка
                    <div className="user-block">
                        {this.ShowUserNameAndPic()}
                    </div>
                </div>
            </header>
        );
    }
}

export function mapStateToProps(store:any) {
    return {
        userData: {
            login: store.loginReducer.formData,
            register: store.regFormStore.regData
        }
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(Header);