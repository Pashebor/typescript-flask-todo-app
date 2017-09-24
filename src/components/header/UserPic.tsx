import * as React from 'react';

interface UserPicProps {
    name: string,
    picture: string
}

const UserPic: React.SFC<UserPicProps> = (props) => {
    return (
        <div className="user-block__register user-block__register--user" >
            <img src={`static/uploads/${props.picture}`} className="user-pic" alt={props.picture} title={props.name}/>
            <p className="user-name">{props.name}</p>
        </div>
    )
};

export default UserPic;

