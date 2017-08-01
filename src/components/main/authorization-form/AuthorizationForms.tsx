import * as React from 'react';
import RegForm from "./RegForm";
import LoginForm from "./LoginForm";

interface UrlParameter{
    param: string;
}

class AuthorizationForms extends React.Component<UrlParameter>{
    private urlParam: string;


    private showUrlParam():string {
        const {param} = this.props;
        this.urlParam = param;
        return this.urlParam;
    }


    private takeOutForm() {
        const route: string = this.showUrlParam();

        switch (route) {
            case 'login':
                return <LoginForm />;
                break;
            case 'register':
                return <RegForm />;
                break;

        }
    }

    render() {
        return(
            <section className="form-block">
                <div className="container">
                    {this.takeOutForm()}
                </div>
            </section>
        )
    }
}

export default AuthorizationForms;