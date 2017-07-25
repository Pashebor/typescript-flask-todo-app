import * as React from 'react';
import {Logo} from "../../TodoApp";

class Footer extends React.Component <Logo> {
    render() {
        const {name} = this.props;
        return(
            <footer className="footer">
                <div className="footer__logo"><p>{name}</p></div>
            </footer>
        )
    }
};

export default Footer;
