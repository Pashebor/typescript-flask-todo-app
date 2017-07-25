import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps} from "react-router-dom";


interface HeaderProps extends RouteComponentProps<any>{}

class Header extends React.Component<any, HeaderProps> {
    render() {
        return (
            <header className="header">
                <div className="header__title">Записная книжка
                    <div className="user-block">
                        <Link to={'login'} className="user-block__register" title="Регистрация"></Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;